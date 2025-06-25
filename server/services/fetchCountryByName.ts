import DATA from "../database/data.json";
import { keyFilter } from "../utils/keyFilter";

type Language = {
  iso639_1: string;
  iso639_2: string;
  name: string;
  nativeName: string;
};

type Currency = {
  code: string;
  name: string;
  symbol: string;
};

export const fetchCountryByName = async (name: string) => {
  const theCountry = await DATA.find((country) => country.name === name);

  if (!theCountry) return null;

  const result = keyFilter(theCountry, [
    "flag",
    "name",
    "nativeName",
    "topLevelDomain",
    "population",
    "region",
    "subregion",
    "capital",
    "domain",
    "currencies",
    "languages",
    "borders",
  ]);

  if (!result.borders) {
    return {
      ...result,
      borders: [],
      currencies: (result.currencies && result.currencies.map((currency: Currency) => currency.name)) || [""],
      languages: (result.languages && result.languages.map((language: Language) => language.name)) || [""],
    };
  }

  const fullBorderNames = result.borders.map((alpha3Code: string) => {
    const fullBorderName = DATA.find((country) => country.alpha3Code === alpha3Code);
    return fullBorderName?.name;
  });

  return {
    ...result,
    borders: fullBorderNames,
    currencies: (result.currencies &&
      result.currencies.map((currency: Currency) => currency.name)) || [""],
    languages: (result.languages &&
      result.languages.map((language: Language) => language.name)) || [""],
  };
};
