import styled from "@emotion/styled";

export const CastContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: #453953;
`;

export const TitleCast = styled.h2`
    text-align: center; 
    margin-bottom: 40px;   
    color: #f3cba5;
`;

export const CastList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const CastListItem = styled.li`
    margin-right: 10px;
    &:nth-child(6n) {
        margin-right: 0px;
    }
    margin-bottom: 10px;
    background-color: #975a5e;
    border-radius: 10px;
`;

export const CastImg = styled.img`
    border-radius: 10px 10px 0  0 ;
`;

export const CastParagraph = styled.p`
    text-align: center;
    color: #f3cba5;
`;