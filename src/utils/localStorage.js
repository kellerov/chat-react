export const userKey = "$user";
export const messagesKey = "$messages";

export const setUser = (user) => localStorage.setItem(userKey, user);
export const getUser = () => localStorage.getItem(userKey);
export const removeUser = () => localStorage.removeItem(userKey);

export const setMessagesInChat = (messages) =>
  localStorage.setItem(messagesKey, JSON.stringify(messages));
export const getMessageFromChat = () =>
  JSON.parse(localStorage.getItem(messagesKey));
