import { SupportedLanguages, DEFAULT_LANG } from "types/language";
import locale_en from "translations/en.json";
import locale_es from "translations/es.json";
import locale_fr from "translations/fr.json";

export const supportedLanguages = {
  en: locale_en,
  es: locale_es,
  fr: locale_fr,
};

export const supportedLanguagesList = Object.keys(supportedLanguages);

export function setLanguage(locale: string) {
  if (supportedLanguagesList.includes(locale)) {
    return locale as SupportedLanguages;
  }
  return DEFAULT_LANG;
}
