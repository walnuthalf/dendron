import styled from 'styled-components';

const Button = styled.button`
  line-height:32px;
  padding:0 14px;
  font-size: 12px;
  border-radius: 4px;
  color: #fff;
  background-color: #52aff1;
  cursor: pointer;
  float: right;
  margin-top: 10px;
  outline: none;
  border: none;
  transition: transform 0.05s ease;
  &:disabled{
    opacity: 0.8;
    cursor: default;
  }
  &:hover{
    opacity: 0.8;
  }
  &:active{
    transform: scale(1.05);
  }
`;
export default Button;
