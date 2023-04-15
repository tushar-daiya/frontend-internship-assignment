const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

const customColors = {
  'bg-dark': '#5D9C59',
  'bg-light': '#C7E8CA',
  highlight: '#DF2E38',
  'dark-border': '#161528',
  'light-border': '#d6d6d6',
  'table-header-bg': '#f5f5f5',
  white: '#fff',
  black: '#000',
};

module.exports = {
  prefix: 'tw-',
  corePlugins: {
    preflight: false,
  },
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    textColor: {
      ...customColors,
    },
    fontSize: {
      '14-px': '14px',
      '16-px': '16px',
      '20-px': '20px',
      '24-px': '24px',
    },
    extend: {
      colors: {
        ...customColors,
      },
      borderRadius: {
        '4-px': '4px',
      },
      margin: {
        '16-px': '16px',
        '24-px': '24px',
      },
      padding: {
        '12-px': '12px',
        '24-px': '24px',
      },
      fontFamily: {
        'activ-grotisk': '"aktiv-grotesk", sans-serif',
      },
      fontWeight: {
        600: '600',
      },
      height: {
        '40-px': '40px',
        '60-px': '60px',
      },
      width: {
        '200-px': '200px',
        '400-px': '400px',
      },
    },
  },
  plugins: [],
};
