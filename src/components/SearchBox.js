import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchSVG } from '../imgs/search-icon.svg';

const Wrapper = styled.div`
  padding: 10px 15px;
  background-color: #f8f8f8;
`;

const SearchIcon = styled(SearchSVG)`
  position: absolute;
  left: 10px;
  bottom: 2px;
`;

const InputContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 40px;
  padding-right: 32px;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #fff;
  border-radius: 18px;
`;

const Input = styled.input`
  border: 0;
  font-size: 15em;
  width: 100%;
  outline: none;
  user-select: text;
  background: transparent;

`;

const SearchBox = () => (
  <Wrapper>
    <InputContainer>
      <SearchIcon />
      <Input placeholder="Search or start new channel"/>
    </InputContainer>
  </Wrapper>
);

export default SearchBox;
