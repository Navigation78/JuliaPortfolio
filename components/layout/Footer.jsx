import { CONTACT } from "@/lib/constants"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-forest-deep px-8 md:px-16 py-10 text-cream font-body">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex gap-6">
          <a
            href={`mailto:${CONTACT.email}`}
            className="hover:text-burgundy-light transition-colors"
          >
            Email
          </a>

          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-burgundy-light transition-colors"
          >
            LinkedIn
          </a>

          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-burgundy-light transition-colors"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm text-cream/60">
          © {year} Julia Migwi. All rights reserved.
        </p>

      </div>
    </footer>
  )
}