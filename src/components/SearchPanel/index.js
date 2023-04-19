import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { setSearchValue } from '../../redux/slices/employeesSlice';

import './search-panel.scss';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState('');

  //should think how to reduce the number of renders
  const handleSearchInput = (e) => {
    const searchText = e.target.value;
    setSearchText(searchText);
    dispatch(setSearchValue(searchText));
  };

  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='Знайти працівника'
      value={searchText}
      onChange={handleSearchInput}
    />
  );
};

export default SearchPanel;
