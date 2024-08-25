import axios from "axios";
import api from "../api";

const signin = async (payload: FormData) => {
  try {
    const { data } = await api.post("/login", payload, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return { error: false, data: data };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return { error: true, data: error.message };
    } else {
      throw "An unexpected error occurred";
    }
  }
};

const authService = {
  signin,
};

export default authService;
