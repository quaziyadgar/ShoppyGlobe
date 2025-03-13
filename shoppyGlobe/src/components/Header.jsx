import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50); 
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 p-4 ${
        scrolled ? "bg-amber-200 text-black shadow-lg" : "bg-blue-600 text-white shadow-md"
      }`}
    >
      <div className="mx-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          ShoppyGlobe
        </Link>

        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:opacity-80">Home</Link>
            </li>
            <li>
              <Link to="/cart" className="relative">
                🛒 Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
