import { Star } from 'lucide-react'
import React from 'react'

const Testimonial = () => {
  return (
      <div className=" bg-foreground text-black py-16 sm:py-24">
        <div className=" mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base font-semibold  tracking-wide uppercase">
              Testimonials
            </h2>
            <p className="mt-1 text-4xl font-extrabold  sm:text-5xl sm:tracking-tight">
              What Our Users Say
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            <div className=" rounded-lg p-8 shadow-md">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold ">Sarah Johnson</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4">
                "The AI consultation saved me a trip to the doctor. I got immediate answers to my questions and peace of mind. When I needed more detailed advice, the expert call was incredibly helpful."
              </p>
            </div>
            <div className=" rounded-lg p-8 shadow-md">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold ">Michael Chen</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-4 ">
                "As someone with a busy schedule, being able to get health advice at any time of day has been a game-changer. The voice feature makes it feel like I'm talking to a real person."
              </p>
            </div>
            <div className=" rounded-lg p-8 shadow-md">
              <div className="flex items-center">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-bold ">Emily Rodriguez</h4>
                  <div className="flex items-center mt-1">
                    {[...Array(4)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                    <Star className="h-4 w-4 text-yellow-400 stroke-current fill-none" />
                  </div>
                </div>
              </div>
              <p className="mt-4">
                "I was skeptical at first, but the AI gave me surprisingly accurate information about my symptoms. The premium plan is worth it for the expert calls alone."
              </p>
            </div>
          </div>
        </div>
      </div> 
  )
}

export default Testimonial