import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
//   import swal from "sweetalert";
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

    

    // const createProfile = (profile: Profile) => {
    //     const token = localStorage.getItem("token");
    //     const headers = {
    //         headers: {
    //             Authorization: `Bearer ${token}`,
    //         },
    //     };

    //     api.post("/profile", profile, headers).then((res) => {
    //         console.log(res);
    //         setProfile(res.data);
    //     }).catch((err) => {
    //         console.log(err);
    //     }).finally(() => {
    //         handleGetProfile();
    //     }).finally(() => {
    //         swal({
    //             title: "Profile Created",
    //             text: "Profile created successfully",
    //             icon: "success",
    //         });
    //     });

    // }
  
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