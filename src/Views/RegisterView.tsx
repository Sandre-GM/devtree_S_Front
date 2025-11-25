import { Link } from "react-router-dom";

export default function RegisterView() {
  return (
    <>
      <div>Register view</div>
      <nav>
        <Link to="/auth/login">Inicia sesisión ahora</Link>
      </nav>
    </>
  );
}
