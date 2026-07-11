import SectionHeading from "@/components/shared/SectionHeading"
import ProjectCard from "@/components/projects/ProjectCard"
import { projects } from "@/lib/projects-data"

export default function Projects() {
  return (
    <main className="bg-cream px-8 md:px-16 py-20">
      <SectionHeading
        title="Projects"
        subtitle="A look at what I've built"
      />

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  )
}