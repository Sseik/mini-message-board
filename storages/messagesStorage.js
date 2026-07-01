import { Pool } from "pg";

class MessagesStorage {
  constructor() {
    this.pool = new Pool({
      connectionString: process.env.CONNECTION_STRING
    });
  }

  async getMessages() {
    const { rows } = await this.pool.query("SELECT * FROM messages;");
    return rows;
  }

  async addMessage(message) {
    const { text, user, added } = message;
    await this.pool.query(
      "INSERT INTO messages (text, user_added, added) VALUES ($1, $2, $3);",
      [text, user, added]
    );
  }
}

export default new MessagesStorage();
