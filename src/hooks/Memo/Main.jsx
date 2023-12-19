import { useEffect, useMemo, useState } from "react"

export default function Main() {
    const [timeLeft, setTimeLeft] = useState(-1);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft(timeLeft + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [count1]);


    const isEval = useMemo(() => {
        let i = 0;
        while (i < 1000000000) i++
        return count1 % 2 === 0;
    }, [count1]
    );

    return (
        <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bolder' }}>
            <button onClick={() => {

                setCount1(count1 + 1);

            }}>Count 1</button>
            <br />
            <p style={{ backgroundColor: 'orange' }}>
                {timeLeft} : Time taken to compress [s]</p>

            <p>{count1}</p>

            <br />

            <h2>{isEval ? 'Even' : 'Odd'}</h2>

            <button onClick={() => {
                setCount2(count2 + 1);
            }}>Count 2</button>
            <p>{count2}</p>
            <br />

        </div>
    )

}
