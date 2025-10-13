"use client";
import { motion } from "framer-motion";
import { Github, ExternalLink, ChevronDown } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface ProjectProps {
  name: string;
  description: string;
  image: string;
  technologies: string[];
  demoLink?: string;
  demoLinkFrontend?: string;
  demoLinkBackend?: string;
  githubLink?: string;
  githubLinkFrontend?: string;
  githubLinkBackend?: string;
}

export default function ProjectCard({ project }: { project: ProjectProps }) {
  const {
    name,
    description,
    image,
    technologies,
    demoLink,
    demoLinkFrontend,
    demoLinkBackend,
    githubLink,
    githubLinkFrontend,
    githubLinkBackend,
  } = project;

  const [showDemoDropdown, setShowDemoDropdown] = useState(false);
  const [showGithubDropdown, setShowGithubDropdown] = useState(false);

  const hasMultipleDemo =
    demoLinkFrontend && demoLinkBackend;
  const hasMultipleGithub =
    githubLinkFrontend && githubLinkBackend;

  const demoRef = useRef<HTMLDivElement>(null);
  const githubRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  function handleClickOutside(e: MouseEvent) {
    if (demoRef.current && !demoRef.current.contains(e.target as Node)) {
      setShowDemoDropdown(false);
    }
    if (githubRef.current && !githubRef.current.contains(e.target as Node)) {
      setShowGithubDropdown(false);
    }
  }
  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="relative overflow-visible bg-white/5 p-4 rounded-2xl shadow-lg border border-white/10 hover:border-accent2 transition"
    >
      <Image
        src={image}
        alt={name}
        width={1896}
        height={874}
        className="rounded-lg mb-4 object-cover w-full aspect-[1896/874]"
      />
      <h3 className="text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-gray-300 mb-3">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech: string) => (
          <span key={tech} className="bg-accent1/20 text-accent2 px-2 py-1 rounded-md text-xs">
            {tech}
          </span>
        ))}
      </div>

      <div className="flex space-x-4 relative">
        {/* DEMO BUTTON */}
        {hasMultipleDemo ? (
          <div className="relative" ref={demoRef}>
            <button
              onClick={() => setShowDemoDropdown((prev) => !prev)}
              className="flex items-center gap-1 text-accent2 hover:underline cursor-pointer"
            >
              <ExternalLink size={16} /> Demo <ChevronDown size={14} />
            </button>
            {showDemoDropdown && (
              <div className="absolute top-full mt-2 bg-dark border border-white/10 rounded-lg shadow-md z-10">
                <a
                  href={demoLinkFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-t-lg"
                >
                  Frontend
                </a>
                <a
                  href={demoLinkBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-b-lg"
                >
                  Backend
                </a>
              </div>
            )}
          </div>
        ) : demoLink ? (
          <a
            href={demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent2 hover:underline"
          >
            <ExternalLink size={16} /> Demo
          </a>
        ) : null}

        {/* GITHUB BUTTON */}
        {hasMultipleGithub ? (
          <div className="relative" ref={githubRef}>
            <button
              onClick={() => setShowGithubDropdown((prev) => !prev)}
              className="flex items-center gap-1 text-accent2 hover:underline cursor-pointer"
            >
              <Github size={16} /> GitHub <ChevronDown size={14} />
            </button>
            {showGithubDropdown && (
              <div className="absolute top-full mt-2 bg-dark border border-white/10 rounded-lg shadow-md z-10">
                <a
                  href={githubLinkFrontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-t-lg"
                >
                  Frontend
                </a>
                <a
                  href={githubLinkBackend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-white/10 rounded-b-lg"
                >
                  Backend
                </a>
              </div>
            )}
          </div>
        ) : githubLink ? (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-accent2 hover:underline"
          >
            <Github size={16} /> GitHub
          </a>
        ) : null}
      </div>

    </motion.div>
  );
}
