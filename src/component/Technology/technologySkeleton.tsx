export default function TechnologiesSkeleton() {
  return (
    <section className="px-4 py-1 sm:p-8 animate-pulse">
      {/* Heading skeleton */}
      <div className="h-8 w-64 bg-slate-200 rounded mb-3 mx-auto sm:mx-0" />
      <div className="h-4 w-80 bg-slate-200 rounded mb-6 mx-auto sm:mx-0" />

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 md:mt-6">
        {/* Card skeletons (3/4 width) */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-slate-100 bg-white p-6"
            >
              <div className="flex items-start justify-between">
                <div className="h-12 w-12 rounded bg-slate-200" />
                <div className="h-6 w-20 rounded-full bg-slate-200" />
              </div>

              <div className="mt-5 h-5 w-32 rounded bg-slate-200" />

              <div className="mt-3 h-3 w-full rounded bg-slate-200" />
              <div className="mt-2 h-3 w-5/6 rounded bg-slate-200" />

              <div className="mt-5 flex items-center justify-between">
                <div className="h-6 w-20 rounded-full bg-slate-200" />
                <div className="h-6 w-16 rounded bg-slate-200" />
              </div>

              <div className="mt-4 h-9 w-full rounded bg-slate-200" />
            </div>
          ))}
        </div>

        {/* Sidebar skeleton (1/4 width) */}
        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="h-6 w-24 rounded bg-slate-200 mb-4" />
            <div className="h-20 rounded-lg bg-slate-200" />
          </div>
        </aside>
      </div>
    </section>
  )
}