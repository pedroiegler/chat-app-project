import React from "react";
import { MdPerson } from "react-icons/md";
import * as C from "./styles";

const ChatHeader = ({ photoURL, name }) => {
  return (
    <C.Container>
      <C.UserInfo>
        {photoURL ? <C.Avatar src={photoURL} alt="Avatar" /> : <MdPerson />}
        <C.NameContent>
          <C.Name>{name}</C.Name>
        </C.NameContent>
      </C.UserInfo>
    </C.Container>
  );
};

export default ChatHeader;