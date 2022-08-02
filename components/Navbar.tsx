import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="text-center flex flex-row gap-5 justify-center py-5 text-forth">
      <Link href="/">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Home</p>
        </a>
      </Link>
      <Link href="/Package">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Package</p>
        </a>
      </Link>
      <Link href="/Booking">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Book Your Plan</p>
        </a>
      </Link>
      <Link href="/Team">
        <a className="duration-500 hover:scale-125 hover:bg-sec rounded-md hover:px-5 hover:text-primary">
          <p>Team</p>
        </a>
      </Link>
    </nav>
  );
};
export default Navbar;
