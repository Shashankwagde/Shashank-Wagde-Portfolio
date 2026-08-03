import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useMediaQuery } from "react-responsive";

const ParallaxBackground = () => {
    const isMobile = useMediaQuery({
        maxWidth: 768,
    });

    const { scrollYProgress } = useScroll();

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 130,
        damping: 30,
        mass: 0.3,
    });

    const skyY = useTransform(smoothProgress, [0, 1], ["0%", "10%"]);
    const buildingBackY = useTransform(smoothProgress, [0, 1], ["0%", "35%"]);
    const buildingFrontY = useTransform(smoothProgress, [0, 1], ["0%", "15%"]);

    return (
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
            {/* Sky */}
            <motion.div
                className="absolute inset-0"
                style={{
                    y: skyY,
                    backgroundImage: "url(/assets/sky.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center bottom",
                }}
            />

            {/* Back Buildings */}
            <motion.div
                className="absolute inset-0"
                style={{
                    y: buildingBackY,
                    backgroundImage: "url(/assets/building-1.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: isMobile ? "center" : "bottom",
                }}
            />

            {/* Front Buildings */}
            <motion.div
                className="absolute inset-0"
                style={{
                    y: buildingFrontY,
                    backgroundImage: "url(/assets/building-2.png)",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: isMobile
                        ? "center bottom"
                        : "right bottom",
                }}
            />

            <div className="absolute inset-0 bg-black/30" />
        </div>
    );
};

export default ParallaxBackground;