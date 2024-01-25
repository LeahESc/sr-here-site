module.exports = {
  async headers() {
    return [
      {
        source: '/work',
        headers: [
          {
            key: 'Authorization',
            value: `Bearer ${process.env.THE_MOVE_DATABASE_KEY}`,
          },
          {
            key: 'accept',
            value: 'application/json',
          },
        ],
      },
    ]
  },
}