import '../Styling/Style.css'
import { NavLink } from 'react-router-dom'


export default function Front() {
  return (
    <div className="min-h-screen flex flex-col gap-18 overflow-x-hidden scrollbar-hidden scroll-m-0 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 animate-fade-in">
  <h2 className="text-white items-center uppercase font-bold text-bold text-7xl sm:text-10xl md:text-11xl lg:text-12xl">
    Welcome to <span className="text-red-500">Sol</span>
  </h2>
  <p className="text-white">
    HERE YOU CAN LISTEN TO YOUR <span className="text-red-500">FAVORITE</span> MUSIC
  </p>
  <div className="text-3xl">
    <NavLink
      to="/login"
      className="text-white font-bold hover:text-4xl hover:duration-300"
    >
      log<span className="text-red-500">in</span>
    </NavLink>
    <span className="text-white font-bold">/</span>
    <NavLink
      to="/login"
      className="text-white font-bold hover:text-4xl hover:duration-300"
    >
      sign<span className="text-red-500">up</span>
    </NavLink>
  </div>
  <NavLink
    to="/home"
    className="text-white font-bold text-2xl border-white border-2 p-5 py-0.5 rounded hover:border-red-600 text-red hover:duration-400 hover:text-4xl"
  >
    sk<span className="text-red-500">i</span>p
  </NavLink>
</div>

  )
}
