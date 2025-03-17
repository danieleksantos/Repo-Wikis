import React from "react";

import { InputContainer } from "./styles";

function Input({value, onChange}) {
    return (
        <InputContainer>
            <input placeholder="seuLogin/seuRepositorio" value={value} onChange={onChange}/>
        </InputContainer>
    )
}

export default Input;