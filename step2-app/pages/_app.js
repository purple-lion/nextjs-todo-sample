import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { AuthContext } from "../shared/contexts/Auth";
import { useState } from "react";
import BaseLayout from "../shared/layouts/Base";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  const [profile, setProfile] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BaseLayout>
      <AuthContext.Provider
        value={{
          profile,
          isLoggedIn,
          setIsLoggedIn,
          setProfile,
        }}
      >
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </AuthContext.Provider>
    </BaseLayout>
  );
}

export default MyApp;
