import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./auth";
import { GamesProvider } from "./games";
import theme from "../assets/styles/theme";
import { GenresProvider } from "./genres";
import { ProfileProvider } from "./profiles";
import { UserProvider } from "./users";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <UserProvider>
          <ProfileProvider>
            <GenresProvider>
              <GamesProvider>{children}</GamesProvider>
            </GenresProvider>
          </ProfileProvider>
          </UserProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
