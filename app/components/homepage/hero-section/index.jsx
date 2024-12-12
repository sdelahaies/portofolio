// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { SiLeetcode } from "react-icons/si";
import TypedText from "../../helper/typed-text";
import PythonCodeRunner from "../../helper/python-code-runner-2";
import HuggingFace from "@/public/svg/hf-logo(2).svg";
import ResearchGate from "@/public/svg/researchgate.svg";
import { CiMail } from "react-icons/ci";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          {/* <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className=" text-orange-600">{personalData.name}</span>
            {` , I'm a Professional `}
            <span className=" text-[#16f2b3]">{personalData.designation}</span>
            .
          </h1> */}
          <h1 className="text-3xl font-bold leading-10 text-orange-500 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">S. Delahaies, PhD</h1>
          <TypedText />

          <div className="flex justify-center items-center">
            <Image
              src={personalData.profile}
              width={280}
              height={280}
              alt="Sylvain Delahaies"
              className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
            />
          </div>

          <div>
            <br></br>
            <p className="text-gray-200 text-sm lg:text-lg">
              {personalData.description}
            </p>
          </div>
          <div className="my-12 flex items-center gap-5">
            {/* <Link
              href={personalData.email}
              target='_blank'
              className="transition-all text-orange-600 hover:scale-125 duration-300"
            >
              <CiMail size={30} />
            </Link> */}
            <Link
              href={personalData.github}
              target='_blank'
              className="transition-all text-orange-600 hover:scale-125 duration-300"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="transition-all text-orange-600 hover:scale-125 duration-300"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.huggingface}
              target='_blank'
              className="transition-all text-orange-600 hover:scale-125 duration-300"
            >
              <div style={{ borderRadius: '3px', overflow: 'hidden' }}>
                <Image src={HuggingFace} width="32" height="32" />
              </div>
            </Link>
            <Link
              href={personalData.researchgate}
              target='_blank'
              className="transition-all text-orange-600 hover:scale-125 duration-300"
            >
              <div style={{ borderRadius: '3px', overflow: 'hidden' }}>
                <Image src={ResearchGate} width="31" height="31" />
              </div>
            </Link>
            {/* <Link
              href={personalData.twitter}
              target='_blank'
              className="transition-all text-orange-600 hover:scale-125 duration-300"
            >
              <FaTwitterSquare size={30} />
            </Link> */}
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r to-orange-600 from-stone-600 p-[1px] rounded-full transition-all duration-300 hover:from-stone-600 hover:to-orange-600">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-orange-600 to-stone-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>

        </div>
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">class</span>
                <span className="text-green-400">DataScientist</span>
                <span className="text-gray-400">(</span>
                <span className="text-orange-400">PhD</span>
                <span className="text-gray-400">)</span>
                <span className="text-white">:</span>
              </div>
              <br></br>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-orange-400">def</span>
                <span className="text-white"> __init__</span>
                <span className="text-gray-400">(self):</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-cyan-400">self.name</span>
                <span className="mr-2 text-pink-500"> =</span>
                <span className="text-amber-300">&apos;Sylvain Delahaies&apos;</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-cyan-400">self.skills</span>
                <span className="mr-2 text-pink-500"> =</span>
                <span className="text-gray-400">[</span>
                <span className="text-amber-300">"Python"</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">"Transformers"</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">"Fastapi"</span>
                <span className="text-gray-400">, </span>
              </div>
              <div>
                <span className="ml-20 text-amber-300">"Scikit-learn"</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">"Docker"</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">"Airflow"</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">"AWS"</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">"Git"</span>
                <span className="text-gray-400">, </span>
              </div>
              <div>

                <span className="ml-20 text-amber-300">"Linux"</span>
                <span className="text-gray-400">, </span>
                <span className="text-amber-300">"MySQL"</span>
                <span className="text-gray-400">, ...]</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-cyan-400">self.hard_worker</span>
                <span className="mr-2 text-pink-500"> =</span>
                <span className="text-orange-400">True</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-cyan-400">self.quick_learner</span>
                <span className="mr-2 text-pink-500"> =</span>
                <span className="text-orange-400">True</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-cyan-400">self.problem_solver</span>
                <span className="mr-2 text-pink-500"> =</span>
                <span className="text-orange-400">True</span>
              </div>
              <br></br>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-orange-400">def</span>
                <span className="text-white"> hireable</span>
                <span className="text-gray-400">(self):</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-orange-400">return</span>
                <span className="text-cyan-400"> self.hard_worker</span>
                <span className="text-amber-300"> and</span>
                <span className="text-cyan-400"> self.problem_solver</span>
                <span className="text-amber-300"> and</span>
              </div>
              <div>
                <span className="ml-16 lg:ml-24 text-cyan-400">len(self.skills)</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">7</span>
              </div>
              <br></br>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-orange-400">def</span>
                <span className="text-white"> proficient_in</span>
                <span className="text-gray-400">(self, skills):</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-orange-400">return</span>
                <span className="text-cyan-400"> skills.issubset(self.skills)</span>
              </div>
              <br></br>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-orange-400">def</span>
                <span className="text-white"> summary</span>
                <span className="text-gray-400">(self,n=5):</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 text-orange-400">return</span>
                <span className="text-cyan-400"> f"I m &#123;self.name&#125;," + \</span>
              </div>
              <div>
                <span className="ml-20 text-cyan-400"> f"proficient in &#123;self.skills[:n]&#125; and more" + \ </span>
              </div>
              <div>
                <span className="ml-20 text-cyan-400"> "and looking for opportunities!" </span>
              </div>
              <br></br>   
              <div>
                <span className="text-cyan-400">sylvain</span>
                <span className="mr-2 text-pink-500"> =</span>
                <span className="text-cyan-400">DataScientist</span>
                <span className="text-gray-400">()</span>
              </div>
              <div>
                <span className="text-orange-400">print</span>
                <span className="text-gray-400">(</span>
                <span className="text-amber-300">"summary:"</span>
                <span className="text-gray-400">,</span>
                <span className="text-cyan-400">sylvain.summary</span>
                <span className="text-gray-400">())</span>
              </div>
            </code>
            <PythonCodeRunner />
            {/* <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-orange-600">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-orange-600">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Abu Said</span>
                <span className="text-gray-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{`['`}</span>
                <span className="text-amber-300">React</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Redux</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Express</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NestJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MySql</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Docker</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">AWS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                <span className="text-gray-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;