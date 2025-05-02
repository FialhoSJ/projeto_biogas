import React from 'react';
import "./home.css";


const Home = () => {
  return (
    <div className="home-container">
      <main className="home-content">
        <section className="home-description">
          <h2>Sobre o Projeto</h2>
          <p>
            A produção de biogás por meio de biodigestores é uma tecnologia promissora para a geração de energia renovável e gestão de resíduos orgânicos. Este projeto de pesquisa tem como objetivo investigar os riscos ocupacionais associados à operação de biodigestores e propor medidas de segurança para mitigar esses riscos, garantindo um ambiente de trabalho seguro.
          </p>
        </section>
        <section className="home-justification">
          <h2>Justificativa</h2>
          <p>
            O crescimento do uso de biodigestores para a produção de biogás em áreas rurais e urbanas demanda uma atenção especial à segurança do trabalho. A falta de conhecimento sobre os riscos envolvidos pode levar a acidentes graves, comprometendo a saúde dos trabalhadores e a viabilidade do uso dessa tecnologia.
          </p>
        </section>
        <section className="home-status">
          <h2>Situação Atual</h2>
          <p>O projeto está atualmente em andamento e tem natureza de pesquisa.</p>
        </section>
      </main>
    </div>
  );
};

export default Home;