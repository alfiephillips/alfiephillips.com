/** @type {import('next').NextConfig} */
module.exports = {
    reactStrictMode: true,
    env: {
        USER_EMAIL: process.env.NEXT_PUBLIC_user,
        USER_PASSWORD: process.env.NEXT_PUBLIC_pass,
        BASE_URL: process.env.NEXT_PUBLIC_base_url
    }
};
