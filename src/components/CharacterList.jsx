import { Box } from '@mui/material';
import { CharacterCard } from './CharacterCard';
import './CharacterList.css';

export const CharacterList = ({ characters }) => {
    if (!characters || characters.length === 0) return null;

    return (
        <Box component="ul" className="character-list">
            {characters.map((character) => (
                <Box component="li" key={character.id} className="character-list-item">
                    <CharacterCard character={character} />
                </Box>
            ))}
        </Box>
    );
};