import styled from '@emotion/styled';
import { StyleType } from './type';

export const NavBarLayout = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    display: flex;
`;

type NavBtnType = {};

export const NavButton = styled.li<StyleType>`
    width: ${({ width }) => (width ? width : '')};
    height: ${({ height }) => (height ? height : '')};
    margin-left: ${({ isRight }) => (isRight ? 'auto' : 'left')};

    padding: 20px;
    cursor: pointer;
`;
