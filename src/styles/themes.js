import theme from 'styled-theming';

//header & body background
export const primary = theme('mode', {
    light: '#f1f1f1', 
    dark: '#363740',
});

//cards, page, menuitems and focused items background
export const secundary = theme('mode', {
    light: '#f1f1f1',
    dark: '#363740',
});

//Texts, links
export const contrast = theme('mode', {
    light: ' #2d2d2d',
    dark: '#DDE2FF',
});

//Notifications, highlights
export const special = theme('mode', {
    light: '#3751FF',
    dark: '#7F6A93',    
});

export const shadow = theme('mode', {
    light: '#080708',
    dark: '#080708',
});

export const hover = theme('mode', {
    light: '#28587B',
    dark: '#765D94',
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