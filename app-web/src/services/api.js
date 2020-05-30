const axios = require('axios');
const url = 'http://localhost:3030';

export default {
    add: async (endpoint, data) => {
        return await axios.post(`${url}${endpoint}`, data).then(result => result.data);
    },
    update: async (endpoint, data) => {
        return await axios.put(`${url}${endpoint}`, data);
    },
    delete: async (endpoint) => {
        return await axios.delete(`${url}${endpoint}`)
    },
    getById: async (endpoint) => {
        return await axios.get(`${url}${endpoint}`).then(result => result.data);
    },
    list: async (endpoint) => {
        return await axios.get(`${url}${endpoint}`).then(result => result.data);
    }
}