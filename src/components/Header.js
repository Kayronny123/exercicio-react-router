import { goToHome, goToProfile, goToProduct } from "../router/coordinator";
import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button onClick={() => goToHome(navigate)}>Página Inicial</button>;
      <button onClick={() => goToProfile(navigate, "perfil")}>
        Página Perfil
      </button>
      <button onClick={() => goToProduct(navigate, "id")}>
        Página Produtos
      </button>
      ;
    </div>
  );
}
