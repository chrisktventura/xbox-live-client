import {
    createContext,
    useContext,
    ReactNode,
    useState,
    useEffect,
  } from "react";
  import { Game } from "../../types/gametypes";
  import { api } from "../../services/api";
  import { useAuth } from "../auth";
  
  interface GameProviderProps {
    children: ReactNode;
  }
  
  interface GameProviderData {
    games: Game[];
    handleGetGames: () => void;
  }
  
  const GamesContext = createContext<GameProviderData>(
    {} as GameProviderData
  );
  
  export const ProductsProvider = ({ children }: GameProviderProps) => {
    const { logged } = useAuth();
  
    const [games, setGame] = useState<Game[]>([]);
  
    const handleGetGames = () => {
      const token = localStorage.getItem("token");
  
      const headers = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      api.get("/games", headers).then((res) => {
        console.log(res);
        setGame(res.data);
      });
    };
  
    useEffect(() => {
      if (logged) handleGetGames();
    }, [logged]);
  
    return (
      <GamesContext.Provider value={{ games, handleGetGames }}>
        {children}
      </GamesContext.Provider>
    );
  };
  
  export const useGames = () => useContext(GamesContext);
  