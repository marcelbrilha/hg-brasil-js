import Weather from "../lib/Weather";

describe("Weather module tests", () => {
  let weather = null;

  beforeAll(() => {
    weather = new Weather({ key: "your key" });
  });

  it("Should return weather information", async () => {
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
