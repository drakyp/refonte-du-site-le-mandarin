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
      
      // On vérifie le jour de la semaine à Paris
      const dayFormatter = new Intl.DateTimeFormat('fr-FR', { timeZone: 'Europe/Paris', weekday: 'long' });
      const currentDay = dayFormatter.format(now).toLowerCase();
      
      if (currentDay === 'lundi') {
        setIsOpen(false);
      } else {
        setIsOpen(isLunchOpen || isDinnerOpen);
      }
      setLoading(false);
    };

    checkStatus();
    // Vérifier chaque minute
    const interval = setInterval(checkStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return null;

  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-dark border border-gray-800 rounded-full mt-2">
      <div className={`w-2 h-2 rounded-full animate-pulse ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
      <span className="text-xs font-medium uppercase tracking-wider text-gray-300">
        {isOpen ? 'Ouvert actuellement' : 'Fermé actuellement'}
      </span>
    </div>
  );
};

export default OpenStatus;

