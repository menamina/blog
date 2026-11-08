import { Link } from "react-router-dom";

const pages = [
  { page: "Programming", url: "/programming" },
  { page: "Art", url: "/art" },
  { page: "Games", url: "/games" },
  { page: "Makeup", url: "/makeup" },
  { page: "Misc", url: "/misc" },
];

function OpenedNav() {
  return (
    <div>
      {pages.map((page) => (
        <Link to={`${page.url}`}>{page.page}</Link>
      ))}
    </div>
  );
}

export default OpenedNav;
