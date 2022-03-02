export const Image = ({ src, className = "" }) => {
  return (
    <div
      className={`${className} bg-cover	bg-center`}
      style={{
        backgroundImage: `url("${src}")`,
      }}
    />
  )
}
