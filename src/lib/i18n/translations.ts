import i18n from 'sveltekit-i18n';

import type { Config } from 'sveltekit-i18n';
import type {
    GenericImport,
    StructuredLocfileInfo,
    LocalizationContent
} from '$lib/types/i18n';

import _languages from '$i18n/languages.json';

import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";

import en from "./locales/en.json";
import zhCN from "./locales/zh-CN.json";

addMessages("en", en);
addMessages("zh-CN", zhCN);

init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
});

const defaultLocale = 'en';
const languages: Record<string, string> = _languages;

const config: Config<{
    value?: string;
    formats?: string;
    limit?: number;
    service?: string;
}> = {
    fallbackLocale: defaultLocale,
    translations: Object.keys(parsedLocfiles).reduce((obj, lang) => {
        languages[lang] ??= `${lang} (missing name)`;

        return {
            ...obj,
            [lang]: { languages }
        }
    }, {}),
    loaders: Object.entries(parsedLocfiles).map(([lang, keys]) => {
        return Object.entries(keys).map(([key, importer]) => {
            return {
                locale: lang,
                key,
                loader: () => importer().then(
                    l => l.default as LocalizationContent
                )
            }
        });
    }).flat()
};

export { defaultLocale };
export const {
    t, loading, locales, locale: INTERNAL_locale, translations,
    loadTranslations, addTranslations, setLocale, setLocale as setRoute
} = new i18n(config);
