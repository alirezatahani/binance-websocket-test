import styled, { keyframes } from 'styled-components';

const fillGreen = keyframes`0% { background: linear-gradient(90deg, transparent, transparent);transition: all 200ms ease-in ; }
 100% { background: linear-gradient(90deg, transparent 30%, rgb(0 206 0 / 12%) 80%);transition: all 200ms ease-in ; }`;

const fillRed = keyframes`0% { background: linear-gradient(90deg, transparent, transparent);transition: all 200ms ease-in ; }
 100% { background: linear-gradient(90deg, transparent 30%, rgb(231 0 0 / 12%) 80%);transition: all 200ms ease-in ; }`;

export const CoinWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 200ms ease-in ;
  border-radius: 8px;
  padding: 10px;
  animation-name: ${({ sign }: { sign: number }) =>
    sign > 0 ? fillGreen : fillRed};
  animation-duration: 1s;
  animation-iteration-count: infinite;

    ['&:hover']: {
      backgroundColor: '#302668',
      transition: '200ms ease-in',
    },
`;

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
export const CoinPrice = styled.div<{ sign: number }>(({ sign }) => ({
  color: '#fff',
  fontSize: 18,
}));
export const CoinChanges = styled.div<{ sign: number }>(({ sign }) => ({
  color: sign > 0 ? '#00ce00' : '#e70000',
  fontSize: 12,
}));
