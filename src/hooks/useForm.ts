import { FormEvent, useRef, useState } from 'react'
import { useNavigate } from 'react-router';
import { http } from '../services/api';
import { useAuthStore } from '../store/useAuthStore';

interface User {
   accessToken: string
   refreshToken: string
   id: number
   username: string
   email: string
   firstName: string
   lastName: string
   gender: string
   image: string
}

const useForm = () => {
   const username = useRef<HTMLInputElement>(null);
   const password = useRef<HTMLInputElement>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState({ username: '',password: '',error: ''});
   const navigate = useNavigate();

   const saveLocalStorage = useAuthStore(state => state.saveInfo);
   /* funcion para enviar la peticion */
   const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      try {
         if (username.current && password.current) {
            const name = username.current.value;
            const pass = password.current.value;
            setIsLoading(true)
            /* validacionn de los ref */
            if(!username.current.value && !password.current.value) return setError(prev => ({ ...prev, error: 'Faltan usuario y contraseña' }));

            /* uso de nuestra clase http */
            const data = await http.post<User>('/auth/login', {
               username: name,
               password: pass
            }, '');

            /* guardar en LocalStorage */
            saveLocalStorage({
               token: data.accessToken,
               id: data.id,
               name: data.username
            });
            
            navigate("/profile")
         }
      } catch (e) {
         if (e instanceof Error) {
            const errorData = JSON.parse(e.message.split(": ")[1]);
            setError(prev => ({ ...prev, error: errorData.message }));
         }
      } finally {
         setIsLoading(false)
      }
   };

   /* funcion para validar campos */
   const validate = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;

      setError((prev) => ({
         ...prev,
         [name]: !value ? `El ${name} campo es requerido` : '',
         error: ''
      }));

   }

   return {
      username,
      password,
      handleSubmit,
      validate,
      error,
      isLoading
   }
}

export default useForm