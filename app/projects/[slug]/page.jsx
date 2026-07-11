import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  // If someone visits a slug that doesn't exist, show the 404 page instead of crashing
  if (!project) {
    notFound()
  }

  return (
    <main className="bg-cream px-8 md:px-16 py-20">
      <h1 className="font-display text-4xl text-forest-deep">
        {project.name}
      </h1>

      <p className="font-body text-forest-deep/80 mt-6 max-w-2xl leading-relaxed">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mt-6">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-body text-forest-sage border border-forest-sage/40 px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-10">
        <h3 className="font-display text-xl text-forest-deep mb-4">
          Key features
        </h3>
        <ul className="space-y-2 font-body text-forest-deep/80 list-disc pl-5">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="flex gap-6 mt-10 font-body">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-burgundy hover:text-burgundy-light transition-colors"
          >
            View on GitHub
          </a>
        )}

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-burgundy hover:text-burgundy-light transition-colors"
          >
            Live demo
          </a>
        )}
      </div>
    </main>
  )
}