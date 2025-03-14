export default function Navbar(){
    return(
        <div className="navbar bg-[#03c10c] shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Histoire</a></li>
        <li><a>Certification BIO</a></li>
        <li>
          <a>Nos Engagement</a>
          <ul className="p-2">
            <li><a>Histoire</a></li>
            <li><a>Geo</a></li>
          </ul>
        </li>
        <li><a>Collaborations</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bloom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Histoire</a></li>
      <li><a>Certification BIO</a></li>
      <li><a>Collaborations</a></li>
      <li>
        <details>
          <summary>Nos Engagement</summary>
          <ul className="p-2 z-1 bg-[#f39c12]">
            <li><a>Histoire</a></li>
            <li><a>Geo</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#0b8a43] text-white border-none">Button</a>
  </div>
</div>
    )
}