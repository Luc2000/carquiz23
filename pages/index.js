import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizLogo from '../src/components/QuizLogo';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';


// const BackgroundImage = styled.div`
//   background-image: url(${db.bg});
//   flex: 1;
//   background-size: cover;
//   background-position: center;
// `;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  
  return (
    <QuizBackground  id='conteudo' backgroundImage={db.bg}>
      <Head>
        <title>CarQuiz</title>
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>{db.title}</h1>
          </Widget.Header>
          <Widget.Content>
            <p className="titlep">{db.description}</p>
          </Widget.Content>
          <Widget.Content>
            <form onSubmit={function info(infosEvento) {
              infosEvento.preventDefault();
              switch (name.toLowerCase()) {
                case 'benjamin':
                  alert('Bem vindo taradão');
                  router.push(`benjamin`);
                break;
                case 'walmarcio':
                  alert('Grande menino wal, boa sorte');
                  router.push(`wal`);
                break;
                case 'abdalla':
                  alert('Ainda tenho seus dados do cartão, e vc loga dnv no meu site?');
                  alert('Brincadeira, vou pegar agora, boa sorte');
                  router.push(`abdalla`);
                break;
                default:
                  alert('Insere só seu primeiro nome pf, não pensei muito, ou é walmarcio, benjamin ou abdalla');
                  alert('VOLTA A PÁGINA, NÃO TENHO CRIATIVIDADE PRA FALLBACK');
                  alert('Eu sei que não tem como voltar, tô brincando, volta dps e tenta dnv');
                  router.push(`sefuder`);
                break;
              }
              // router manda pra próxima página
            }}
            >
              <Input
                name="nomeDoUsuario"
                id="nomeuser"
                onChange={(infosEvento) => setName(infosEvento.target.value)}
                placeholder="Insira seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                {`Jogar ${name}`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Luc2000" />
    </QuizBackground>
  );
}
