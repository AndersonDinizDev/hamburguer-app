import React, { useState, useRef } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/logo.svg";

//JSX

import {
  Container,
  ContainerItens,
  H1,
  LabelInput,
  Input,
  Button,
  LoginContent,
} from "./styles";

const OrdersApp = () => {
  const [orders, setOrders] = useState([]);
  const inputOrder = useRef();
  const inputClient = useRef();
  const navigate = useNavigate();

  async function addNewOrder() {
    const { data: newOrder } = await Axios.post("http://localhost:3001/order", {
      name: inputClient.current.value,
      order: inputOrder.current.value,
    });

    setOrders([...orders, newOrder]);
    navigate("/orders");
  }

  return (
    <Container>
      <ContainerItens>
        <img alt="burger-logo" src={Logo}></img>
        <H1>Faça seu pedido!</H1>
        <LoginContent>
          <LabelInput>Pedido</LabelInput>
          <Input ref={inputOrder} />
          <LabelInput>Nome do Cliente</LabelInput>
          <Input ref={inputClient} />
          <Button onClick={addNewOrder}>Novo Pedido</Button>
        </LoginContent>
      </ContainerItens>
    </Container>
  );
};

export default OrdersApp;
