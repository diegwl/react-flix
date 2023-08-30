import styled, { css } from 'styled-components';

export const StyledFilmeInfo = styled.div`
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    max-width: 800px;
    padding: 0 8px;
    margin: 0 auto;
`;

export const StyledTitle = styled.h1`
    margin: 14px 0;
`;

export const StyledImg = styled.img`
    border-radius: 8px;
    width: 800px;
    max-width: 100%;
    max-height: 340px;
    object-fit: cover;
`;

export const StyledSinopseTitle = styled.h3`
    margin-top: 14px;
`;

export const StyledSinopse = styled.span`
    margin: 8px 0;
`;

export const StyledButton = styled.button`
    margin-top: 14px;
    margin-left: 0;
    margin-right: 12px;
    font-size: 20px;
    border: 0;
    outline: none;
    padding: 12px;
    border-radius: 4px;
    cursor: pointer;
    margin-bottom: 60px;
    transition: all 0.3s;
    &:hover {
        color: #747bff;
    }
`;

export const StyledButtonLink = styled.a`
    text-decoration: none;
`;