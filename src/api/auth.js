import axios from 'axios';

const authUrl = 'https://todo-list.alphacamp.io/api/auth';
export const login = async ({ username, password }) => {
  try {
    //response封裝在data，因此透過解構提取data
    const { data } = await axios.post(`${authUrl}/login`, {
      username,
      password,
    });

    //繼續解構提取authToken
    const { authToken } = data;

    //登錄成功
    if (authToken) {
      return { success: true, ...data };
    }
    //登錄失敗
    return data;
  } catch (error) {
    console.error('[Login failed]', error);
  }
};

export const register = async ({ username, email, password }) => {
  try {
    const { data } = await axios.post(`${authUrl}/register`, {
      username,
      email,
      password,
    });

    const { authToken } = data;

    if (authToken) {
      return { success: true, ...data };
    }
    return data;
  } catch (error) {
    console.log('[Register failed]', error);
  }
};

export const checkPermission = async (authToken) => {
  try {
    const response = await axios.get(`${authUrl}/test-token`, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    });
    return response.data.success;
  } catch (error) {
    console.error('[Check Permission Failed]', error);
  }
};
