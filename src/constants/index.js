export const myProjects = [
    {
        id: 1,
        title: "EDITH – Research Paper Assistant",
        description:
            "A Retrieval-Augmented Generation (RAG) AI assistant for research paper summarization and context-aware question answering.",
        subDescription: [
            "Built a RAG pipeline with LangChain, FAISS, and Sentence Transformers.",
            "Implemented semantic search using embeddings and vector indexing.",
            "Improved retrieval accuracy to over 85% with reduced hallucinations.",],
        href: "https://github.com/Shashankwagde/AI-Research-paper-tutor",
        logo: "",
        image: "/assets/projects/edith.png",
        tags: [
            {
                id: 1,
                name: "Python",
                path: "/assets/logos/Python.svg",
            },
            {
                id: 2,
                name: "LangChain",
                path: "/assets/logos/Langchain.svg",
            },
            {
                id: 3,
                name: "FAISS",
                path: "/assets/logos/FAISS.svg",
            },
            {
                id: 4,
                name: "Streamlit",
                path: "/assets/logos/Streamlit.svg",
            },
        ],
    },

    {
        id: 2,
        title: "LLM Image Pipeline",
        description:
            "An AI-powered workflow automation pipeline that generates images from natural language prompts.",
        subDescription: [
            "Built end-to-end AI image automation in n8n.",
            "Integrated Hugging Face, OpenRouter (Gemini), Google Drive APIs.",
            "Automated image generation, storage, workflow execution.",
            "Generated 100+ AI images, cut manual effort by 80%.",
        ],
        href: "https://github.com/Shashankwagde/n8n-llm-image-pipeline",
        logo: "",
        image: "/assets/projects/image-pipeline.png",
        tags: [
            {
                id: 1,
                name: "n8n",
                path: "/assets/logos/n8n.svg",
            },
            {
                id: 2,
                name: "JavaScript",
                path: "/assets/logos/javascript.svg",
            },
            {
                id: 3,
                name: "Gemini",
                path: "/assets/logos/Gemini.svg",
            },
            {
                id: 4,
                name: "Google Drive API",
                path: "/assets/logos/GoogleDrive.svg",
            },
        ],
    },

    {
        id: 3,
        title: "Reasoning LLM Fine-Tuning",
        description:
            "Reasoning LLM fine-tuned for puzzles, riddles, logical tasks.",

        subDescription: [
            "Fine-tuned Llama 3.2–3B Instruct with QLoRA.",
            "Used PEFT, LoRA, 4-bit NF4 quantization.",
            "Cut trainable params by 99%+.",
            "Boosted reasoning, kept GPU usage low.",
        ],
        href: "",
        logo: "",
        image: "/assets/projects/llm-finetuning.png",
        tags: [
            {
                id: 1,
                name: "Python",
                path: "/assets/logos/Python.svg",
            },
            {
                id: 2,
                name: "Llama 3.2",
                path: "/assets/logos/Llama.svg",
            },
            {
                id: 3,
                name: "QLoRA",
                path: "/assets/logos/QLORA.svg",
            },
            {
                id: 4,
                name: "PyTorch",
                path: "/assets/logos/Pytorch.svg",
            },
        ],
    },

    {
        id: 4,
        title: "YouTube Automation Workflow",
        description:
            "AI-powered YouTube content automation workflow.",

        subDescription: [
            "Built automated workflow with n8n, JavaScript.",
            "Integrated YouTube API, multiple REST APIs.",
            "Automated content generation, scheduling, publishing.",
            "Reduced manual work, improved scalability.",
        ],
        href: "https://github.com/Shashankwagde/YT-Automation",
        logo: "",
        image: "/assets/projects/youtube-automation.png",
        tags: [
            {
                id: 1,
                name: "n8n",
                path: "/assets/logos/n8n.svg",
            },
            {
                id: 2,
                name: "JavaScript",
                path: "/assets/logos/javascript.svg",
            },
            {
                id: 3,
                name: "YouTube API",
                path: "/assets/logos/yt.svg",
            },
            {
                id: 4,
                name: "REST API",
                path: "/assets/logos/RESTapi.svg",
            },
        ],
    },
];

export const mySocials = [
    {
        name: "WhatsApp",
        href: "",
        icon: "/assets/socials/whatsApp.svg",
    },
    {
        name: "Linkedin",
        href: "https://www.linkedin.com/in/shashank-wagde-975685274/",
        icon: "/assets/socials/linkedIn.svg",
    },
    {
        name: "Instagram",
        href: "https://www.instagram.com/shashank_wagde/",
        icon: "/assets/socials/instagram.svg",
    },
];


export const experiences = [
    {
        title: "Data Science Intern",
        job: "Paarsh Infotech Pvt. Ltd.",
        date: "Jan 2026 – Jun 2026",
        contents: [
            "Fine-tuned Llama 3.2–3B Instruct using QLoRA on a 172K-sample Puzzle & Riddle instruction dataset (ServiceNow-AI/R1-Distill-SFT).",
            "Applied PEFT, LoRA adapters, and 4-bit quantization to enable parameter-efficient supervised instruction tuning.",
            "Reduced trainable parameters by over 85%, significantly lowering GPU memory requirements while maintaining strong reasoning performance.",
            "Optimized model training and inference using Hugging Face Transformers and Unsloth for efficient deployment.",
        ],
    },
];