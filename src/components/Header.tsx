import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-white">
      <header className="mx-auto max-w-7xl p-4 flex gap-6 justify-between">
        <NavLink to="/" className="text-blue-600 font-semibold">
          MakeCV
        </NavLink>
        <div className="flex gap-6 justify-center">
          <NavLink to="/builder" className="text-blue-600 font-semibold">
            Builder
          </NavLink>
          <NavLink to="/templates" className="text-blue-600 font-semibold">
            Templates
          </NavLink>
          <NavLink to="/preview" className="text-blue-600 font-semibold">
            Preview
          </NavLink>
        </div>
        <button type="button" className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Kirish</button>
      </header>
    </div>
  );
};

export default Header;
