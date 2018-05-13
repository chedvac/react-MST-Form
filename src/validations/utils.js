const messageIdentifier = "###";

export const extractMessage = message => {
  const messageExpression = `${messageIdentifier}(.*?)${messageIdentifier}`;
  const messageRegularExpression = new RegExp(messageExpression);

  const result = message.match(messageRegularExpression);
  return result ? result[1] : "";
};