import { Container } from "@/components/container";
import { TechnologyPill } from "@/components/technology-pill";

const skillGroups = [
    {
        label: "IA & Machine Learning",
        skills: ["Python", "PyTorch", "Scikit-learn", "Hugging Face Transformers", "LLMs", "MLflow"],
    },
    {
        label: "NLP & RAG",
        skills: ["LangChain", "LlamaIndex", "RAG", "ChromaDB", "FAISS", "SpaCy"],
    },
    {
        label: "Computer Vision",
        skills: ["OpenCV", "Vision Transformers", "LSTM", "Deep Learning", "Label Studio"],
    },
    {
        label: "Data & MLOps",
        skills: ["Pandas", "NumPy", "SQL", "Docker", "AWS (S3/Bedrock)", "Git", "CI/CD"],
    },
    {
        label: "Développement",
        skills: ["FastAPI", "React/Next.js", "Node.js", "MongoDB", "R", "Bash/Shell"],
    },
];

export function Skills() {
    return (
        <section className="section-divider border-t py-14">
            <Container>
                <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr]">
                    <div>
                        <p className="eyebrow text-xs font-semibold uppercase tracking-widest">
                            Compétences
                        </p>
                        <h2 className="font-display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                            Stack technique
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {skillGroups.map((group) => (
                            <div key={group.label}>
                                <p className="eyebrow mb-2 text-xs font-medium uppercase tracking-wider">
                                    {group.label}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {group.skills.map((skill) => (
                                        <TechnologyPill
                                            key={skill}
                                            label={skill}
                                            monochromeIcon
                                            className="chip rounded-full px-3 py-1 text-xs"
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
