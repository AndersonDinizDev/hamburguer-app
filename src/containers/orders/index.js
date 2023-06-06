import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

import Logo from "../../assets/burger.svg";
import Trash from "../../assets/trash.svg";

//JSX

import { Container, ContainerItens, H1, Button, Order, Pedido, Nome, Botao, } from "./styles";

const App = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchOrders() {
      const { data: newOrders } = await Axios.get(
        "https://lucent-starburst-13ab0a.netlify.app/.netlify/functions/api/order"
      );

      setOrders(newOrders);
    }

    fetchOrders();
  });

  async function deleteUser(ordersId) {
    
    await Axios.delete(`https://lucent-starburst-13ab0a.netlify.app/.netlify/functions/api/order/${ordersId}`)

    const newOrders = orders.filter((orders) => orders.id === ordersId);

    setOrders(newOrders);

  }

  const goToBack = () => {
    navigate("/")
  }

  return (
    <Container>
      <ContainerItens>
        <img alt="burger-logo" src={Logo}></img>
        <H1>Pedidos</H1>
        <ul>
          {orders.map((ordersList) => (
            <Order key={ordersList.id}>
              <Pedido>
              <p>{ordersList.order}</p>
              </Pedido>
              <Botao>
                <button onClick={() => deleteUser(ordersList.id)}>
                  <img src={Trash} alt="trash-button" />
                </button>
              </Botao>
              <Nome>
              <p><span>{ordersList.name}</span></p>
              </Nome>
            </Order>
          ))}
        </ul>
        <Button onClick={goToBack}>Voltar</Button>
      </ContainerItens>
    </Container>
  );
};

export default App;
