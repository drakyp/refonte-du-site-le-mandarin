import React, { useState, useEffect } from 'react';

const OpenStatus = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStatus = () => {
      // Pour avoir l'heure actuelle à Paris
      const now = new Date();
      const options = { timeZone: 'Europe/Paris', hour: '2-digit', minute: '2-digit' };
      const formatter = new Intl.DateTimeFormat('fr-FR', options);
      const parts = formatter.formatToParts(now);
      
      let hour = 0;
      let minute = 0;
      
      for (const part of parts) {
        if (part.type === 'hour') hour = parseInt(part.value, 10);
        if (part.type === 'minute') minute = parseInt(part.value, 10);
      }
      
      const timeInMinutes = hour * 60 + minute;
      
      // 12h à 15h -> 720 à 900 minutes
      const isLunchOpen = timeInMinutes >= 720 && timeInMinutes < 900;
      // 18h à 23h -> 1080 à 1380 minutes
      const isDinnerOpen = timeInMinutes >= 1080 && timeInMinutes < 1380;
      
      // Jour de la semaine à Paris
      const dayFormatter = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', weekday: 'long' });
      const currentDay = dayFormatter.format(now).toLowerCase();
      
      // Fermé toute la journée le lundi
      if (currentDay === 'lundi') {
        setIsOpen(false);
      } else {
        setIsOpen(isLunchOpen || isDinnerOpen);
      }
      setLoading(false);
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border mt-2 shadow-sm text-xs font-semibold uppercase tracking-wider ${
      isOpen 
        ? 'bg-emerald-50 border-emerald-200 text-emerald-800' 
        : 'bg-rose-50 border-rose-200 text-rose-800'
    }`}>
      <span className={`w-2 h-2 rounded-full ${
        isOpen ? 'bg-emerald-500 animate-pulse' : 'bg-rose-500'
      }`}></span>
      <span>
        {isOpen ? 'Ouvert actuellement' : 'Fermé actuellement'}
      </span>
    </div>
  );
};

export default OpenStatus;
