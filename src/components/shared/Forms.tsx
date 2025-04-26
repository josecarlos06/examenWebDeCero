import Input from "./Input"
import useForm from "../../hooks/useForm";
import Loader from "./Loader";
import Button from "./Button";


const Forms = () => {
   /* hook para la logica de login */
   const { handleSubmit, username, password, validate, error, isLoading } = useForm();

   return (
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 relative" autoComplete="off">



         {error.username && <p className="text-red-400">{error.username}</p>}
         <Input
            ref={username}
            type="text"
            placeholder="Usuario"
            name="username"
            onBlur={validate}
            disabled={isLoading}

         />

         {error.password && <p className="text-red-400">{error.password}</p>}
         <Input
            ref={password}
            type="password"
            placeholder="Contraseña"
            name="password"
            onBlur={validate}
            disabled={isLoading}
         />
         {
            isLoading &&
            <div className="flex justify-center items-center my-2">
               <Loader />
            </div>
         }

         {
            error.error &&
            <div className="bg-red-400 text-center p-1 rounded">
               {error.error && <p className="text-white">{error.error}</p>}
            </div>
         }

         <Button
            title="Autenticar"     
            type="submit"
         />


      </form>
   )
}

export default Forms