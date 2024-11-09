/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';

export default function Homepage() {
    return (
        <>
            <h1 className="font-extrabold text-gray-900 capitalize">Welcome to my website</h1>
            <section>
                <p className="border-b-2 border-gray-900 my-8 text-sm leading-relaxed font-semibold">Here, I'll be posting all the projects I complete. It's my all-in-one project collection website</p>
                <br />
            </section>
            <section className="flex justify-center items-center gap-5 flex-wrap">
                <div className="min-w-[270px] max-w-xs border-4 border-gray-900 bg-white p-6 transition-transform duration-300 hover:shadow-lg hover:translate-x-[-5px] hover:translate-y-[-5px]">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-gray-900">
                        <div className="font-extrabold text-xl text-gray-900 uppercase">Project: Countries</div>
                    </div>
                    <div className="text-gray-900 text-sm leading-relaxed font-semibold mb-4">
                        This is Project which Contains the Information about Countries
                    </div>
                    <div className="mt-4 bw-button-style">
                        <Link className="flex w-full px-4 py-2 text-center text-lg font-bold text-gray-900 uppercase border-3 border-gray-900 bg-white hover:shadow-md hover:translate-x-[-3px] hover:translate-y-[-3px]" href="./countries">Visit</Link>
                    </div>
                </div>
                <div className="min-w-[270px] max-w-xs border-4 border-gray-900 bg-white p-6 transition-transform duration-300 hover:shadow-lg hover:translate-x-[-5px] hover:translate-y-[-5px]">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-gray-900">
                        <div className="font-extrabold text-xl text-gray-900 uppercase">Project: 30 Days Challenge</div>
                    </div>
                    <div className="text-gray-900 text-sm leading-relaxed font-semibold mb-4">
                        This is Project which Contains the Information about 30 Days Challenge
                    </div>
                    <div className="mt-4 bw-button-style">
                        <Link className="flex w-full px-4 py-2 text-center text-lg font-bold text-gray-900 uppercase border-3 border-gray-900 bg-white hover:shadow-md hover:translate-x-[-3px] hover:translate-y-[-3px]" href="./challenge">Visit</Link>
                    </div>
                </div>
                <div className="p-4 min-w-[270px] max-w-xs border-4 border-gray-900 bg-white p-6 transition-transform duration-300 hover:shadow-lg hover:translate-x-[-5px] hover:translate-y-[-5px]">
                    <div className="p-4 flex items-center gap-4 mb-4 pb-4 border-b-2 border-gray-900">
                        <div className="p-4 font-extrabold text-xl text-gray-900 uppercase">Project: Resume Builder</div>
                    </div>
                    <div className="text-gray-900 text-sm leading-relaxed font-semibold mb-4">
                        A Resume Builder Website that dynamically builds a simple resume (I didnt had much time to improve it)
                    </div>
                    <div className="mt-4 bw-button-style">
                        <Link className="flex w-full px-4 py-2 text-center text-lg font-bold text-gray-900 uppercase border-3 border-gray-900 bg-white hover:shadow-md hover:translate-x-[-3px] hover:translate-y-[-3px]" href="https://cpp-resume-builder.vercel.app/" target='_blank'>Visit</Link>
                    </div>
                </div>
                <div className="min-w-[270px] max-w-xs border-4 border-gray-900 bg-white p-6 transition-transform duration-300 hover:shadow-lg hover:translate-x-[-5px] hover:translate-y-[-5px]">
                    <div className="flex items-center gap-4 mb-4 pb-4 border-b-2 border-gray-900">
                        <div className="font-extrabold text-xl text-gray-900 uppercase">Project: Figma Template</div>
                    </div>
                    <div className="text-gray-900 text-sm leading-relaxed font-semibold mb-4">
                        This is a Project in which I created Template of Figma
                    </div>
                    <div className="mt-4 bw-button-style">
                        <Link className="flex w-full px-4 py-2 text-center text-lg font-bold text-gray-900 uppercase border-3 border-gray-900 bg-white hover:shadow-md hover:translate-x-[-3px] hover:translate-y-[-3px]" href="https://cpp-figma-template.vercel.app" target='_blank'>Visit</Link>
                    </div>
                </div>
            </section>
        </>
    )
}
