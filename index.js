require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const { query } = require('./db');

;(async () => {
  const res = await query('SELECT * FROM schedule WHERE schedule_id = $1', [OA3YWs8w]);
  console.log(res);
});
