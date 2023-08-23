import { style } from '@vanilla-extract/css';

export const wrapper = style({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  overflow: 'scroll',
});

export const imageWrapper = style({
  height: '50%',
  position: 'relative',
  padding: '16px',
});

export const image = style({
  width: '100%',
  height: '100%',
  borderRadius: '8px',
  objectFit: 'fill',
  imageResolution: 'from-image',
});

export const contentWrapper = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
});

export const description = style({
  color: 'black',
  textAlign: 'left',
  fontSize: '14px',
  lineHeight: '1.5',
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 4,
});

export const categoryTag = style({
  fontSize: '12px',
  fontWeight: 'bold',
  borderRadius: '4px',
  padding: '2px 4px',
  backgroundColor: 'black',
  color: 'white',
  margin: 0,
});
