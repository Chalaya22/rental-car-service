import styled from 'styled-components';
export const Wrapper = styled.div`
  background-color: #f7f7fb;
  height: 709px;
  flex-shrink: 0;
  display: flex;
  justify-content: space-between;
`;
export const WrapperTitle = styled.div`
  width: 529px;
  margin-left: 140px;
  margin-top: 142px;
  position: relative;
`;

export const Title = styled.h1`
  color: #1d1e21;
  font-family: 'GeomanistMedium';
  font-size: 64px;
  line-height: 110%; /* 70.4px */
  letter-spacing: 0.8px;
`;
export const Span = styled.span`
  color: #3083ff;
  font-family: 'GeomanistMedium';
  font-size: 64px;
  line-height: 110%;
  letter-spacing: 0.8px;
  position: relative;
  &::after {
    position: absolute;

    top: 23px;
    right: 0;
  }
`;

export const Text = styled.article`
  color: #929395;

  font-family: 'GeomanistRegular';
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 144%; /* 25.92px */
  letter-spacing: 0.18px;
  margin-top: 16px;
`;
