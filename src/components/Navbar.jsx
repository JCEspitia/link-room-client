import { Link } from "react-router-dom";

import logo from "../assets/images/linkroom_logo.png";
import { ROUTES } from "../routes.js";

export function Navbar() {
  return (
    <nav className="wrapper flex h-20 max-w-screen-xl items-center justify-between">
      <Link
        to={ROUTES.HOME}
        className="bg-link-room-logo bg-inherit transition-all hover:-rotate-45 hover:scale-105"
      >
        <img className="w-12" src={logo} alt="Logo LinkRoom" />
      </Link>
      <Link
        to={ROUTES.CREATE_LINK}
        className="text-atoll text-xl font-semibold transition-all hover:opacity-75"
      >
        Create link
      </Link>
    </nav>
  );
}
