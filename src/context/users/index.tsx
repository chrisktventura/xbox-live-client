import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import { User } from "../../types/usertypes";
  import { api } from "../../services/api";
  import { useAuth } from "../auth";
  
  interface UserProviderProps {
    children: ReactNode;
  }
  
  interface UserProviderData {
    user: User[];
    handleGetUser: () => void;
  }
  
  const UserContext = createContext<UserProviderData>(
    {} as UserProviderData
  );
  
  export const UserProvider = ({ children }: UserProviderProps) => {
    const { logged } = useAuth();
  
    const [user, setUser] = useState<User[]>([]);
  
    const handleGetUser = () => {
      const token = localStorage.getItem("token");
  
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      api.get("/user", headers).then((res) => {
        console.log(res);
        setUser(res.data);
      });
    };
  
    useEffect(() => {
      if (logged) handleGetUser();
    }, [logged]);
  
    return (
      <UserContext.Provider value={{ user, handleGetUser }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export const useUser = () => useContext(UserContext);