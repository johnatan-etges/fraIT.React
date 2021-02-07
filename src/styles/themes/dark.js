import theme from 'styled-theming';

export const HEADER_BACKGROUND = theme ('mode',{
    dark: "#31323B",
});

export const BODY_CARD_BACKGROUND = theme ('mode', {
    dark: "#363740",
});

export const CARD_BACKGROUND = theme ('mode', {
    dark: "#31323B",
});

export const CARD_TITLE = theme ('mode', {
    dark: "#B8B4FA",
});

export const CARD_SUBTITLE = theme ('mode', {
    /* light: "#332A3B", */
    dark: "#865D94",
});

export const CARD_PARAGRAPH = theme ('mode', {
    dark: "#EDEFFF",
});

export const CARD_BORDER = theme ('mode', {
    dark: BODY_CARD_BACKGROUND,
});

export const CARD_BORDER_HOVER = theme ('mode', {
    dark: "#6A2794",
});