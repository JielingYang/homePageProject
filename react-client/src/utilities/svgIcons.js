import React from "react";
import {ENGINE_PART_SVG_INDICES, INDEX, THEME_INDICES} from "./CONSTANTS_NUMBER";

export const getSettingsTabsSvgIcon = (iconColor: string, iconIndex: number) =>
{
    let icons = [];
    icons[INDEX.SETTINGS_TABS_THEME] = <svg width="100%" height="100%" viewBox="0 0 24 24" fill={iconColor}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
            d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"/>
    </svg>;
    // icons[INDEX.SETTINGS_TABS_COLOR] = <svg width="100%" height="100%" viewBox="0 0 24 24" fill={iconColor}>
    //     <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    //     <path d="M0 0h24v24H0z" fill="none"/>
    // </svg>;
    // icons[INDEX.SETTINGS_TABS_SHAPE] = <svg width="100%" height="100%" viewBox="0 0 24 24" fill={iconColor}>
    //     <path d="M16.5 24C20.64 24 24 20.04 24 15.16C24 10.27 20.64 6.31 16.5 6.31C15.48 6.31 14.52 6.55 13.63 6.98C14.25 8.23 19.17 18.28 19.78 19.54C19.82 19.62 19.79 19.69 19.71 19.69C19.07 19.69 15.85 19.69 10.06 19.69C12.53 22.57 14.68 24 16.5 24Z"/>
    //     <path d="M0.02 18.29C-0.02 18.36 0.01 18.42 0.08 18.42C1.86 18.42 16.14 18.42 17.92 18.42C17.99 18.42 18.02 18.36 17.98 18.29C17.09 16.46 9.96 1.88 9.07 0.06C9.03 -0.02 8.97 -0.01 8.93 0.06C7.15 3.71 0.91 16.46 0.02 18.29Z"/>
    // </svg>;
    icons[INDEX.SETTINGS_TABS_VIEW] = <svg width="100%" height="100%" viewBox="0 0 24 24" fill={iconColor}>
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
            d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>;
    icons[INDEX.SETTINGS_TABS_PLAYGROUND] = <svg width="100%" height="100%" viewBox="0 0 21 24" fill={iconColor}>
        <path d="M0 19.2L9.6 24L9.6 11.46L0 6.66L0 19.2Z"/>
        <path d="M1.29 4.73L10.75 9.46L20.21 4.73L10.75 0L1.29 4.73Z"/>
        <path d="M11.9 24L21.5 19.2L21.5 6.66L11.9 11.46L11.9 24Z"/>
    </svg>;

    return icons[iconIndex];
};

