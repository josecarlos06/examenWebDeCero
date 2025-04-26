import { useAuthStore } from '../../store/useAuthStore';
import { useState } from 'react';
import { UserInfo } from '../../interfaces';
import useFetcher from '../../hooks/useFetcher';
import Loader from '../../components/shared/Loader';
import User from '../../components/shared/User';

const Profile = () => {
  const token = useAuthStore(state => state.infoToken.token)
  const [user, setUser] = useState<UserInfo>({} as UserInfo);
  const { isLoading } = useFetcher({ url: "/auth/me", token, setUser });

  return (
    <main className='bg-primary h-screen flex items-center justify-center'>
      {
        isLoading
          ? <Loader />
          : <User>
            <User.Avatar />
            <User.Info user={user} />
            <User.Address user={user} />
            <User.Meta user={user} />
            <User.LogoutButton />
          </User>

      }
    </main>
  )
}

export default Profile
