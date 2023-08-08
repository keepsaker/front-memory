import { keyframes, style } from '@vanilla-extract/css';

const showModal = keyframes({
  '0%': {
    bottom: '-100%',
  },

  '100%': {
    bottom: '0',
  },
});

export const backdrop = style({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  backgroundColor: '#33333311',
});

export const content = style({
  position: 'fixed',
  bottom: '0',
  left: '0',

  overflowX: 'hidden',
  overflowY: 'auto',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  width: '100%',
  minHeight: '10%',
  maxHeight: '90%',

  borderRadius: '10px 10px 0 0',
  backgroundColor: '#ffffff',

  animation: `${showModal} 0.4s ease-out`,
});
