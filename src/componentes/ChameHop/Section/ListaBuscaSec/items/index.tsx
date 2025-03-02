import styled from "styled-components";

const SelectInput = styled.select`
    appearance: none; /* Remove a aparência padrão do select */
    outline: none; /* Remove o foco azul padrão */
    background-color: #ececec;
    color: #454545;
    padding: 0.8rem 21em 0.8rem 1rem;
    border: none;
    border-radius: 4px;
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 15px;
`

function ItensNaLista() {
    return(
        <li>
            <SelectInput id="opcoes" name="servico">
                <option value="1">Selecione...</option>
                <option value="2">Opção 2</option>
                <option value="3">Opção 3</option>
            </SelectInput>
        </li>
    )
}

export default ItensNaLista;