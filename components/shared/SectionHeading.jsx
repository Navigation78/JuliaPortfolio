// Reusable heading used at the top of page sections, keeps styling consistent everywhere
export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-3xl md:text-4xl text-forest-deep">
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-forest-deep/70 mt-2 max-w-xl">
          {subtitle}
        </p>
      )}
    </div>
  )
}