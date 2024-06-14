// eslint-disable-next-line import/no-anonymous-default-export
export default {
  AUTH: {
    sessionLogin: () => `${process.env.NEXT_PUBLIC_API_URL}/auth/session-login`,
  },
  DATA: {
    getData: () => `${process.env.NEXT_PUBLIC_API_URL}/data/get-data`,
  }
}