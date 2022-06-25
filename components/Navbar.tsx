import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-center flex flex-row gap-5 justify-center py-5 text-forth">
      <Link href="/">
        <a className="duration-500 hover:scale-110">
          <p>Home</p>
        </a>
      </Link>
      <Link href="/Package">
        <a>
          <p>Package</p>
        </a>
      </Link>
      <Link href="/Booking">
        <a>
          <p>Book Your Plan</p>
        </a>
      </Link>
      <Link href="/Team">
        <a>
          <p>Team</p>
        </a>
      </Link>
    </nav>
  );
};
export default Navbar;
