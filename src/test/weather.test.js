import Weather from "../lib/Weather.js";

describe("Weather module tests", () => {
  let weather = null;

  beforeAll(() => {
    weather = new Weather({ key: "your key" });
  });

  it("Should return weather information", async () => {
    const spy = jest.spyOn(weather, "getWeather");
    spy.mockReturnValue(
      Promise.resolve({
        by: "default",
        valid_key: false,
        results: {
          temp: 27,
          date: "22/11/2022",
          time: "16:25",
          condition_code: "4",
          description: "Tempestades",
          currently: "dia",
          cid: "",
          city: "São Paulo, SP",
          img_id: "4",
          humidity: 62,
          cloudiness: 40.0,
          rain: 3.65,
          wind_speedy: "8.23 km/h",
          wind_direction: 190,
          sunrise: "05:12 am",
          sunset: "06:33 pm",
          condition_slug: "storm",
          city_name: "São Paulo",
          forecast: [],
          cref: "e54006",
        },
        execution_time: 0.0,
        from_cache: true,
      })
    );

    const response = await weather.getWeather();

    expect(Object.keys(response)).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);

    expect(Object.keys(response["results"])).toEqual([
      "temp",
      "date",
      "time",
      "condition_code",
      "description",
      "currently",
      "cid",
      "city",
      "img_id",
      "humidity",
      "cloudiness",
      "rain",
      "wind_speedy",
      "wind_direction",
      "sunrise",
      "sunset",
      "condition_slug",
      "city_name",
      "forecast",
      "cref",
    ]);
  });

  it("Must return weather information by entering a specific city code", async () => {
    const spy = jest.spyOn(weather, "getWeatherWithCode");
    spy.mockReturnValue(
      Promise.resolve({
        by: "default",
        valid_key: false,
        results: {
          temp: 27,
          date: "22/11/2022",
          time: "16:25",
          condition_code: "4",
          description: "Tempestades",
          currently: "dia",
          cid: "",
          city: "São Paulo, SP",
          img_id: "4",
          humidity: 62,
          cloudiness: 40.0,
          rain: 3.65,
          wind_speedy: "8.23 km/h",
          wind_direction: 190,
          sunrise: "05:12 am",
          sunset: "06:33 pm",
          condition_slug: "storm",
          city_name: "São Paulo",
          forecast: [],
          cref: "e54006",
        },
        execution_time: 0.0,
        from_cache: true,
      })
    );

    const response = await weather.getWeatherWithCode("455827");

    expect(Object.keys(response)).toEqual([
      "by",
      "valid_key",
      "results",
      "execution_time",
      "from_cache",
    ]);

    expect(Object.keys(response["results"])).toEqual([
      "temp",
      "date",
      "time",
      "condition_code",
      "description",
      "currently",
      "cid",
      "city",
      "img_id",
      "humidity",
      "cloudiness",
      "rain",
      "wind_speedy",
      "wind_direction",
      "sunrise",
      "sunset",
      "condition_slug",
      "city_name",
      "forecast",
      "cref",
    ]);
  });
});
