import dotenv from 'dotenv';
import path from 'path';
const envName = process.env.NODE_ENV;

dotenv.config({ path: path.resolve(__dirname, `configuration/.env.${envName}`) });

const get = variableName => process.env[variableName];

export default { get } ;
