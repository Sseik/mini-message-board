import messagesStorage from "../storages/messagesStorage.js";

export async function getMessages(req, res) {
  const messages = await messagesStorage.getMessages();
  res.render("index", { title: "Message Board", messages });
}

export function getMessageForm(req, res) {
  res.render("form", { title: "Message Form" });
}

export async function postMessage(req, res) {
  const { user, text } = req.body;

  await messagesStorage.addMessage({
    user,
    text,
    added: new Date().toISOString()
  });
  res.redirect("/");
}
