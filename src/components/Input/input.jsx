import { Label } from './Input.styled';

export const InputLabel = ({ children, labelText }) => {
  return (
    <Label>
      {labelText}
      {children}
    </Label>
  );
};
