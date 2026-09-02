import project1 from "@/assets/Projects/enewsindo.webp";
import project2 from "@/assets/Projects/BRP.webp";
import project3 from "@/assets/Projects/B2B.webp";
import project4 from "@/assets/Projects/Dreampod.webp";

type Project = {
    title: string;
    description: string;
    stack: string[];
    image: string;
    href: string;
    year: number;
    month: number;
};
export const projects: Project[] = [
    {
        title: "ENEWS INDO",
        description:
            "A trusted media portal delivering news and information that is fast, informative, educational, and inspiring.",
        stack: ["Laravel", "PHP", "TailwindCSS"],
        image: project1,
        href: "https://enewsindo.co.id",
        year: 2024,
        month: 9,
    },
    {
        title: "Enterprise Resource Planning Platform",
        description:
            "An integrated business management system that streamlines operations across multiple departments, such as finance, inventory, procurement, and sales.",
        stack: ["Laravel", "PHP", "JQuery"],
        image: project2,
        href: "#",
        year: 2025,
        month: 10,
    },
    {
        title: "B2B Marketplace",
        description:
            "A business-to-business e-commerce platform that connects trusted suppliers and buyers, enabling efficient wholesale trading, procurement, and corporate purchasing.",
        stack: ["Laravel", "PHP", "FilamentPHP"],
        image: project3,
        href: "https://sibima.id",
        year: 2026,
        month: 1,
    },
    {
        title: "Dreampod",
        description:
            "A centralized booking management platform designed to streamline Dreampod’s reservation, front-desk, and pod management operations.",
        stack: ["Laravel", "Go", "NextJS", "TailwindCSS"],
        image: project4,
        href: "https://dreampod.id",
        year: 2026,
        month: 7,
    },
];