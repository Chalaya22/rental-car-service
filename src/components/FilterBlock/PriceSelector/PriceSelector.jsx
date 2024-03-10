import ReactSelect, { components } from 'react-select';
import { PriceSelectStyles } from './PriceSelector.styled';

const setPriceOptions = () => {
  const options = [];
  for (let index = 30; index <= 1500; index += 10) {
    options.push({ label: index, value: index });
  }
  return options;
};

const SingleValue = ({ children, ...props }) => (
  <components.SingleValue {...props}>To {children} $</components.SingleValue>
);
export const PriceSelector = ({ setPrice }) => {
  return (
    <ReactSelect
      placeholder="To $"
      styles={PriceSelectStyles}
      options={setPriceOptions()}
      blurInputOnSelect={true}
      menuShouldScrollIntoView={false}
      closeMenuOnSelect={true}
      name="price"
      isSearchable={false}
      components={{ SingleValue }}
      onChange={event => {
        if (!event || event?.value === 0) {
          setPrice(Infinity);
          return;
        }
        setPrice(event.value);
      }}
    />
  );
};