export const getThemesSvgIcon = (iconColor: string, iconIndex: number) =>
{
    let icons = [];
    icons[THEME_INDICES.THEME_DARK] = <svg viewBox="0 0 24 24" width="100%" height="100%" fill={iconColor}>
        <path
            d="M14.25 7.5C13.83 7.5 13.5 7.84 13.5 8.25C13.5 8.66 13.83 9 14.25 9C14.66 9 15 8.66 15 8.25C15 7.84 14.66 7.5 14.25 7.5Z"/>
        <path
            d="M13.51 0.15L14.23 0.34L14.91 0.59L15.57 0.91L16.19 1.28L16.77 1.71L17.3 2.2L17.78 2.73L18.22 3.31L18.59 3.93L18.91 4.58L19.16 5.27L19.35 5.99L19.46 6.73L19.5 7.5L19.5 14.25L19.5 14.33L19.51 14.53L19.52 14.84L19.56 15.24L19.62 15.73L19.71 16.29L19.84 16.9L20 17.55L20.22 18.22L20.5 18.92L20.83 19.61L21.23 20.29L21.7 20.94L22.26 21.55L22.89 22.11L23.63 22.6L23.68 22.63L23.73 22.67L23.77 22.71L23.82 22.76L23.85 22.81L23.89 22.86L23.92 22.91L23.94 22.96L23.96 23.02L23.98 23.08L23.99 23.14L24 23.2L24 23.26L23.99 23.32L23.99 23.38L23.97 23.45L23.95 23.51L23.93 23.56L23.9 23.62L23.87 23.67L23.83 23.72L23.79 23.76L23.75 23.81L23.7 23.85L23.66 23.88L23.6 23.91L23.55 23.94L23.49 23.96L23.43 23.98L23.37 23.99L23.31 24L23.25 24L20.07 24L19.98 24L19.9 24L19.81 23.99L19.72 23.98L19.63 23.97L19.54 23.96L19.45 23.95L19.37 23.93L19.28 23.91L19.19 23.89L19.11 23.87L19.02 23.85L18.94 23.82L18.85 23.79L18.77 23.76L18.68 23.73L16.58 22.89L16.48 22.85L16.38 22.82L16.28 22.79L16.17 22.77L16.07 22.75L15.96 22.74L15.85 22.73L15.75 22.73L15.64 22.73L15.54 22.74L15.43 22.75L15.32 22.77L15.22 22.79L15.12 22.82L15.01 22.85L14.91 22.89L13.39 23.5L13.22 23.56L13.05 23.62L12.88 23.66L12.7 23.7L12.53 23.73L12.35 23.75L12.18 23.76L12 23.77L11.82 23.76L11.65 23.75L11.47 23.73L11.29 23.7L11.12 23.66L10.95 23.62L10.78 23.56L10.61 23.5L9.08 22.89L8.98 22.85L8.88 22.82L8.78 22.79L8.67 22.77L8.57 22.75L8.46 22.74L8.36 22.73L8.25 22.73L8.14 22.73L8.04 22.74L7.93 22.75L7.83 22.77L7.72 22.79L7.62 22.82L7.51 22.85L7.41 22.89L5.31 23.73L5.23 23.76L5.14 23.79L5.06 23.82L4.97 23.85L4.89 23.87L4.8 23.89L4.71 23.91L4.63 23.93L4.54 23.95L4.45 23.96L4.36 23.97L4.28 23.98L4.19 23.99L4.1 24L4.01 24L3.92 24L0.75 24L0.68 24L0.62 23.99L0.56 23.98L0.5 23.96L0.45 23.94L0.39 23.91L0.34 23.88L0.29 23.85L0.25 23.81L0.2 23.77L0.16 23.72L0.13 23.67L0.09 23.62L0.07 23.56L0.04 23.51L0.02 23.45L0.01 23.39L0 23.32L0 23.26L0 23.2L0.01 23.14L0.02 23.08L0.03 23.02L0.05 22.97L0.08 22.91L0.11 22.86L0.14 22.81L0.18 22.76L0.22 22.72L0.27 22.67L0.32 22.64L0.37 22.6L1.1 22.11L1.74 21.55L2.3 20.94L2.77 20.28L3.17 19.61L3.51 18.91L3.78 18.22L4 17.54L4.16 16.9L4.29 16.29L4.38 15.73L4.44 15.25L4.47 14.85L4.49 14.54L4.5 14.34L4.5 14.26L4.5 7.5L4.54 6.73L4.65 5.99L4.84 5.27L5.09 4.58L5.4 3.93L5.78 3.31L6.21 2.73L6.7 2.2L7.23 1.71L7.81 1.28L8.43 0.91L9.08 0.59L9.77 0.34L10.49 0.15L11.23 0.04L12 0L12.76 0.04L13.51 0.15ZM8.01 12.04L7.81 12.14L7.64 12.31L7.54 12.51L7.5 12.75L7.54 12.99L7.64 13.19L7.81 13.36L8.01 13.46L8.25 13.5L9 13.5L9 16.5L9.15 17.45L9.58 18.27L10.23 18.92L11.05 19.35L12 19.5L12.95 19.35L13.77 18.92L14.42 18.27L14.85 17.45L15 16.5L15 13.5L15.75 13.5L15.99 13.46L16.19 13.36L16.35 13.19L16.46 12.99L16.5 12.75L16.46 12.51L16.35 12.31L16.19 12.14L15.99 12.04L15.75 12L8.25 12L8.01 12.04ZM12.66 6.66L12.18 7.38L12 8.25L12.18 9.12L12.66 9.84L13.37 10.32L14.25 10.5L15.12 10.32L15.84 9.84L16.32 9.12L16.5 8.25L16.32 7.38L15.84 6.66L15.12 6.18L14.25 6L13.37 6.18L12.66 6.66ZM7.97 7.56L7.74 7.72L7.58 7.96L7.52 8.25L7.58 8.54L7.74 8.78L7.98 8.94L8.28 9L8.57 8.94L8.81 8.78L8.97 8.54L9.03 8.25L8.97 7.96L8.81 7.72L8.57 7.56L8.28 7.5L8.26 7.5L7.97 7.56Z"/>
    </svg>;
    icons[THEME_INDICES.THEME_BRIGHT] = <svg viewBox="0 0 24 24" width="100%" height="100%" fill={iconColor}>
        <path
            d="M12.74 23.76L12.39 23.94L12 24L11.61 23.94L11.26 23.76L10.98 23.49L10.79 23.14L13.21 23.14L13.02 23.49L12.74 23.76ZM14.11 22.02L14.02 22.16L13.88 22.25L13.71 22.29L10.29 22.29L10.17 22.26L10.06 22.18L9.96 22.04L9.86 21.86L9.86 20.57L14.14 20.57L14.14 21.86L14.11 22.02ZM5.8 17.88L5.98 18.02L6.12 18.2L6.2 18.41L6.23 18.63L6.2 18.85L6.12 19.05L5.98 19.23L4.46 20.75L4.18 20.93L3.86 20.99L3.54 20.93L3.25 20.75L3.14 20.62L3.07 20.47L3.02 20.31L3 20.14L3.02 19.97L3.07 19.81L3.14 19.67L3.25 19.54L4.77 18.02L4.95 17.88L5.15 17.8L5.37 17.77L5.59 17.8L5.8 17.88ZM18.98 17.89L19.23 18.02L20.75 19.54L20.86 19.67L20.93 19.81L20.98 19.97L21 20.14L20.98 20.31L20.93 20.47L20.86 20.62L20.75 20.75L20.46 20.93L20.14 20.99L19.82 20.93L19.54 20.75L18.02 19.23L17.88 19.05L17.8 18.85L17.77 18.63L17.8 18.41L17.88 18.2L18.02 18.02L18.2 17.88L18.41 17.8L18.57 17.78L18.76 17.81L18.98 17.89ZM14.47 6.79L15.51 7.46L16.38 8.33L17.04 9.37L17.47 10.55L17.62 11.84L17.54 12.52L17.51 12.8L17.49 12.91L17.47 13.12L17.42 13.27L17.36 13.51L17.12 14.2L16.79 14.85L16.37 15.45L15.87 16L15.54 16.36L15.25 16.76L15.01 17.18L14.82 17.63L14.69 18.09L14.6 18.58L14.57 19.07L14.57 19.71L9.43 19.71L9.43 19.07L9.39 18.57L9.3 18.08L9.16 17.61L8.96 17.15L8.71 16.72L8.42 16.32L8.07 15.95L7.46 15.23L6.98 14.42L6.65 13.55L6.6 13.31L6.53 13.12L6.49 12.79L6.47 12.65L6.46 12.5L6.38 11.84L6.53 10.55L6.96 9.37L7.62 8.33L8.49 7.46L9.53 6.79L10.71 6.37L12 6.22L13.29 6.37L14.47 6.79ZM3.61 11.39L3.79 11.67L3.86 12L3.79 12.33L3.61 12.61L3.33 12.79L3 12.86L0.86 12.86L0.52 12.79L0.25 12.61L0.07 12.33L0 12L0.07 11.67L0.25 11.39L0.52 11.21L0.86 11.14L3 11.14L3.33 11.21L3.61 11.39ZM23.75 11.39L23.93 11.67L24 12L23.93 12.33L23.75 12.61L23.48 12.79L23.14 12.86L21 12.86L20.67 12.79L20.39 12.61L20.21 12.33L20.14 12L20.21 11.67L20.39 11.39L20.67 11.21L21 11.14L23.14 11.14L23.48 11.21L23.75 11.39ZM20.57 3.12L20.75 3.25L20.88 3.43L20.97 3.64L21 3.86L20.97 4.08L20.89 4.28L20.75 4.46L19.23 5.98L18.95 6.16L18.63 6.22L18.31 6.16L18.02 5.98L17.91 5.85L17.84 5.7L17.79 5.54L17.77 5.37L17.79 5.2L17.84 5.04L17.91 4.9L18.02 4.77L19.54 3.25L19.72 3.11L19.92 3.03L20.14 3L20.36 3.03L20.57 3.12ZM4.19 3.07L4.33 3.14L4.46 3.25L5.98 4.77L6.09 4.9L6.16 5.04L6.21 5.2L6.23 5.37L6.21 5.54L6.16 5.7L6.09 5.85L5.98 5.98L5.78 6.1L5.51 6.14L5.17 6.1L4.77 5.98L3.25 4.46L3.14 4.33L3.07 4.19L3.02 4.03L3 3.86L3.02 3.69L3.07 3.53L3.14 3.38L3.25 3.25L3.38 3.14L3.53 3.07L3.69 3.02L3.86 3L4.03 3.02L4.19 3.07ZM12.61 0.25L12.79 0.52L12.86 0.86L12.86 3L12.79 3.33L12.61 3.61L12.33 3.79L12 3.86L11.67 3.79L11.39 3.61L11.21 3.33L11.14 3L11.14 0.86L11.21 0.52L11.39 0.25L11.67 0.07L12 0L12.33 0.07L12.61 0.25Z"/>
    </svg>;
    icons[THEME_INDICES.THEME_YELLOW] = <svg viewBox="0 0 24 24" width="100%" height="100%" fill={iconColor}>
        <path
            d="M23.95 21.87L23.79 22.37L23.54 22.82L23.21 23.22L22.92 23.45L22.5 23.66L21.98 23.84L21.33 24L18.66 24L24 18.66L24 21.33L23.95 21.87ZM12.16 24L8.39 24L24 8.39L24 12.16L12.16 24ZM22.42 0.25L22.61 0.34L22.8 0.45L22.97 0.58L23.13 0.72L23.28 0.87L23.42 1.03L23.55 1.2L23.66 1.39L23.75 1.58L23.83 1.78L23.9 1.99L1.99 23.9L1.88 23.87L1.78 23.84L1.68 23.8L1.58 23.76L1.48 23.71L1.38 23.66L1.29 23.61L1.2 23.55L1.11 23.49L1.03 23.43L0.94 23.36L0.86 23.29L0.79 23.22L0.78 23.21L0.71 23.14L0.64 23.06L0.57 22.97L0.51 22.89L0.45 22.8L0.39 22.71L0.34 22.62L0.29 22.52L0.24 22.42L0.2 22.32L0.16 22.22L0.13 22.12L0.1 22.01L22.01 0.1L22.22 0.17L22.42 0.25ZM0 11.84L11.84 0L15.61 0L0 15.61L0 11.84ZM0 2.67L0.17 1.95L0.67 1.27L1.5 0.62L2.67 0L5.34 0L0 5.34L0 2.67Z"/>
    </svg>;

    return icons[iconIndex];
};

