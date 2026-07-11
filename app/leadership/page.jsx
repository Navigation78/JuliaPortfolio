import SectionHeading from "@/components/shared/SectionHeading"

export default function Leadership() {
  return (
    <main className="bg-cream px-8 md:px-16 py-20">
      <SectionHeading title="Leadership" />

      <div className="max-w-2xl space-y-10">
        <div>
          <div className="flex justify-between items-baseline flex-wrap gap-2">
            <h3 className="font-display text-2xl text-forest-deep">
              Cloud Engineering ICT Peer Mentor, Cohort 10
            </h3>
            <span className="font-body text-sm text-forest-deep/60">
              May 2026 – Present
            </span>
          </div>

          <p className="font-body text-forest-deep/70 mt-1">KamiLimu</p>

          <p className="font-body text-forest-deep/80 mt-4 leading-relaxed">
            Guiding mentees through structured learning sessions, helping
            them understand core cloud engineering concepts and track
            requirements while improving overall learning outcomes. Also
            providing coordinated administrative and technical support.
          </p>
        </div>

        <div>
          <div className="flex justify-between items-baseline flex-wrap gap-2">
            <h3 className="font-display text-2xl text-forest-deep">
              Shamiri T2 Fellow
            </h3>
            <span className="font-body text-sm text-forest-deep/60">
              May 2026 – Present
            </span>
          </div>

          <p className="font-body text-forest-deep/70 mt-1">
            Shamiri Murang'a Hub
          </p>

          <p className="font-body text-forest-deep/80 mt-4 leading-relaxed">
            Facilitating a 4 week youth for youth model of mental health and
            wellness in local high schools and communities, teaching
            evidence based skills to help young people manage stress and
            build emotional resilience.
          </p>
        </div>
      </div>
    </main>
  )
}