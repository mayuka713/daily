import React, { useState } from 'react';
import styles from '../pages/Weather.module.css';

// この部分から、天気アプリの中身がスタートする
const Weather: React.FC = () => {
    // useStateを用意するところ
    const [city, setCity] = useState<string>('Tokyo');
    const [weather, setWeather] = useState<string | null>(null);
    const [message, setMessage] = useState<string>('');

    // 天気をとりにいく関数
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const fetchWeather = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`
            );
            if (!response.ok) {
                throw new Error('天気情報の取得に失敗しました');
            }

            const data = await response.json();
            const weatherDescription = data.weather[0].description;
            setWeather(weatherDescription);
            setMessage(`現在の${city}の天気は「${weatherDescription}」です`);
        } catch (error) {
            console.error(error);
            setMessage('天気情報の取得に失敗しました');
        }
    };

    return (
        <div className={styles.weatherContainer}>
            <h2 className={styles.title}>天気のページです</h2>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="都市名を入力"
                className={styles.input}
            />
            <button onClick={fetchWeather} className={styles.button}>
                天気を取得
            </button>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
};

export default Weather;
