import {
    TemperatureUnits,
    WeatherDataFormat,
} from "../../../types/WeatherData";

interface CurrentWeatherProps {
    weatherData: WeatherDataFormat;
    selectedTmpUnit: string;
}

const CurrentWeather = ({
    weatherData,
    selectedTmpUnit,
}: CurrentWeatherProps) => {
    return (
        <>
            <div className='weather-app'>
                <div className='current-location'>
                    {weatherData?.location.name}, {weatherData?.location.region}{" "}
                    - {weatherData?.location.country}
                </div>
                <div className='current-weather'>
                    <div className='current-temperature'>
                        {selectedTmpUnit ===
                        TemperatureUnits.celsius.toLowerCase()
                            ? weatherData?.current.temp_c + "°C"
                            : weatherData?.current.temp_f + "°F"}
                    </div>
                    <div className='current-conditions'>
                        {weatherData?.current.condition.text}
                    </div>
                    <div className='current-weather-icon'>
                        <img
                            className='current-weather-icon'
                            src={weatherData?.current.condition.icon}
                            alt=''
                        />
                    </div>
                </div>
                <div className='weather-details'>
                    <ul>
                        <li>
                            <span className='label'>Feels Like:</span>
                            <span className='value'>
                                {selectedTmpUnit ===
                                TemperatureUnits.celsius.toLowerCase()
                                    ? weatherData?.current.feelslike_c + "°C"
                                    : weatherData?.current.feelslike_f + "°F"}
                            </span>
                        </li>
                        <li>
                            <span className='label'>Humidity:</span>
                            <span className='value'>
                                {weatherData?.current.humidity}%
                            </span>
                        </li>
                        <li>
                            <span className='label'>Wind:</span>
                            <span className='value'>
                                {weatherData?.current.wind_kph} km/h
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CurrentWeather;
