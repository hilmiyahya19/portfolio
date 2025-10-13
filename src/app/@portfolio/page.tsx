"use client";

import SectionTitle from "@/components/SectionTitle";
import ProjectCard from "@/components/ProjectCard";
import CertificateCard from "@/components/CertificateCard";
import TechStackCard from "@/components/TechStackCard";

import { projects } from "@/data/projects";
import { certificates } from "@/data/certificates";
import { techStack } from "@/data/techStack";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen px-6 py-12 space-y-20">
      {/* Projects */}
      <section>
        <SectionTitle title="Projects" subtitle="Recent works and experiments" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Certificates */}
      <section>
        <SectionTitle title="Certificates" subtitle="My achievements and credentials" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {certificates.map((cert) => (
          <CertificateCard key={cert.id} name={cert.name} image={cert.image} />
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section>
        <SectionTitle title="Tech Stack" subtitle="Tools and technologies I use" />
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 mt-8 place-items-center">
          {techStack.map((tech) => (
            <TechStackCard key={tech.id} name={tech.name} image={tech.image} />
          ))}
        </div>
      </section>
    </div>
  );
}
