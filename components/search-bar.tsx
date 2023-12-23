"use client";

import { AiOutlineSearch } from "react-icons/ai";
import Button from "./ui/Button";
import Link from "next/link";

export default function SearchBar() {
  return (
    <form className="px-1">
      <div className="relative">
        <Link href="/search">
          <button className="absolute right-1 top-1/2 -translate-y-1/2 p-2 bg-zinc-300 rounded-full">
            <AiOutlineSearch />
          </button>
        </Link>
      </div>
    </form>
  );
}
