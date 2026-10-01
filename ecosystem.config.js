module.exports = {
  apps: [
    {
      name: 'kacy-landing',
      script: 'node_modules/next/dist/bin/next',
      interpreter: '/root/.nvm/versions/node/v24.14.0/bin/node',
      args: 'start -p 6001',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
        API_URL: 'https://api.kacyai.co',
      },
    },
  ],
};
