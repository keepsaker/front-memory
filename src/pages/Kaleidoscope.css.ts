import { style } from '@vanilla-extract/css';

export const pageWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100vw',
  backgroundColor: 'white',
});

export const pageTitle = style({
  fontFamily: 'SF Pro Display',
  fontSize: '24px',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  padding: '0 20px',
});

export const blurText = style({
  fontWeight: 'normal',
  fontSize: '20px',
  color: 'rgba(0, 0, 0, 0.6)',
});

export const boldText = style({
  fontWeight: 'bold',
  fontSize: '26px',
  color: 'black',
});
