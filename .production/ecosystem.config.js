// @ts-check

const env = {
	PM2_SERVE_PATH: 'build',
	PM2_SERVE_PORT: 3000,
	PM2_SERVE_SPA: 'true',
	PM2_SERVE_HOMEPAGE: '/index.html',
};

/** @type {import('./pm2.types').Pm2Config} */
const config = {
	apps: [
		{
			name: 'portal-production',
			script: 'serve',
			env: {
				...env,
				PM2_SERVE_PORT: 3000,
			},
		},
		{
			name: 'portal-dev',
			script: 'serve',
			env: {
				...env,
				PM2_SERVE_PORT: 3001,
			},
		},
		{
			name: 'portal-qa',
			script: 'serve',
			env: {
				...env,
				PM2_SERVE_PORT: 3002,
			},
		},
	],
};

module.exports = config;
