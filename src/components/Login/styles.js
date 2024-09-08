import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #f7f7f7;
`;

export const Button = styled.button`
    outline: none;
    font-size: 16px;
    padding: 12px 20px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    background: #DB4437;
    color: white;
    font-weight: bold;
    transition: background 0.3s ease, transform 0.2s ease;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 

    &:hover {
        transform: scale(1.03);
    }

    &:active {
        transform: scale(0.95);
    }
`;
