import React from 'react';

const SearchWrapper = ({ query, searchForm, productList }) => {
  const title = query || query !== ''
    ? `Search results for ‘${query}’` : `Search for products`;

  return (
    <main className='main'>
      <div className="container py-md-5 py-3">
        <h4 className="text-center font-weight-normal mb-4">{title}</h4>

        {searchForm}

        {productList}

      </div>
    </main>
  );
};

export default SearchWrapper;
