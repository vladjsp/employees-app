import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initStateChanger } from './redux/slices/employeesSlice';

import AppInfo from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import AppFilter from './components/AppFilter';
import EmployeesList from './components/EmployeesList';
import EmployeesAddForm from './components/EmployeesAddForm';

import './scss/app.scss';

const App = () => {
  const dispatch = useDispatch();

  //should find better approach
  useEffect(() => {
    dispatch(initStateChanger());
  }, []);

  return (
    <div className='app'>
      <AppInfo />
      <div className='search-panel'>
        <SearchPanel /*onUpdateSearchFromApp={onUpdateSearchFromApp}*/ />
        <AppFilter /*filter={filter} onFilterSelect={onFilterSelect}*/ />
      </div>
      <EmployeesList />
      <EmployeesAddForm />
    </div>
  );
};

export default App;
