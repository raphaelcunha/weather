const kelvinToCelcius = (temp) => Math.round(temp - 273.15);
const colorToCelcius = (value) => {
    switch (true) {
        case value <= 5:
            return 'blue';
        case value > 5 && value <= 25:
            return 'orange';
        case (value > 25):
            return 'red';
        default:
            return ''
    }
};
const kelvinToFahrenheit = (temp) => Math.round(((temp - 273.15) * 1.8) + 32);
const colorToFahrenheit = (value) => {
    switch (true) {
        case (value < 41):
            return 'blue';
        case (value > 41 && value <= 77):
            return 'orange';
        case (value > 77):
            return 'red';
        default:
            return ''
    }
};

const convert = ({type, value}) => {
    let result = void(0);
    switch (type) {
        case 'celcius':
            result = kelvinToCelcius(value);
            return {
                color: colorToCelcius(result),
                value: result
            };
        case 'fahrenheit':
            result = kelvinToCelcius(value);
            return {
                color: colorToFahrenheit(kelvinToFahrenheit(value)),
                value: kelvinToFahrenheit(value)
            };
        default:
            return {
                color: 'blue',
                value: 0
            };
    }
};
export {convert}