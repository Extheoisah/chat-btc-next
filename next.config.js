/** @type {import('next').NextConfig} */
const { withAxiom } = require('next-axiom');
require('dotenv').config();

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withAxiom(nextConfig)
module.exports = {
  env: {
    SUPABASE_URL:process.env.SUPABASE_URL,
    SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    DB_NAME:process.env.DB_NAME,
    BASE_URL:process.env.BASE_URL,
    SPEC_HASH:process.env.SPEC_HASH,
    API_KEY:process.env.API_KEY,
    MONGO_URL:process.env.MONGO_URL,
    MONGO_DB_NAME:process.env.MONGO_DB_NAME,
    COLLECTION_NAME:process.env.COLLECTION_NAME
  }
}
