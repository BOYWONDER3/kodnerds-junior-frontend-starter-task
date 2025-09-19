import React from "react"
import "./App.css"
import items from "./items.json"

function App() {
  return (
    <>
      <h1 className="text-4xl pb-8 text-blue-600 font-medium">
        Explore Topics
      </h1>

      <main className="flex gap-8 flex-wrap">
        {items.map((item) => {
          return (
            <section key={item.id} className="border-2 rounded-xl w-96 ">
              <div className="w-full">
                <img className="h-64" alt="course image" src={item.image} />
              </div>

              <div className="pt-4 pl-8 pb-6">
                <div className="flex gap-2 items-center">
                  <div className="w-[40px] h-[40px]">
                    <img
                      className="rounded-[50%]"
                      src="https://shorturl.at/rdvh2"
                    />
                  </div>
                  <div className="">
                    <h1 className="text-2xl font-bold">{item.author}</h1>
                    <span className="font-serif text-xs">{item.date}</span>
                  </div>
                </div>

                <div className="w-64 pt-4 space-y-2">
                  <p className="text-lg/6 font-bold leading-5 ">{item.title}</p>
                  <p className="text-xl font-normal font-serif">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4">
                  <a
                    href={item.readMore}
                    className="text-blue-600 cursor-pointer text-base font-medium"
                  >
                    Read more <span>&#8594;</span>
                  </a>
                </div>

                <div className="flex gap-2 text-xs pt-4">
                  <div className="flex items-center ">
                    <span className="block">&#9786;</span>
                    <span className="block">{item.views}</span>
                  </div>
                  <div>
                    <span>&#10032;</span>
                    <span>{item.likes}</span>
                  </div>
                  <div>
                    <span>&#9861;</span>
                    <span>{item.comments}</span>
                  </div>
                </div>
              </div>
            </section>
          )
        })}
      </main>
    </>
  )
}

export default App
