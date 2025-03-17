import React from "react";
import { ItemContainer } from "./styles";

function ItemRepo ({repo, handleRemoveRepo}) {

    const handleRemove = () => {
        handleRemoveRepo(repo.id);
    }
    return (
        <ItemContainer onClick={handleRemove}>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p> 

            <button onClick={ () => handleRemoveRepo(repo.id)} rel="noreferrer" className="remover" >Remover</button> <br />
            <a href={repo.html_url} rel="noreferrer" target="blank">Ver Repositório</a> 

            <hr />  
        </ItemContainer>
    )
}

export default ItemRepo;