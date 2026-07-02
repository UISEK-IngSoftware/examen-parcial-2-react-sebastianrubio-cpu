import { describe, it, expect, vi } from 'vitest';
import axios from 'axios';
import { getCharacters } from '../services/futuramaService.js';

// Bloquea las llamadas Axios 
vi.mock('axios', () => {
  return {
    default: {
      create: vi.fn(() => ({
        get: vi.fn()
      }))
    }
  };
});

describe('futuramaService API Integration', () => {
    it('debe mapear y retornar un array de personajes correctamente', async () => {
        const mockResponse = {
            data: {
                items: [{ id: 1, name: 'Philip J. Fry', status: 'ALIVE' }]
            }
        };

        const apiClient = axios.create();
        apiClient.get.mockResolvedValueOnce(mockResponse);

        const characters = await getCharacters();

        // Validar 
        expect(apiClient.get).toHaveBeenCalledWith('/characters', {
            params: { orderBy: 'id', orderByDirection: 'asc', page: 1, size: 50 }
        });
        expect(characters).toHaveLength(1);
        expect(characters[0].name).toBe('Philip J. Fry');
    });

    it('debe capturar errores de red y propagar un error controlado', async () => {
        const apiClient = axios.create();
        apiClient.get.mockRejectedValueOnce(new Error('Network error'));

        await expect(getCharacters()).rejects.toThrow('Fallo al obtener la información de los personajes.');
    });
});