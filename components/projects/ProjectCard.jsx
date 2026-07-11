// Reusable project card, used on both the Home page preview and the full Projects page
export default function ProjectCard({ project }) {
  return (
    <a
      href={`/projects/${project.slug}`}
      className="block border border-forest-sage/30 p-6 hover:border-burgundy transition-colors"
    >
      <h3 className="font-display text-xl text-forest-deep">
        {project.name}
      </h3>
      <p className="font-body text-forest-deep/70 mt-3 text-sm leading-relaxed">
        {project.tagline}
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="text-xs font-body text-forest-sage border border-forest-sage/40 px-2 py-1"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}