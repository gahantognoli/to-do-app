const axios = require('axios');
const url = 'http://10.0.2.2:3030/';

export default {
    add: async (endpoint, data) => {
        return axios.post(`${url}${endpoint}`, data)
            .then(result => result.data)
            .catch(err => err);
    },
    update: async (endpoint, data) => {
        return axios.put(`${url}${endpoint}`, data)
            .then(result => result)
            .catch(err => err);
    },
    delete: async (endpoint) => {
        return axios.delete(`${url}${endpoint}`)
            .then(result => result.data)
            .catch(err => err);
    },
    list: async (endpoint) => {
        return axios.get(`${url}${endpoint}`)
            .then(result => result.data)
            .catch(err => err);
    },
    getById: async (endpoint) => {
        return axios.get(`${url}${endpoint}`)
            .then(result => result.data)
            .catch(err => err);
    }
}