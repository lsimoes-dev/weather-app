import { ChangeEvent, useState } from "react";
import { TemperatureUnits, WeatherDataFormat } from "../../types/WeatherData";
import "../../styles/WeatherDisplay.scss";
import CurrentWeather from "./CurrentWeather/CurrentWeather";
import ForecastWeather from "./ForecastWeather/ForecastWeather";

interface WeatherDisplayProps {
    weatherData: WeatherDataFormat | null;
}

const WeatherDisplay = ({ weatherData }: WeatherDisplayProps) => {
    const [selectedTmpUnit, setSelectedTmpUnit] = useState<
        TemperatureUnits | string
    >(TemperatureUnits.celsius.toLowerCase());

    const handleUnitTmpChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newSelectedTmpUnit = event.target.value;
        setSelectedTmpUnit(newSelectedTmpUnit);
    };

    return (
        <div className='weather-wrapper'>
            <div className='temp-dropdown'>
                <label>See temperature in:</label>
                <select value={selectedTmpUnit} onChange={handleUnitTmpChange}>
                    {Object.entries(TemperatureUnits).map(
                        ([tempKey, tempLabel]) => (
                            <option key={tempKey} value={tempKey}>
                                {tempLabel}
                            </option>
                        )
                    )}
                </select>
            </div>
            <div id='current-weather'>
                {weatherData && (
                    <CurrentWeather
                        weatherData={weatherData}
                        selectedTmpUnit={selectedTmpUnit}
                    />
                )}
            </div>
            <div id='forecast-weather'>
                {weatherData && (
                    <ForecastWeather
                        weatherData={weatherData}
                        selectedTmpUnit={selectedTmpUnit}
                    />
                )}
            </div>
        </div>
    );
};

export default WeatherDisplay;
