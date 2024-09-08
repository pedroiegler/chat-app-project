import React from "react";
import { MdMessage } from "react-icons/md";
import * as C from "./styles";

const Default = () => {
  return (
    <C.Container>
      <MdMessage />
      <C.Title>Chat</C.Title>
      <C.Info>
        Agora você pode enviar e receber mensagens sem precisar manter seu
        celular conectado à internet.
      </C.Info>
    </C.Container>
  );
};

export default Default;