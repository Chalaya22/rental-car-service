import styled from 'styled-components';

export const InfoList = styled.li`
  width: max-content;
  position: relative;

  /* &::before {
    content: '';
    display: block;
    position: absolute;
    top: 50%;
    left: -8px;

    height: 16px;
    width: 1px;
    background-color: rgba(18, 20, 23, 0.1);

    transform: translateY(-50%);
  } */
`;

export const InfoText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.5;
  margin: 0;
`;
