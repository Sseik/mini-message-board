import messagesStorage from "../storages/messagesStorage.js";

export async function getMessages(req, res) {
  const messages = await messagesStorage.getMessages();
  res.render("index", { messages });
}
