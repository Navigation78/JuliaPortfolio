import SectionHeading from "@/components/shared/SectionHeading"

export default function About() {
  return (
    <main className="bg-cream px-8 md:px-16 py-20">
      <SectionHeading
        title="About"
        subtitle="A bit about my path into tech"
      />

      <div className="max-w-2xl space-y-6 font-body text-forest-deep/80 leading-relaxed">
        <p>
          I'm a recent Business Information Technology graduate from Jomo
          Kenyatta University of Agriculture and Technology, where I built a
          foundation that blends technical systems thinking with business
          context. That combination shapes how I approach engineering, not
          just how something works, but why it matters.
        </p>

        <p>
          My path into software started with curiosity about how systems
          hold together, and it grew into hands on work across cloud
          infrastructure, full stack development, and cybersecurity. I have
          built and shipped projects that solve real problems, from
          automating financial tracking to training bank employees on
          security awareness.
        </p>

        <p>
          Outside of building software, I mentor other students through
          KamiLimu's cloud engineering program and facilitate mental health
          and wellness sessions with the Shamiri T2 fellowship. Both remind
          me that good systems, technical or human, are built the same way:
          with patience, structure, and attention to the people they serve.
        </p>
      </div>

      <div className="mt-16">
        <h3 className="font-display text-2xl text-forest-deep mb-4">
          Skills
        </h3>

        <div className="grid md:grid-cols-2 gap-8 font-body text-forest-deep/80">
          <div>
            <h4 className="font-semibold text-forest-deep mb-2">
              Core Skills
            </h4>
            <p>
              AWS, React, Next.js, Node.js, Express.js, Python, MySQL,
              MongoDB, PostgreSQL, Docker, Git, Linux
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-forest-deep mb-2">
              Soft Skills
            </h4>
            <p>
              Problem solving, collaboration, attention to detail, teamwork,
              troubleshooting
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}