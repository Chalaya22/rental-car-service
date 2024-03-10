import { Wrapper, ImputName, InputStyled } from './Mileage.styled';

export const Mileage = ({ name, prefix, setMileage }) => {
  return (
    <Wrapper>
      <ImputName>{prefix} </ImputName>
      <InputStyled
        type="text"
        name={name}
        formatter={value => {
          return `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }}
        onChange={value => {
          setMileage(value);
        }}
      />
    </Wrapper>
  );
};