export const getEngineFrontFaceSvg = (iconColor: string) =>
{
    let icons = [];
    icons[ENGINE_PART_SVG_INDICES.ENGINE_FRONT_FACE_SVG_1] =
        <svg width="100%" height="100%" viewBox="0 0 280 280" fill={iconColor}>
            <path
                d="M140.188,280.375c3.963,0,7.169-3.206,7.169-7.169c0-3.962-3.206-7.168-7.169-7.168c-51.427,0-95.724-31.022-115.228-75.332l17.529-5.539c1.979,6.543,9.166,24.311,32.172,42.139c0.434,0.336,0.952,0.499,1.463,0.499c0.716,0,1.419-0.312,1.893-0.929c0.807-1.041,0.616-2.539-0.427-3.351c-21.94-16.998-28.754-34.069-30.523-39.811l37.367-11.817c11.871,25.025,37.311,42.405,66.8,42.405c2.637,0,4.779-2.138,4.779-4.778c0-2.638-2.143-4.779-4.779-4.779c-35.521,0-64.415-28.895-64.415-64.406c0-35.519,28.894-64.415,64.415-64.415c2.637,0,4.779-2.14,4.779-4.779c0-2.637-2.143-4.779-4.779-4.779c-26.019,0-48.897,13.534-62.088,33.899L64.077,80.204c6.585-8.398,14.499-15.687,23.468-21.527l8.436,9.603c0.474,0.535,1.127,0.812,1.792,0.812c0.542,0,1.085-0.182,1.529-0.556c0.121-0.101,12.183-9.964,28.441-10.657c1.318-0.056,2.343-1.169,2.29-2.49c-0.052-1.319-1.242-2.35-2.49-2.285c-14.204,0.602-25.209,7.351-29.44,10.352l-6.413-7.302c12.9-7.514,27.667-12.081,43.437-12.904c1.113,2.511,3.619,4.268,6.548,4.268c11.969,0,23.613,2.256,34.604,6.707c0.887,0.357,1.792,0.525,2.688,0.525c1.567,0,3.07-0.564,4.312-1.505c7.468,3.736,14.375,8.387,20.597,13.845c-0.397,2.264,0.163,4.665,1.945,6.385c8.583,8.3,15.383,18.022,20.204,28.889c0.942,2.116,2.791,3.512,4.877,4.019c2.88,7.787,4.84,16.001,5.619,24.574c-1.661,1.363-2.716,3.438-2.642,5.754c0.028,1.018,0.047,2.037,0.047,3.064c0,10.926-1.886,21.613-5.609,31.76c-0.812,2.222-0.439,4.583,0.774,6.422c-3.36,7.775-7.738,14.995-12.919,21.562c-2.212-0.252-4.499,0.401-6.109,2.18c-8.013,8.844-17.506,15.962-28.212,21.151c-2.432,1.181-3.859,3.552-4,6.072c-7.378,3.127-15.257,5.255-23.424,6.463c-1.321-2.272-3.817-3.742-6.646-3.556c-2.017,0.131-4.052,0.2-6.107,0.2c-3.962,0-7.168,3.211-7.168,7.169c0,3.962,3.207,7.169,7.168,7.169c2.373,0,4.716-0.075,7.045-0.229c3.416-0.22,6.1-2.811,6.604-6.062c8.34-1.251,16.381-3.417,23.923-6.581c1.367,1.871,3.481,2.978,5.731,2.978c1.055,0,2.109-0.224,3.117-0.719c12.373-5.992,23.331-14.216,32.586-24.432c2.524-2.787,2.366-6.969-0.159-9.666c4.947-6.394,9.167-13.366,12.48-20.848c0.682,0.2,1.362,0.364,2.035,0.364c2.921,0,5.67-1.802,6.729-4.705c4.308-11.737,6.487-24.082,6.487-36.697c0-1.181-0.019-2.352-0.057-3.519c-0.121-3.818-3.262-6.781-6.991-6.905c-0.84-8.177-2.753-16.02-5.428-23.513c3.397-1.71,4.905-5.778,3.347-9.29c-5.577-12.555-13.432-23.786-23.345-33.375c-2.632-2.55-6.679-2.569-9.456-0.294c-6.197-5.339-13.039-9.917-20.404-13.651c0.794-3.388-0.938-6.938-4.266-8.281c-12.703-5.146-26.159-7.757-39.985-7.757c-3.311,0-6.069,2.256-6.891,5.306c-17.315,0.917-33.454,6.158-47.413,14.713c-0.364,0.086-0.718,0.235-1.02,0.497c-0.075,0.067-0.109,0.154-0.17,0.226c-28.513,18.001-47.548,49.707-47.548,85.846c0,1.32,1.071,2.39,2.39,2.39s2.39-1.069,2.39-2.39c0-20.757,6.63-39.964,17.798-55.739l25.434,20.353c-5.956,10.655-9.376,22.901-9.376,35.955c0,9.596,1.893,18.738,5.234,27.158l-59.382,18.78c-5.643-14.281-8.779-29.823-8.779-46.093c0-30.224,10.867-59.442,30.611-82.266c2.59-2.992,2.259-7.523-0.737-10.114c-2.996-2.59-7.521-2.266-10.111,0.737C12.113,73.976,0.002,106.526,0.002,140.189C0.002,217.486,62.892,280.375,140.188,280.375z"/>
            <path
                d="M140.188,14.337c69.395,0,125.848,56.456,125.848,125.848c0,3.962,3.206,7.168,7.169,7.168c3.962,0,7.169-3.206,7.169-7.168C280.373,62.889,217.483,0,140.188,0c-3.962,0-7.168,3.207-7.168,7.169	C133.019,11.131,136.23,14.337,140.188,14.337z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_FRONT_FACE_SVG_2] =
        <svg width="100%" height="100%" viewBox="0 0 280 280" fill={iconColor}>
            <path
                d="M164.741,218.447c6.235-1.391,12.11-3.528,17.637-6.226l-2.399-4.149c-5.101,2.465-10.533,4.43-16.283,5.708c-1.288,0.289-2.1,1.559-1.811,2.856C162.174,217.925,163.448,218.737,164.741,218.447z"/>
            <path
                d="M188.31,203.392l2.403,4.148c9.265-6.006,17.119-13.847,23.126-23.022l-4.145-2.39C204.117,190.58,196.851,197.81,188.31,203.392z"/>
            <path
                d="M209.293,97.958l4.14-2.39c-6.025-8.998-13.847-16.799-22.957-22.854l-2.39,4.144C196.481,82.481,203.697,89.671,209.293,97.958z"/>
            <path
                d="M214.39,173.807l4.153,2.395c4.751-9.582,7.649-20.231,8.308-31.493h-4.779C221.428,155.102,218.748,164.93,214.39,173.807z"/>
            <path
                d="M179.82,72.06l2.395-4.144c-5.488-2.782-11.295-5.012-17.437-6.494c-1.278-0.311-2.576,0.483-2.884,1.757c-0.317,1.277,0.485,2.577,1.759,2.884C169.343,67.437,174.738,69.493,179.82,72.06z"/>
            <path
                d="M218.226,103.836l-4.13,2.385c4.531,8.912,7.327,18.715,7.985,28.926h4.778C226.192,124.084,223.164,113.466,218.226,103.836z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_FRONT_FACE_SVG_3] =
        <svg width="100%" height="100%" viewBox="0 0 280 280" fill={iconColor}>
            <path
                d="M151.234,200.526c33.5,0,60.756-27.256,60.756-60.757c0-33.502-27.256-60.756-60.756-60.756c-2.642,0-4.779,2.14-4.779,4.779c0,2.637,2.138,4.779,4.779,4.779c28.227,0,51.198,22.966,51.198,51.197c0,28.227-22.972,51.198-51.198,51.198c-2.642,0-4.779,2.143-4.779,4.779C146.455,198.389,148.593,200.526,151.234,200.526z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_FRONT_FACE_SVG_4] =
        <svg width="100%" height="100%" viewBox="0 0 280 280" fill={iconColor}>
            <circle cx="140" cy="140" r="30"/>
        </svg>;
    return icons;
};

