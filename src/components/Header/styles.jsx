import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 80px;
    background-color: black;
`;

export const StyledLogo = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    color: rgba(255, 255, 255, 0.87);
    font-size: 30px;
    font-weight: bold;
`;

export const StyledFavoritos = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background-color: #fff;
    color: black;
    padding: 5px 14px;
    border-radius: 5px;
`;
