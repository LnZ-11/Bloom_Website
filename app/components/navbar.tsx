import Link from 'next/link';

export default function Navbar(){
    return(
<div className="navbar bg-gradient-to-r from-teal-400 to-yellow-200 shadow-sm font-[noruto] text-black">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><Link href="/history">Histoire</Link></li>
        <li><Link href="/engagement">Nos Engagement</Link></li>
        <li><Link href="/collaboration">Collaborations</Link></li>
      </ul>
    </div>

    <Link href="/"><button className="btn btn-ghost text-5xl">Bloom</button></Link>
  </div>
  <div className="navbar-center hidden lg:flex rounded-b-4xl">
    <ul className="menu menu-horizontal px-1 text-2xl">
      <li><Link href="/history">Histoire</Link></li>
      <li><Link href="/collaboration">Collaborations</Link></li>
      <li><Link href="/engagement">Nos Engagement</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  </div>
</div>
    )
}