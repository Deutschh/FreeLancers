export function SectionHeading({ eyebrow, title, text, light = false, align = 'left', className = '' }) {
  const centered = align === 'center'
  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      {eyebrow && <p className={`eyebrow ${light ? 'text-sky-300' : 'text-brand'}`}>{eyebrow}</p>}
      <h2 className={`section-title mt-3 ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {text && <p className={`mt-4 max-w-2xl text-base leading-7 md:text-lg ${centered ? 'mx-auto' : ''} ${light ? 'text-slate-300' : 'text-body'}`}>{text}</p>}
    </div>
  )
}
