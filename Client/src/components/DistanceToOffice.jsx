import React, { useEffect, useState } from 'react';
 
const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="#B4A77E"
    viewBox="0 0 24 24"
    width="48"
    height="48"
    aria-hidden="true"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z" />
  </svg>
);

function DistanceVisualizer() {
  const [distanceKm, setDistanceKm] = useState(null);
  const [country, setCountry] = useState(null);

  const officeLat = 38.7201975;
  const officeLon = -9.1466443;

  useEffect(() => {
    const fetchUserLocation = async () => {
      try {
        const response = await fetch('https://ipwho.is/');
        if (!response.ok) throw new Error('Could not get location');
        const data = await response.json();
        const lat = data.latitude;
        const lon = data.longitude;
        const userCountry = data.country;

        const distance = getDistanceFromLatLonInKm(lat, lon, officeLat, officeLon);
        setDistanceKm(distance);
        setCountry(userCountry);
      } catch (err) {
        console.error('Location error:', err);
        setDistanceKm(null);
      }
    };

    fetchUserLocation();
  }, []);

  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    const R = 6371;
    const dLat = deg2rad(lat2 - lat1);
    const dLon = deg2rad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(deg2rad(lat1)) *
        Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  if (!distanceKm) return null;

  // ✅ Formatação da distância
  let distanceText = '';
  if (distanceKm < 3) {
    distanceText = `${(distanceKm * 1000).toFixed(0)} meters`;
  } else if (distanceKm < 10) {
    distanceText = `${distanceKm.toFixed(1)} km`;
  } else {
    distanceText = `${Math.round(distanceKm)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} km`;
  }

  return (
    <div className="w-full px-4 py-6" style={{ backgroundColor: '#E4E0CF' }}>
      <div className="max-w-[1220px] mx-auto text-[#002741] text-center flex flex-col items-center">

        {/* YOU + icon */}
        <div className="flex flex-col items-center mb-2">
          <span className="text-sm font-semibold tracking-widest mb-1">
            You're Closer<br />Than You Think
          </span>
          {country && country !== 'Portugal' && (
            <span className="text-xs text-[#002741] opacity-60 mt-1">{country}</span>
          )}
          <UserIcon />
        </div>

        {/* Linha vertical + distância */}
        <div className="my-2 h-8 w-0.5 bg-[#002741] opacity-40" />
        <div className="text-base font-medium mb-1">{distanceText}</div>
        <div className="my-2 h-8 w-0.5 bg-[#002741] opacity-40" />

        {/* Logo */}
        <img src="/assets/images/logoblue.png" alt="Explorer Office" className="w-40 mb-4" />

        {/* Frase */}
        <p className="text-base md:text-lg font-light">
          Just <strong>{distanceText}</strong> from our Lisbon office.
        </p>
        <p className="text-sm md:text-base font-medium underline mt-1">
          <a
            href="https://www.google.com/maps/place/Explorer+Investments+SCR+SA/@38.7202017,-9.1492192,17z"
            target="_blank"
            rel="noopener noreferrer"
          >
            Largo Jean Monnet 1, Lisbon
          </a>
        </p>

        {/* Secção extra: Not in Lisbon? */}
        <div className="w-full px-4 mt-10 mb-10 text-[#002741] text-center">
          <div className="max-w-[1220px] mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold mb-2">
  {distanceKm < 8 ? 'Are you in Lisbon?' : 'Not in Lisbon?'}
</h2>

            <h3 className="text-lg md:text-xl font-light mb-1">
    {distanceKm < 8 ? 'Skip the call - swing by!' : 'Let’s start with a quick call'}
            </h3>
            <p className="text-base md:text-lg font-light">
              Wherever you are, we’ll guide you every step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DistanceVisualizer;
