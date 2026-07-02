import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';
import './CharacterCard.css';

export const CharacterCard = ({ character }) => {
    return (
        <Card className="character-card" variant="outlined">
            <CardContent className="character-card-content">
                <Avatar
                    alt={character.name}
                    src={character.image}
                    className="character-avatar"
                />
                <Box className="character-info">
                    {/* Aumentamos de h6 a h5 y forzamos negrita */}
                    <Typography variant="h5" component="h2" color="text.primary" fontWeight="bold">
                        {character.name}
                    </Typography>
                    {/* Aumentamos de body2 a body1 para mayor legibilidad */}
                    <Typography variant="body1" color="text.secondary">
                        <strong>Género:</strong> {character.gender}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        <strong>Estado:</strong> {character.status}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};