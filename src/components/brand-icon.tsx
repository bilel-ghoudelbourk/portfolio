import {
  siDocker,
  siFastapi,
  siGit,
  siGithub,
  siGmail,
  siHuggingface,
  siLangchain,
  siMlflow,
  siMongodb,
  siNextdotjs,
  siNodedotjs,
  siNumpy,
  siOpencv,
  siPandas,
  siPython,
  siPytorch,
  siReact,
  siScikitlearn,
} from "simple-icons";

type BrandIconName =
  | "docker"
  | "fastapi"
  | "git"
  | "github"
  | "gmail"
  | "huggingface"
  | "langchain"
  | "linkedin"
  | "mlflow"
  | "mongodb"
  | "nextdotjs"
  | "nodedotjs"
  | "numpy"
  | "opencv"
  | "pandas"
  | "python"
  | "pytorch"
  | "react"
  | "scikitlearn";

type IconDefinition = {
  hex: string;
  path: string;
  title: string;
  viewBox?: string;
};

const brandIcons: Record<BrandIconName, IconDefinition> = {
  docker: siDocker,
  fastapi: siFastapi,
  git: siGit,
  github: siGithub,
  gmail: siGmail,
  huggingface: siHuggingface,
  langchain: siLangchain,
  linkedin: {
    title: "LinkedIn",
    hex: "0A66C2",
    viewBox: "0 0 16 16",
    path: "M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zM4.943 13.394V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.521-1.248-1.342-1.248S2.4 3.225 2.4 3.934c0 .694.506 1.248 1.327 1.248m1.928 8.212h2.401V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865H13V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169H5.671c.03.678 0 7.225 0 7.225",
  },
  mlflow: siMlflow,
  mongodb: siMongodb,
  nextdotjs: siNextdotjs,
  nodedotjs: siNodedotjs,
  numpy: siNumpy,
  opencv: siOpencv,
  pandas: siPandas,
  python: siPython,
  pytorch: siPytorch,
  react: siReact,
  scikitlearn: siScikitlearn,
};

const directAliases: Record<string, BrandIconName> = {
  Docker: "docker",
  Email: "gmail",
  FastAPI: "fastapi",
  Git: "git",
  GitHub: "github",
  "Hugging Face": "huggingface",
  "Hugging Face Transformers": "huggingface",
  LangChain: "langchain",
  LinkedIn: "linkedin",
  MLflow: "mlflow",
  MongoDB: "mongodb",
  "Next.js": "nextdotjs",
  "Node.js": "nodedotjs",
  NumPy: "numpy",
  OpenCV: "opencv",
  Pandas: "pandas",
  Python: "python",
  PyTorch: "pytorch",
  React: "react",
  "Scikit-learn": "scikitlearn",
};

export function resolveBrandIcon(label: string): BrandIconName | null {
  const directMatch = directAliases[label];
  if (directMatch) {
    return directMatch;
  }

  if (label.includes("GitHub")) {
    return "github";
  }

  if (label.includes("LinkedIn")) {
    return "linkedin";
  }

  if (label.includes("React")) {
    return "react";
  }

  if (label.includes("Next.js")) {
    return "nextdotjs";
  }

  if (label.includes("Node.js")) {
    return "nodedotjs";
  }

  if (label.includes("Hugging Face")) {
    return "huggingface";
  }

  return null;
}

type BrandIconProps = {
  className?: string;
  decorative?: boolean;
  monochrome?: boolean;
  name: BrandIconName;
  size?: number;
};

export function BrandIcon({
  className,
  decorative = true,
  monochrome = false,
  name,
  size = 16,
}: BrandIconProps) {
  const icon = brandIcons[name];
  const fill = monochrome ? "currentColor" : `#${icon.hex}`;
  const label = decorative ? undefined : icon.title;

  return (
    <svg
      aria-hidden={decorative}
      aria-label={label}
      className={className}
      fill={fill}
      height={size}
      role={decorative ? "presentation" : "img"}
      viewBox={icon.viewBox ?? "0 0 24 24"}
      width={size}
    >
      {!decorative ? <title>{icon.title}</title> : null}
      <path d={icon.path} />
    </svg>
  );
}
