import React, {useState} from 'react'
import { Document,Page } from 'react-pdf/dist/esm/entry.webpack';
import { useParams } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";


import Footer from './footer/Footer'

function DataSheet() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const params = useParams();


  const pdf = `/pdfs/${params.code}.pdf`


  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height={600} pageNumber={pageNumber} />
        </Document>
      </header>
      <Footer>
        <Bot>
      { pageNumber > 1 && 
        <Botttom onClick={changePageBack}>Previous Page</Botttom>
        }
        {
          pageNumber < numPages &&
          <Botttom onClick={changePageNext}>Next Page</Botttom>
        }

        </Bot>
                
        <Link to="/">
          <Botttom>Sair</Botttom>
        </Link>
      </Footer>
    </div>
  );
}

export default DataSheet;


const Bot = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


`;

const Botttom = styled.button`

  width: 100px;
  height: 30px; 
  padding: auto;
  border-radius: 5px;
  color: var(--cor-fundo);
  border: 1px;
  font-size: 10px;
  cursor: pointer;
  margin-bottom: 30px;
  margin-right: 20px;
  font-family: "Righteous", cursive;

  button:hover {
    background-color: var(--cor-yyy);
    margin-bottom: 30px;
  }

`;