import { Divide, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";
import lucas from "../../../assets/images/Lucas_Daniel_3.jpg";
import taina from "../../../assets/images/taina.jpg";
import joao from "../../../assets/images/joao.jpg";
import juliana from "../../../assets/images/Julian.jpg";
import guilherme from "../../../assets/images/guilherme.jpg";

function CardSobre() {
    let data = new Date().getFullYear();
  
    return (
      <div>
        {/* Div com os 3 primeiros cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-20 mx-auto max-w-7xl">
          {/* Card 1 */}
          <div className="bg-slate-100 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Lucas Daniel</h2>
            </div>
            <div className="flex justify-center">
              <img
                src={lucas}
                alt="Foto de Lucas Daniel"
                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Desenvolvedor FullStack</p>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/lucas-daniel-souza-dias/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://github.com/Lucas300" target="_blank">
                <GithubLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                href="https://www.instagram.com/lucas.kardashiann/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
            </div>
            <div className="text-center text-gray-600">
              <p>&copy; {data} Lucas Daniel</p>
            </div>
          </div>
  
          {/* Card 2 */}
          <div className="bg-slate-100 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Guilherme</h2>
            </div>
            <div className="flex justify-center">
              <img
                src={guilherme}
                alt="Foto de Lucas Daniel"
                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Desenvolvedor FullStack</p>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/guilhermekaludin/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://github.com/GuilhermeKaludin" target="_blank">
                <GithubLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                href="https://www.instagram.com/yolokalu/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
            </div>
            <div className="text-center text-gray-600">
              <p>&copy; {data} Guilherme</p>
            </div>
          </div>
  
          {/* Card 3 */}
          <div className="bg-slate-100 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">João</h2>
            </div>
            <div className="flex justify-center">
              <img
                src={joao}
                alt="Foto de Lucas Daniel"
                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Desenvolvedor FullStack</p>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/jloliveira95/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://github.com/jloliveira95 " target="_blank">
                <GithubLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                href="https://www.instagram.com/jl.oliveira95/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
            </div>
            <div className="text-center text-gray-600">
              <p>&copy; {data} João</p>
            </div>
          </div>
        </div>
  
        {/* Div com os outros 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 mt-20 mx-auto max-w-7xl">
          {/* Card 4 */}
          <div className="lg:mr-10 bg-slate-100 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Tainá</h2>
            </div>
            <div className="flex justify-center">
              <img
                src={taina}
                alt="Foto de Lucas Daniel"
                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Desenvolvedora FullStack</p>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/tainalara/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://github.com/tainalara" target="_blank">
                <GithubLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                href="https://www.instagram.com/tainalara/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
            </div>
            <div className="text-center text-gray-600">
              <p>&copy; {data} Tainá</p>
            </div>
          </div>
  
          {/* Card 5 */}
          <div className="lg:ml-10 bg-slate-100 rounded-xl shadow-md p-4 max-w-xs mb-4 mx-auto">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-2">Juliana</h2>
            </div>
            <div className="flex justify-center">
              <img
                src={juliana}
                alt="Foto de Lucas Daniel"
                className="w-3/4 h-3/4 rounded-md mb-4 mx-auto"
              />
            </div>
            <div className="text-center">
              <p className="text-lg text-gray-600 mb-4">Desenvolvedora FullStack</p>
            </div>
            <div className="flex justify-center gap-4 mb-4">
              <a
                href="https://www.linkedin.com/in/-juliana-monteiro/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedinLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a href="https://github.com/orgs/Grupo06-Java79/people/JulianaMonteiro4" target="_blank">
                <GithubLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
              <a
                href="https://www.instagram.com/monteiroo.jj/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramLogo
                  size={48}
                  weight="bold"
                  className="transition duration-300 hover:scale-125"
                />
              </a>
            </div>
            <div className="text-center text-gray-600">
              <p>&copy; {data} Juliana </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default CardSobre;