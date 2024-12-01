import dotenv from 'dotenv';
import { ClickHouse } from 'clickhouse';

dotenv.config();

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

export default clickhouse; 
