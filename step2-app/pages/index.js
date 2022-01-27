import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <>
      <div>hello, world</div>
      <hr />
      <Link href="/hello">go to hello page</Link>
    </>
  );
}
