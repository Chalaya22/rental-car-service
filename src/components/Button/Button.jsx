import { BtnStyled } from './Button.styled';

const Button = ({ children, onClick }) => {
  return <BtnStyled onClick={onClick}>{children}</BtnStyled>;
};
export default Button;
