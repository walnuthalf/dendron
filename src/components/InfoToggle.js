import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  width: ${ p => `${ p.width }px` || '' };
  margin:0 auto;
`;

const Item = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  width: 49%;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  color: #52aff1;
  border: solid 1px #52aff1;
  cursor: pointer;
  &:first-of-type{
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-of-type{
    border-bottom-right-radius:4px;
    border-top-right-radius: 4px;
  }
  &.active{
     background-color: #52aff1;
     color: #fff;
  }
`;

const InfoToggle = ({ width }) => (
  <Wrapper width={ width }>
    <Item to="/accounts"> Счета</Item>
    <Item to="/deposits"> Вклады</Item>
  </Wrapper>
);

export default InfoToggle;
