import api from "./api";
import { cookies } from "~/utils";

export const logout = async () => {
  try {
    const response = await api.post("/logout");
    if (response.status === 200) {
      cookies.remove("token");
      cookies.remove("user");
      window.location.reload();
    }
  } catch (error) {
    console.error("Erro durante o logout:", error);
  }
};
