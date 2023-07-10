import { useEffect, useState } from 'react'
import './index.css'

export function Clock() {
    const [hours, setHours] = useState('00');
    const [minutes, setMinutes] = useState('00');
    const [seconds, setSeconds] = useState('00');
    
    const formatToZeroLeftNumber = (n: number): string => {
        return n > 9? n.toString() : `0${n}`
    }

    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date()
            setHours(formatToZeroLeftNumber(date.getHours()))
            setMinutes(formatToZeroLeftNumber(date.getMinutes()))
            setSeconds(formatToZeroLeftNumber(date.getSeconds()))
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    return (
        <section id="clock">
            <h1>{hours}:{minutes}:{seconds}</h1>
        </section>
    )
}
