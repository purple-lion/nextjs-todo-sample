import React from "react";
import Link from "next/link";

const HelloPage = () => {
  return (
    <React.Fragment>
      <div>this is hello page</div>
      <Link href="/">
        <a>go to index page</a>
      </Link>
    </React.Fragment>
  );
};

export default HelloPage;
