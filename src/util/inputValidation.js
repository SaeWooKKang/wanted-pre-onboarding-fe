export const validationCheck = (text, regExp) => {
  if (text == '') return -1;

  return regExp.test(text);
};
