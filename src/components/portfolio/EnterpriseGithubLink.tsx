import { AiFillGithub } from "react-icons/ai";

export function EnterpriseGithubLink() {
  return (
    <a
      title="Descargar CURRICULUM VITAE"
      className="text-amber-500 h-9 w-9 grid place-content-center sm:block sm:h-auto sm:w-max sm:py-1.5 sm:px-3 rounded-full overflow-hidden group relative border-2 border-amber-500 hover:text-white"
      href="https://github.com/IraiDev"
      target="_blank"
      rel="noreferrer"
    >
      <span className="absolute z-10 bg-amber-500 right-full rounded-full top-0 group-hover:translate-x-full duration-200 ease-linear block h-full w-full" />
      <span className="relative flex items-center gap-3 z-20 w-full h-full">
        <label className="hidden sm:block cursor-pointer">Github Trabajo</label>
        <AiFillGithub className="text-lg" />
      </span>
    </a>
  );
}
