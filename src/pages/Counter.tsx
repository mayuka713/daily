import React, { useState  }from 'react';
import styles from '../pages/Counter.module.css';

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [message, setMessage] = useState<string>('カウントを開始します');

const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
    setMessage(`カウントが${newCount}になりました`);

};


return (
    <>
<h2 className={styles.title}>カウントページ</h2>
    <button className={styles.CountButton} onClick={handleClick}>カウントする</button>
    <h3>結果: {count}</h3>
    <p>{message}</p>
</>
);
};

export default Counter;