/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        USER_EMAIL: process.env.user,
        USER_PASSWORD: process.env.pass,
        BASE_URL: process.env.base_url
    }
};
