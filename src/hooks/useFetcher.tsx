import { useEffect, useState } from "react";
import { UserInfo } from "../interfaces";
import { http } from "../services/api";

interface Props {
   url: string,
   token: string,
   setUser: React.Dispatch<React.SetStateAction<UserInfo>>
}

/* hook para obtener la informacion del empleado logeado */
const useFetcher = ({ url, token, setUser }: Props) => {
   const [isLoading, setIsLoading] = useState(false);
   const getData = async () => {
      try {
         setIsLoading(true)
         const data = await http.get<UserInfo>(`${url}`, token);
         setUser(data);
      } finally {
         setIsLoading(false)
      }
   }

   useEffect(() => {
      getData();
   }, []);

   return {
      isLoading
   }
}

export default useFetcher