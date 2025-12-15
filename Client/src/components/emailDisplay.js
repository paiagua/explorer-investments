
 import { useEffect, useState } from 'react';
 
 useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const name = params.get('name');
  const email = params.get('email');
  const investment = params.get('investment');
  const confirm = params.get('confirm');

  if (name && email && investment && confirm === '1') {
    console.log('✅ Query params confirmados:', { name, email, investment });

    setFormdata((prev) => ({
      ...prev,
      name,
      email,
      petage: investment,
    }));

    setFormstep(2);
    scrollToTop();
  } else {
    console.warn('❌ Faltam query params:', { name, email, investment });
  }
  // ⚠️ eslint-disable-next-line react-hooks/exhaustive-deps
}, []);  

useEffect(() => {
  const params = new URLSearchParams(window.location.search);

  const name = params.get('name');
  const email = params.get('email');
 const phone = params.get('phone');
  const investment = params.get('investment');
  const confirm = params.get('confirm');

  if (name && email && investment && confirm === '2') {
    console.log('✅ Query params confirmados:', { name, email, investment });

    setFormdata((prev) => ({
      ...prev,
      name,
      email,
      phone ,
      petage: investment,
    }));

    setFormstep(3);
    setShowCalendly(true);
    scrollToTop();
  } else {
    console.warn('❌ Faltam query params:', { name, email, investment });
  }
  // ⚠️ eslint-disable-next-line react-hooks/exhaustive-deps
}, []);  
