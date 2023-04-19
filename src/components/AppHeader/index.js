import { useSelector } from 'react-redux';

import './app-header.scss';

const AppHeader = () => {
  const { toIncreaseAmount, totalEmployeesAmount } = useSelector((state) => state.employees);
  return (
    <div className='app-header'>
      <h1>Облік працівників в компанії N</h1>
      <h2>Загальна кількість працівників: {totalEmployeesAmount}</h2>
      <h2>Премію отримають: {toIncreaseAmount}</h2>
    </div>
  );
};

export default AppHeader;
