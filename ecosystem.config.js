module.exports = {
  apps: [
    {
      name: 'kacy-landing',
      script: 'npm',
      args: 'run start -- -p 6001',
      cwd: __dirname,
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
