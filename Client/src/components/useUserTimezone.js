'use client';
import { useEffect, useState } from 'react';

const fallbackTimezones = {
  PT: "Europe/Lisbon",
  US: "America/New_York",
  GB: "Europe/London",
  BR: "America/Sao_Paulo",
  FR: "Europe/Paris",
  DE: "Europe/Berlin",
  IN: "Asia/Kolkata",
};

const useUserTimezone = () => {
  const [timezone, setTimezone] = useState("loading");

  useEffect(() => {
    const detectByIP = async () => {
      try {
        const ipRes = await fetch('https://api.ipify.org?format=json');
        if (!ipRes.ok) {
          throw new Error('Failed to fetch IP');
        }
        const ipData = await ipRes.json();

        const geoRes = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
        if (!geoRes.ok) {
          throw new Error('Failed to fetch geolocation data');
        }
        const geoData = await geoRes.json();

        if (geoData?.timezone) {
          setTimezone(geoData.timezone);
        } else if (geoData?.country_code) {
          const fallback = fallbackTimezones[geoData.country_code.toUpperCase()];
          setTimezone(fallback || "America/New_York");
        } else {
          setTimezone("America/New_York");
        }
      } catch (err) {
        console.error("Erro ao detectar timezone por IP:", err);
        setTimezone("America/New_York");
      }
    };

    detectByIP();
  }, []);

  return timezone;
};

export default useUserTimezone;
