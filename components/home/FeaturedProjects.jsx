import Link from "next/link"
import { projects } from "@/lib/projects-data"

export default function FeaturedProjects() {
  return (
    <section className="bg-cream px-8 md:px-16 py-20">
      <h2 className="font-display text-3xl text-forest-deep mb-10">
        Selected work
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block border border-forest-sage/30 p-6 hover:border-burgundy transition-colors"
          >
            <h3 className="font-display text-xl text-forest-deep">
              {project.name}
            </h3>
            <p className="font-body text-forest-deep/70 mt-3 text-sm leading-relaxed">
              {project.tagline}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
