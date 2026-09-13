import { useState } from 'react'
import type { Technology } from '../../types/technology'
import TechnologyCard from './TechnologyCard'

interface Props {
  data: Technology[]
}

export default function Technologies({ data }: Props) {
  const [stack, setStack] = useState<Technology[]>([])

  const handleAdd = (tech: Technology) => {
    setStack((prev) =>
      prev.some((t) => t.id === tech.id) ? prev : [...prev, tech]
    )
  }

  const handleRemove = (id: string) => {
    setStack((prev) => prev.filter((t) => t.id !== id))
  }

  const handleClearAll = () => {
    setStack([])
  }

  return (
    <section className="px-4 py-8 sm:p-8">
      <h2 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent mb-6 sm:mb-8 text-center sm:text-left">
        Development Stack
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Sidebar — appears FIRST on mobile, LAST on desktop */}
        <aside className="md:col-span-1 md:order-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:sticky md:top-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Your Stack
              </h3>
              <span className="rounded-full bg-violet-100 px-2 py-0.5 text-xs font-semibold text-violet-700">
                {stack.length}
              </span>
            </div>

            {stack.length === 0 ? (
              <p className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-center text-sm text-slate-400">
                No cards yet. <br /> Click “Add to Stack” to build yours.
              </p>
            ) : (
              <>
                <ul className="space-y-3">
                  {stack.map((tech) => (
                    <li
                      key={tech.id}
                      className="flex items-center gap-3 rounded-lg border border-slate-100 bg-white p-3"
                    >
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="h-7 w-7 sm:h-8 sm:w-8 object-contain"
                      />
                      <span className="flex-1 text-sm font-medium text-slate-800 truncate">
                        {tech.name}
                      </span>
                      <button
                        onClick={() => handleRemove(tech.id)}
                        className="text-xs font-semibold text-rose-500 hover:text-rose-700"
                        aria-label={`Remove ${tech.name}`}
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={handleClearAll}
                  className="mt-4 w-full rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-semibold text-rose-600 transition hover:bg-rose-100"
                >
                  Clear All
                </button>
              </>
            )}
          </div>
        </aside>

        {/* Card list — appears SECOND on mobile, FIRST on desktop */}
        <div className="md:col-span-3 md:order-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {data.map((tech) => (
            <TechnologyCard
              key={tech.id}
              technology={tech}
              isAdded={stack.some((t) => t.id === tech.id)}
              onAdd={handleAdd}
            />
          ))}
        </div>
      </div>
    </section>
  )
}