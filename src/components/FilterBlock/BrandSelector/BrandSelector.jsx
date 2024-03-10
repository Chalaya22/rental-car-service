import ReactSelect from 'react-select';
import { CarBrandSelectStyles } from './BrandSelector.styled';

const options = [
  { label: 'Aston Martin', value: 'aston-martin' },
  { label: 'Audi', value: 'audi' },
  { label: 'Bentley', value: 'bentley' },
  { label: 'Buick', value: 'buick' },
  { label: 'BMW', value: 'bmw' },
  { label: 'Chevrolet', value: 'chevrolet' },
  { label: 'Chrysler', value: 'chrysler' },
  { label: 'GMC', value: 'gmc' },
  { label: 'HUMMER', value: 'hummer' },
  { label: 'Hyundai', value: 'hyundai' },
  { label: 'Kia', value: 'kia' },
  { label: 'Lamborghini', value: 'lamborghini' },
  { label: 'Lincoln', value: 'lincoln' },
  { label: 'Land', value: 'land' },
  { label: 'Mercedes-Benz', value: 'mercedes-benz' },
  { label: 'Mitsubishi', value: 'mitsubishi' },
  { label: 'Nissan', value: 'nissan' },
  { label: 'MINI', value: 'mini' },
  { label: 'Pontiac', value: 'pontiac' },
  { label: 'Reno', value: 'reno' },
  { label: 'Subaru', value: 'subaru' },
  { label: 'Volvo', value: 'volvo' },
];

export const BrandSelector = ({ setMake }) => {
  return (
    <ReactSelect
      styles={CarBrandSelectStyles}
      options={options}
      menuShouldScrollIntoView={false}
      blurInputOnSelect={true}
      closeMenuOnSelect={true}
      placeholder="Enter the text"
      name="make"
      onChange={event => {
        if (!event) {
          setMake('');
          return;
        }
        setMake(event.value);
      }}
      isClearable={true}
    />
  );
};
