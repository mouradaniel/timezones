import { useState, useEffect } from 'react';

export function Resume() {
  const [today, setToday] = useState(null);
  const [currentHour, setCurrentHour] = useState(null);
  const [currentMinute, setCurrentMinute] = useState(null);

  useEffect(() => {
    setToday(new Date());

    setInterval(() => {
      setToday(new Date());
    }, 1000 * 60);
  }, [])
  
  useEffect(() => {
    if (today) {
      setCurrentHour(today.getHours());
      setCurrentMinute(today.getMinutes());
    }
  }, [today])

  return (
    <div>
      <p>{currentHour}:{currentMinute}</p>
      <span>your local time</span>
    </div>
  )
}