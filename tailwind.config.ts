import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './widgets/**/*.{js,ts,jsx,tsx,mdx}',
    './features/**/*.{js,ts,jsx,tsx,mdx}',
    './entities/**/*.{js,ts,jsx,tsx,mdx}',
    './shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['var(--font-poppins)'],
        roboto: ['var(--font-roboto)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: '0 4px 12px rgba(46, 44, 56, 0.1)',
      },
      screens: {
        xsm: '480px',
      },
      spacing: {
        120: '30rem',
      },
      colors: {
        csLight: '#eef4ed',
        csLightBrightest: '#f9f7f3',
        csLightYellow: '#fff3b0',
        csGrey: '#8da9c4',
        csDark: '#0b2545',
        csBlue: '#13315c',
        csBlueLight: '#4cc9f0',
        csBgBlueLight: '#00509d',
        csBgGreen: '#38b000',
        csReject: '#c1121f',
        csRejectHover: '#780000',
      },
    },
  },
  plugins: [],
}
export default config
