import React, { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../shared/context/auth";
import { useRouter } from "next/router";
import jwtDecode from "jwt-decode";

const LoginPage = () => {
  const { setIsSignedIn, setProfile } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsSignedIn(false);
    setProfile(null);
    ["access_token", "refresh_token", "profile"].forEach((key) => {
      localStorage.removeItem(key);
    });
    router.push("/");
  }, []);

  return <div>Loading ...</div>;
};

export default LoginPage;
