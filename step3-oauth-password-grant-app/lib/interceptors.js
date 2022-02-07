import axios from "axios";

if (typeof window !== "undefined") {
  console.log({ window });
  axios.interceptors.request.use((cfg) => {
    if (cfg.url.startsWith(window.API_ENDPOINT)) {
      cfg.headers.authorization = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;
    }

    return cfg;
  });

  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      let errResponseStatus = null;
      const originalRequest = error.config;

      try {
        errResponseStatus = error.response.status;
        // eslint-disable-next-line no-empty
      } catch (e) {}

      if (
        (error.message === "Network Error" || errResponseStatus === 401) &&
        !originalRequest.retry
      ) {
        originalRequest.retry = true;
        const prevRefreshToken = localStorage.getItem("refresh_token");
        if (prevRefreshToken) {
          return axios
            .post("/api/oauth/token", {
              grant_type: "refresh_token",
              refresh_token: prevRefreshToken,
            })
            .then((res) => {
              const { access_token, refresh_token } = res.data;
              localStorage.setItem("access_token", access_token);
              localStorage.setItem("refresh_token", refresh_token);

              originalRequest.headers.authorization = `Bearer ${access_token}`;
              return axios(originalRequest);
            })
            .catch(() => {
              localStorage.removeItem("access_token");
              localStorage.removeItem("refresh_token");
              localStorage.removeItem("profile");
              window.location.href = "/";

              return false;
            });
        }

        return Promise.reject(error);
      }

      return Promise.reject(error);
    }
  );
}
