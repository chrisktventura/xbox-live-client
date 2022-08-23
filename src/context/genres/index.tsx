import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import { Genre } from "../../types/genretypes";
  import { api } from "../../services/api";
  import { useAuth } from "../auth";
  
  interface GenreProviderProps {
    children: ReactNode;
  }
  
  interface GenreProviderData {
    genre: Genre[];
    handleGetGenres: () => void;
  }
  
  const GenreContext = createContext<GenreProviderData>(
    {} as GenreProviderData
  );
  
  export const GenresProvider = ({ children }: GenreProviderProps) => {
    const { logged } = useAuth();
  
    const [genre, setGenre] = useState<Genre[]>([]);
  
    const handleGetGenres = () => {
      const token = localStorage.getItem("token");
  
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      api.get("/genres", headers).then((res) => {
        console.log(res);
        setGenre(res.data);
      });
    };
  
    useEffect(() => {
      if (logged) handleGetGenres();
    }, [logged]);
  
    return (
      <GenreContext.Provider value={{ genre, handleGetGenres }}>
        {children}
      </GenreContext.Provider>
    );
  };
  
  export const useGenre = () => useContext(GenreContext);