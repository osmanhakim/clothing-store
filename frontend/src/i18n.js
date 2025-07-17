import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en } from "./lang/en";
import { ar } from "./lang/ar";
await i18next.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  resources: {
    en,
    ar,
  },
});
