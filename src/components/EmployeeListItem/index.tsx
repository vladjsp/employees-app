import { IDataList, deleteEmployee, onToggleProp } from '../../redux/slices/employeesSlice';
import { useDispatch } from 'react-redux';

import './employees-list-item.scss';

const EmployeesListItem = ({ id, name, salary, increase, rise }: IDataList) => {
  const dispatch = useDispatch();

  const deleteItem = (id: number) => {
    dispatch(deleteEmployee(id));
  };

  //should avoid any
  const onToggleEmployeeProp = (prop: any) => {
    dispatch(onToggleProp({ id, prop }));
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
        onClick={(e) => onToggleEmployeeProp(e.currentTarget.getAttribute('data-toggle'))}
        data-toggle='rise'
      >
        {name}
      </span>
      <input type='text' className='list-group-item-input' defaultValue={salary + '$'} />
      <div className='d-flex justify-content-center align-items-center'>
        <button
          type='button'
          className='btn-cookie btn-sm'
          onClick={(e) => onToggleEmployeeProp(e.currentTarget.getAttribute('data-toggle'))}
          data-toggle='increase'
        >
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
