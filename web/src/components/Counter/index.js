import React, { useEffect } from 'react';
import { useCountUp } from 'react-countup';
import { api } from '../../utils/api';
 
import './index.scss'

const Counter = () => {
    const { countUp, update } = useCountUp({
      start: 0,
      end: 0,
      delay: 1000,
      duration: 3,
    });

    useEffect(() => {
        const getTotal = () => {
            api.get('/total').then( res => {
                update(res.data)
            });
        }

        getTotal()
        const interval = setInterval(() => {
            getTotal()
        }, 5000);
        return () => clearInterval(interval);
    }, [update]);

    return (
        <div>
            <section id="counter" className="Counter">
                <div className="Counter__count">{countUp}</div>
                <div className="Counter__text">
                     people have already turned on their light!
                </div>
            </section>    
        </div>
    );
};

export default Counter;