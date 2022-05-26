
import Logo from "./../../assets/img/logo.png";
import "./style.css";
import { Link } from "react-router-dom";
import styled from 'styled-components';

function Home() {


  return (
    <Homee>
      <img src={Logo} alt="Zap Recall!" />
      <h1>Toyota</h1>
      <Link to={`/Sensors` } >
        <button>Sensores</button>
      </Link>
    </Homee>
  )
}

export default Home;

const Homee = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  position: absolute;
  background-color: var(--cor-fundo);

  margin-bottom: 30px; 

 h1 {
  font-family: "Righteous", cursive;
  font-size: 36px;
  color: white;
  margin-bottom: 50px;
}

  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    margin-bottom: 10px;
  }

 button {
    width: 246px;
    height: 54px; 
    padding: 16px 22px;
    border-radius: 5px;
    color: var(--cor-fundo);
    border: 1px;
    font-size: 22px;
    cursor: pointer;
    margin-bottom: 30px;
    font-family: "Righteous", cursive;
  }

  button:hover {
    background-color: var(--cor-yyy);
    margin-bottom: 30px;
  }
`;
