import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import { Profile } from "../../types/profiletypes";
  import { api } from "../../services/api";
  import { useAuth } from "../auth";
  
  interface ProfileProviderProps {
    children: ReactNode;
  }
  
  interface ProfileProviderData {
    profile: Profile[];
    handleGetProfile: () => void;
  }
  
  const ProfileContext = createContext<ProfileProviderData>(
    {} as ProfileProviderData
  );
  
  export const ProfileProvider = ({ children }: ProfileProviderProps) => {
    const { logged } = useAuth();
  
    const [profile, setProfile] = useState<Profile[]>([]);
  
    const handleGetProfile = () => {
      const token = localStorage.getItem("token");
  
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      api.get("/profile", headers).then((res) => {
        console.log(res);
        setProfile(res.data);
      });
    };
  
    useEffect(() => {
      if (logged) handleGetProfile();
    }, [logged]);
  
    return (
      <ProfileContext.Provider value={{ profile, handleGetProfile }}>
        {children}
      </ProfileContext.Provider>
    );
  };
  
  export const useProfile = () => useContext(ProfileContext);