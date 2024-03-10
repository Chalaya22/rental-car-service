import { DetailsListStyled } from './InformList.styled';
import { DetailsListItem } from '../InfoListItem/InfoListItem';
import Separator from '../../Separator';

export const DetailsList = ({ dataArray, styles }) => {
  return (
    <DetailsListStyled style={styles}>
      {dataArray
        .filter(item => {
          return item;
        })
        .map((item, idx) => {
          return (
            <DetailsListItem key={idx}>
              {item} <Separator />
            </DetailsListItem>
          );
        })}
    </DetailsListStyled>
  );
};
