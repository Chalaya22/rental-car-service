import ReactModal from 'react-modal';
import { CatalogStyled } from './Catalog.styled';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCars } from '../../redux/rentalCars/carsOperations';
import {
  selectIsLoading,
  selectVisibleCars,
} from '../../redux/rentalCars/carsSelectors';
import { CarsList } from '../../components/Cars/CardList/CardList';
import { EpmtyList } from '../../components/EmptyList/EmptyList';
import Loader from '../../components/Loader/Loader';
import LoadMore from '../../components/LoadMore/LoadMore';

import { selectModalIsOpen } from '../../redux/modal/modallSelectors';
import { closeModal } from '../../redux/modal/modalSlice';
import { FilterBlock } from '../../components/FilterBlock/FilterBlock';

import { ModalInfo } from '../../components/Modal/Modal';
import { ModalStyles } from '../../components/Modal/ModalCommon.styled';

const Catalog = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);
  const isLoading = useSelector(selectIsLoading);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleModalClose = event => {
    event.preventDefault();
    dispatch(closeModal());
  };
  useEffect(() => {
    dispatch(getCars());
    dispatch(closeModal());
  }, [dispatch]);
  return (
    <>
      <main>
        <div>
          <FilterBlock />

          <CatalogStyled>
            {cars.length > 0 && <CarsList cars={cars} />}
            {!isLoading && cars.length === 0 && <EpmtyList />}
            {isLoading && <Loader />}
            {!isLoading && cars.length >= 12 && <LoadMore />}
          </CatalogStyled>
        </div>
      </main>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={handleModalClose}
        appElement={document.body}
        style={ModalStyles}
      >
        <ModalInfo></ModalInfo>
      </ReactModal>
    </>
  );
};

export default Catalog;
