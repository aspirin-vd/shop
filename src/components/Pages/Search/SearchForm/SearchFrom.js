import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const SearchFrom = ({ query }) => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    if (query && query !== term) setTerm(query);
  }, [query]);
  const history = useHistory();

  const handleTermChange = (e) => setTerm(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    const _term = term.replace('&', '%26');
    history.push(term === '' ? '/search' : `/search?q=${_term}`);
  };

  return (
    <form className="input-group mb-1 px-1" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-control"
        aria-label="Search"
        id='searchForm1'
        aria-describedby="catalogSearch"
        maxLength='255' autoFocus
        value={term}
        onChange={handleTermChange}
      />
      <div className="input-group-append">
        <button
          className="btn btn-color px-4"
          type="submit"
          id="catalogSearch"
        >
          <span className="fal fa-search"/>
        </button>
      </div>
    </form>
  );
};

export default SearchFrom;
