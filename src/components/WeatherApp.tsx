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
            const apiKey = 'a31533bfa62bc8a16744a2328d635875';
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
            setError(err.message);
            setWeather(null);
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

    {error && <p style={{ marginTop: '20px'}}></p>}

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