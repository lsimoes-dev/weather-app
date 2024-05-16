import axios, { AxiosResponse } from "axios";
import { WeatherDataFormat } from "../types/WeatherData";
import to from "await-to-js";

const WeatherService = () => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

    const getWeatherInformation = async (location: string) => {
        const [err, res] = await to(
            axios.post(
                `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${location}&days=3&aqi=no&alerts=no`,
                {
                    headers: {
                        "Access-Control-Allow-Origin": "*",
                        "Access-Control-Allow-Methods":
                            "GET,PUT,POST,DELETE,PATCH,OPTIONS",
                    },
                }
            )
        );
        if (err) {
            return err;
        }
        const weatherDataFormatted = parseResData(res);
        return weatherDataFormatted;
    };

    const parseResData = (
        res: AxiosResponse<WeatherDataFormat>
    ): WeatherDataFormat => {
        return res.data;
    };

    return {
        getWeatherInformation,
    };
};

export default WeatherService;
