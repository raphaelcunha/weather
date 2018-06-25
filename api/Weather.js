import axios from 'axios';
import moment from 'moment'

const APPID = 'cf709557ea3f0fc9566f7bcdd7cfbb6a';
axios.defaults.baseURL = `http://api.openweathermap.org/data/2.5`;

export default {
    get(city, country) {
        const data = window && window.localStorage && window.localStorage.getItem(`weather-${city}-${country}`);
        if (!data) {
            return axios.get(`weather?q=${city},${country}&APPID=${APPID}`).then((response) => {
                const data = response.data;
                const weather = {
                    id: data.id,
                    city: data.name,
                    country: data.sys.country,
                    humidity: Math.round(data.main.humidity),
                    pressure: Math.round(data.main.pressure),
                    temp: data.main.temp,
                    dateTime: moment(data.dt).format('LTS')
                };
                window && window.localStorage && window.localStorage.setItem(`weather-${city}-${country}`, JSON.stringify(weather));
                return weather;
            }).catch(err => {
                return err
            })
        }
        return JSON.parse(data);
    },

    getDelay(city, country, delay) {
        const newDelay = delay || 5000
        const data = localStorage.getItem(`weather-${city}-${country}`);
        if (!data) {
            return axios.get(`weather?q=${city},${country}&APPID=${APPID}`).then((response) => new Promise(resolve => {
                    setTimeout(() => {
                        const data = response.data;
                        const weather = {
                            id: data.id,
                            city: data.name,
                            country: data.sys.country,
                            humidity: Math.round(data.main.humidity),
                            pressure: Math.round(data.main.pressure),
                            temp: data.main.temp,
                            dateTime: moment(data.dt).format('LTS')
                        };
                        localStorage.setItem(`weather-${city}-${country}`, JSON.stringify(weather));
                        resolve(weather);
                    }, newDelay);
                })
            ).catch(err => {
                return err
            })
        }
        return JSON.parse(data);
    },

    clearCache(city, country) {
        window && window.localStorage &&  localStorage.removeItem(`Weather-${city}-${country}`);
    },

}