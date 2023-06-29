import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const StyledLink = styled(NavLink)`
    color: #f3cba5;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const MovieList = styled.ul`
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    justify-content: center;
`;

export const MovieListItem = styled.li`
    background-color: #975a5e;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    transition: transform 0.3s ease;
    
        &:hover {
            transform: scale(1.05);
            box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
            -moz-box-shadow: -1px 1px 29px -10px rgba(211, 214, 219, 1);
        }
`;