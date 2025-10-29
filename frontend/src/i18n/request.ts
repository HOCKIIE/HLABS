import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { LanguageType } from '@/types/LanguageType';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;
    if (!locale || !routing.locales.includes(locale as LanguageType)) {
        locale = routing.defaultLocale;
    }

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});