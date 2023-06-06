import styled from "styled-components";
import Background from "../../assets/bg.jpg";

export const Container = styled.div`
  height: 100vh;
  background-image: url("${Background}");
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerItens = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 414px;
  height: auto;
  background: black;
  border-radius: 25px;
  padding: 25px 0px 40px 0px;

  img {
    width: 40%;
    margin-top: 11px;
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
  margin: 25px 0px 76px 0px;
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
  background: #d93856;
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #ffffff;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }

`;
