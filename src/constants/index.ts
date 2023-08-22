import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('window');

const GUIDELINEBASEWIDTH = 390; // based on design requirement (check width of screen on figma)
const GUIDELINEBASEHEIGHT = 844; // based on design requirement (check height of screen on figma)

export const BASEFONTSIZE = 16;

export const scale = (size: number, factor: number = 1.02) =>
  (width / GUIDELINEBASEWIDTH / factor) * size; // use to scale font and width

export const scaleHeight = (size: number) =>
  (height / GUIDELINEBASEHEIGHT) * size; // use to scale height

// ASYNC STORAGE KEYS
export const INITIALISED = 'INITIALIZED';
// END ASYNC STORAGE KEYS

export const BASE_HORIZONTAL_PADDING = scale(20);

export const COLORS = {
  TEAL: '#0898A0',
  LIGHT_TEAL: '#F6FFFE',
  WHITE: '#FFFFFF',
  SOFT_TECT: '#71879C',
  DARK_TEXT: '#012224',
  TEAL_DISABLED: '#b5e0e3',
  OFF_WHITE: '#e9f3f5',
  CHAMPAGNE_IVORY: '#FEFAF7',
  LIGHT_PINK: '#FDF4F9',
  ORANGE: '#FE7122',
  PINK: '#B80074',
  TEXT_DARK: '#222',
  GRAY: {
    '50': '#F9FAFB',
    '100': '#F4F4F6',
    '150': '#E5E6EB',
    '200': '#D3D5DA',
    '250': '#9EA3AE',
    '300': '#6C727F',
    '350': '#4D5461',
  },
};

export const FONTS = {
  GROTESK_VAR: 'FamiljenGrotesk-VariableFont_wght',
  GROTESK_ITALIC_VAR: 'FamiljenGrotesk-Italic-VariableFont_wght',
  GROTESK_BOLD: 'FamiljenGrotesk-Bold',
  GROTESK_BOLD_ITALIC: 'FamiljenGrotesk-BoldItalic',
  GROTESK_ITALIC: 'FamiljenGrotesk-Italic',
  GROTESK_REGULAR: 'FamiljenGrotesk-Regular',
  GROTESK_MIDIUM: 'FamiljenGrotesk-Medium',
  GROTESK_MIDIUM_ITALIC: 'FamiljenGrotesk-MediumItalic',
  GROTESK_SEMI_BOLD: 'FamiljenGrotesk-SemiBold',
  GROTESK_SEMI_BOLD_ITALIC: 'FamiljenGrotesk-SemiBoldItalic',
  DM_SANS: 'DMSans-Regular',
  DM_SANS_BOLD: 'DMSans-Bold',
};

export const THEME = {
  COLORS,
  FONTS,
};

export const BASE_URL =
  'https://rise-rn-test-api-gb2v6.ondigitalocean.app/api/v1';
