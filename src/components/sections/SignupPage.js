import React, { useState } from "react";
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import classNames from 'classnames';
import Modal from '../elements/Modal';

export default function LoginPage({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) {

  const [isModalActive, setisModalActive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setisModalActive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setisModalActive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );
  
  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );  

  return (
    <>    
    <section
      {...props}
      className={outerClasses}
    >
    <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-6 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Sign up as?
            </h1>
          </div>
          <ButtonGroup >
            <Button tag="a" color="primary" onClick={openModal}>
              Customer
            </Button>
            <Button tag="a" color="secondary" onClick={openModal}>
              Trainer
            </Button>
            <Button tag="a" color="black" onClick={openModal}>
              Admin
            </Button>
          </ButtonGroup>
          
          <Modal
            id="signup-modal"
            show={isModalActive}
            handleClose={closeModal}
            isSignup={true} />

        </div>
      </div>
    </section>
    </>
  );
}