export const getEngineMiddleFaceSvg = (iconColor: string) =>
{
    let icons = [];
    icons[ENGINE_PART_SVG_INDICES.ENGINE_MIDDLE_FACE_SVG_1] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <path
                d="M130.368,274.891V261.31c-65.143-3.715-116.824-57.704-116.824-123.773c0-17.735,3.752-34.581,10.461-49.835L12.2,80.885C4.378,98.167,0,117.335,0,137.537C0.004,211.092,57.746,271.157,130.368,274.891z"/>
            <path
                d="M130.368,13.763V0.187C82.74,2.632,41.511,29.309,18.776,68.13l11.737,6.777C50.911,40.139,87.757,16.195,130.368,13.763z"/>
            {/*Center*/}
            <path
                d="M91.267,152.143H75.332c6.615,28.264,31.925,49.335,62.205,49.335c30.282,0,55.592-21.071,62.205-49.34h-15.934c-6.197,19.657-24.567,33.911-46.271,33.911C115.834,186.053,97.47,171.795,91.267,152.143z"/>
            <path
                d="M201.487,137.537c0-35.318-28.632-63.944-63.946-63.944c-35.316,0-63.943,28.63-63.943,63.944c0,0.091,0.014,0.177,0.014,0.268h15.427c0-0.091-0.014-0.177-0.014-0.268c0-26.796,21.721-48.517,48.517-48.517c26.796,0,48.517,21.72,48.517,48.517c0,0.091-0.01,0.177-0.015,0.268h15.435C201.468,137.714,201.487,137.627,201.487,137.537z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_MIDDLE_FACE_SVG_2] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <path
                d="M130.368,274.891V261.31c-65.143-3.715-116.824-57.704-116.824-123.773c0-17.735,3.752-34.581,10.461-49.835L12.2,80.885C4.378,98.167,0,117.335,0,137.537C0.004,211.092,57.746,271.157,130.368,274.891z"/>
            <path
                d="M130.368,13.763V0.187C82.74,2.632,41.511,29.309,18.776,68.13l11.737,6.777C50.911,40.139,87.757,16.195,130.368,13.763z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_MIDDLE_FACE_SVG_3] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <path
                d="M130.368,274.891V261.31c-65.143-3.715-116.824-57.704-116.824-123.773c0-17.735,3.752-34.581,10.461-49.835L12.2,80.885C4.378,98.167,0,117.335,0,137.537C0.004,211.092,57.746,271.157,130.368,274.891z"/>
            <path
                d="M130.368,13.763V0.187C82.74,2.632,41.511,29.309,18.776,68.13l11.737,6.777C50.911,40.139,87.757,16.195,130.368,13.763z"/>
            {/*Center*/}
            <path
                d="M91.267,152.143H75.332c6.615,28.264,31.925,49.335,62.205,49.335c30.282,0,55.592-21.071,62.205-49.34h-15.934c-6.197,19.657-24.567,33.911-46.271,33.911C115.834,186.053,97.47,171.795,91.267,152.143z"/>
            <path
                d="M201.487,137.537c0-35.318-28.632-63.944-63.946-63.944c-35.316,0-63.943,28.63-63.943,63.944c0,0.091,0.014,0.177,0.014,0.268h15.427c0-0.091-0.014-0.177-0.014-0.268c0-26.796,21.721-48.517,48.517-48.517c26.796,0,48.517,21.72,48.517,48.517c0,0.091-0.01,0.177-0.015,0.268h15.435C201.468,137.714,201.487,137.627,201.487,137.537z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_MIDDLE_FACE_SVG_4] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <path
                d="M130.368,274.891V261.31c-65.143-3.715-116.824-57.704-116.824-123.773c0-17.735,3.752-34.581,10.461-49.835L12.2,80.885C4.378,98.167,0,117.335,0,137.537C0.004,211.092,57.746,271.157,130.368,274.891z"/>
            <path
                d="M130.368,13.763V0.187C82.74,2.632,41.511,29.309,18.776,68.13l11.737,6.777C50.911,40.139,87.757,16.195,130.368,13.763z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_MIDDLE_FACE_SVG_5] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <path
                d="M130.368,274.891V261.31c-65.143-3.715-116.824-57.704-116.824-123.773c0-17.735,3.752-34.581,10.461-49.835L12.2,80.885C4.378,98.167,0,117.335,0,137.537C0.004,211.092,57.746,271.157,130.368,274.891z"/>
            <path
                d="M130.368,13.763V0.187C82.74,2.632,41.511,29.309,18.776,68.13l11.737,6.777C50.911,40.139,87.757,16.195,130.368,13.763z"/>
            {/*Center*/}
            <path
                d="M91.267,152.143H75.332c6.615,28.264,31.925,49.335,62.205,49.335c30.282,0,55.592-21.071,62.205-49.34h-15.934c-6.197,19.657-24.567,33.911-46.271,33.911C115.834,186.053,97.47,171.795,91.267,152.143z"/>
            <path
                d="M201.487,137.537c0-35.318-28.632-63.944-63.946-63.944c-35.316,0-63.943,28.63-63.943,63.944c0,0.091,0.014,0.177,0.014,0.268h15.427c0-0.091-0.014-0.177-0.014-0.268c0-26.796,21.721-48.517,48.517-48.517c26.796,0,48.517,21.72,48.517,48.517c0,0.091-0.01,0.177-0.015,0.268h15.435C201.468,137.714,201.487,137.627,201.487,137.537z"/>
        </svg>;
    return icons;
};

