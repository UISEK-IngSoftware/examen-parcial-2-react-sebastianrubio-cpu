import { useState, useEffect } from 'react';
import { Container, Typography, CircularProgress, Alert, Box, AppBar, Toolbar } from '@mui/material';
import { getCharacters } from '../services/futuramaService';
import { CharacterList } from '../components/CharacterList';
import './Home.css';

export const Home = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                setLoading(true);
                const data = await getCharacters();
                setCharacters(data);
                setError(null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    return (
        <Box className="home-layout">
            <AppBar position="static" color="primary" elevation={0}>
                <Toolbar>
                    <Typography variant="h6" component="h1" fontWeight="bold">
                        Prueba Parcial 2 - Futurama
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container className="home-container">
                {/* Manejo de estado: Cargando */}
                {loading && (
                    <Box className="home-status-box">
                        <CircularProgress size={50} />
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
                            Estableciendo conexión...
                        </Typography>
                    </Box>
                )}

                {/* Manejo de estado: Error en la API */}
                {error && !loading && (
                    <Alert severity="error" className="home-alert" variant="filled">
                        {error}
                    </Alert>
                )}

                {/* Manejo de estado: Lista vacía */}
                {!loading && !error && characters.length === 0 && (
                    <Alert severity="info" className="home-alert">
                        No hay personajes registrados en este momento.
                    </Alert>
                )}

                {/* Renderizado exitoso */}
                {!loading && !error && characters.length > 0 && (
                    <CharacterList characters={characters} />
                )}
            </Container>
        </Box>
    );
};