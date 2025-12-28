import { neon } from '@netlify/neon';

export const handler = async (event, context) => {
  const sql = neon(); // Usa la variable NETLIFY_DATABASE_URL automáticamente
  try {
    const rows = await sql`SELECT * FROM events ORDER BY date ASC`;
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(rows)
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};