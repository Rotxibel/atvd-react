
export const getPersonagens = async () => {
  try {
    const response = await fetch(
      'https://hp-api.onrender.com/api/characters'
    );

    if (!response.ok) {
      throw new Error('Erro ao buscar personagens');
    }

    const dados = await response.json();

    return dados;
  } catch (error) {
    console.log('Erro na API:', error);

    return [];
  }
};
