import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
  console.log(chalk.bgRed('ERROR') + ' ' + error);
};

const printSuccess = (message) => {
  console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
};

const printHelp = () => {
  console.log(
    dedent` ${chalk.bgCyan(' HELP ')}
   Без параметров - вывод погоды 
   -s [CITY] для установки города 
   -h для вывода помощи
   -t [API_KEY] для сохранения токена
   `
  );
};

const printWeather = (res, icon) => {
  console.log(
    dedent` ${chalk.bgGreen(' WEATHER ')} Погода в городе ${res.name}
    ${icon}  ${res.weather[0].description}
   Температура: ${Math.round(res.main.temp - 273)} ( Ощущается как ${Math.round(
      res.main.feels_like - 273
    )} )
   Влажность: ${res.main.humidity}
   Скорость ветра: ${res.wind.speed}
   `
  );
};

export { printError, printSuccess, printHelp, printWeather };
