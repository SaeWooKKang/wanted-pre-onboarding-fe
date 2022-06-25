export const emailToId = (email) => {
  let id = '';

  for (let i = 0; i < email.length; i++) {
    if (email[i] != '@') {
      id += email[i];
    } else {
      return id;
    }
  }
  return id;
};
