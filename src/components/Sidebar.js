import React from 'react'
import { useSelector } from 'react-redux'


const Sidebar = () => {

  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  if(!isMenuOpen)
  return null;
 
  return (
    <div className="w-80 bg-gray-100 max-h-fit">
      <div>
        <ul className="px-16">
          <li className="flex items-center mb-3">
            <span className="mr-4"></span>
            <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
              Home
            </a>
          </li>
        </ul>


            <ul className="px-16">
              <li className="flex items-center mb-3">
                <span className="mr-4"></span>
                  <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                    Shorts 
                  </a>
                </li>
              </ul>


            <ul className="px-16">
              <li className="flex items-center mb-3">
                <span className="mr-4"></span>
                  <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                    Subscriptions 
                  </a>
              </li>
            </ul>
      </div>


      <div className=" border"></div>

          <div>
            <ul className="">
              <li className="flex items-center mb-3">
                <span className="mr-6"></span>
                  <a href="#" className="block text-gray-800 hover:text-black text-center text-xl font-semibold">
                    Explore
                  </a>
              </li>
            </ul>
          </div>


              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Trending 
                    </a>
                </li>
              </ul>        


              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Shopping 
                    </a>
                </li>
              </ul>
        


              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Musics 
                    </a>
                </li>
              </ul>
        


              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Films 
                    </a>
                </li>
              </ul>
        


              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Gamings 
                    </a>
                </li>
              </ul>
        

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Sport 
                    </a>
        
                </li>
              </ul>


              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Learning 
                    </a>
                </li>
              </ul>

      <div className=" border"></div>

          <div>
              <ul className="">
                <li className="flex items-center mb-3">
                  <span className="mr-6"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl font-semibold">
                      More from YouTube
                    </a>
                </li>
              </ul>
          </div>


              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Your Channel 
                    </a>
                </li>
              </ul>

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      History 
                    </a>
                </li>
              </ul>

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Watch Later 
                    </a>
                </li>
              </ul>

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Liked Videos 
                    </a>
                </li>
              </ul>

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Settings 
                    </a>
                </li>
              </ul>

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl">
                      Help 
                    </a>
                </li>
              </ul>

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl truncate">
                      Send Feedback 
                    </a>
                </li>
              </ul>

              <ul className="px-16">
                <li className="flex items-center mb-3">
                  <span className="mr-4"></span>
                    <a href="#" className="block text-gray-800 hover:text-black text-center text-xl truncate">
                      Youtube Premium 
                    </a>
                </li>
              </ul>
      </div>      
  )
}


export default Sidebar