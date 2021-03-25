import React from 'react';

import Header from '../../../../components/header';
import BodyForm from '../../../../components/BodyForm';
import Footer from '../../../../components/footer';
import GoBack from '../../../../components/go-back';
import Input from '../../../../components/input';
import SendFormBtn from '../../../../components/SendFormBtn'

function NewEntidade() {

    function createEntidade() {
        console.log("Click!");
    }

  return (
      <>
        <Header/>
        <BodyForm>
            <GoBack/>
            <Input type={"text"} label={"Nome"} />
            <Input type={"text"} label={"Descrição"} />
            <Input type={"text"} label={"Missão"} />
            <SendFormBtn text={"Teste"} onClick={createEntidade}/>
        </BodyForm>
        <Footer/>
      </>
  );
}

export default NewEntidade;