import { InfoList, InfoText } from './InfoListItem.styled';

export const DetailsListItem = ({ children }) => {
  return (
    <InfoList>
      <InfoText>{children}</InfoText>
    </InfoList>
  );
};
