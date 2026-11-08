import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Search from "./search";
import OpenedNav from "./openedNav";

function Nav() {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
      <nav aria-label="Main Navigation">
        <ul>
          <li>
            <a href={`/#home`}>home</a>
          </li>

          <ul>
            <li>
              <Search />
            </li>
            <li>
              <p onClick={() => setOpen((prev) => !prev)}>
                {!open ? "[explore]" : "[close]"}
              </p>
            </li>
          </ul>
        </ul>
      </nav>

      {open && <OpenedNav />}
    </div>
  );
}

export default Nav;
