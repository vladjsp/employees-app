import { RootState } from '../../redux/store';
import { useDispatch, useSelector } from 'react-redux';

import { setFilter } from '../../redux/slices/employeesSlice';
import './app-filter.scss';

const AppFilter = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.employees);

  const buttonsData = [
    { name: 'all', label: 'Всі працівники' },
    { name: 'rise', label: 'На підвищення' },
    { name: 'lessThan', label: 'З/П менше 2000$' },
  ];

  const onFilterSelect = (selectedFilter: string) => {
    //console.log('selectedFilter --->', selectedFilter);

    dispatch(setFilter(selectedFilter));
  };

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
