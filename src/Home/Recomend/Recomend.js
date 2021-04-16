import React from 'react';
import './Recomend.css';
import userrecommend from './userrecommend';
function Recomend() {
  return (
    <div className='Recomend'>
      <div className='Recomend-section'>
        <div className='Recomend-headline'>Recomendations</div>
        <hr className='Recomend-hr' />
        <div className='userrecommend-section'>
          <div className='userrecommend'>
            <img className='userrecommend-img' src='/image/7.jpg' alt='' />
            <div className='userrecommend-info'>
              <div className='userrecommend-username'>Salenna123</div>
              <div className='userrecommend-name'>Salenna gomez</div>
            </div>
            <div className='userrecommend-follow'>
              <button className='userrecommend-follow-btn'>Follow</button>
            </div>
          </div>
          <div className='userrecommend'>
            <img className='userrecommend-img' src='/image/7.jpg' alt='' />
            <div className='userrecommend-info'>
              <div className='userrecommend-username'>Salenna123</div>
              <div className='userrecommend-name'>Salenna gomez</div>
            </div>
            <div className='userrecommend-follow'>
              <button className='userrecommend-follow-btn'>Follow</button>
            </div>
          </div>
          <div className='userrecommend'>
            <img className='userrecommend-img' src='/image/7.jpg' alt='' />
            <div className='userrecommend-info'>
              <div className='userrecommend-username'>Salenna123</div>
              <div className='userrecommend-name'>Salenna gomez</div>
            </div>
            <div className='userrecommend-follow'>
              <button className='userrecommend-follow-btn'>Follow</button>
            </div>
          </div>
          <div className='userrecommend'>
            <img className='userrecommend-img' src='/image/7.jpg' alt='' />
            <div className='userrecommend-info'>
              <div className='userrecommend-username'>Salenna123</div>
              <div className='userrecommend-name'>Salenna gomez</div>
            </div>
            <div className='userrecommend-follow'>
              <button className='userrecommend-follow-btn'>Follow</button>
            </div>
          </div>
          <div className='userrecommend-seeall'>
            <button className='userrecommend-seeall-btn'>See All</button>
          </div>
        </div>
      </div>
      <div className='Recomend-section'>
        <div className='Recomend-headline'>Top Memers</div>
        <hr className='Recomend-hr' />
        <div className='userrecommend-section'>
          <div className='userrecommend'>
            <img className='userrecommend-img' src='/image/3.jpg' alt='' />
            <div className='userrecommend-info'>
              <div className='userrecommend-username'>Salenna123</div>
              <div className='userrecommend-name'>Salenna gomez</div>
            </div>
            <div className='userrecommend-follow'>
              <button className='userrecommend-follow-btn'>Follow</button>
            </div>
          </div>
          <div className='userrecommend'>
            <img className='userrecommend-img' src='/image/3.jpg' alt='' />
            <div className='userrecommend-info'>
              <div className='userrecommend-username'>Salenna123</div>
              <div className='userrecommend-name'>Salenna gomez</div>
            </div>
            <div className='userrecommend-follow'>
              <button className='userrecommend-follow-btn'>Follow</button>
            </div>
          </div>

          <div className='userrecommend-seeall'>
            <button className='userrecommend-seeall-btn'>See All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recomend;
