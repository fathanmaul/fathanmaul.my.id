import chatgptLogo from "@/assets/Cowork/ChatGPT.png";
import claudeLogo from "@/assets/Cowork/Claude.png";
import deepseekLogo from "@/assets/Cowork/Deepseek.png";
import geminiLogo from "@/assets/Cowork/Gemini.png";
type CoworkTool = {
    name: string;
    logo: string;
    useCase: string;
    note: string;
};

export const coworkTools: CoworkTool[] = [
    {
        name: "Gemini",
        logo: geminiLogo,
        useCase: "Feature Implementation and Bug Fixing",
        note: "Primary - paling sering dipakai.",
    },
    {
        name: "ChatGPT",
        logo: chatgptLogo,
        useCase: "Knowledge, explanations, and decision making support.",
        note: "Tempat untuk bertanya apa saja saat butuh penjelasan atau second opinion.",
    },
    {
        name: "Claude",
        logo: claudeLogo,
        useCase: "Planning, technical docs, and feature preparation.",
        note: "Membantu menjabarkan ide menjadi dokumen teknis yang bisa dibaca programmer.",
    },
    {
        name: "DeepSeek",
        logo: deepseekLogo,
        useCase: "Light questions and quick checks.",
        note: "Dipakai untuk pertanyaan ringan saja.",
    },
];