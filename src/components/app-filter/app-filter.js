import './app-filter.css';

const AppFilter = ({ filter, onFilterSelect }) => {
  const buttonsData = [
    { name: 'all', label: 'Всі працівники' },
    { name: 'rise', label: 'На підвищення' },
    { name: 'moreThan', label: 'З/П більше 1000$' },
  ];

  const buttons = buttonsData.map((item) => {
    const active = filter === item.name;

    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className={`btn ${clazz} `}
        type='button'
        key={item.name}
        onClick={() => onFilterSelect(item.name)}>
        {item.label}
      </button>
    );
  });

  return <div className='btn-group'>{buttons}</div>;
};
export default AppFilter;
