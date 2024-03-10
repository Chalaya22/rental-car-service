import { useDispatch } from 'react-redux';
import { openModal } from '../../../redux/modal/modalSlice';
import { prepareAddress } from '../../../fatch/index';
import { DetailsList } from '../../InfoList/InformList/InformList';
import FavoriteIcon from '../../FavoriteIcon/FavoriteIcon';
import {
  CarList,
  CarInfo,
  CarTitle,
  CarName,
  Price,
  DetailCarName,
} from './Carditem.styled';
import Button from '../../Button/Button';
import { ModalInfo } from '../../Modal/Modal';

import { Imagine } from '../../../comonstyles/img';

export const ListItem = ({ car }) => {
  const dispatch = useDispatch();
  const {
    img,
    make,
    year,
    model,
    rentalPrice,
    address,
    rentalCompany,
    accessories,
    type,
    id,
    functionalities,
  } = car;

  const checkPremium = accessories => {
    const result = accessories.find(accessory => {
      return accessory.toLowerCase().includes('premium');
    });

    if (result) {
      return 'Premium';
    } else return null;
  };
  const handleClick = event => {
    event.preventDefault();
    dispatch(openModal(car));
  };
  const carInfoList = [
    prepareAddress(address)[1],
    prepareAddress(address)[2],
    rentalCompany,
    checkPremium(accessories),
    type,
    make,
    id,
    functionalities[0],
  ];

  return (
    <CarList>
      <FavoriteIcon data={car} />
      <Imagine
        src={img}
        alt={`${make} ${model} ${year} by ${rentalCompany}`}
        width={274}
        height={268}
        loading="lazy"
      />
      <CarInfo>
        <CarTitle>
          <CarName>
            {make}
            <DetailCarName>{model} </DetailCarName>, {year}
          </CarName>
          <Price>{rentalPrice}</Price>
        </CarTitle>
        <DetailsList dataArray={carInfoList} />
        <Button type="button" onClick={handleClick} width="274px">
          Learn more
        </Button>
      </CarInfo>
    </CarList>
  );
};
