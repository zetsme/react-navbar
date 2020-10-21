import React from 'react';

const NavLinks = ({ data }) => {
  return (
    <>
      <ul className='nav__list'>
        {data.map((link, index) => {
          const { name, items } = link;
          return (
            <li className='nav__item' key={index}>
              <a href='/' className='nav__link'>
                {name}
              </a>
              <div className='menu'>
                {items.map((item, index) => {
                  const { icon, name } = item;
                  return (
                    <a className='menu__link' href='/' key={index}>
                      <span>{name}</span> <span>{icon}</span>
                    </a>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default NavLinks;
