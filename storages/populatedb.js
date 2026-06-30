import { Client } from "pg";

const connectionString = process.argv.at(-1);

const SQL = `
  CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    user_added VARCHAR ( 255 ),
    added TIMESTAMP
  );

  INSERT INTO messages ( text, user_added, added )
  VALUES ('Hello', 'Sseik', '${new Date().toISOString()}'),
         ('Goodbye', 'kiesS', '${new Date().toISOString()}');
`;

async function main() {
  const client = await new Client({
    connectionString: connectionString
  }).connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
