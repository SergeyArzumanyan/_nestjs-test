export default () => ({
  port: process.env?.PORT ? parseInt(process.env.PORT, 10) : 3000,
  environment: process.env.NODE_ENV || 'development',
  api: {
    timeout: process.env?.API_TIMEOUT ? parseInt(process.env.API_TIMEOUT, 10) : 5000,
  },
  logging: {
    level: process.env?.LOG_LEVEL || 'info',
  },
  rateLimit: {
    ttl: process.env?.RATE_LIMIT_TTL ? parseInt(process.env.RATE_LIMIT_TTL, 10) : 60,
    max: process.env.RATE_LIMIT_MAX ? parseInt(process.env.RATE_LIMIT_MAX, 10) : 50,
  },
});
