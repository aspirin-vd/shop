import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import './HeaderForm.scss';

const HeaderForm = ({
  isSearchOpen, handleSearchToggle, handleRefNavbarToggle,
}) => {
  const [term, setTerm] = useState('');
  const history = useHistory();

  const handleTermChange = (e) => setTerm(e.target.value);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const _term = term.replace('&', '%26');

    history.push(`/search?q=${_term}`);
    setTerm('');
    handleSearchToggle();
    setTimeout(() =>
      document.getElementById('searchForm1').focus(), 250);
  };

  const classHeaderForm = isSearchOpen ? ' show' : '';

  return (
    <form
      className={`navbar__nav-search${classHeaderForm} d-flex`}
      onSubmit={handleSearchSubmit}
    >
      <div
        className="nav-search__close-search-btn d-lg-none position-relative"
        onClick={() => {
          handleRefNavbarToggle();
          handleSearchToggle();
        }}
      >
        <span className="close-icon position-absolute"/>
      </div>
      <input
        className="nav-search__search-input form-control border-top-0 border-left-0 border-right-0 pl-0 pr-0"
        type="search" id='headerFrom1' placeholder="Search" maxLength='255'
        required
        value={term} onChange={handleTermChange}
      />
      <button
        type="submit"
        className="nav-search__search-btn btn fal fa-search border-0"
      />
    </form>
  );
};

export default HeaderForm;
