import Link from "next/link";
const Navigation = () => {
  return (
    <header>
      <div className="division">
        <nav>
          <ul className="flex gap-1 right-2.5">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/service">Service</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;