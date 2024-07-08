import { DarkModeToggler, Link, Navbar } from "../ui";
import { PortFolioAvatar, DownloadCV, LinkedInLink, GithubLink } from ".";

import { HiUserCircle } from "react-icons/hi";
import { BiCodeAlt } from "react-icons/bi";
import { EnterpriseGithubLink } from "./EnterpriseGithubLink";

export function PortFolioHeader() {
  return (
    <header className="flex flex-col gap-4 justify-center bg-slate-50 dark:bg-slate-900 p-5">
      <PortFolioAvatar />
      <span className="absolute top-3 left-4">
        <DarkModeToggler />
      </span>
      <div className="absolute top-5 right-5 flex flex-col items-end gap-2">
        <GithubLink />
        <EnterpriseGithubLink />
        <DownloadCV />
        <LinkedInLink />
      </div>
      <Navbar>
        <Link to="/" label="Sobre mi" icon={<HiUserCircle />} />
        <Link to="/proyectos" label="Proyectos" icon={<BiCodeAlt />} />
      </Navbar>
    </header>
  );
}
