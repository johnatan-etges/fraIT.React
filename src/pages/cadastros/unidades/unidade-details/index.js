import React from 'react';

import BodyCard from '../../../../components/BodyCard'
import GoBack from '../../../../components/go-back'

import { Container } from './styles';

function UnidadeDetails(props) {

    const { unidade } = props.location.state.payload

  return (
      <>
        <BodyCard>
            <Container>
                <GoBack/>
                <div className={"card-section-title"}>
                    <span>Informações básicas</span>
                </div>
                    <div className={"card"}>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Nome</span>
                        <span className={"card-header-title"}>{unidade.name}</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Entidade</span>
                        <span className={"card-header-subtitle"}>{unidade.Entidade.name}</span>
                    </div>
                </div>
                <div className={"card"}>
                    <div className={"card-section-title"}>
                        <span>Endereço e contatos</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Endereço</span>
                        <span className={"card-body-text-item"}>{unidade.address}</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Telefone</span>
                        <span className={"card-body-text-item"}>{unidade.phoneNumber}</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>E-mail</span>
                        <span className={"card-body-text-item"}>Em construção</span>
                    </div>
                </div>
                {unidade.responsible && (
                    <>
                        <div className={"card-section-title"}>                    
                            <span>Informações do(a) responsável</span>
                        </div>
                        <div className={"card"}>
                            <div className={"card-item-box"}>
                                <span className={"card-item-box-label"}>Nome</span>
                                <span className={"card-body-text-item"}>{unidade.responsible}</span>                        
                            </div>
                            <div className={"card-item-box"}>
                                <span className={"card-item-box-label"}>E-mail</span>
                                <span className={"card-body-text-item"}>Em construção</span>
                            </div>
                        </div>
                    </>
                )}
                <div className={"card-section-title"}>
                    <span>Informações adicionais</span>
                </div>
                <div className={"card"}>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>IP</span>
                        <span className={"card-body-text-item"}>{unidade.ipAddress}</span>
                    </div>
                    <div className={"card-item-box"}>
                        <span className={"card-item-box-label"}>Situação</span>
                        <span className={"card-body-text-item"}>{unidade.active ? "Ativo" : "Inativo"}</span>
                    </div>
                </div>
            </Container>
        </BodyCard>
      </>
  )
}

export default UnidadeDetails;