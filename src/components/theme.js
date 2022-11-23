export const theme = {
  color: {
    background: 'rgb(234, 234, 234)',
    backgroundAccent: 'rgb(136, 135, 135, 0.5)',
    backgroundTableAccent: 'rgb(136, 135, 135, 0.1)',
    backgroundWhite: '#fff',
    primary: 'rgba(0, 0, 0, 0.8)',
    secondary: 'rgba(0, 0, 0, 0.5)',
    border: 'rgba(0, 0, 0, 0.1)',
    online: '#0f0',
    offline: '#f00',
  },
  sizes:{
    width: {
      container: '600px',
      userPhoto: '200px',
      statusUser: 'calc(100% / 3)',
      statusSpan:'20px',
      statisticUser: 'calc(100% / 5)',
    },
    height:{
      container: 'fit-content',
      userPhoto: '200px',
      statusUser: '80px',
      statusSpan:'20px',
      friendsItem: '80px',
      statisticUser: '80px',
      tableHead: '35px',
      tableData: '25px',
    }
  },
  space: [
    0,
    '2px',
    '4px',
    '5px',
    '16px',
    '32px',
    '64px',
    '128px',
    '256px',
    'auto',
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Segoe UI, sans-serif',
    monospace: 'Menlo, monospace',
  },
  fontSizes: {
    xs: 12,
    s: 14,
    m: 16,
    ml: 24,
    l: 32,
    xl: 64,
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  borders: {
    none: 'none',
    normal: '1px solid',
  },
  radii: {
    none: '0',
    normal: '12px',
    round: '50%',
  },
};