export const getEngineBackFaceSvg = (iconColor: string) =>
{
    let icons = [];
    icons[ENGINE_PART_SVG_INDICES.ENGINE_BACK_FACE_SVG_1] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <path d="M231.837,161.238l-73.726,70.268C193.88,223.693,222.335,196.344,231.837,161.238z"/>
            <path
                d="M56.747,89.293l-2.168-1.295c-8.847,14.825-13.521,31.834-13.521,49.187h2.389c0,43.674,30.075,80.366,70.573,90.718l8.324-7.934c-39.351-7.038-69.339-41.443-69.339-82.784h2.39c0-14.767,3.977-29.24,11.493-41.841l-1.939-1.162c7.752-12.975,18.825-23.758,32.128-30.997l1.125,2.075c12.855-6.984,27.79-10.405,42.274-9.803l0.091-2.29c15.635,0.628,30.187,5.477,42.518,13.53l-1.261,1.93c12.34,8.058,22.3,19.289,28.796,32.49l2.03-0.999c3.995,8.1,6.734,16.918,7.943,26.208l8.326-7.934c-1.629-7.895-4.224-15.441-7.7-22.491l2.263-1.113c-7.63-15.506-19.33-28.702-33.826-38.165l-1.358,2.079c-13.726-8.97-29.93-14.376-47.348-15.07l0.096-2.504c-17.019-0.639-34.576,3.328-49.684,11.533l1.158,2.128C77.704,62.849,65.378,74.846,56.747,89.293z"/>
            <path
                d="M235.337,135.653h-4.489c-0.07-3.937-0.401-7.804-0.934-11.603l-8.858,8.445c0.057,1.055,0.215,2.088,0.233,3.157H221c0,13.749-3.393,26.705-9.287,38.162l22.023-20.987C234.726,147.237,235.337,141.524,235.337,135.653z"/>
            <path
                d="M149.71,232.906l22.015-20.983c-10.547,4.798-22.215,7.537-34.545,7.537v1.899c-3.001,0-5.955-0.173-8.875-0.476l-8.732,8.316c5.712,1.092,11.586,1.718,17.611,1.718v2.879C141.438,233.802,145.599,233.438,149.71,232.906z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_BACK_FACE_SVG_2] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <path
                d="M193.04,151.139c-2.521-0.808-5.204,0.588-6.007,3.099c-6.716,21.044-26.093,35.181-48.206,35.181c-7.966,0-15.585-1.797-22.646-5.339c-2.366-1.186-5.239-0.224-6.415,2.133c-1.186,2.361-0.229,5.231,2.133,6.417c8.405,4.21,17.467,6.348,26.934,6.348c26.29,0,49.317-16.812,57.312-41.836C196.941,154.63,195.556,151.941,193.04,151.139z"/>
            <path
                d="M146.626,88.833c2.604,0.387,5.055-1.386,5.456-3.995s-1.382-5.052-3.995-5.454c-3.048-0.474-6.163-0.707-9.26-0.707c-33.166,0-60.149,26.983-60.149,60.149c0,2.642,2.14,4.779,4.779,4.779c2.637,0,4.779-2.138,4.779-4.779c0-27.896,22.696-50.591,50.591-50.591C141.437,88.236,144.064,88.437,146.626,88.833z"/>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.ENGINE_BACK_FACE_SVG_3] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
            <circle cx="138.827" cy="138.832" r="31.858"/>
        </svg>;
    return icons;
};

export const getTickCrossSvg = (iconColor: string) =>
{
    let icons = [];
    icons[ENGINE_PART_SVG_INDICES.TICK_SVG] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
        </svg>;
    icons[ENGINE_PART_SVG_INDICES.CANCEL_SVG] =
        <svg width="100%" height="100%" viewBox="0 0 275.078 275.077" fill={iconColor}>
        </svg>;
    return icons;
};