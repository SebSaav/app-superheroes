import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const logIn = () => {
    navigate("/inicio");
  }

  return (
    <div className="flex h-screen justify-center items-center">
      <button onClick={logIn} className="bg-blue-600 py-6 px-10 rounded-lg font-bold text-white text-2xl">
        Ingresar 🤠
      </button>
    </div>
  );
};
