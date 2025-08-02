import React, { useState } from 'react';

type WeatherData = {
    name: string;
    weather: { description: string}[];
    main: { temp: number};
}
const WeatherApp: React.FC = () => {
    
    const [ city, setCity] = useState<string>("");
    const [ weather, setWeather] = useState<WeatherData | null>(null);
    const [ error, setError] = useState<string | null>(null);


    const fetchWeather = async () => {
        try {
            const apiKey = 'process.env.REACT_APP_WEATHER_API_KEY';
            if(!apiKey) {
                throw new Error('API key is missing. Please set REACT_APP_WEATHER_API_KEY in your environment.');
            }
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ja`
            );
            if(!response.ok){
                throw new Error("都市が見つかりませんでした");
            }
            const data = await response.json();
            setWeather(data);
            setError(null);
        } catch (err: any) {
            console.error('エラー発生:', err);
            setWeather(null);
            setError(err.message);
        }
    };
return (
    <div style={{ textAlign:'center', marginTop: '50px'}}>
    <h2>天気アプリ</h2>
    <input type='text'
    placeholder='都市名を入力'
    value={city}
    onChange={(e) => setCity(e.target.value)}
    style={{ padding: '8px'}}
    />
<button onClick={fetchWeather}>検索</button>

    {weather && (
        <div style={{ marginTop: '20px'}}>
        <h3>{weather.name}の天気</h3>
        <p>気温:{weather.main.temp}°c</p>
        <p>状況:{weather.weather[0].description}</p>
        </div>
    )}
    </div>
);
};


export default WeatherApp;