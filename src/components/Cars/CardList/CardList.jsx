import { ListStyle } from './CardList.styled';
import { ListItem } from '../CardItem/CardItem';

export const CarsList = ({ cars }) => {
  return (
    <>
      <ListStyle>
        {cars.map(car => {
          return <ListItem car={car} key={car.id} />;
        })}
      </ListStyle>
    </>
  );
};
