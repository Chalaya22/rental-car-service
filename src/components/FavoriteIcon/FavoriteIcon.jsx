import Checkbox from '@mui/material/Checkbox';
import { StylesFavoriteBorder, StylesFavorite } from './FavoriteIcon.styled';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../redux/favoriteCar/favoriteSlice';
import { selectFavor } from '../../redux/favoriteCar/favoriteSelectors';

const FavoriteIcon = ({ data }) => {
  const dispatch = useDispatch();

  const favoriteCar = useSelector(selectFavor);

  const isCheckedFavor = favoriteCar.some(({ id }) => id === data.id);

  const handleToggleFavorite = () => {
    if (isCheckedFavor) {
      dispatch(removeFromFavorite(data));
    } else {
      dispatch(addToFavorite(data));
    }
  };

  return (
    <div style={{ position: 'absolute', top: '0', right: '0' }}>
      <Checkbox
        icon={<StylesFavoriteBorder />}
        checkedIcon={<StylesFavorite />}
        checked={isCheckedFavor}
        onChange={handleToggleFavorite}
      />
    </div>
  );
};
export default FavoriteIcon;
