module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b4de5626a4dc42495084c337239c93cc'),
  },
});
