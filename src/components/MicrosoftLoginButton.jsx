 
import React from "react";
import { useMsal } from "@azure/msal-react";

const MicrosoftLoginButton = ({ onSuccess }) => {
  const { instance } = useMsal();

  const handleLogin = async () => {
    try {
      const response = await instance.loginPopup({
        scopes: ["User.Read"],
      });

      const { name, username } = response.account;

      // Envia os dados de volta para o App
      onSuccess?.({
        name,
        email: username,
        provider: "microsoft"
      });
    } catch (error) {
      console.error("❌ Erro no login Microsoft:", error);
    }
  };

  return (
    <button
      onClick={handleLogin}
      className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Login com Microsoft
    </button>
  );
};

export default MicrosoftLoginButton;
