import React from 'react';

import BodyCard from '../../../../components/BodyCard'
import GoBack from '../../../../components/go-back';

import { Container } from './styles';

function EmpresaDeails(props) {

  const { empresa } = props.location.state.payload

  return (
    <>
      <BodyCard>
        <Container>
          <GoBack />
          <div className={"card-section-title"}>
                    <span>Informações básicas</span>
                </div>
                    <div className={"card"}>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Nome</span>
                        <span className={"card-header-title"}>{empresa.name}</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>CNPJ</span>
                        <span className={"card-header-subtitle"}>{empresa.cnpj}</span>
                    </div>
                </div>
                <div className={"card"}>
                    <div className={"card-section-title"}>
                        <span>Endereço e contatos</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Endereço</span>
                        <span className={"card-body-text-item"}>Em construção</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Telefone</span>
                        <span className={"card-body-text-item"}>Em construção</span>
                        <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>E-mail</span>
                        <span className={"card-body-text-item"}>Em construção</span>
                    </div>
                    </div>
                </div>
                <div className={"card-section-title"}>
                    <span>Notas Fiscais Recentes</span>
                </div>
                <div className={"card"}>
                  <div className={"card-box-row"}>        
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Número NF</span>
                        <span className={"card-body-text-item"}>1.475</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Descrição Problema</span>
                        <span className={"card-body-text-item"}>Não liga</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Patrimônio</span>
                        <span className={"card-body-text-item"}>84579</span>
                    </div>
                  </div>
                </div>
                <div className={"card-section-title"}>
                    <span>Últimas OS</span>
                </div>
                <div className={"card"}>
                  <div className={"card-box-row"}>        
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Número OS</span>
                        <span className={"card-body-text-item"}>1.475</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Equipamento</span>
                        <span className={"card-body-text-item"}>Impressora SCX 4623f</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Patrimônio</span>
                        <span className={"card-body-text-item"}>84579</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Local</span>
                        <span className={"card-body-text-item"}>Escola Santo Antônio</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Descrição Problema</span>
                        <span className={"card-body-text-item"}>Não liga</span>
                    </div>
                  </div>
                </div>            
                <div className={"card-section-title"}>
                    <span>Informações adicionais</span>
                </div>
                <div className={"card"}>                   
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Situação</span>
                        <span className={"card-body-text-item"}>{empresa.active ? "Ativo" : "Inativo"}</span>
                    </div>
                </div>
        </Container>
      </BodyCard>
    </>
  )
}

export default EmpresaDeails;