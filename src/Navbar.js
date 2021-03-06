import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import NavLinks from './NavLinks';
import data from './data';

const Navbar = () => {
  const [displayNavLinks, setDisplayNavLInks] = useState(window.innerWidth);
  const checkWindowWidth = () => setDisplayNavLInks(window.innerWidth);
  useEffect(() => {
    window.addEventListener('resize', checkWindowWidth);
    return () => window.removeEventListener('resize', checkWindowWidth);
  }, []);

  return (
    <div className='nav'>
      <img className='nav__logo' src='/logo192.png' alt='' />
      {displayNavLinks < 600 ? <Modal data={data} /> : <NavLinks data={data} />}
    </div>
  );
};

export default Navbar;
