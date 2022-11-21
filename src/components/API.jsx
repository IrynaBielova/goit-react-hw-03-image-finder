import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = "31262189-5622bc61388733923dd9d0c9f";

export const FetchStartGallery = async(page) => {
    const response = await axios.get(
        `?page=${page}&key=${API_KEY}&orientation=horizontal&per_page=12`
    );  
    const responseData = await response.data;
    if (!responseData.total) {
        return Promise.reject(new Error(`No image with that name`));
        ;
    }
    return responseData;   
}

export const FetchSearch = async(value, page) => {
    const response = await axios.get(
        `?q=${value}&page=${page}&key=${API_KEY}&orientation=horizontal&per_page=12`
    );  
    const responseData = await response.data;
    if (!responseData.total) {
        return Promise.reject(new Error(`No image with name ${value}`));
    }
    return responseData;   
}
