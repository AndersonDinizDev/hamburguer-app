import styled from "styled-components";
import Background from "../../assets/bg.jpg";

export const Container = styled.div`
  min-height: 100vh;
  background-image: url("${Background}");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0px 20px 0px;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 414px;
  height: auto;
  background: black;
  border-radius: 25px;

  img {
    width: 30%;
    margin-top: 11px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 33px;
  color: #ffffff;
  margin: 25px 0px 30px 0px;
`;

export const LabelInput = styled.label`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;
  color: #eeeeee;
`;

export const Input = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
  color: #ffffff;
  margin-bottom: 42px;
  border: none;
  outline: none;
  padding-left: 15px;
`;

export const Button = styled.button`
  width: 342px;
  height: 68px;
  background: rgba(255, 255, 255, 0.14);
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;
  border: none;
  cursor: pointer;
  margin-top: 30px;
  margin-bottom: 30px;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

`;

export const Order = styled.li`
display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  width: 342px;
  height: auto;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  p {
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #ffffff;
    justify-content: flex-start;
    padding-left: 27px;
    width: 100%;
    position: relative;
    margin-top: 10px;

    span {
      font-weight: 700;
      margin-top: 0;
    }
  }
  button {
    background: none;
    border: none;
    cursor: pointer;
    padding-right: 27px;

    img {
      width: 100%;
      cursor: pointer;
    }
  }

`

export const Pedido = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
margin-top: 17px;
`

export const Nome = styled.div`
width: 100%;
display: flex;
justify-content: flex-start;
margin-bottom: 17px;
`
export const Botao = styled.div`
width: 100%;
display: flex;
justify-content: flex-end;
outline: none;
border: none;
background: transparent;
width: 24;
height: 28px;
`
