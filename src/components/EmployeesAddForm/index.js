import { useState } from 'react';
import { addEmployee } from '../../redux/slices/employeesSlice';
import { useDispatch } from 'react-redux';

import './employees-add-form.scss';

const EmployeesAddForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const onNameInput = (e) => {
    setName(e.target.value);
  };
  const onSalaryInput = (e) => {
    setSalary(Number(e.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.length >= 2 && salary >= 300) {
      dispatch(addEmployee({ name, salary }));
      setName('');
      setSalary('');
    } else {
      alert('Please enter a valid name (more than 3 letters) or salary (>=300)');
      return;
    }
  };

  return (
    <div className='app-add-form'>
      <h3>Додати нового працівника</h3>
      <form className='add-form d-flex' onSubmit={handleSubmit}>
        <input
          type='text'
          className='form-contr
            {name, salary} = this.state;ol new-post-label'
          placeholder="Ім'я працівника"
          name='name'
          value={name}
          onChange={onNameInput}
        />
        <input
          type='number'
          className='form-control new-post-label'
          placeholder='З/П в $'
          name='salary'
          value={salary}
          onChange={onSalaryInput}
        />
        <button type='submit' className='btn btn-outline-light'>
          Додати
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
