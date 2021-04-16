import React, { useState, useEffect } from 'react';
import Explorepost from './Explorepost';
import Explorecategory from './Explorecategory';
import './Exploresection.css';
import { ImportExport } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import axios from '../axios';

function Exploresection() {
  const [explorecollection, setexplorecollection] = useState('');
  useEffect(() => {
    axios.get(`api/posts/`).then((res) => {
      setexplorecollection(res.data);
    });
  }, []);

  console.log(explorecollection);
  return (
    <div className='Exploresection'>
      <Explorecategory />
      <div className='Explorepost-section'>
        {explorecollection != '' ? (
          explorecollection.map((data) => {
            return <Explorepost data={data} />;
          })
        ) : (
          <div>nope</div>
        )}
      </div>
    </div>
  );
}

export default Exploresection;
