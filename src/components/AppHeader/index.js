import './app-header.scss';

const AppHeader = ({ emplNumb, incrNumb }) => {
  return (
    <div className='app-header'>
      <h1>Облік працівників в компанії N</h1>
      <h2>Загальна кількість працівників: {emplNumb}</h2>
      <h2>Премію отримають: {incrNumb}</h2>
    </div>
  );
};

export default AppHeader;
