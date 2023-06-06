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
    const { data: newOrder } = await Axios.post("https://lucent-starburst-13ab0a.netlify.app/.netlify/functions/api/order", {
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
          <Input placeholder="1 Coca-Cola, 1 X-Salada" ref={inputOrder} />
          <LabelInput>Nome do Cliente</LabelInput>
          <Input placeholder="Jorge" ref={inputClient} />
          <Button onClick={addNewOrder}>Novo Pedido</Button>
        </LoginContent>
      </ContainerItens>
    </Container>
  );
};

export default OrdersApp;
