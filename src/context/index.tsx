import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./auth";
import { GamesProvider } from "./games";
import theme from "../assets/styles/theme";
import { GenresProvider } from "./genres";
import { ProfileProvider } from "./profiles";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <ProfileProvider>
            <GenresProvider>{children}
              <GamesProvider>{children}</GamesProvider>
            </GenresProvider>
          </ProfileProvider>
        </AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Providers;
