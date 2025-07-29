import React, { useState } from 'react';
import { OmikujiData } from '../types/Omikuji';

const OmikujiList: OmikujiData[] = [
    { result: '大吉', message: '今日は最高の日です！'},
    { result: '吉', message: '今日はいい日です'},
];

const Omikuji: React.FC = () => {
    const [ result, setResult ] = useState<OmikujiData | null>(null);

    const drawOmikuji = () => {
        const randomIndex = Math.floor(Math.random() * OmikujiList.length);
        setResult(OmikujiList[randomIndex]);
    };

    return (
        <>
        <h2>おみくじアプリ</h2>
        <button onClick={drawOmikuji}>おみくじを引く</button>
        {result && (
            <>
            <h3>{result.result}</h3>
            <p>{result.message}</p>
            </>
        )}
        </>
    );
};

export default Omikuji;