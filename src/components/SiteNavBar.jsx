const SiteNavBar = () => {
  return (
    <div>
      <div className="navbar bg-green-200">
        <div className="flex-1">
          <h2>
            <span className="text-black-500 font-extrabold">Design</span>
            <span className="text-orange-500 font-extrabold">AGENCY</span>
          </h2>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Link</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SiteNavBar;
