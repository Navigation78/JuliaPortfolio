import SectionHeading from "@/components/shared/SectionHeading"

export default function Fellowship() {
  return (
    <main className="bg-cream px-8 md:px-16 py-20">
      <SectionHeading title="Fellowship" />

      <div className="max-w-2xl">
        <div className="flex justify-between items-baseline flex-wrap gap-2">
          <h3 className="font-display text-2xl text-forest-deep">
            KamiLimu Mentee, Cohort 9
          </h3>
          <span className="font-body text-sm text-forest-deep/60">
            March – October 2025
          </span>
        </div>

        <p className="font-body text-forest-deep/70 mt-1">KamiLimu</p>

        <p className="font-body text-forest-deep/80 mt-4 leading-relaxed">
          Selected among 200+ applicants to join a competitive 8 month
          mentorship program for tech aligned university students in Kenya.
          Received structured mentorship in professional development,
          innovation, and community engagement, with direct guidance from
          industry professionals specializing in cloud engineering, which
          included building a hands on cloud project.
        </p>
      </div>
    </main>
  )
}