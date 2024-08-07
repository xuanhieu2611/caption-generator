import PageHeaders from "@/components/PageHeaders"

export default function page() {
  return (
    <div>
      <PageHeaders
        h1Text="Checkout our pricing"
        h2Text="Our pricing is very simple"
      />
      <div className="bg-white text-slate-700 rounded-lg max-w-xs mx-auto p-4 text-center">
        <h3 className="font-bold text-2xl">Free</h3>
        <h4>Free forever</h4>
      </div>
    </div>
  )
}
