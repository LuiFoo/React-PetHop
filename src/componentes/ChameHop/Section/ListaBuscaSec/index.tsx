import styled from "styled-components";

const ListaStyled = styled.ul`
    display: flex;
    gap: 1vw; /* Espaçamento entre os itens */
    justify-content: center; /* Centraliza o grid */
`

interface SelectInputProps {
    $corFundo: string;
    $corFonte: string;
}

const SelectInput = styled.select<SelectInputProps>`
    appearance: none; /* Remove a aparência padrão do select */
    outline: none; /* Remove o foco azul padrão */
    border: none;
    border-radius: 4px;
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 15px;
    background-color: ${ props => props.$corFundo || '#ececec' };
    color: ${ props => props.$corFonte || '#454545' };
    padding: 0.8rem 0 0.8rem 1rem;
    width: 100%;

`

const ListaSecStyled = styled.li`
    width: 21.25vw;
`

function ListaDetalhesSec() {
    return (
        <ListaStyled>

            <ListaSecStyled>
                <SelectInput 
                id="opcoes" 
                name="servico"
                $corFundo='#8ED9ED'
                $corFonte='#225369'
                >
                    <option value="1">Espécie</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                </SelectInput>
            </ListaSecStyled>

            <ListaSecStyled>
                <SelectInput 
                id="opcoes" 
                name="servico"
                $corFundo = '#2B7799'
                $corFonte='#8ED9ED'
                >
                    <option value="1">Necessita medicamento</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                </SelectInput>
            </ListaSecStyled>

            <ListaSecStyled>
                <SelectInput 
                id="opcoes" 
                name="servico"
                $corFundo = '#FE4B59'
                $corFonte='#641D1D'
                >
                    <option value="1">Outros filtros</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                </SelectInput>
            </ListaSecStyled>

            <ListaSecStyled>
                <SelectInput 
                id="opcoes" 
                name="servico"
                $corFundo = '#BCEB6B'
                $corFonte='#4A6F09'
                >
                    <option value="1">Ordem de resultados</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                </SelectInput>
            </ListaSecStyled>
        </ListaStyled>
    )
}

export default ListaDetalhesSec;