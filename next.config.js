/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        API_KEY: process.env.api_key,
        BASE_URL: process.env.base_url
    }
};
