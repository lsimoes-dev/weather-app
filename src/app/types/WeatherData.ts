export interface WeatherDataFormat {
    location: {
        name: string;
        region: string;
        country: string;
        localtime: string;
    };
    current: {
        temp_c: number;
        temp_f: number;
        condition: {
            text: string;
            icon: string;
        };
        feelslike_c: number;
        feelslike_f: number;
        wind_kph: number;
        humidity: number;
    };
    forecast: {
        forecastday: [
            {
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
        ];
    };
}

export enum TemperatureUnits {
    celsius = "Celsius",
    fahrenheit = "Fahrenheit",
}
