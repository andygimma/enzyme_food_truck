import { setLanguage } from "./language";
import { DEFAULT_LANG } from "../../types/language";
import { supportedLanguages } from "./language";
import { languageList } from "./languagesISO639-1";

const UNSUPPORTED_LANG = "this is not a language code";
const FRENCH = "fr";
const SPANISH = "es";
const ENGLISH = "en";

describe("setLanguage", () => {
  test("should return the default language when given an unsupported language", () => {
    expect(setLanguage(UNSUPPORTED_LANG)).toBe(DEFAULT_LANG);
  });

  test("should return french when given the french language code", () => {
    expect(setLanguage(FRENCH)).toBe(FRENCH);
  });

  test("should return spanish when given the spanish language code", () => {
    expect(setLanguage(SPANISH)).toBe(SPANISH);
  });

  test("should return english when given the english language code", () => {
    expect(setLanguage(ENGLISH)).toBe(ENGLISH);
  });
});

describe("supportedLanguages", () => {
  test("should only have keys from the list of accepted language codes", () => {
    expect(
      Object.keys(supportedLanguages).every((elem) =>
        languageList.includes(elem)
      )
    ).toBe(true);
  });
});
