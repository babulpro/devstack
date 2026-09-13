  # 🚀 Dev Stack Builder

A modern and responsive web application for exploring development technologies and building  personalized developer stack. Browse different technologies, view their details, and added favorite tools to your stack.

## 🛠️ Technologies Used

* React.js
* TypeScript
* Tailwind CSS
* Vite
* React Toastify
* JSON
* HTML5
* CSS3



### 1. 🔍 Explore Technologies

Browse different development technologies with their category, difficulty level, rating, description, and technology icon.

### 2. 🧰 Build Your Own Stack

Add your favorite technologies to your personal stack. Duplicate technologies cannot be added, and you can remove individual technologies or clear the entire stack.

### 3. 📱 Responsive Design

The website is fully responsive and provides a smooth experience across mobile, tablet, and desktop devices.

## 📌 Project Overview

Dev Stack Builder helps developers discover useful technologies and organize their preferred development tools in one place. The project uses reusable React components, JSON data, React state management, and responsive Tailwind CSS styling.

  
  
  //Answer
  
  1. jsx stands for javascript extension ,its a syntax by which we can write like HTML  on Js or Ts ,

  2. props passed data from parent component to child component and state is managed data inside won component.

  3. useState hook store and update data. i use it to store the technology data when i add on my stack.

  4. useEffect hook runs code after a component render. it is used to fetch the technology data from the JSON file .

  5. Conditional rendering means showing different UI based on a condition.

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
                  Clear All
                </button>
              </>
            )}'






7. A parent passes data to a child using props.

A child can send information back to the parent by calling a function that the parent passed to it as a prop.

For example:

<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>

Here, technology and onAdd are passed from the parent to the child.
