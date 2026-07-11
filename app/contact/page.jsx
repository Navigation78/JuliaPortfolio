import SectionHeading from "@/components/shared/SectionHeading"
import DownloadCV from "@/components/shared/DownloadCV"
import { CONTACT } from "@/lib/constants"

export default function Contact() {
  return (
    <main className="bg-cream px-8 md:px-16 py-20">
      <SectionHeading
        title="Contact"
        subtitle="Feel free to reach out, I'd love to hear from you"
      />

      <div className="flex flex-col gap-4 font-body text-forest-deep/80 max-w-md">
        
        <a
          href={`mailto:${CONTACT.email}`}
          className="hover:text-burgundy transition-colors"
        >
          {CONTACT.email}
        </a>

        <a
          href={CONTACT.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-burgundy transition-colors"
        >
          LinkedIn
        </a>

        <a
          href={CONTACT.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-burgundy transition-colors"
        >
          GitHub
        </a>

      </div>

      <div className="mt-10">
        <DownloadCV />
      </div>
    </main>
  )
}