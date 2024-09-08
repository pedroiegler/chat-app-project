import styled from "styled-components";

export const Container = styled.div`
  padding: 15px 20px;
  bottom: 0;
  width: 100%;
  background-color: #f0f2f5;
  display: flex;
  box-shadow: 2px 1px 3px 1px #0003;

  svg {
    width: 25px;
    height: 25px;
    color: #54656f;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 5px;
  width: 100%;

  svg {
    width: 25px;
    height: 25px;
    color: #54656f;
    cursor: pointer;
    transition: .2s ease;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

export const Input = styled.input`
  padding: 15px;
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  box-shadow: inset 0 0 1px 1px #0003;
  font-size: 14px;
  margin-right: 10px;
`;