import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FixedHeader2() {
  return (
    <header className="lg:hidden fixed top-0 lg:left-[270px] left-0 right-0 z-10  bg-green-700 bg-opacity-9 text-white px-6 py-4 shadow-lg flex justify-between items-center">
    <div className="flex items-center lg:hidden gap-1">
      <Link href={"/"}>
        <Image src="/pch.png" alt="logo" width={30} height={30} />
      </Link>
      <Link href="/" className="text-xl font-bold text-yellow-300">
        Claims
      </Link>
    </div>
    <h4 className="hidden lg:block text-xl font-semibold">Dashboard</h4>
    <Image
        className="rounded-[50%] object-cover w-8 h-8"
        src={"/ibile.jpg"}
        width={24}
        height={24}
        alt="img"
      />
  </header>
  )
}
