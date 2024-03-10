import InputNumber from 'rc-input-number';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  gap: 0px;
  align-items: baseline;
  width: calc(50% - 0.5px);
  background-color: rgb(247, 247, 251);
`;

export const ImputName = styled.p`
  padding: 14px 0px 14px 24px;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: rgb(18, 20, 23);
  margin: 0;
`;

export const InputStyled = styled(InputNumber)`
  display: block;
  padding: 14px 8px;
  width: 100%;
  font-weight: 500;
  font-size: 18px;
  line-height: 111%;
  color: rgb(18, 20, 23);
`;
