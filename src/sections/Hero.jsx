import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import * as THREE from "three";
import Batman from "../components/Batman";
import { BATMAN_ANIMATIONS } from "../animations/BatmanAnimations";
import { Suspense } from "react"
import Loader from "../components/Loader";

const Hero = () => {
    const isMobile = useMediaQuery({ maxWidth: 768 });

    return (
        <section
            id="Hero"
            className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space"
        >
            <HeroText />
            <ParallaxBackground />

            <figure
                className="absolute inset-0 z-10"
                style={{ width: "100vw", height: "100vh" }}
            >
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                    <Suspense fallback={<Loader />}>
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 5, 5]} intensity={2} />

                        <group
                            position={
                                isMobile
                                    ? [0, -1.5, 1]          // Mobile Position
                                    : [1.2, -1.3, 1.5]      // Desktop Position
                            }
                            rotation={
                                isMobile
                                    ? [0, THREE.MathUtils.degToRad(-30), 0] // Mobile Rotation
                                    : [0, THREE.MathUtils.degToRad(-70), 0] // Desktop Rotation
                            }
                            scale={isMobile ? 0.8 : 1}
                        >

                            <Batman
                                entryAnimation={BATMAN_ANIMATIONS.hero.entry}
                                loopAnimation={BATMAN_ANIMATIONS.hero.loop}
                            />
                        </group>
                    </Suspense>
                </Canvas>
            </figure>
        </section>
    );
};

export default Hero; 