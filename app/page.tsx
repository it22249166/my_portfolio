import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-5xl font-bold mb-4">
        Malith Bandara
      </h1>
      <p className="text-xl text-gray-400 mb-6">
        Software Engineering Undergraduate | MERN Stack Developer
      </p>
      <div className="flex gap-4">
        <button className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          View Projects
        </button>
        <button className="px-6 py-2 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Download CV
        </button>
      </div>
    </main>
  );
}