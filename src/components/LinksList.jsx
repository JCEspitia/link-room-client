import { useEffect, useState } from "react";
import { getAllLinks } from "../api/links.api.js";
import { LinkCard } from "./LinkCard.jsx";

export function LinksList() {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    async function loadLinks() {
      const res = await getAllLinks();
      setLinks(res.data);
    }

    loadLinks();
  }, []);

  return (
    <div className="wrapper py-6 grid gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
      {links.map((link) => (
        <LinkCard key={link.id} link={link} />
      ))}
    </div>
  );
}
