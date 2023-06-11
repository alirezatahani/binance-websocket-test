import styled from 'styled-components';

export const CoinWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: 10,
});
export const CoinPriceWrapper = styled.div({
  display: 'flex',
  alignItems: 'flex-end',
  flexDirection: 'column',
});
export const CoinNameWrapper = styled.div({
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
});

export const CoinName = styled.div({
  color: '#fff',
  fontSize: 18,
});
export const CoinDesc = styled.div({
  color: '#fff3',
  fontSize: 18,
});
export const CoinPrice = styled.div({
  color: '#fff',
  fontSize: 18,
});
export const CoinChanges = styled.div({
  color: '#fff',
  fontSize: 12,
});
