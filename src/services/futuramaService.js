import axios from 'axios';


const apiClient = axios.create({
    baseURL: 'https://futuramaapi.com/api',
    timeout: 8000,
});

/**
 * Obtiene la lista de personajes utilizando los parámetros requeridos por la rúbrica.
 * @returns {Promise<Array>} Array de objetos de personajes.
 * @throws {Error} Si falla la petición HTTP o la resolución de red.
 */
export const getCharacters = async () => {
    try {
        const response = await apiClient.get('/characters', {
            params: {
                orderBy: 'id',
                orderByDirection: 'asc',
                page: 1,
                size: 50
            }
        });
        //  API devuelve un objeto
        return response.data.items;
    } catch (error) {
        console.error('[futuramaService] Error en la petición:', error);
        throw new Error('Fallo al obtener la información de los personajes.');
    }
};