import { ChangeEvent, useState } from 'react'
import { DARK_MODE_INIT_STATE, HTMLFOR_ID, HTML_ROOT } from '../../utils/constants'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'

export function DarkModeToggler() {
   const [isDarkModeActive, setIsDarkModeActive] = useState(DARK_MODE_INIT_STATE)

   const handleToggleDarkMode = (e: ChangeEvent<HTMLInputElement>) => {
      const checked = e.target.checked
      HTML_ROOT?.classList.toggle('dark')
      setIsDarkModeActive(checked)
   }

   return (
      <label htmlFor={HTMLFOR_ID} className="cursor-pointer">
         <input
            hidden
            id={HTMLFOR_ID}
            type="checkbox"
            checked={isDarkModeActive}
            onChange={handleToggleDarkMode}
         />
         <DarkModeItem isDark={isDarkModeActive} />
      </label>
   )
}

function DarkModeItem({ isDark }: { isDark: boolean }) {
   return (
      <div className="flex items-center gap-2 text-2xl dark:hover:bg-slate-600 dark:bg-slate-700 hover:bg-slate-300/70 bg-slate-200/70 px-2 py-1 rounded-full transition duration-200">
         {isDark ? <MdOutlineDarkMode /> : <MdOutlineLightMode />}
         <span className="text-base">{isDark ? 'Oscuro' : 'Claro'}</span>
      </div>
   )
}
