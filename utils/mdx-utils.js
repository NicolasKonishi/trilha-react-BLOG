import { api } from '../services/api';

export const getPosts = async () => {
    try {
        const { data } = await api.get('/posts');

        if (data) {
            return data;
        }
    } catch (error) {
        console.error('Erro ao buscar os posts:', error);
        return [];
    }

    return [];
}

export const getPostBySlug = async (id) => {
    try {
       
        const { data } = await api.get(`/posts/${id}`); 

        if (data) {
            return data;
        }
    } catch (error) {
        console.error('Erro ao buscar o post:', error);
        return null; 
    }

    return null;
}
