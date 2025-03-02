import styled from "styled-components";

const ListaStyled = styled.ul`
    display: grid;
    grid-auto-flow: column;
    grid-template-columns: 20vw 15vw 15vw 20vw 14vw;
    justify-content: center;
    gap: 1vw;
    margin: 5.5rem 0 3.5rem 0;
`

const ItemStyled = styled.li`
    display: flex;
    flex-direction: column;
    justify-content: end;
    gap: 0.5rem;
`

const SelectInput = styled.select`
    appearance: none; /* Remove a aparência padrão do select */
    outline: none; /* Remove o foco azul padrão */
    background-color: #ececec;
    color: #454545;
    padding: 0.8rem 0 0.8rem 1rem;
    border: none;
    border-radius: 4px;
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 15px;
`
const TextInput = styled.input`
    color: #454545;
    background-color: #ececec;
    padding: 0.8rem 0rem 0.8rem 1rem;
    border: none;
    border-radius: 4px;
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 15px;

    background-size: 20px;
    padding-left: 30px;
`

const DataInput = styled.input`
    color: #454545;
    background-color: #ececec;
    padding: 0.8rem 0 0.8rem 1rem;
    border: none;
    border-radius: 4px;
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 15px;
`

const BuscaInput = styled.input`
    color: #454545;
    background-color: #ececec;
    padding: 0.8rem 6rem 0.8rem 1rem;
    border: none;
    border-radius: 4px;
    font-family: "Montserrat", serif;
    font-weight: 400;
    font-size: 15px;
`

const LabelText = styled.label`
    font-family: "Montserrat", serif;
    font-weight: 700;
    font-size: 15px;
    color: #2B7799;

    margin-bottom: 0.5rem;
`

function ListaDetalhes() {
    return (
        <ListaStyled>
            <ItemStyled>
                
                <LabelText htmlFor="Servico">Serviço</LabelText>
                <SelectInput id="opcoes" name="servico">
                    <option value="1">Selecione...</option>
                    <option value="2">Opção 2</option>
                    <option value="3">Opção 3</option>
                </SelectInput>

            </ItemStyled>

            <ItemStyled>
                <LabelText htmlFor="origem">Origem</LabelText>
                <TextInput placeholder="Coloque o endereço" type="text" name='origem' />
            </ItemStyled>

            <ItemStyled>
                <LabelText htmlFor="destino">Destino</LabelText>
                <TextInput placeholder="Coloque o endereço" type="text" name='destino' />
            </ItemStyled>

            <ItemStyled>
                <LabelText htmlFor="horario">Horario</LabelText>
                <DataInput type="date" name="" id="" />
            </ItemStyled>

            <ItemStyled>
                <BuscaInput type="submit" value="Buscar" />
            </ItemStyled>
        </ListaStyled>
    )
}

export default ListaDetalhes;