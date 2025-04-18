import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaFigma,
  FaCode,
} from "react-icons/fa6";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiJavascript,
  SiTypescript,
} from "react-icons/si";

const Expertize = () => {
  return (
    <div>
      <h2 className="title">Expertize</h2>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-6 xl:text-4xl sm:text-2xl text-gray-700 ">
        {/* React */}
        <div className="flex flex-col items-center">
          <FaReact className="text-blue-500 hover:text-blue-400 transition" />
          <p className="expertise">React</p>
        </div>

        {/* Next.js */}
        <div className="flex flex-col items-center">
          <SiNextdotjs className="text-secondary-light hover:text-gray-800 transition" />
          <p className="expertise">Next.js</p>
        </div>

        {/* Node.js */}
        <div className="flex flex-col items-center">
          <FaNodeJs className="text-green-600 hover:text-green-500 transition" />
          <p className="expertise">Node.js</p>
        </div>

        {/* PostgreSQL */}
        <div className="flex flex-col items-center">
          <SiPostgresql className="text-blue-700 hover:text-blue-600 transition" />
          <p className="expertise">PostgreSQL</p>
        </div>

        {/* Tailwind CSS */}
        <div className="flex flex-col items-center">
          <SiTailwindcss className="text-cyan-500 hover:text-cyan-400 transition" />
          <p className="expertise">Tailwind CSS</p>
        </div>

        {/* JavaScript */}
        <div className="flex flex-col items-center">
          <SiJavascript className="text-yellow-500 hover:text-yellow-400 transition" />
          <p className="expertise">JavaScript</p>
        </div>

        {/* TypeScript */}
        <div className="flex flex-col items-center">
          <SiTypescript className="text-blue-500 hover:text-blue-400 transition" />
          <p className="expertise">TypeScript</p>
        </div>

        {/* Figma */}
        <div className="flex flex-col items-center">
          <FaFigma className="text-red-500 hover:text-red-400 transition" />
          <p className="expertise">Figma</p>
        </div>

        {/* Databases */}
        <div className="flex flex-col items-center">
          <FaDatabase className="text-yellow-500 hover:text-yellow-400 transition" />
          <p className="expertise">Databases</p>
        </div>

        {/* Coding */}
        <div className="flex flex-col items-center">
          <FaCode className="text-secondary-light hover:text-gray-700 transition" />
          <p className="expertise">Development</p>
        </div>
      </div>
    </div>
  );
};

export default Expertize;
