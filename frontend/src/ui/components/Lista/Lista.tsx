import { Button } from "@mui/material";
import {
    ListaStyled,
    ItemLista,
    Foto,
    Informacoes,
    Nome,
    Descricao
} from "./Lista.style";
import { Pet } from '../../../data/@types/Pet'
import {TextService} from '../../../data/services/TextService';

interface ListaProps {
    pets: Pet[];
    onSelect: (pet: Pet) => void;
}

export default function Lista(props: ListaProps) {
    const tamanhoMaximoTexto = 2000;

    return (
        <ListaStyled>
            {props.pets.map(pet => (
                <ItemLista key = {pet.id}>
                    <Foto src={pet.foto} alt = {pet.nome}  />
                    <Informacoes>
                        <Nome>{pet.nome}</Nome>
                        <Descricao>
                            {TextService.LimitarTexto(pet.historia, tamanhoMaximoTexto)}
                        </Descricao>
                        <Button
                            variant={'contained'}
                            fullWidth
                            onClick={() => props.onSelect(pet)}
                        >Adoatar {pet.nome}</Button>
                    </Informacoes>
                </ItemLista>

            ))}
        </ListaStyled>
    )
}