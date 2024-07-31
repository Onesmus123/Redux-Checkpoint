import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../actions';

// Filter component for filtering tasks by status
const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <div className="filter">
      <button
        onClick={() => dispatch(setFilter('ALL'))}
        disabled={filter === 'ALL'}
      >
        All
      </button>
      <button
        onClick={() => dispatch(setFilter('DONE'))}
        disabled={filter === 'DONE'}
      >
        Done
      </button>
      <button
        onClick={() => dispatch(setFilter('NOT_DONE'))}
        disabled={filter === 'NOT_DONE'}
      >
        Not Done
      </button>
    </div>
  );
};

export default Filter;
