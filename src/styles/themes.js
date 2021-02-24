import theme from 'styled-theming';

import { DARK_HEADER_BACKGROUND , DARK_BODY_CARD_BACKGROUND, DARK_CARD_BACKGROUND, DARK_CARD_TITLE, DARK_CARD_SUBTITLE, DARK_CARD_PARAGRAPH, DARK_CARD_BORDER, DARK_CARD_BORDER_HOVER, DARK_CARD_HEADER_BORDER, DARK_CARD_HEADER_BORDER_HOVER, DARK_CARD_BORDER_SHADOW, DARK_CARD_OPACITY} from '../styles/themes/dark';
import { LIGHT_HEADER_BACKGROUND, LIGHT_BODY_CARD_BACKGROUND, LIGHT_CARD_TITLE, LIGHT_CARD_SUBTITLE, LIGHT_CARD_PARAGRAPH, LIGHT_CARD_BORDER, LIGHT_CARD_HEADER_BORDER, LIGHT_CARD_BORDER_SHADOW, LIGHT_CARD_HEADER_BORDER_HOVER, LIGHT_CARD_BORDER_HOVER, LIGHT_CARD_BACKGROUND, LIGHT_CARD_OPACITY } from './themes/light';

//header & body background
export const primary = theme('mode', {
    /* light: '#f1f1f1',  */
    light: '#d5d5d5', 
    dark: '#363740',
});

//cards, page, menuitems and focused items background
export const secundary = theme('mode', {
    /* light: '#f1f1f1', */
    light: '#d5d5d5',
    dark: '#363740',
});

//Texts, links
export const contrast = theme('mode', {
    /* light: ' #2d2d2d', */
    light: '#080708',
    dark: '#DDE2FF',
});

//Notifications, highlights
export const special = theme('mode', {
    /* light: '#3751FF', */
    light: '#586CEB',
    /* light: '#96858f', */
    dark: '#6A2794',    //7F6A93 
});

export const shadow = theme('mode', {
    light: '#080708',
    dark: '#080708',
});

export const hover = theme('mode', {
    /* light: '#28587B', */
    light: '#d5d5d5',
    dark: '#6A2794', //765D94
});

export const logoIT = theme('mode', {
    light: '#3E4095',
    dark: '#3E4095',
});

export const sizes =  {
    
        fhd: '1920px',
        large: '1550px',
        medium: '1420px',
        narrow: '1280px',
        tablet: '950px',
        mobile: '570px',    
};

//New

//Background images
/* export const BACKGROUND_IMAGE = theme('mode', {
    light: LIGHT_BACKGROUND_IMAGE,
    dark: '',
}); */

export const HEADER_BACKGROUND = theme('mode', {
    light: LIGHT_HEADER_BACKGROUND,
    dark: DARK_HEADER_BACKGROUND,
});

export const BODY_CARD_BACKGROUND = theme('mode', {
    light: LIGHT_BODY_CARD_BACKGROUND,
    dark: DARK_BODY_CARD_BACKGROUND,
});

export const CARD_BACKGROUND = theme('mode', {
    light: LIGHT_CARD_BACKGROUND,
    dark: DARK_CARD_BACKGROUND,
});

export const CARD_TITLE = theme('mode', {
    light: LIGHT_CARD_TITLE,
    dark: DARK_CARD_TITLE,
});

export const CARD_SUBTITLE = theme('mode', {
    light: LIGHT_CARD_SUBTITLE,
    dark: DARK_CARD_SUBTITLE,
});

export const CARD_PARAGRAPH = theme('mode', {
    light: LIGHT_CARD_PARAGRAPH,
    dark: DARK_CARD_PARAGRAPH,
});

export const CARD_BORDER = theme('mode', {
    light: LIGHT_CARD_BORDER,
    dark: DARK_CARD_BORDER,
});

export const CARD_BORDER_HOVER = theme('mode', {
    light: LIGHT_CARD_BORDER_HOVER,
    dark: DARK_CARD_BORDER_HOVER,
});

export const CARD_HEADER_BORDER = theme('mode', {
    light: LIGHT_CARD_HEADER_BORDER,
    dark: DARK_CARD_HEADER_BORDER,
});

export const CARD_HEADER_BORDER_HOVER = theme('mode', {
    light: LIGHT_CARD_HEADER_BORDER_HOVER,
    dark: DARK_CARD_HEADER_BORDER_HOVER,
});

export const CARD_BORDER_SHADOW = theme('mode', {
    light: LIGHT_CARD_BORDER_SHADOW,
    dark: DARK_CARD_BORDER_SHADOW,
});

export const CARD_OPACITY = theme('mode', {
    light: LIGHT_CARD_OPACITY,
    dark: DARK_CARD_OPACITY,
});