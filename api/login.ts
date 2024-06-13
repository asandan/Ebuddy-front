export const login = async (idToken: string) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sessionLogin'`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ idToken })
    });

    return await response.json();
  }
  catch (err) {
    console.log(err);
  }
};