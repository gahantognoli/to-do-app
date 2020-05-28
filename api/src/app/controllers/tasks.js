module.exports = {
    index: async (req, res) => {
        res.end('index')
    },
    add: async (req, res) => {
        res.end('add')
    },
    getById: async (req, res) => {
        res.end('getById');
    },
    update: async (req, res) => {
        res.end('update');
    },
    delete: async (req, res) => {
        res.end('delete');
    }
}