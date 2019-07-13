var configeValue = require('./config');
module.exports = {
    getDbConnectionString: () => {
        return `mongodb+srv://${configeValue.username}:${configeValue.password}@node-todos-pqttf.mongodb.net/test?retryWrites=true&w=majority`
    }
}