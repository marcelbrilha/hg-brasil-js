# HG Brasil JS

Este é um pacote Node.js que fornece um wrapper para a API da HG Brasil. A API da HG Brasil fornece dados úteis como informações meteorológicas, cotações de moedas e índices financeiros do mercado brasileiro. Este pacote facilita o acesso a esses dados, fornecendo uma interface simples e fácil de usar para o seu aplicativo.

## Comandos importantes

| Descrição             | Comando        |
| --------------------- | -------------- |
| Instalar dependências | npm install    |
| Verificar código      | npm run lint   |
| Executar os testes    | npm run test   |
| Realizar commit       | npm run commit |
| Build                 | npm run build  |

## Instalação

Você pode instalar o pacote usando o gerenciador de pacotes npm. Execute o seguinte comando:

```bash
npm install hg-brasil-js
```

## Uso

Para usar o pacote, você precisa de uma chave de API válida da HG Brasil. Você pode obter uma chave gratuitamente no site oficial da HG Brasil.

Depois de obter a chave de API, você pode usar o pacote da seguinte maneira:

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

O exemplo abaixo obtém informações meteorológicas para a cidade de São Paulo e imprime o resultado no console.

```js
const HgBrasil = require("hg-brasil-js");

const hg = new HgBrasil("sua_chave_de_api");

hg.weather
  .getAll({ city_name: "São Paulo", format: "json" })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Recursos suportados

Atualmente, o pacote suporta os seguintes recursos da API da HG Brasil:

- Previsão do tempo
- Previsão do tempo por hora
- Cotação de moedas
- Índices financeiros

## Contribuição

Contribuições são sempre bem-vindas! Se você encontrar um bug ou tiver uma ideia para uma nova funcionalidade, fique à vontade para abrir uma issue ou enviar um pull request.

## Licença

Este projeto é licenciado sob a MIT License.
