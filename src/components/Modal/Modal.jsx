import { useDispatch, useSelector } from 'react-redux';
import { selectModalData } from '../../redux/modal/modallSelectors';
import { prepareAddress } from '../../fatch/index';
import { DetailsList } from '../../components/InfoList/InformList/InformList';
import { ConditionsList } from '../../components/Condition/Condition';
import { Imagine } from '../../comonstyles/img';
import {
  ModalCarDescription,
  ModalCarInfoWrapper,
  ModalCarName,
  ModalCloseIcon,
  ModalInfoWrapper,
  ModalLink,
  ModalSubTitle,
} from './Modal.styled';
import { closeModal } from '../../redux/modal/modalSlice';

export const ModalInfo = () => {
  const dispatch = useDispatch();
  const modalData = useSelector(selectModalData);
  const {
    img,
    make,
    year,
    model,

    address,
    rentalCompany,
    accessories,
    type,
    id,
    functionalities,
    fuelConsumption,
    engineSize,
    description,
  } = modalData;

  const carInfoArray = [
    prepareAddress(address)[1],
    prepareAddress(address)[2],
    `id: ${id}`,
    `Year: ${year}`,
    `Type: ${type}`,
    `Fuel Consumption: ${fuelConsumption}`,
    `Engine Size: ${engineSize}`,
  ];

  const handleModalClose = event => {
    event.preventDefault();
    dispatch(closeModal());
  };
  return (
    <ModalInfoWrapper>
      <ModalCloseIcon onClick={handleModalClose} />
      <Imagine src={img} alt={`${make} ${model} ${year} by ${rentalCompany}`} />
      <ModalCarInfoWrapper>
        <ModalCarName>
          {make}
          {model}, {year}
        </ModalCarName>
        <DetailsList
          styles={{ maxWidth: '300px', marginBottom: '14px' }}
          dataArray={carInfoArray}
        />
        <ModalCarDescription>{description}</ModalCarDescription>
        <ModalSubTitle> Accessories and functionalities:</ModalSubTitle>

        <DetailsList
          styles={{ marginTop: '8px', marginBottom: '0' }}
          dataArray={[...accessories, ...functionalities]}
        />
        <ModalSubTitle>Rental Condidions:</ModalSubTitle>
        <ConditionsList listInfo={modalData} />
        <ModalLink href="tel:+380730000000">Rental car</ModalLink>
      </ModalCarInfoWrapper>
    </ModalInfoWrapper>
  );
};
