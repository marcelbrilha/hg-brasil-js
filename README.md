<p align="center">
  <img src="https://hgbrasil.com/assets/hg-br-logo-29abe59800e509879c6b79ff8861370119567f923c815595f7d19dff4986d786.png">
</p>

# HG Brasil JS

Biblioteca minimalista que encapsula chamadas da API HG Brasil (https://hgbrasil.com/)

## Comandos importantes

| Descrição             | Comando      |
| --------------------- | ------------ |
| Instalar dependências | npm install  |
| Verificar código      | npm run lint |
| Executar os testes    | npm run test |

## Como utilizar

```js
import { Finance, Weather, Location } from "hg-brasil-js";

async function main() {
  const finance = new Finance({ key: "your key" });
  const weather = new Weather({ key: "your key" });
  const location = new Location({ key: "your key" });

  const taxes = await finance.getTaxes();
  const weatherInfo = await weather.getWeather();
  const geoIPInfo = await location.getGeoIP("remote", false);

  console.log(taxes, weatherInfo, geoIPInfo);
}

main();
```
