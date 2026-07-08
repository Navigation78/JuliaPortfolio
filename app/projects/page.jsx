import Link from "next/link"
import { projects } from "@/lib/projects-data"

export default function ProjectsPage() {
  return (
    <main className="bg-cream min-h-screen px-8 py-20 text-forest-deep md:px-16">
      <h1 className="font-display text-4xl">Projects</h1>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block border border-forest-sage/30 p-6 transition-colors hover:border-burgundy"
          >
            <h2 className="font-display text-xl">{project.name}</h2>
            <p className="font-body mt-3 text-sm leading-relaxed text-forest-deep/70">
              {project.tagline}
            </p>
          </Link>
        ))}
      </div>
    </main>
  )
}
