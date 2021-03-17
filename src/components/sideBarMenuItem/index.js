import React, { useState, useRef } from 'react';
import { bool } from 'prop-types';

import { StyledA } from './styles';
import Chevron from '../chevron';

const MenuItem = ({open, boder, target, icon, linkName, menuItem, depth, depthStep, ...rest}) => {

  const isHidden = open ? true : false;
  const tabIndex = isHidden ? 0 : -1;
  const showPadding = depth * depthStep;  

  //Accordion
  const [setActive, setActiveState] = useState(false);
  const [setRotate, setRotateState] = useState("accordion_icon");
  const [setArray, setArrayState] = useState(false);
  const content = useRef(null);

  function toogleAccordion() {
    setActiveState(setActive ? false : true);
    setRotateState(
      setActive ? "accordion_icon" : "accordion_icon rotate"
    );
    setArrayState(
      Array.isArray(menuItem) ? setActive ? false : true : null
    );
  }
  
  return (
    <>
      <StyledA href={target} ref={content} onClick={toogleAccordion} accordionOpen={setActive} tabIndex={tabIndex} border={boder} {...rest} showPad={showPadding}>
        <span role="img">
            {icon}
        </span>
        {linkName}
        {Array.isArray(menuItem) ? 
        <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
        : null }
      </StyledA>
      {/* {Array.isArray(menuItem) ? */}
      {setArray ?
        (        
          menuItem.map((subItem) => (          
            <>          
             <MenuItem
                key={subItem.id}
                depth={depth+1}
                depthStep={depthStep}
                open={open}
                {...subItem}
             />
            </>
          ))
        ) : null
      }
    </>
  )
}

MenuItem.propTypes = {
    open: bool.isRequired,
}

export default MenuItem;