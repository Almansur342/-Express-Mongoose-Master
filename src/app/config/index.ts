import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  database_url: process.env.DATABASR_URL,
  default_password: process.env.DEFAULT_PASS,
  bcrypt_Number: process.env.BCRYPT_NUMBER,
};
