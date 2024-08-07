export default function PageHeaders({
  h1Text = "Hello",
  h2Text = "Subheader",
}) {
  return (
    <section className="text-center mt-24 mb-8">
      <h1 className="text-3xl [text-shadow:1px_1px_0_rgba(0,0,0,.2)]">
        {h1Text}
      </h1>
      <h2 className="text-white/75">{h2Text}</h2>
    </section>
  )
}
