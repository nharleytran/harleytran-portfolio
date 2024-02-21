import { hex2rgba } from '@utils';

const ACCENT = '#fd4e4e';
const DARK_BG = '#541616';
const BG = '#faf5f5';

const theme = {
  colors: {
    darkNavy: DARK_BG,
    navy:BG,
    lightNavy: '#f9d9d9',
    lightestNavy: '#c6a6a600',
    slate: '#541616',
    lightSlate: '#541616',
    lightestSlate: '#541616',
    white: '#ffffff',
    green: ACCENT,
    transGreen: hex2rgba(ACCENT, 0.07),
    shadowNavy: hex2rgba(DARK_BG, 0.7),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '16px',
    smish: '20px',
    sm: '17px',
    md: '20px',
    lg: '22px',
    xl: '30px',
    xxl: '26px',
    h3: '36px',
    h4: '40px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;
