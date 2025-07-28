import React, { useState } from 'react';

type Weather = {
    name: string;
    weather: { descripttion: string}[];
    main: {temp: number };
}

const WeatherApp:
