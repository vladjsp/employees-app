import EmployeesListItem from '../EmployeeListItem';

import { useSelector } from 'react-redux';

import './employees-list.scss';

const EmployeesList = () => {
  const { employeesList, searchValue, filter } = useSelector((state) => state.employees);

  const getFilteredList = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise === true);
      case 'lessThan':
        return items.filter((item) => item.salary < 2000);
      default:
        return items;
    }
  };

  const elements = getFilteredList(employeesList, filter)
    .filter((obj) => obj.name.toLowerCase().includes(searchValue.toLowerCase()))
    .map((item) => {
      return <EmployeesListItem key={item.id} {...item} />;
    });

  return <ul className='app-list list-group'>{elements}</ul>;
};

export default EmployeesList;
