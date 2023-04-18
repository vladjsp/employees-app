import { useState } from 'react';
import './employees-add-form.scss';

import React from 'react';

const EmployeesAddForm = ({ onAdd }) => {
  const [name, setName] = useState('');
  const [salary, setSalary] = useState('');

  const onNameInput = (e) => {
    setName(e.target.value);
  };
  const onSalaryInput = (e) => {
    setSalary(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length >= 3 && salary >= 300) {
      onAdd(name, salary);
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
