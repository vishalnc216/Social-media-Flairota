import React from 'react';
import Topbar from './Topbar';
import './Search.css';
import { useDataLayerValue } from '../ContextAPI/DataLayer';
import { useHistory } from 'react-router-dom';

import AddIcon from '@material-ui/icons/Add';
function Search() {
  const [{ searchpeople, userid }, dispatch] = useDataLayerValue();
  let history = useHistory();
  function passId(username) {
    history.push(`/${username}`);
  }
  return (
    <div>
      <Topbar />
      <div className='search-main'>
        <div className='search-categories'>
          <div className='search-category'>People</div>
          <div className='search-category'>Tags</div>
          <div className='search-category'>Post</div>
        </div>
        <div className='search-results-people'>
          {searchpeople != '' ? (
            searchpeople.data.map((data) => {
              return (
                <div className='people-info'>
                  <div className='people-img'>
                    <img className='search-search-img' src={data.userimage} />
                    <AddIcon
                      style={{ fill: '#484ca5' }}
                      className='search-search-icon'
                    />
                  </div>
                  <div className='search-username'>
                    <span
                      className='people-username'
                      onClick={() => passId(data.user.username)}
                    >
                      {data.user.username}
                    </span>
                    <span className='people-fullname'>
                      {data.user.first_name + ' ' + data.user.last_name}
                    </span>
                    <span className='search-post'>69 Post</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div>hello</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Search;
