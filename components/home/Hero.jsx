import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-forest-deep min-h-screen flex flex-col justify-center px-8 md:px-16">
      <h1 className="font-display text-5xl md:text-7xl text-offwhite">
        Julia Migwi
      </h1>

      <p className="font-body text-cream mt-4 text-lg md:text-xl">
        Software engineer with a cloud infrastructure focus
      </p>

      <p className="font-body text-cream/80 mt-6 max-w-2xl leading-relaxed">
        I build full stack systems, from cloud automated backends to
        interfaces people actually enjoy using. My work sits at the
        intersection of software engineering and business, shaped by a
        Business Information Technology background at JKUAT and hands on
        experience across cloud, security, and financial systems.
      </p>

      <div className="flex gap-6 mt-8 font-body text-offwhite">
        <Link href="/projects" className="hover:text-burgundy-light transition-colors">
          View my work
        </Link>
        <a href="#" className="hover:text-burgundy-light transition-colors">
          Download my CV
        </a>
        <Link href="/contact" className="hover:text-burgundy-light transition-colors">
          Get in touch
        </Link>
      </div>
    </section>
  )
}
