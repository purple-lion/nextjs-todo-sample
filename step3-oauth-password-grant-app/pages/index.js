import { useAuth } from "../shared/context/auth";

export default function Home() {
  const { setIsSignedIn, setProfile } = useAuth();
  return (
    <div>
      <button
        onClick={() => {
          console.log("clicked");
          setIsSignedIn(true);
          setProfile({ email: "john@example.com" });
        }}
      >
        Click me
      </button>
    </div>
  );
}
