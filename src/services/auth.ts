import SignIn from "../pages/SignIn";
interface Response {
  token: string;
  user: {
    name: string;
    email: string;
  }
}

export function signIn(): Promise<Response> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        token: 'xiaomibotaapplepramamar',
        user: {
          name: 'Matheus',
          email: 'matheus@gmail.com',
        },
      })
    }, 2000);
  });
}