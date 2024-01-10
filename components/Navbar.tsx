import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5 border-b-2 ">
       <Link href="/">
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h1 style={{ marginLeft: '10px', display: 'flex', alignItems: 'center', fontFamily: 'Inter, sans-serif' ,  fontSize: '30px',  fontWeight: 'bold'}}>
        <span style={{ color: '#30AF5B' }}>Travel</span>
        <span style={{ color: 'black' }}>Next</span>
        <span style={{ color: '#30AF5B', margin: '0 5px' }}>.</span>
      </h1>
    </div>
  </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 mt-3 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold">
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button 
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
          
        />
      </div>

      <Image 
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
      />

    </nav>
  )
}

export default Navbar