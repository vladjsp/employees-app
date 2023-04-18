import { useState } from 'react';

import './search-panel.scss';

const SearchPanel = ({ onUpdateSearchFromApp }) => {
  const [searchValue, setSearchValue] = useState('');

  const onUpdateSearchLocal = (e) => {
    const searchValue = e.target.value;
    setSearchValue(searchValue);
    onUpdateSearchFromApp(searchValue);
  };

  return (
    <input
      type='text'
      className='form-control search-input'
      placeholder='Знайти працівника'
      value={searchValue}
      onChange={onUpdateSearchLocal}
    />
  );
};

export default SearchPanel;
