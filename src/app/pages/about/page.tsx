/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Link from "next/link";
import { copyToClipboard } from "../../../../components/ux/copy";
import '../../styles/global.css'

const skills = [
  "HTML and CSS",
  "JavaScript",
  "TypeScript",
  "Next.js",
  "React",
  "Node.js",
];

export default function About() {
  const message1 =
    "Hello! I'm passionate about the intersection of business and technology, with a current focus on SEO to boost online visibility. I'm skilled in multiple programming languages, including HTML, JavaScript, TypeScript, C++, Python, and frameworks like Next.js and Node.js.";

  return (
    <div className="font-sans text-white bg-black min-h-screen gap-5">
      <div className="flex flex-col md:flex-row items-center justify-between p-10 gap-8">
        <div>
          <h1 className="text-5xl font-bold mb-4">Hi! I am Anas Khan</h1>
        </div>
        <img
          alt="Profile"
          src="https://i.pinimg.com/originals/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.png"
          className="w-60 h-60 object-cover rounded-full shadow-lg"
        />
      </div>

      <div className="text-center p-10">
        <h2 className="text-4xl font-bold mb-6">About Me</h2>
        <p className="text-xl leading-relaxed mb-8">{message1}</p>
        <hr className="border-gray-700 my-10" />

        <h2 className="text-4xl font-bold mb-6 p-3">My Skills</h2>
        <ul className="flex flex-wrap justify-center gap-5 mb-12">
          {skills.map((skill, index) => (
            <li key={index}>
              <button className="bg-black border-2 border-black text-white font-semibold px-8 py-3 rounded-lg border-4 border-gray-900 p-2 transition-transform hover:-translate-y-1 hover:shadow-lg">
                {skill}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <hr className="border-gray-700 my-10 gap-5" />

      <section className="flex flex-wrap  justify-center gap-10 p-10">
        <ProjectCard
          title="Number Guessing Game"
          description="A fun number guessing game with 5 tries to guess the correct number."
          npxCommand="npx cp-number-guessing-game"
          repoLink="https://github.com/cr33p1ngp4ck3t/Number-Guessing-Game"
        />
        <ProjectCard
          title="ATM Machine"
          description="ATM simulator that can check balance and perform withdrawals (starting balance: 10,000)."
          npxCommand="npx cp-atm"
          repoLink="https://github.com/cr33p1ngp4ck3t/ATM-Machine"
        />
      </section>
    </div>
  );
}

function ProjectCard({ title, description, npxCommand, repoLink }) {
  return (
    <div className="border-4 border-gray-900 p-3 max-w-xs bg-black gap-5 border-2 border-white text-white shadow-xl p-8 rounded-lg transition-transform hover:-translate-y-2 hover:shadow-2xl">
      <h3 className="text-2xl font-bold mb-4 border-b-2 border-white pb-2">{title}</h3>
      <p className="text-lg mb-6">{description}</p>
      <div className="flex flex-col gap-5 m-2 p-4">
        <Link
          href="#"
          onClick={() => copyToClipboard(npxCommand)}
          className="border-4 border-gray-900 bg-black border-2 border-white text-white font-semibold py-2 px-4 p-3 rounded-lg text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          Copy NPX Command
        </Link>
        <Link
          href={repoLink}
          target="_blank"
          className="border-4 g-2 border-gray-900 bg-black border-2 border-white text-white font-semibold py-2 px-4 rounded-lg text-center transition-transform hover:-translate-y-1 hover:shadow-lg"
        >
          Visit Git Repo
        </Link>
      </div>
    </div>
  );
}
