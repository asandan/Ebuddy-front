// eslint-disable-next-line import/no-anonymous-default-export
export default {
  AUTH: {
    sessionLogin: () => `${process.env.NEXT_PUBLIC_API_URL}/api/users/sessionLogin`,
  },
}