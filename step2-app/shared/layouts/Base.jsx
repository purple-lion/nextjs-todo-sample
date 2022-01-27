import React from "react";
import Link from "next/link";

const BaseLayout = ({ children }) => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/profile/update">Update Profile</Link>
        </li>
        <li>
          <Link href="/todos">Todo List</Link>
        </li>
      </ul>
      <hr />

      {children}
    </div>
  );
};

export default BaseLayout;
