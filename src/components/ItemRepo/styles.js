import styled from "styled-components";

export const ItemContainer = styled.div`
    width: 80%;
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }
    
    p {
        font-size: 1rem;
        color: #FAFAFA60;
        margin-bottom: 20px;

    }

    button {
        border:none;
        border-radius: 20px;
        padding: 5px 17px;
        margin-bottom: 10px;
        background-color: #FFFFFF;
    }

    button:hover{
        cursor:pointer;
        background-color: #FAFAFA60;
    }

    a.remover {
    color: blue;
    }

    hr {
        color:#fafafa;
        margin: 20px 0;
    }
`