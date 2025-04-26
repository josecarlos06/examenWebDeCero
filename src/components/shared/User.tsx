import logo from '../../assets/webcero.png';
import type { UserInfo } from '../../interfaces';
import { useAuthStore } from '../../store/useAuthStore';
import ButtonExit from './ButtonExit';


const User = ({ children }: { children: React.ReactNode }) => {
   return (
      <section className="bg-white w-4/5 lg:w-1/3 rounded-lg relative py-10">
         {children}
      </section>
   );
};

const Avatar = () => (
   <figcaption className="absolute shadow-[0_5px_30px_rgba(234,_77,_136,_1)] border-8 border-secondary flex rounded-full overflow-hidden -top-18 left-1/2 translate-x-[-50%] w-36 h-36">
      <img src={logo} alt="Logo" className="w-full h-full object-cover" />
   </figcaption>
);

const Info = ({ user }: { user: UserInfo }) => (
   <div className="text-center mt-14 text-base/10">
      <h1 className="font-bold text-secondary text-2xl">
         {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-600">{user.email || ''}</p>
   </div>
);

const Address = ({ user }: { user: UserInfo }) => (
   <div className="flex justify-center items-center gap-2">
      <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="size-6"
      >
         <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
         <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
      <p className="font-bold text-gray-700">
         {user?.address?.city} - {user?.address?.country}
      </p>
   </div>
);

const Meta = ({ user }: { user: UserInfo }) => (
   <>
      <div className="flex justify-center items-center gap-10 my-5 text-gray-700 font-bold 2xl:text-2xl">
         <p>{user.birthDate}</p>
         <p>{user.age}</p>
         <p>{user.phone}</p>
      </div>

      <div className="text-start text-base/7 md:w-1/2 md:ml-32">
         <p>Informacion personal: {user.eyeColor}</p>
         <p>Informacion personal: {user.gender}</p>
         <p>Informacion personal: {user.weight}</p>
      </div>
   </>
);

const LogoutButton = () => {
   const removeToken = useAuthStore(state => state.removeToken);
   
   return (
      <ButtonExit
         onClick={removeToken}
      />
   );
};

User.Avatar = Avatar;
User.Info = Info;
User.Address = Address;
User.Meta = Meta;
User.LogoutButton = LogoutButton;

export default User;
