import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from '../../redux/filter/filterSelector';
import { useState } from 'react';
import {
  setMakeFilter,
  setMileageFilterMax,
  setMileageFilterMin,
  setPriceFilter,
} from '../../redux/filter/filterSlice';
import { getCars } from '../../redux/rentalCars/carsOperations';
import { BrandSelector } from './BrandSelector/BrandSelector';
import { PriceSelector } from './PriceSelector/PriceSelector';
import { InputLabel } from '../../components/Input/input';
import { Mileage } from './Mileage/Mileage';
import { Separator, SetMileageWrapper, Form } from './FilterBlock.styled';
import Button from '../Button/Button';

export const FilterBlock = () => {
  const dispatch = useDispatch();

  const filter = useSelector(selectFilter);

  const [make, setMake] = useState('');
  const [price, setPrice] = useState(filter.price);

  const [mileageMin, setMileageMin] = useState(filter.mileage.min);
  const [mileageMax, setMileageMax] = useState(filter.mileage.max);

  const handleSubmit = event => {
    event.preventDefault();

    if (make !== '') {
      dispatch(getCars({ make }));
    }
    if (make === '') {
      dispatch(getCars());
    }
    dispatch(setMakeFilter(make));
    dispatch(setPriceFilter(price));

    dispatch(setMileageFilterMin(mileageMin));
    dispatch(setMileageFilterMax(mileageMax));
  };

  return (
    <section>
      <Form onSubmit={handleSubmit}>
        <InputLabel labelText={'Car brand'}>
          <BrandSelector setMake={setMake} />
        </InputLabel>

        <InputLabel labelText={'Price/1hour'}>
          <PriceSelector setPrice={setPrice} />
        </InputLabel>
        <InputLabel labelText="Car mileage/km">
          <SetMileageWrapper>
            <Mileage
              name="mileage-min"
              setMileage={setMileageMin}
              prefix="From"
            />
            <Separator> </Separator>
            <Mileage
              name="mileage-max"
              setMileage={setMileageMax}
              prefix="To"
            />
          </SetMileageWrapper>
        </InputLabel>
        <Button type="submit">Search</Button>
      </Form>
    </section>
  );
};
