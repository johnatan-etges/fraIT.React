import React, { useEffect, useState } from 'react';

import api from '../../../../services/api'
import { toast } from 'react-toastify'

import { Container } from './styles';

import BodyCard from '../../../../components/BodyCard'
import GoBack from '../../../../components/go-back'

function EntidadeDetails(props) {

    const {entidade} = props.location.state.payload
    const [unidadesData, setUnidadesData] = useState([])

    useEffect(() => {
        async function loadEntidadeUnidades() {
            await api.post('/cadastros/entidades/listEntidadeUnidades', null, {params: {id: entidade.id}})
            .then((response) => {
                setUnidadesData(response.data.Unidades)
            })
            .catch(() => toast.error("Erro ao carregar informações da entidade", {position: toast.POSITION.TOP_RIGHT}))
        }

        loadEntidadeUnidades()        
    }, [entidade.id])

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
                        <span className={"card-header-title"}>{entidade.name}</span>                    
                    </div>
                    <div className={"card-item-box"}>
                        {entidade.description && <><span className={"card-item-box-label"}>Descrição</span>
                        <span className={"card-header-subtitle"}>{entidade.description}</span></>}
                    </div>        
                </div>
                {unidadesData.length > 0 &&
                <>
                    <div className={"card-section-title"}>
                        <span>Unidades</span>
                    </div>                
                    <div className={"card-list"}>
                        {unidadesData.map(unidade => 
                            <div className={"card-item-box"}>
                                <span className={"card-item-box"}>
                                    <span className={"card-item-box-label"}>Nome</span>
                                    <span className={"card-body-text-item"}>{unidade.name}</span>
                                </span>
                            </div>                
                        )}
                    </div>
                </>
                }
            </Container>
        </BodyCard>
    </>
      
  )
}

export default EntidadeDetails;