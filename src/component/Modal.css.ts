import { style } from '@vanilla-extract/css';

export const modal = style({
  display: 'none',
  position: 'fixed',
  margin: 'auto',
  zIndex: 1,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const openedModal = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

export const modalContent = style({
  position: 'relative',
  margin: 'auto 0px',
  backgroundColor: '#fefefe',
  border: '1px solid #888',
  borderRadius: '4px',
});

export const modalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#f1f1f1',
  padding: '10px',
  borderBottom: '1px solid #ccc',
  fontWeight: 'bold',
});

export const modalHeaderButton = style({
  background: 'transparent',
  border: 'none',
  fontSize: '1.5em',
  fontWeight: 'bold',
  cursor: 'pointer',
});

export const modalBody = style({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
});

export const modalFooter = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  backgroundColor: '#f1f1f1',
  padding: '10px',
  borderTop: '1px solid #ccc',
});

export const modalFooterButton = style({
  backgroundColor: '#44336',
  border: 'none',
  color: 'white',
  fontWeight: 'bold',
  textAlign: 'center',
  textDecoration: 'none',
  display: 'inline-block',
  fontSize: '14px',
  margin: '4px 2px',
  cursor: 'pointer',
  padding: '10px 20px',
  borderRadius: '4px',
});

export const dimmed = style({
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
});
