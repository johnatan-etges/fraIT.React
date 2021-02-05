import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

import { Container } from './styles';
import Chevron from '../chevron';
import { useEffect } from 'react';

function Dropdown({ title, items, selectTheme, multiselect=false}) {

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const [setRotate, setRotateState] = useState("accordion_icon");
    const toggle = () => setOpen(!open);
    
    useEffect(() => {
        setRotateState(
            open ? 'accordion_icon rotate' : 'accordion_icon'
          );
    },[open]);
    
    Dropdown.handleClickOutside = () => setOpen(false);       

    function handleOnClick(item){
        if (!selection.some(current => current.id === item.id)) {
            if (!multiselect) {
                setSelection([item]);
            } else if (multiselect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(
                current => current.id !== item.id
            );
            setSelection([...selectionAfterRemoval]);
        }
    }

    return (
        <Container selectTheme={selectTheme}>
            <div
                className="dd-header"
                tabIndex={0}
                role="button"
                onKeyPress={() => toggle(!open)}
                onClick={() => toggle(!open)}
            >
                <div className="dd-header__title">
                    <p className="dd-header__title--bold">{title}</p>                
                </div>
                <div className="dd-header__action">
                    <Chevron className={`${setRotate}`} width={10} fill={"#777"}/>
                    {/* <p>{open ? 'Fechar' : 'Abrir'}</p> */}
                </div>            
            </div>
           
                <ul className="dd-list" id={open ? 'open' : 'close'}>
                {items.map(item => (
                    <li className="dd-list-item" key={item.id}>
                        <button type="button" onClick={() => handleOnClick(item)}>
                            <span>{item.value}</span>
                            {/* <span>{isItemInSelection(item) && 'Selecionado'}</span> */}
                        </button>
                    </li>
                ))}
                </ul>
            
        </Container>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);