"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();
  const itemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <section className="bg-dark">
      <nav className="py-6 relative max-w-[1440px] px-6 flex items-center justify-between z-30 bg-dark mx-auto transition-all border-b border-gray-600">
        <button
          aria-label="menu-btn"
          type="button"
          onClick={toggleMenu}
          className=" inline-block md:hidden active:scale-90 transition"
        >
          <Image
            src="/assets/hamburger.svg"
            width={20}
            height={20}
            alt="menu-icon"
          />
        </button>
        <Link href="/" className="">
          <Image
            src="/assets/logo.svg"
            alt="Audiophile Logo"
            width={150}
            height={40}
            priority
          />
        </Link>

        <ul className="text-white md:flex hidden items-center gap-10">
          <li>
            <Link className="hover:text-white/70 transition" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white/70 transition"
              href="/category/headphones"
            >
              Headphones
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white/70 transition"
              href="/category/speakers"
            >
              Speakers
            </Link>
          </li>
          <li>
            <Link
              className="hover:text-white/70 transition"
              href="/category/earphones"
            >
              Earphones
            </Link>
          </li>
        </ul>

        <Link
          href="/cart"
          className="relative p-2 hover:text-primary transition"
        >
          <Image
            src="/assets/carts.svg"
            alt="Cart icon"
            width={20}
            height={20}
            onClick={toggleCart}
          />
          {itemCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              {itemCount}
            </span>
          )}
        </Link>

        {/* MObile menu */}
        {isMenuOpen && (
          <div className="mobile-menu absolute top-[70px] left-0 w-full bg-dark p-6 ">
            <ul className="flex flex-col space-y-4 text-white text-lg">
              <li>
                <Link className="hover:text-white/70 transition" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white/70 transition"
                  href="/category/headphones"
                >
                  Headphones
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white/70 transition"
                  href="/category/speakers"
                >
                  Speakers
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-white/70 transition"
                  href="/category/earphones"
                >
                  Earphones
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="bg-white text-gray-700 mt-6 inline md:hidden text-sm hover:opacity-90 active:scale-95 transition-all w-40 h-11 rounded-full"
            >
              Get started
            </button>
          </div>
        )}
      </nav>
    </section>
  );
};

export default Navbar;
