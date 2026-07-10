import Link from "next/link"
import { projects } from "@/lib/projects-data"
//component function that displays a section of featured projects with links to their individual pages. It uses Tailwind CSS classes for styling and maps over the projects data to create a grid of project links.
export default function FeaturedProjects() {
  // return jsx for the featured projects section
  return (
    <section className="bg-cream px-8 md:px-16 py-20">
      <h2 className="font-display text-3xl text-forest-deep mb-10">
        Selected work
      </h2>{/* the header for the section, styled with Tailwind CSS classes for font, size, color, and margin */}

      <div className="grid gap-8 md:grid-cols-3">{/* the grid container for the project links, styled with Tailwind CSS classes for gap and responsive columns */}
        {projects.map(({ slug, name, tagline }) => (
          <Link
            key={slug}
            href={`/projects/${slug}`}
            className="block border border-forest-sage/30 p-6 hover:border-burgundy transition-colors"
          >
            <h3 className="font-display text-xl text-forest-deep">
              {name}
            </h3>
            <p className="font-body text-forest-deep/70 mt-3 text-sm leading-relaxed">
              {tagline}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}