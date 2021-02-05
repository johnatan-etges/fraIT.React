import React from 'react';

import { Container } from './styles';

import Header from '../../components/header';
import BodyGrid from '../../components/BodyGrid';
import Footer from '../../components/footer';
import ContentContainer from '../../components/ContentContainer';
import ContentCard from '../../components/ContentCard';


function Dashboard () {

  return (
      <Container>
        <Header/>      
        <BodyGrid>
          {/* <ContentContainer>
            <ContentCard>
              <h3 className='titulo'>Título</h3>
                <span className='subtitulo'>Subtítulo</span>
                <p className='paragrafo'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi est felis,vestibulum eu consequat vitae, commodo vel orci. Cras augue lorem,  fringilla id neque ut, pharetra. Morbi est felis,vestibulum eu consequat vitae vestibulum eu consequat vitae Cras augue lorem,  fringilla id neque ut, pharetra. Morbi est felis,vestibulum eu consequat vitae vestibulum eu consequat vitae vestibulum eu consequat vitae.</p>
                <div className='img-container'>
                  <span role='img' aria-controls='disabled' >
                    <img className='icone' src='' alt='Teste'/>
                  </span>
                </div>
            </ContentCard>
          </ContentContainer> */}
        </BodyGrid>
        <Footer/>
      </Container>
  );

}

export default Dashboard;