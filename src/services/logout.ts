import api from "./api";
import { cookies } from "~/utils";

export const logout = async () => {
  try {
    await api.post("/logout");
  } catch (error) {
    console.error("Erro durante o logout:", error);
  } finally {
    cookies.remove("token");
    cookies.remove("user");
    window.location.reload();
  }
};
