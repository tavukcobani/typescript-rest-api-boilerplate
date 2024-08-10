import dotenv from 'dotenv';
dotenv.config();

// Server
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || 'localhost';
const SERVER_PORT = process.env.SERVER_PORT || 4334;

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT
};

// Database
const EXAMPLE_DB_SERVER_FQDN_DB_SERVER_FQDN = process.env.EXAMPLE_DB_SERVER_FQDN			|| '';
const EXAMPLE_DB_NAME   = process.env.EXAMPLE_DB_NAME						|| '';
const EXAMPLE_DB_USER   = process.env.EXAMPLE_DB_USER						|| '';
const EXAMPLE_DB_PASS   = process.env.EXAMPLE_DB_PASS						|| '';

const DATABASE = {
    serverFqdn  : EXAMPLE_DB_SERVER_FQDN_DB_SERVER_FQDN,
    database    : EXAMPLE_DB_NAME,
    username    : EXAMPLE_DB_USER,
    password    : EXAMPLE_DB_PASS,
    port        : 5432,
};

const CLIENT_ID = process.env.CLIENT_ID || '';

const auth = {
    credentials: {
        issuer: process.env.ISSUER || '',
        clientId: CLIENT_ID        || '',
    },
    resource: {
        scope: []
    },
    metadata: {
        authority: `login.microsoftonline.com`,
        version: "v2.0"
    }
}

const config = {
    server: SERVER,
    database: DATABASE,
    auth: auth
};

export default config;
