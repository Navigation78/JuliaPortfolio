// Reusable button, supports either a real link (href) or an onClick action
export default function Button({ href, onClick, children, variant = "primary" }) {
  const baseStyles = "inline-block px-6 py-3 font-body transition-colors"

  const variants = {
    primary: "bg-burgundy text-offwhite hover:bg-burgundy-light",
    outline: "border border-offwhite text-offwhite hover:bg-offwhite hover:text-forest-deep",
  }

  const classes = `${baseStyles} ${variants[variant]}`

  // If href is passed, render an anchor tag, otherwise render a button
  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}