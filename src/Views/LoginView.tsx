import { Link } from "react-router-dom";

export default function LoginView() {
  return (
    <>
      <h1 className="text-4xl font-bold text-white ">Iniciar Sesion</h1>
      <nav className="py-10 flex justify-center gap-2 items-center">
        <span className="text-white text-lg">Registrate</span>
        <Link
          to="/auth/register"
          className=" bg-white rounded-full py-2 px-4 text-lg hover:bg-slate-500 hover:text-white hover:border transition-colors"
        >
          ahora
        </Link>
      </nav>
    </>
  );
}
