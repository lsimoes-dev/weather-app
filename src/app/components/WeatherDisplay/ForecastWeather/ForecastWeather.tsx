import { WeatherDataFormat } from "../../../types/WeatherData";
import ForecastWeatherDay from "./ForecastWeatherDay";

interface ForecastWeatherProps {
    weatherData: WeatherDataFormat;
    selectedTmpUnit: string;
}

const ForecastWeather = ({
    weatherData,
    selectedTmpUnit,
}: ForecastWeatherProps) => {
    return (
        <div>
            <label>3 Day Forecast</label>
            <div className='forecast-weather'>
                <ForecastWeatherDay
                    forecastData={weatherData.forecast.forecastday}
                    selectedTmpUnit={selectedTmpUnit}
                />
            </div>
        </div>
    );
};

export default ForecastWeather;
