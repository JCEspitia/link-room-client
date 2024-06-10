import { useNavigate } from "react-router-dom";
import { getPageFavicon } from "../api/favicon.api.js";
import { generatePath } from "../utils/utils.js";
import { ROUTES } from "../routes.js";

export function LinkCard({ link }) {
  const navigate = useNavigate();

  return (
    <div
      className="bg-eastern-blue hover:bg-buttercup text-wild-sand cursor-pointer content-center rounded-lg p-3 shadow-md transition-all hover:scale-105"
      onClick={() => {
        navigate(generatePath(ROUTES.EDIT_LINK, {id: link.id}));
      }}
    >
      <div className="flex items-center gap-3">
        <div className="bg-wild-sand overflow-hidden rounded-full p-2.5">
          <img className="w-8" src={getPageFavicon(link.url)} alt="Favicon" />
        </div>

        <div>
          <h1 className="text-xl font-bold">{link.title}</h1>
          <p className="hidden text-sm md:block">{link.description}</p>
        </div>
      </div>
    </div>
  );
}
