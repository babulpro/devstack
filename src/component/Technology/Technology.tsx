import { useState } from 'react'
import type { Technology } from '../../types/technology'
import TechnologyCard from './TechnologyCard'
import { toast } from 'react-toastify'

interface Props {
  data: Technology[]
}

export default function Technologies({ data }: Props) {
  const [stack, setStack] = useState<Technology[]>([])

  const handleAdd = (tech: Technology) => {
    setStack((prev) =>
      prev.some((t) => t.id === tech.id) ? prev : [...prev, tech]
    )
    toast.success(`${tech.name} added to your stack!`, {
      icon: () => <img src={tech.icon} alt="" className="h-5 w-5" />,
    })
  }

  const handleRemove = (id: string) => {
    const tech = stack.find((t) => t.id === id)
    setStack((prev) => prev.filter((t) => t.id !== id))

    if (tech) {
      toast.warn(`${tech.name} removed from your stack`)
    }
  }

  const handleClearAll = () => {
    if (stack.length === 0) return
    setStack([])
    toast.error('Stack cleared!')
  }

  return (
    <section className="px-4 py-1 sm:p-8">
      <h2 className="text-2xl sm:text-4xl font-bold md:mb-3 mb-2 text-center sm:text-left">
        Explore the
        <span className="bg-gradient-to-r from-orange-500 to-pink-500 text-transparent bg-clip-text">
          Technologies
        </span>
      </h2>
      <p className="text-sm text-center md:text-left">
        Pick one technology per category to build your ideal stack.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-4 md:mt-6">

        {/* -------- Card list — FIRST on mobile, LEFT on desktop -------- */}
        <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {data.map((tech) => (
            <TechnologyCard
              key={tech.id}
              technology={tech}
              isAdded={stack.some((t) => t.id === tech.id)}
              onAdd={handleAdd}
            />
          ))}
        </div>

        {/* -------- Your Stack — SECOND on mobile, RIGHT on desktop -------- */}
        <aside className="md:col-span-1">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 md:sticky md:top-20">
            <div className="mb-4 ">
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Your Stack
              </h3>
              <span className=" px-2 py-0.5 text-sm font-semibold text-slate-500">
                {stack.length===0?(
                  "No technologies selected yet. "
                ):`${stack.length} Technology Selected`} 
              </span>
            </div>

            {stack.length === 0 ? (
              
              <p className="rounded-lg border border-dashed border-slate-300 bg-white p-4 text-center text-sm text-slate-400">
                Your  stack is empty.
              </p>
            ) : (
              <>
                <ul className="space-y-3">
                  {stack.map((tech) => (
                    <li
                      key={tech.id}
                      className="flex items-center justify-between gap-3 rounded-lg border border-slate-200 bg-white p-3"
                    >
                      <div className='flex justify-center items-center gap-6'>

                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="h-14 w-14 sm:h-8 sm:w-8 object-contain"
                          />
                          <p className=" text-sm font-medium text-slate-800 truncate">
                            {tech.name}<br/>
                            <span className="text-xs text-slate-500">{tech.category}</span>
                          </p>
                      </div>
                      <button
                        onClick={() => handleRemove(tech.id)}
                        className="text-xl font-semibold text-slate-500 hover:text-rose-700"
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
                  Remove All
                </button>
              </>
            )}
          </div>
        </aside>
      </div>
    </section>
  )
}