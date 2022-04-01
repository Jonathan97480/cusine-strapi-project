module.exports=({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env.int('PORT', 3000),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
