import React from "react";
import { useAuth } from "../context/auth";
import Link from "next/link";

const BaseLayout = ({ children }) => {
  const { isSignedIn, profile } = useAuth();

  return (
    <div>
      <ul>
        {isSignedIn ? (
          <>
            <li>
              <Link href="/logout">
                <a>Logout</a>
              </Link>
            </li>
            <li>
              <Link href="/banners">
                <a>Banner List</a>
              </Link>
            </li>
          </>
        ) : (
          <li>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </li>
        )}
      </ul>
      {profile && <div>{profile.email}</div>}
      <hr />
      <div>{children}</div>
    </div>
  );
};

export default BaseLayout;
