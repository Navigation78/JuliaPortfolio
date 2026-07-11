import { projects } from "@/lib/projects-data"
import ProjectCard from "@/components/projects/ProjectCard"

export default function FeaturedProjects() {
  return (
    <section className="bg-cream px-8 md:px-16 py-20">
      <h2 className="font-display text-3xl text-forest-deep mb-10">
        Selected work
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}