import theme from 'styled-theming';

//Card view mode colors on dark mode

export const DARK_HEADER_BACKGROUND = theme ('mode',{
    dark: "#31323B",
});

export const DARK_BODY_CARD_BACKGROUND = theme ('mode', {
    dark: "#363740",
});

export const DARK_CARD_BACKGROUND = theme ('mode', {
    dark: "#31323B",
});

export const DARK_CARD_TITLE = theme ('mode', {
    dark: "#B8B4FA",
});

export const DARK_CARD_SUBTITLE = theme ('mode', {
    /* light: "#332A3B", */
    dark: "#665D94",
});

export const DARK_CARD_PARAGRAPH = theme ('mode', {
    dark: "#EDEFFF",
});

export const DARK_CARD_BORDER = theme ('mode', {
    dark: DARK_BODY_CARD_BACKGROUND,
});

export const DARK_CARD_BORDER_SHADOW = theme ('mode', {
    dark: "#080708",
});

export const DARK_CARD_BORDER_HOVER = theme ('mode', {
    dark: "#6A2794",
});

export const DARK_CARD_HEADER_BORDER = theme ('mode', {
    dark: "#080708",
});

export const DARK_CARD_HEADER_BORDER_HOVER = theme ('mode', {
    dark: DARK_CARD_BORDER_HOVER,
});