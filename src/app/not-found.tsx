export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <section className="leading-10 flex flex-col md:flex-row items-center">
        <h1 className="md:mr-5 md:pr-6 mb-4 md:mb-0 text-2xl font-medium">
          Oops...
        </h1>
        <p>This page could not be found.</p>
      </section>
    </div>
  )
}
