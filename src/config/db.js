require('dotenv').config();
const { ClickHouse } = require('clickhouse');

const clickhouse = new ClickHouse({
    url: process.env.HOST,   
    port: 8123,               
    debug: false,             
    basicAuth: {              
        username: 'default',
        password: ''
    },
    isUseGzip: false,         
    format: "json"            
});

module.exports = clickhouse;
