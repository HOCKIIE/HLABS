export const THEMES = {
    BLUE_THEME: 'BLUE_THEME',
    AQUA_THEME: 'AQUA_THEME',
    INDIGO_THEME: 'INDIGO_THEME',
    GREEN_THEME: 'GREEN_THEME',
    CYAN_THEME: 'CYAN_THEME',
} as const;

export type ThemeType = keyof typeof THEMES;