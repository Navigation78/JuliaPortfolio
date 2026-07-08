import { notFound } from "next/navigation"
import { projects } from "@/lib/projects-data"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-cream min-h-screen px-8 py-20 text-forest-deep md:px-16">
      <p className="font-body text-sm uppercase tracking-wide text-burgundy">
        Project
      </p>
      <h1 className="font-display mt-3 text-4xl">{project.name}</h1>
      <p className="font-body mt-6 max-w-2xl leading-relaxed text-forest-deep/75">
        {project.tagline}
      </p>

      <ul className="mt-8 flex flex-wrap gap-3">
        {project.stack.map((tool) => (
          <li
            key={tool}
            className="border border-forest-sage/30 px-3 py-1 font-body text-sm text-forest-deep/75"
          >
            {tool}
          </li>
        ))}
      </ul>
    </main>
  )
}
