import { useDispatch, useSelector } from 'react-redux';
import { loadMore } from '../../redux/rentalCars/carsOperations';
import { LoadMoreBtn } from './LoadMore.styled';
import { selectPage } from '../../redux/rentalCars/carsSelectors';
import { selectFilter } from '../../redux/filter/filterSelector';

const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const { make } = useSelector(selectFilter);

  return (
    <LoadMoreBtn
      type="button"
      onClick={() => {
        dispatch(loadMore({ page, make }));
      }}
    >
      Load More
    </LoadMoreBtn>
  );
};
export default LoadMore;
