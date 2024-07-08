import { AiFillGithub } from "react-icons/ai";

export function GithubLink() {
  return (
    <a
      title="Descargar CURRICULUM VITAE"
      className="text-purple-500 h-9 w-9 grid place-content-center sm:block sm:h-auto sm:w-max sm:py-1.5 sm:px-3 rounded-full overflow-hidden group relative border-2 border-purple-500 hover:text-white"
      href="https://github.com/IraiDevPersonal"
      target="_blank"
      rel="noreferrer"
    >
      <span className="absolute z-10 bg-purple-500 right-full rounded-full top-0 group-hover:translate-x-full duration-200 ease-linear block h-full w-full" />
      <span className="relative flex items-center gap-3 z-20 w-full h-full">
        <label className="hidden sm:block cursor-pointer">
          Github Personal
        </label>
        <AiFillGithub className="text-lg" />
      </span>
    </a>
  );
}
