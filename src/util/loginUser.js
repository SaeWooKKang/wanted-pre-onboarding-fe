import { user_information } from '../constants/userInformation';

export const loginUser = (dataToSumbit) => {
  const { email, pw } = user_information;
  if (email == dataToSumbit.email && pw == dataToSumbit.pw) {
    const body = {
      loginSuccess: true,
      user: email,
    };
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve(body);
      }, 1000)
    );
  }
  return Promise.resolve({ loginSuccess: false });
};
