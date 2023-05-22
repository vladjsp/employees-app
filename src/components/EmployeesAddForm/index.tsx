import React, { useState } from 'react';
import { addEmployee } from '../../redux/slices/employeesSlice';
import { useDispatch } from 'react-redux';

import './employees-add-form.scss';

const EmployeesAddForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const onNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const onSalaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(e.target.value);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (name.trim().length >= 2 && Number(salary) >= 300) {
      dispatch(addEmployee({ name, salary }));
      setName('');
      setSalary('');
    } else {
      return;
    }
  };

  return (
    <div className='app-add-form'>
      <h3>Додати нового працівника</h3>
      <form className='add-form d-flex' onSubmit={handleSubmit}>
        <input
          type='text'
          minLength={2}
          className='form-control new-post-label'
          placeholder="Ім'я працівника"
          name='name'
          value={name}
          onChange={onNameInput}
          required
        />
        <input
          type='number'
          className='form-control new-post-label'
          min='300'
          max='50000'
          name='salary'
          value={salary}
          onChange={onSalaryInput}
          placeholder='З/П в $'
          required
        />
        <button type='submit' className='btn btn-outline-light'>
          Додати
        </button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;
