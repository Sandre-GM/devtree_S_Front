import { isAxiosError } from "axios";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import type { RegisterForm } from "../types";
import ErrorsMessages from "../components/ErrorsMessages";
import api from "../config/axios";

export default function RegisterView() {
  const initialValues: RegisterForm = {
    name: "",
    email: "",
    handle: "",
    password: "",
    password_confirmation: "",
  };
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: initialValues });

  const password = watch("password");

  const handleRegister = async (formData: RegisterForm) => {
    try {
      const { data } = await api.post(`/auth/register`, formData);
      toast.success(data);
      reset();
    } catch (error) {
      if (isAxiosError(error) && error.response) {
        toast.error(error.response.data.error);
      }
    }
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-white ">Crear cuenta</h1>
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="bg-white px-5 py-20 rounded-lg space-y-10 mt-10"
      >
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="name" className="text-2xl text-slate-500">
            Nombre
          </label>
          <input
            id="name"
            type="text"
            placeholder="Tu Nombre"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("name", { required: "El nombre es obligatorio" })}
          />
          {errors.name && (
            <ErrorsMessages>{errors.name.message}</ErrorsMessages>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="email" className="text-2xl text-slate-500">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            placeholder="Email de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("email", {
              required: "El correo es obligatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail no válido",
              },
            })}
          />
          {errors.email && (
            <ErrorsMessages>{errors.email.message}</ErrorsMessages>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="handle" className="text-2xl text-slate-500">
            Handle
          </label>
          <input
            id="handle"
            type="text"
            placeholder="Nombre de usuario: sin espacios"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("handle", { required: "El handle es obligatorio" })}
          />
          {errors.handle && (
            <ErrorsMessages>{errors.handle.message}</ErrorsMessages>
          )}
        </div>
        <div className="grid grid-cols-1 space-y-3">
          <label htmlFor="password" className="text-2xl text-slate-500">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Password de Registro"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password", {
              required: "La contraseña es obligatoria",
              minLength: {
                value: 8,
                message: "La contraseña debe ser de mínimo 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <ErrorsMessages>{errors.password.message}</ErrorsMessages>
          )}
        </div>

        <div className="grid grid-cols-1 space-y-3">
          <label
            htmlFor="password_confirmation"
            className="text-2xl text-slate-500"
          >
            Repetir Password
          </label>
          <input
            id="password_confirmation"
            type="password"
            placeholder="Repetir Password"
            className="bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400"
            {...register("password_confirmation", {
              required: "Asegurate de repetir la contraseña",
              validate: (value) =>
                value === password || "Las contraseñas deben ser iguales",
            })}
          />
          {errors.password_confirmation && (
            <ErrorsMessages>
              {errors.password_confirmation.message}
            </ErrorsMessages>
          )}
        </div>

        <input
          type="submit"
          className="bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer"
          value="Crear Cuenta"
        />
      </form>
      <nav className="py-10 flex justify-center gap-2 items-center">
        <span className="text-white text-lg">Inicia sesisión </span>
        <Link
          to="/auth/login"
          className=" bg-white rounded-full py-2 px-4 text-lg hover:bg-slate-500 hover:text-white hover:border transition-colors"
        >
          ahora
        </Link>
      </nav>
    </>
  );
}
