export const getLogInData = () => {
  return JSON.parse(localStorage.getItem('user'));
};
