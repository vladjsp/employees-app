import { IEmployeeObj, deleteEmployee, onToggleProp } from '../../redux/slices/employeesSlice';
import { useDispatch } from 'react-redux';

import './employees-list-item.scss';

const EmployeesListItem = ({ id, name, salary, increase, rise }: IEmployeeObj) => {
  const dispatch = useDispatch();

  const deleteItem = (id: number) => {
    dispatch(deleteEmployee(id));
  };

  //should avoid any
  const onToggleEmployeeProp = (prop: string) => {
    if (prop === 'rise' || prop === 'increase') {
      dispatch(onToggleProp({ id, prop }));
    }
  };

  let classNames = 'list-group-item d-flex justify-content-between';
  if (increase) {
    classNames += ' increase';
  }
  if (rise) {
    classNames += ' like';
  }

  return (
    <li className={classNames}>
      <span
        className='list-group-item-label'
        onClick={(e) => onToggleEmployeeProp(e.currentTarget.getAttribute('data-toggle')!)}
        data-toggle='rise'>
        {name}
      </span>
      <p className='list-group-item-input'>{salary + '$'}</p>
      <div className='d-flex justify-content-center align-items-center'>
        <button
          type='button'
          className='btn-cookie btn-sm'
          onClick={(e) => onToggleEmployeeProp(e.currentTarget.getAttribute('data-toggle')!)}
          data-toggle='increase'>
          <i className='fas fa-cookie'></i>
        </button>

        <button type='button' className='btn-trash btn-sm' onClick={() => deleteItem(id)}>
          <i className='fas fa-trash'></i>
        </button>
        <i className='fas fa-star'></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
