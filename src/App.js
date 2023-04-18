import { useState } from 'react';

import AppInfo from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import AppFilter from './components/AppFilter';
import EmployeesList from './components/EmployeesList';
import EmployeesAddForm from './components/EmployeesAddForm';

import './scss/app.scss';

const App = () => {
  const [data, setData] = useState([
    { name: 'JohN C.', salary: 800, increase: true, rise: true, id: 1 },
    { name: 'AleX M.', salary: 3000, increase: false, rise: false, id: 2 },
    { name: 'CarL W.', salary: 5000, increase: false, rise: false, id: 3 },
    { name: 'Carlos D.', salary: 3000, increase: false, rise: true, id: 4 },
    { name: 'Carla S.', salary: 2400, increase: true, rise: false, id: 5 },
  ]);
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState('all');
  const [maxId, setMaxId] = useState(6);

  const deleteItem = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      rise: false,
      id: maxId,
    };

    const newArr = [...data, newItem];
    setData(newArr);
    setMaxId((prev) => prev + 1);
  };

  const onToggleProp = (id, prop) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      })
    );
  };

  const searchEmp = (items, value) => {
    if (value.length === 0) {
      return data;
    }
    return items.filter((item) => {
      return item.name.indexOf(value) > -1;
    });
  };

  const onUpdateSearchFromApp = (value) => {
    setSearchValue(value);
  };

  const filterPost = (items, filter) => {
    switch (filter) {
      case 'rise':
        return items.filter((item) => item.rise === true);
      case 'moreThan':
        return items.filter((item) => item.salary > 1000);
      default:
        return items;
    }
  };

  const onFilterSelect = (selectedFilter) => {
    setFilter(selectedFilter);
    console.log(selectedFilter, filter);
  };

  const emplNumb = data.length;
  const incrNumb = data.filter((item) => item.increase).length;
  const visibleData = filterPost(searchEmp(data, searchValue), filter);

  return (
    <div className='app'>
      <AppInfo emplNumb={emplNumb} incrNumb={incrNumb} />
      <div className='search-panel'>
        <SearchPanel onUpdateSearchFromApp={onUpdateSearchFromApp} />
        <AppFilter filter={filter} onFilterSelect={onFilterSelect} />
      </div>
      <EmployeesList data={visibleData} onDelete={deleteItem} onToggleProp={onToggleProp} />
      <EmployeesAddForm onAdd={addItem} />
    </div>
  );
};

export default App;
