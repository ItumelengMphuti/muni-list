import Link from 'next/link'
import Image from 'next/image';

const Navbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <Image src="/download.png" width={120} height={77}/>
            </div>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/muni/">Muni Listing</Link>
        </nav>
     );
}
 
export default Navbar;