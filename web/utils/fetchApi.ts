export const fetchApi = async (
  url: string,
  method: string,
  body: any = null
): Promise<any> => {
  console.log(url);
  try {
    const response = await fetch(`${url}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: body ? JSON.stringify(body) : null,
    });

    if (!response.ok) {
      throw new Error(`Error ${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (error: any) {
    throw new Error(`Error al hacer la petición: ${error.message}`);
  }
};
