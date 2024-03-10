import ReactModal from 'react-modal';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavor } from '../../redux/favoriteCar/favoriteSelectors';
import { CarsList } from '../../components/Cars/CardList/CardList';
import { EpmtyList } from '../../components/EmptyList/EmptyList';
import { selectIsLoading } from '../../redux/rentalCars/carsSelectors';

import { ModalStyles } from '../../components/Modal/ModalCommon.styled';
import { closeModal } from '../../redux/modal/modalSlice';

import { ModalInfo } from '../../components/Modal/Modal';
import { selectModalIsOpen } from '../../redux/modal/modallSelectors';

const Favorite = () => {
  const isLoading = useSelector(selectIsLoading);
  const dispatch = useDispatch();
  const favoriteList = useSelector(selectFavor);
  const modalIsOpen = useSelector(selectModalIsOpen);

  const handleModalClose = event => {
    event.preventDefault();
    dispatch(closeModal());
  };
  useEffect(() => {
    dispatch(closeModal());
  }, [dispatch]);
  return (
    <>
      <main>
        <div className="container">
          {!isLoading && favoriteList.length === 0 && <EpmtyList />}
          <CarsList cars={favoriteList} />
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

export default Favorite;
