import type { Technology } from '../../types/technology'

interface TechnologyCardProps {
  technology: Technology;
  isAdded: boolean;
  onAdd: (tech: Technology) => void;
}

const TechnologyCard = ({ technology, isAdded, onAdd }: TechnologyCardProps) => {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 shadow-sm">
      {/* Icon + Badge */}
      <div className="flex items-start justify-between gap-3">
        <div className='grid grid-cols-2 md:grid-cols-1 gap-3'>
          <img
          src={technology.icon}
          alt={technology.name}
          className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
        />
          <h3 className=" text-lg sm:text-xl font-bold text-slate-900">
        {technology.name}
      </h3>
        </div>
        
          {technology.badge!==""?(<span
          className="rounded-full px-2.5 py-1 text-sm font-bold md:text-md font-medium whitespace-nowrap"
          style={{
            color: technology.color,
            backgroundColor: `${technology.color}1A`,
          }}
        >
          {technology.badge}
        </span>):""}
        
      </div>

      {/* Title */}
      

      {/* Description */}
      <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-5 sm:leading-6 text-slate-500">
        {technology.description}
      </p>

      {/* Category + Difficulty + Rating — wraps on mobile */}
      <div className="mt-4 sm:mt-5 flex flex-wrap items-center gap-2 sm:gap-3">
        <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-slate-600">
          {technology.category}
        </span>
        <span className="text-[11px] sm:text-sm text-slate-500">
          {technology.difficulty}
        </span>
        <span className="ml-auto text-xs sm:text-sm text-amber-500 font-medium ">
          <span className="mr-1 ">★</span>
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <div className="mt-4">
        <button
          onClick={() => onAdd(technology)}
          disabled={isAdded}
          className={`w-full rounded-lg px-4 py-2 text-sm font-semibold text-white transition ${
            isAdded
              ? 'cursor-not-allowed bg-slate-400'
              : 'bg-slate-950 hover:opacity-90'
          }`}
        >
          {isAdded ? 'Added' : 'Add to Stack'}
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;