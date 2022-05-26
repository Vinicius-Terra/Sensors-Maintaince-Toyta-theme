import React from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";


//Card Desvirado
function Card ({ title, index, tapCard}) {

    return (
        <Cards onClick={() => tapCard(index)}>
            { title }
        </Cards>
    )
}

//Pergunta e Resposta
function CardQuestion ({ answer, index, CloseCard,code }) {

    return (
        <>
            <CardAberto>
                    { answer }
                <Contain>
                    <ion-icon name="close-circle" onClick={() => CloseCard(index)}></ion-icon >
                    <Link to={`DataSheet/${code}` } >
                        <ButtonDatasheet onClick={() => CloseCard(index)}>DataSheet!</ButtonDatasheet>
                    </Link>
                </Contain>
            </CardAberto>
        
        </>
        
    )
}

export default function FlashCard ({
    title,
    tap,
    CloseCard,
    index,
    tapCard,
    answer,
    code
}) {


    return (
        <>
            { !tap ? (
                <Card
                    key={index}
                    title={title}
                    index={index}
                    tapCard={tapCard}
                    />) : (
                    <CardQuestion
                        key={index}
                        answer={answer}
                        index={index}
                        CloseCard={CloseCard}
                        code={code}
                    />)}

        </>
    )
}

const Cards= styled.div`

    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    color: black;
    border-radius: 5px;
    margin: 10px 0px;
    padding: 10px 10px;
    cursor: pointer;
    font-family: 'Recursive', cursive;


`;


const CardAberto= styled.div`

    width: 300px;
    min-height: 130px;
    display: flex;
    flex-direction: column;
    background-color: white;
    cursor: default;
    padding: 20px 10px;

`;

const Contain= styled.div`


    width: 100%;    
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px 0 0 0;
    


`;

const ButtonDatasheet= styled.div`
    
    padding: 6px 6px;
    margin: 0 10px;
    width: 80px;   
    height: 50px;
    background-color: green;
    color: white;
    font-size: 12px;
    border-radius: 4px;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    :hover {
    filter: brightness(0.7)
    }


`;