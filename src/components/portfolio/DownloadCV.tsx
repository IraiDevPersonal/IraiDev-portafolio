import { HiOutlineDownload } from "react-icons/hi";
import cvPDF from "../../assets/pdf/Currículum Vitae.pdf";

export function DownloadCV() {
  return (
    <a
      href={cvPDF}
      target="_blank"
      rel="noopener noreferrer"
      download="Ignacio-Arriagada-cv.pdf"
      title="Descargar CURRICULUM VITAE"
      className="text-emerald-500 h-9 w-9 grid place-content-center sm:block sm:h-auto sm:w-auto sm:py-1.5 sm:px-3 rounded-full overflow-hidden group relative border-2 border-emerald-500 hover:text-white"
    >
      <span className="absolute z-10 bg-emerald-500 right-full rounded-full top-0 group-hover:translate-x-full duration-200 ease-linear block h-full w-full" />
      <span className="relative flex items-center gap-3 z-20 w-full h-full">
        <label className="hidden sm:block cursor-pointer">Curriculum</label>
        <HiOutlineDownload className="text-lg" />
      </span>
    </a>
  );
}
