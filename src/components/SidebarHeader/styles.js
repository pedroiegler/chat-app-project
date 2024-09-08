import styled from "styled-components";

export const Container = styled.div`
    padding: 15px 20px;
    background-color: #f0f2f5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
    box-shadow: 0 1px 2px #0003;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;

    svg {
        width: 25px;
        height: 25px;
        color: #54656f;
        cursor: pointer;
        margin-right: 15px;
        transition: .2s ease;
    }

    svg:hover {
        transform: scale(1.1);
    }
`;

export const Avatar = styled.img`
    width: 39px;
    height: 39px;
    cursor: pointer;
    border-radius: 50%;
`;

export const Options = styled.div`
    display: flex;
    gap: 10px;

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