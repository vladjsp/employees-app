import './app-info.css';

const AppInfo = ({ emplNumb, incrNumb }) => {
  return (
    <div className="app-info">
      <h1>Облік працівників в компанії N</h1>
      <h2>Загальна кількість працівників: {emplNumb}</h2>
      <h2>Премію отримають: {incrNumb}</h2>
    </div>
  );
};

export default AppInfo;
