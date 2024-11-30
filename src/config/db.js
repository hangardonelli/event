const { ClickHouse } = require('clickhouse');

const clickhouse = new ClickHouse({
    url: 'ip',   
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
