import React, { useState } from 'react';
import { OmikujiData } from '../types/Omikuji';
import styles from  '../pages/Omikuji.module.css';

const OmikujiList: OmikujiData[] = [
    { result: '大吉', message: '今日は最高の日です！'},
    { result: '吉', message: '今日はいい日です'},
    { result: '小吉', message: 'まあまあいい日です'},
];

const Omikuji: React.FC = () => {
    const [ result, setResult ] = useState<OmikujiData | null>(null);

    const drawOmikuji = () => {
        const randomIndex = Math.floor(Math.random() * OmikujiList.length);
        setResult(OmikujiList[randomIndex]);
    };

    return (
        <div className={styles.container}>
        <h2 className={styles.title}>おみくじアプリです</h2>
        <button className={styles.omikujiButton}onClick={drawOmikuji}>おみくじを引く</button>
        {result && (
            <>
            <h3>結果は{result.result}</h3>
            <p>{result.message}</p>
            </>
        )}
        </div>
    );
};

export default Omikuji;