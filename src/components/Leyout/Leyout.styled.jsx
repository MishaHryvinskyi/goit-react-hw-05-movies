import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
    color: #453953;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    font-size: 20px;
    font-weight: 600;

    background-color: #f3cba5;
    width: 150px;
    margin-right: 40px;
    padding: 15px 10px;
    align-items: center;
    border-radius: 20px;
    transition: transform 0.3s ease;
    
    &:hover {
        box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        transform: scale(1.05);
        cursor: pointer;
        background-color: #a55233;
    }

    &:hover {
        color: #f3cba5;
    }
`;

export const LeyoutList = styled.ul`
    background-color: #975a5e;
    display: flex;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 30px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
`;