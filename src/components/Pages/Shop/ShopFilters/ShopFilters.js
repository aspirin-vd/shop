import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './ShopFilters.scss';

const ShopFilters = ({ categoryName, errorCategory, filterData, filters }) => {
  const [isOpenFilters, setIsOpenFilters] = useState(false);

  const { sort: sortData, metal: metalData, stone: stoneData } = filterData;
  const { sort } = filters;

  const history = useHistory();

  const handleToggleFiltersClick = () => setIsOpenFilters(!isOpenFilters);

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    const _filters = filters;
    _filters[name] = value;
    history.push(`?p=${JSON.stringify(_filters)}`);
  };
  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    const _filters = filters;
    if (checked) {
      if (!_filters[value]) _filters[value] = [];
      _filters[value] = [..._filters[value], name];
    }
    if (!checked) {
      const id = _filters[value].findIndex((item) => item === name);
      _filters[value] = [
        ..._filters[value].slice(0, id),
        ..._filters[value].slice(id + 1)];
    }
    history.push(`?p=${JSON.stringify(_filters)}`);
  };

  const filterDataKeys = [];
  for (const key in filterData) filterDataKeys.push(key);

  const category = !errorCategory ? categoryName : '';

  return (
    <div
      className="shop-filters navbar-expand-md navbar-light mx-md-0 mx-sm-1 mx-3 pb-1">
      <div className="text-md-left">
        <h4 className='text-md-left text-center mb-3'>{category}</h4>
      </div>
      <div className="d-md-none d-flex justify-content-center mb-3">
        <a
          className='d-flex align-items-center arrow-down collapsed'
          href='#'
          data-toggle="collapse"
          data-target="#toggleFilters"
          aria-controls="toggleFilters"
          aria-expanded="false"
          aria-label="Toggle filters"
          onClick={handleToggleFiltersClick}
        >Refine By</a>
      </div>

      <form className="collapse navbar-collapse flex-column" id="toggleFilters">
        {filterDataKeys.map((filterKey, index) => {
          if (filterKey === 'sort') return (
            <div key={index} className="form-group w-100">
              <label htmlFor="sortBy">Sort By</label>
              <select
                className="form-control font-weight-light"
                name={filterDataKeys[index]}
                value={sort}
                onChange={handleSelectChange}
              >
                {sortData.map((item, index) => (
                  <option
                    key={index}
                    value={index}
                    className="font-weight-light"
                  >{item}</option>
                ))}
              </select>
            </div>);

          if (filterKey === 'metal') return (
            <div key={index} className="form-group w-100">
              <label>Metal</label>
              {metalData.map((item, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`metal${index}`}
                    name={item}
                    value="metal"
                    onClick={handleCheckboxChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor={`check${index}`}
                  >
                    {item}
                  </label>
                </div>
              ))}
            </div>
          );

          if (filterKey === 'stone') return (
            <div key={index} className="form-group w-100">
              <label>Stone</label>
              {stoneData.map((item, index) => (
                <div key={index} className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id={`stone${index}`}
                    name={item}
                    value="stone"
                    onChange={handleCheckboxChange}
                  />
                  <label className="form-check-label" htmlFor={`check${index}`}>
                    {item}
                  </label>
                </div>
              ))}
            </div>);
          return null;
        })}
      </form>
    </div>
  );
};

const mapStateToProps = ({
  category: { categoryItem: { name: categoryName, filters: filterData }, errorCategory },
}) => {
  return {
    categoryName, filterData, errorCategory,
  };
};

export default connect(mapStateToProps)(ShopFilters);
