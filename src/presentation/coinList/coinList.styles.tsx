import styled from 'styled-components';

export const CoinListWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',

  maxWidth: 400,
  width: 400,

  maxHeight: '80vh',
  overflowY: 'scroll',
  overflowX: 'hidden',
  padding: 16,

  backgroundColor: '#1e1a42',
  borderRadius: 8,

  gap: 10,
});
