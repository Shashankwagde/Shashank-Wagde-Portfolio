import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";


const About = () => {
    const grid2Container = useRef();
    return (
        <section
            id="About"
            className="c-space section-spacing"
        >
            <h2 className="text-heading">About Me</h2>

            <div className="grid grid-cols-1 gap-4 mt-12 md:grid-cols-6 md:auto-rows-72">
                {/* Grid 1 */}
                <div className="flex items-end grid-default-color grid-1">
                    <img
                        src="assets/coding-pov.png"
                        className="absolute scale-[1.75] -right-20 -top-4 md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
                    />
                    <div className="z-10">
                        <p className="headtext">Hi, I'm Shashank Wagde</p>
                        <p className="subtext">
                            I build high-performance ML pipelines and scalable AI solutions, turning raw data into actionable insights that drive real-world impact.

                        </p>
                    </div>
                    <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-linear-to-t from-indigo" />
                </div>
                {/* Grid 2 */}
                <div className="grid-default-color grid-2">
                    <div
                        ref={grid2Container}
                        className="flex items-center justify-center w-full h-full"
                    >
                        <p className="flex items-end text-5xl text-gray-500">
                            CODE IS CRAFT
                        </p>
                        <Card
                            style={{ rotate: "75deg", top: "30%", left: "20%" }}
                            text="Fine Tuning"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-30deg", top: "60%", left: "45%" }}
                            text="QLORA"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
                            text="RAG systems"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "20deg", top: "10%", left: "38%" }}
                            text="Agentic AI"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "55%", left: "0%" }}
                            image="assets/logos/Huggingface.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "30deg", top: "70%", left: "70%" }}
                            image="assets/logos/Python.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "70%", left: "25%" }}
                            image="assets/logos/Tensorflow.svg"
                            containerRef={grid2Container}
                        />
                        <Card
                            style={{ rotate: "-45deg", top: "5%", left: "10%" }}
                            image="assets/logos/Pytorch.svg"
                            containerRef={grid2Container}
                        />
                    </div>
                </div>

                {/* Grid 3 */}
                <div className="grid-black-color grid-3 overflow-hidden relative">
                    <div className="relative z-20 w-[70%] sm:w-[60%] md:w-[50%]">
                        <p className="headtext">Time Zone</p>
                        <p className="subtext">
                            I'm based in India, and open to remote work worldwide
                        </p>
                    </div>
                    <figure className="absolute -right-28 -bottom-16 w-72 h-72 sm:w-80 sm:h-80 md:w-100 md:h-100 z-0">
                        <Globe />
                    </figure>
                </div>

                {/* Grid 4 */}
                <div className="grid-special-color grid-4">
                    <div className="flex flex-col items-center justify-center gap-4 size-full">
                        <p className="text-center headtext">
                            Do you want to start a project together?
                        </p>
                        <CopyEmailButton />
                    </div>
                </div>

                {/* Grid 5 */}
                <div className="grid-default-color grid-5">
                    <div className="z-10 w-[50%]">
                        <p className="headText">Teck Stack</p>
                        <p className="subtext">
                            I specialize in a variety of languages, frameworks, and tools that
                            allow me to build robust and scalable applications
                        </p>
                    </div>
                    <div className="absolute inset-y-0 md:inset-y-9 w-full h-full inset-s-[50%] md:scale-125">
                        <Frameworks />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
