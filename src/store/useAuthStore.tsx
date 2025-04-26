import { create } from "zustand";
import { persist } from 'zustand/middleware';

interface Token {
   token: string,
   id: number,
   name: string
}

interface AuthStore {
   saveInfo: (info: Token) => void,
   infoToken: Token,
   removeToken: () => void
}


export const useAuthStore = create<AuthStore>()(
   persist(
      (set) => ({
         infoToken: {} as Token,
         saveInfo: (info) => set(() => ({ infoToken: info })),
         removeToken : ()=> set( () => ({ infoToken : {} as Token }))
      }),
      { name: 'accesToken' },
   ),
);
