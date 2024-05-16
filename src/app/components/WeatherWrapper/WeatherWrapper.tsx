import { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import WeatherDisplay from "../WeatherDisplay/WeatherDisplay";
import WeatherService from "../../service/WeatherService";
import { WeatherDataFormat } from "../../types/WeatherData";
import { ErrorFormat } from "../../types/Error";
import ErrorModal from "../ErrorModal/ErrorModal";

const WeatherWrapper = () => {
    const weatherService = WeatherService();
    const [weatherData, setWeatherData] = useState<WeatherDataFormat | null>(
        null
    );
    const [error, setError] = useState<ErrorFormat | null>(null);

    const handleSearch = async (location: string) => {
        const res = await weatherService.getWeatherInformation(location);

        if (res instanceof Error) {
            setWeatherData(null);
            setError({
                title: "Error",
                message: "Please enter a valid city/region/country/postal code",
                onClose: onCloseError,
            });
        } else {
            const weatherInfo: WeatherDataFormat = res;
            console.log(weatherInfo);
            setWeatherData(weatherInfo);
        }
    };

    const onCloseError = () => {
        setError(null);
    };

    return (
        <>
            <div>
                <SearchBar onSearch={handleSearch} />
            </div>
            <div>
                {weatherData && <WeatherDisplay weatherData={weatherData} />}
            </div>
            <div>
                {error && (
                    <ErrorModal
                        title={error.title}
                        message={error.message}
                        onClose={error.onClose}
                    />
                )}
            </div>
        </>
    );
};

export default WeatherWrapper;
