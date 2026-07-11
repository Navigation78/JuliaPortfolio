import SectionHeading from "@/components/shared/SectionHeading"

export default function Experience() {
  return (
    <main className="bg-cream px-8 md:px-16 py-20">
      <SectionHeading title="Experience" />

      <div className="max-w-2xl">
        <div className="flex justify-between items-baseline flex-wrap gap-2">
          <h3 className="font-display text-2xl text-forest-deep">
            ICT Intern
          </h3>
          <span className="font-body text-sm text-forest-deep/60">
            March – July 2025
          </span>
        </div>

        <p className="font-body text-forest-deep/70 mt-1">
          Kenyatta National Hospital
        </p>

        <ul className="mt-6 space-y-3 font-body text-forest-deep/80 leading-relaxed list-disc pl-5">
          <li>
            Troubleshot and resolved end user technical issues by diagnosing
            hardware, software, and network related faults, restoring system
            functionality and minimizing downtime.
          </li>
          <li>
            Served as first point of contact for staff reporting technical
            incidents, communicating clearly with non-technical end users.
          </li>
          <li>
            Managed multiple support requests simultaneously, prioritizing
            based on urgency and impact.
          </li>
          <li>
            Logged and tracked technical incidents through the hospital's
            integrated IT service management system, ensuring accurate
            documentation and timely resolution.
          </li>
        </ul>
      </div>
    </main>
  )
}