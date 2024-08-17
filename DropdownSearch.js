import React, { useState } from 'react';

const DropdownSearch = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  const options = [
    '+1', '+7', '+20', '+27', '+30', '+31', '+32', '+33','+34','+36','+39','+40','+41','+43','+44','+45','+46','+47','+48','+49','+51','+52','+53','+54','+55','+56','+57','+58','+60','+61','+62','+63','+64','+65','+66','+81','+82','+84','+86','+90','+91','+92','+93','+94'
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);

    const filtered = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filtered);
    setShowDropdown(true);
  };

  const handleOptionSelect = (option) => {
    setSearchValue(option);
    setShowDropdown(false);
  };

  return (
    <div style={{ width: '200px', position: 'relative' }}>
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        onFocus={() => setShowDropdown(true)}
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
      />
      {showDropdown && (
        <ul
          style={{
            listStyleType: 'none',
            margin: 0,
            padding: '8px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            position: 'absolute',
            
            width: '100%',
            backgroundColor: '#fff',
            zIndex: 1000,
            maxHeight: '150px',
            overflowY: 'auto',
          }}
        >
          {filteredOptions.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionSelect(option)}
              style={{
                padding: '8px',
                cursor: 'pointer',
                backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#e0e0e0')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = index % 2 === 0 ? '#f9f9f9' : '#fff')}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownSearch;
