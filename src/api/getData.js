import axios from 'axios';

export const getDentistas = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
  } catch (error) {
    console.log('Algo malió sal: ', error);
    throw error;
  }
};

export const getDentistaById = async (id) => {
    try {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
      return response.data;
    } catch (error) {
      console.error('Algo malió sal: ', error);
      throw error;
    }
  };