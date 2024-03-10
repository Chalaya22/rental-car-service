import { getNumberFromString } from '../../fatch/index';
import { ConditionsLI, ConditionsListStyled } from './Condition.styled';

export const ConditionsList = ({ listInfo }) => {
  const { rentalConditions, mileage, rentalPrice } = listInfo;

  const getAgeNumber = () => {
    const minimumAge = rentalConditions
      .split('\n')
      .find(item => item.includes('Minimum age'));

    return getNumberFromString(minimumAge);
  };
  const prepareConditions = () => {
    return rentalConditions
      .split('\n')
      .filter(item => !item.includes('Minimum age'));
  };
  const prepareMileage = () => {
    return `${Math.floor(mileage / 1000)},${mileage % 1000}`;
  };
  return (
    <ConditionsListStyled>
      <ConditionsLI>
        <p>Minimum age: {getAgeNumber()};</p>
      </ConditionsLI>

      {prepareConditions().map((item, index) => {
        return (
          <ConditionsLI key={index}>
            <p>{item}</p>
          </ConditionsLI>
        );
      })}

      <ConditionsLI>
        <p>Mileage: {prepareMileage()};</p>
      </ConditionsLI>
      <ConditionsLI>
        <p>Price: {getNumberFromString(rentalPrice)};</p>
      </ConditionsLI>
    </ConditionsListStyled>
  );
};
