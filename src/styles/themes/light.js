import theme from 'styled-theming';

//Card view mode colors on light mode

export const HEADER_BACKGROUND = theme ('mode',{
    light: "#31323B",
});

export const BODY_CARD_BACKGROUND = theme ('mode', {
    light: "#363740",
});

export const CARD_BACKGROUND = theme ('mode', {
    light: "#31323B",
});

export const CARD_TITLE = theme ('mode', {
    light: "#B8B4FA",
});

export const CARD_SUBTITLE = theme ('mode', {
    /* light: "#332A3B", */
    light: "#665D94",
});

export const CARD_PARAGRAPH = theme ('mode', {
    light: "#EDEFFF",
});

export const CARD_BORDER = theme ('mode', {
    light: BODY_CARD_BACKGROUND,
});

export const CARD_BORDER_SHADOW = theme ('mode', {
    light: "#080708",
});

export const CARD_BORDER_HOVER = theme ('mode', {
    light: "#6A2794",
});

export const CARD_HEADER_BORDER = theme ('mode', {
    light: "#080708",
});

export const CARD_HEADER_BORDER_HOVER = theme ('mode', {
    light: CARD_BORDER_HOVER,
});