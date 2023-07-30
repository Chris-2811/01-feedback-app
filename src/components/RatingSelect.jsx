import React from 'react';

function RatingSelect({ select, selected }) {
  function handleChange(e) {
    select(+e.currentTarget.value);
  }

  return (
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`num-${i + 1}`}>
          <input
            type='radio'
            name='rating'
            id={`rating-${i + 1}`}
            value={i + 1}
            checked={selected === i + 1}
            onChange={handleChange}
          />
          <label htmlFor={`rating-${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
