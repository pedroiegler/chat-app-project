import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    padding: 15px 20px;
    cursor: pointer;

    &:hover {
        background-color: #f0f2f5;
    }

    svg {
        width: 30px;
        height: 30px;
        background-color: #ccc;
        border-radius: 50%;
        margin-right: 10px;
        min-width: fit-content;
    }

    &.active {
        background-color: #f0f2f5;
    }
`;

export const Name = styled.span`
    font-size: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Avatar = styled.img`
    width: 49px;
    height: 49px;
    border-radius: 50%;
    margin-right: 13px;
    min-width: fit-content;
`;