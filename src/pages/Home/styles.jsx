import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledListaFilmes = styled.div`
    max-width: 90%;
    margin: 14px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
`;

export const StyledLoading = styled.span`
    border: 24px solid;
    border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    margin: calc(50vh - 80px) 50%;
    @keyframes animloader {
        0% {
            border-color: rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75);
        }
            33% {
            border-color: rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35);
        }
            66% {
            border-color: rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15) rgba(255, 255, 255, 0.25);
        }
            100% {
            border-color: rgba(255, 255, 255, 0.25) rgba(255, 255, 255, 0.35) rgba(255, 255, 255, 0.75) rgba(255, 255, 255, 0.15);
        }
    };
    animation: animloader 1s linear infinite;
`;

export const StyledFilme = styled.article`
    width: 380px;
    height: 700px;
    padding: 15px;
    border-radius: 5px;
    justify-content: flex-start;
    display: flex;
    flex-direction: column;
`;

export const StyledImagemFilme = styled.img`
    width: 900px;
    max-width: 100%;
    max-height: 700px;
    object-fit: cover;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
`;

export const StyledTitulo = styled.strong`
    margin-bottom: 14px;
    text-align: center;
    font-size: 22px;
    display: block;
`;

export const StyledContainerTitulo = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledLinkFilme = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    font-size: 24px;
    background-color: #116FEB;
    text-decoration: none;
    color: #fff;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
`;