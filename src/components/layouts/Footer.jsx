import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-[1440px] mx-auto px-6 py-12 flex flex-col gap-10">
        {/* === Top Navigation === */}
        <nav className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 border-b border-gray-700 pb-6">
          {/* Logo */}
          <Link href="/" className="flex justify-center md:justify-start">
            <Image
              src="/assets/logo.svg"
              alt="Audiophile Logo"
              width={150}
              height={40}
              priority
            />
          </Link>

          {/* Nav Links */}
          <ul className="flex flex-col md:flex-row items-center justify-center gap-6 text-white text-sm uppercase tracking-widest">
            <li>
              <Link href="/" className="hover:text-primary transition">
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/category/headphones"
                className="hover:text-primary transition"
              >
                Headphones
              </Link>
            </li>
            <li>
              <Link
                href="/category/speakers"
                className="hover:text-primary transition"
              >
                Speakers
              </Link>
            </li>
            <li>
              <Link
                href="/category/earphones"
                className="hover:text-primary transition"
              >
                Earphones
              </Link>
            </li>
          </ul>
        </nav>

        {/* === Bottom Section === */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-10">
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <p className="text-gray-300 mb-6 leading-relaxed">
              Audiophile is an all-in-one stop to fulfill your audio needs.
              We're a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility — we’re open 7 days a week.
            </p>
            <p className="text-sm text-gray-400">
              Copyright 2021. All Rights Reserved.
            </p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            {[
              {
                href: "/",
                src: "/assets/shared/desktop/icon-facebook.svg",
                alt: "Facebook",
              },
              {
                href: "/",
                src: "/assets/shared/desktop/icon-twitter.svg",
                alt: "Twitter",
              },
              {
                href: "/",
                src: "/assets/shared/desktop/icon-instagram.svg",
                alt: "Instagram",
              },
            ].map((icon, i) => (
              <Link key={i} href={icon.href} className="">
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={32}
                  height={32}
                  className="hover:scale-95 transition"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
