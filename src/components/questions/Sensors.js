import React from 'react';
import styled from 'styled-components';

import data from '../../data/index';
import logo from "./../../assets/img/logo.png";
import FlashCard from '../flashcard/FlashCard';
import Footer from '../footer/Footer';

let questionsData = data.map(value => {
    return {
        ...value,
        tap: false,
    }
})

export default function Sensors () {
   
    const [questions, setQuestions] = React.useState(questionsData);


    function tapCard (cardIndex) {
        let newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: true,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setQuestions([...newQuestions]);
    }

    function CloseCard (cardIndex) {
        let newQuestions = questions.map((value, index) => {
            if (index === cardIndex) {
                return {
                    ...value,
                    tap: false,
                }
            } else {
                return {
                    ...value,
                    tap: false,
                }
            }
        })

        setQuestions([...newQuestions]);
    }

    return (
        <Container>
            <Header>
                 <img src={logo} alt=""/>
                 <h1>Toyota</h1>
            </Header>
            <Main>
                { questions.map((value, index) => (
                    <FlashCard 
                        key={index}
                        title={`Codígo: ${value.frente}`}
                        tap={value.tap}
                        index={index}
                        tapCard={tapCard}
                        CloseCard={CloseCard}
                        code={value.code}
                        answer={value.verso}
                        />
                ))}
            </Main>
            <Footer>
                <p>SENSORES CADASTRADOS: {questions.length}</p>
            </Footer>
        </Container>
    )
}

const Container = styled.div`

    display: flex;
    flex-direction: column;


`;



const Header = styled.div`
      
    position: fixed;
    height: 80px;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 0;
    font-size: 36px;
    color: white;
    font-family: "Righteous";
    z-index: 1;
    background-color: var(--cor-fundo);

    img {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }

`;

const Main = styled.div`


`;