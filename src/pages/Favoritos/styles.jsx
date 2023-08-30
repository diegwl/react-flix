import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledContainer = styled.div`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledTitle = styled.h1`
    margin-bottom: 14px;
`;

export const StyledFilmeTitle = styled.span`
    font-size: 30px;
`;

export const StyledLista = styled.ul`
    width: 720px;
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const StyledFilme = styled.li`
    list-style: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
`;

export const StyledOptions = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

export const StyledDetails = styled(Link)`
    text-decoration: none;
    margin-right: 14px;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled.button`
    font-size: 20px;
    border: 0;
    outline: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
        color: #747bff;
    }
`;

export const StyledImg = styled.img`
    border-radius: 2px;
    width: 30px;
    max-width: 100%;
    max-height: 100px;
    object-fit: cover;
`;

export const StyledMain = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 250px;
    gap: 20px;
`;