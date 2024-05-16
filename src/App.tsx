import React from "react";
import "./App.scss";
import Header from "./app/components/Header/Header";

import WeatherWrapper from "./app/components/WeatherWrapper/WeatherWrapper";

function App() {
    return (
        <div>
            <Header />
            <div className='weather-app'>
                <WeatherWrapper />
            </div>
        </div>
    );
}

export default App;
