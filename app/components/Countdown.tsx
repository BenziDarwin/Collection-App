"use client";

import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState<string>('00:00:00');

    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            const difference = targetDate.getTime() - now.getTime();

            if (difference <= 0) {
                clearInterval(timer);
                setTimeLeft('00:00:00');
                return;
            }
            const totalHours = Math.floor(difference / (1000 * 60 * 60));
            const hours = totalHours.toString().padStart(2, '0');
            const minutes = Math.floor((difference / (1000 * 60)) % 60).toString().padStart(2, '0');
            const seconds = Math.floor((difference / 1000) % 60).toString().padStart(2, '0');

            setTimeLeft(`${hours}:${minutes}:${seconds}`);
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    return <div>{timeLeft} LEFT</div>;
};

export default Countdown;
