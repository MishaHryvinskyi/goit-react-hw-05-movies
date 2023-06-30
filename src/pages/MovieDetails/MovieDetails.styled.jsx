import styled from "@emotion/styled";
import { NavLink } from 'react-router-dom';

export const LinkBack = styled(NavLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #453953; 
    text-decoration: none;
    padding: 10px;
    background-color: #f3cba5;
    width: 100px;
    font-size: 20px;
    font-weight: 600;
    border-radius: 10px;
    text-align: center;
    transition: transform 0.3s ease;

    &:hover {
        background-color: #a55233;
        transform: scale(1.05);
        color: #f3cba5;
        box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
    -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
    }
`;

export const DitailsLink = styled(NavLink)`
    color: #f3cba5;
    text-decoration: none;
    font=size: 20;
    font-weight: 600;
    padding: 10px;
    align-items: center;
`;

export const ContainerMovie = styled.div`
    display: flex;
    padding: 80px;
`;

export const ContainerLink = styled.div`
    display: flex;
    align-items: center;
    padding-left: 50px;
    padding-top: 50px;
`;

export const MovieTitle = styled.h1`
    text-align: center;
    margin-bottom: 20px;
    color: #f3cba5;
`;

export const MovieImg = styled.img`
    width: 400px;
    border-radius: 30px;
    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
    -moz-box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
`;

export const ContainerWrap = styled.div`
    margin-bottom: auto;
    margin-top: auto;
    margin-left: 50px;
    padding: 200px 30px 200px 30px;
    background-color: #975a5e;
    border-radius: 30px;
    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
    -moz-box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
    box-shadow: -1px 1px 49px -10px rgba(211,214,219,1);
`;

export const ParagraphMovie = styled.p`
    color: #f3cba5;
`;

export const ListLink = styled.ul`
    display: flex;
    background-color: #453953;
    justify-content: center;
    margin-right: auto;
    margin-left: auto;
    padding-bottom: 50px;
`;

export const ItemLink = styled.li`
    background-color: #975a5e;
    margin-left: 30px;
    padding:  10px 20px;
    border-radius: 10px;
    transition: transform 0.3s ease;

    &:hover {
        background-color: #a55233;
        transform: scale(1.05);
        box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
    }
`;