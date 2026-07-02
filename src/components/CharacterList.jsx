import { List, ListItem } from '@mui/material';
import { CharacterCard } from './CharacterCard';
import './CharacterList.css';

/**
 * Renderiza la colección estructurada de personajes.
 * @param {Array} props.characters - Arreglo de personajes a iterar.
 */
export const CharacterList = ({ characters }) => {
    if (!characters || characters.length === 0) return null;

    return (
        <List className="character-list">
            {characters.map((character) => (
                <ListItem key={character.id} className="character-list-item">
                    <CharacterCard character={character} />
                </ListItem>
            ))}
        </List>
    );
};