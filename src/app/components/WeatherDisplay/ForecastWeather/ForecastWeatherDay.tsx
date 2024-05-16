import { TemperatureUnits } from "../../../types/WeatherData";
import moment from "moment";

interface ForecastWeatherDayFormat {
    date: string;
    day: {
        maxtemp_c: number;
        maxtemp_f: number;
        mintemp_c: number;
        mintemp_f: number;
        condition: {
            text: string;
            icon: string;
        };
    };
}

interface ForecastWeatherDayProps {
    forecastData: ForecastWeatherDayFormat[];
    selectedTmpUnit: string;
}

const ForecastWeatherDay = ({
    forecastData,
    selectedTmpUnit,
}: ForecastWeatherDayProps) => {
    return (
        <>
            {forecastData.map((forecastDay: ForecastWeatherDayFormat) => (
                <div className='forecast-day' key={forecastDay.date}>
                    <div>
                        <label className='info-label'>
                            {moment(forecastDay.date).format("MMM DD YYYY")}
                        </label>
                    </div>
                    <div>
                        <img src={forecastDay.day.condition.icon} alt='' />
                    </div>
                    <div>
                        Max:
                        <label className='info-label'>
                            {selectedTmpUnit ===
                            TemperatureUnits.celsius.toLowerCase()
                                ? forecastDay.day.maxtemp_c + "°C"
                                : forecastDay.day.maxtemp_f + "°F"}
                        </label>
                    </div>
                    <div>
                        Min:
                        <label className='info-label'>
                            {selectedTmpUnit ===
                            TemperatureUnits.celsius.toLowerCase()
                                ? forecastDay.day.mintemp_c + "°C"
                                : forecastDay.day.mintemp_f + "°F"}
                        </label>
                    </div>
                    <div>
                        <label className='info-label'>
                            {forecastDay.day.condition.text}
                        </label>
                    </div>
                </div>
            ))}
        </>
    );
};

export default ForecastWeatherDay;
