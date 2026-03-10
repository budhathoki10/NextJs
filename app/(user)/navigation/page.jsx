import Link from "next/link";
const Navigation = () => {
  return (
    <header>
      <div className="division">
        <nav>
          <ul className="flex gap-1">
            <li><Link href="./home">Home</Link></li>
            <li className="classes"><Link href="../about">About</Link></li>
            <li><Link href="./service">Service</Link></li>
            <li><Link href="./contact">Contact</Link></li>
                 <li><Link href="./clientComponent">clientComponent</Link></li>
                      <li><Link href="./serverComponent">serverComponent</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;