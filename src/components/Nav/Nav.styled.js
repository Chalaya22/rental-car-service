import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  display: flex;
  padding: 24px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  justify-content: space-evenly;

  width: 100%;
  margin: 0px auto;
  padding: 0px 0.9375rem;
`;

export const NavMenu = styled(NavLink)`
  display: flex;
  padding: 14px 44px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #f7f7fb;
  color: #121417;
  font-family: 'Manrope';
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &.active {
    color: #fff;
    background: #3470ff;
  }

  &:hover {
    color: #fff;
    background: #3470ff;
  }
`;
