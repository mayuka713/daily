import React, { useState } from 'react';

const Counter: React.FC = () => {

    const [ count, setCount ] = useState<number>(0);

    return (
        <>
        <h2>カウントアプリ🐻</h2>
        <p>現在のカウントは？{count}</p>
        <button onClick={() => setCount(count + 1)}></button>
    </>
    );
};

export default Counter;
