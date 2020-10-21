import React, { forwardRef, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ReactDOM from 'react-dom';

const Modal = forwardRef((props, ref) => {
  const [display, setDisplay] = useState(false);
  const open = () => setDisplay(true);
  const close = () => setDisplay(false);
  if (display) {
    const { data } = props;
    return ReactDOM.createPortal(
      <div className='modal'>
        <div className='modal__overlay' onClick={close}></div>
        <div className='modal__content'>
          <FaTimes onClick={close} className='modal__close icon' />
          <section className='modal__section'>
            {data.map((item, index) => {
              const { name, items } = item;
              return (
                <article className='modal__article' key={index}>
                  <h4 className='modal__title'>{name}</h4>
                  <ul className='modal__list'>
                    {items.map((item, index) => {
                      return (
                        <li key={index}>
                          <a className='modal__link' href='/'>
                            <span>{item.name}</span>
                            <span className='icon'>{item.icon}</span>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              );
            })}
          </section>
        </div>
      </div>,
      document.getElementById('modal-root')
    );
  }
  return <FaBars onClick={open} className='icon' />;
});

export default Modal;
