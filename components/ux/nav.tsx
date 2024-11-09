/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';

export function Header() {
    return (
        <>
            <header className="bg-white p-2 flex m-4 justify-between items-center sticky border-4 border-gray-900 shadow-lg mb-2 top-2 z-50">
                <div className="inline-block">
                    <h2 className="font-extrabold text-gray-900 capitalize">MyWebsite</h2>
                </div>
                <div className="text-right">
                    <button className="text-base bg-white border-2 border-gray-900 transition duration-300 m-1 hover:translate-x-[-2px] hover:translate-y-[-1px] hover:shadow-md">
                        <Link href="/">Home</Link>
                    </button>
                    <button className="text-base bg-white border-2 border-gray-900 transition duration-300 m-1 hover:translate-x-[-2px] hover:translate-y-[-1px] hover:shadow-md">
                        <Link href="/pages/about">About</Link>
                    </button>
                    <button className="text-base bg-white border-2 border-gray-900 transition duration-300 m-1 hover:translate-x-[-2px] hover:translate-y-[-1px] hover:shadow-md">
                        <Link href="/pages/contact">Contact</Link>
                    </button>
                </div>
            </header>
        </>
    );
}

export function Footer() {
    return (
        <>
            <footer className="bg-white p-2 m-4 flex justify-between items-center border-4 border-gray-900 shadow-lg">
                <div>
                    <h2 className="font-extrabold text-gray-900 capitalize">MyWebsite</h2>
                </div>
                <div>
                    <div className="flex gap-2">
                        <Link className="inline-flex gap-2 p-1 transition duration-300 hover:scale-110" href="https://www.linkedin.com/in/creepingpacket" target="_blank">
                            <img width="26" height="26" src="https://img.icons8.com/ios-filled/50/linkedin.png" alt="linkedin" />
                        </Link>
                        <Link className="inline-flex gap-2 p-1 transition duration-300 hover:scale-110" href="https://www.npmjs.com/~creepingpacket" target="_blank">
                            <img width="22" height="22" src="https://img.icons8.com/windows/32/npm.png" alt="npm" style={{ border: "2px solid #323232", borderRadius: "4px" }} />
                        </Link>
                        <Link className="inline-flex gap-2 p-1 transition duration-300 hover:scale-110" href="https://github.com/cr33p1ngp4ck3t" target="_blank">
                            <img width="26" height="26" src="https://img.icons8.com/ios-filled/50/github.png" alt="github" />
                        </Link>
                    </div>
                </div>
            </footer>
        </>
    );
}
