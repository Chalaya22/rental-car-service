import styled from 'styled-components';
// import { IoMdHeart } from 'react-icons/io';

export const CarList = styled.li`
  position: relative;
  width: 274px;
`;
export const CarInfo = styled.div`
  width: 100%;
  padding-top: 14px;
`;

export const CarTitle = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 150%;
  color: rgb(18, 20, 23);
  height: 24px;
`;
export const CarName = styled.p`
  overflow: hidden;
  white-space: nowrap;
  margin: 0;
  text-overflow: ellipsis;
`;
export const DetailCarName = styled.span`
  color: #3470ff;
`;

export const Price = styled.span`
  margin: 0;
`;
