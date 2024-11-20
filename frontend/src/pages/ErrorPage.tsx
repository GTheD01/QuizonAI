import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div>
      <h2 className="text-red-500">Something wrong happened.</h2>
      <Link to={"/"} className="underline underline-offset-8 hover:opacity-90">
        Home Page
      </Link>
    </div>
  );
}
