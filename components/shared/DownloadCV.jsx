// Placeholder link for now, swap PLACEHOLDER_CV_URL with the real AWS S3 object URL once the bucket is set up
const PLACEHOLDER_CV_URL = "#"

export default function DownloadCV() {
  return (
    <a 
      href={PLACEHOLDER_CV_URL}
      download
      className="inline-block px-6 py-3 bg-burgundy text-offwhite font-body hover:bg-burgundy-light transition-colors"
    >
      Download CV
    </a>
  )
}