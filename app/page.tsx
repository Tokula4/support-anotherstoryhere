import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  bg-white min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-20 w-auto" src="./logo.png" alt="Another Story"/>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white bg-[#621e67] rounded">Support Us   </h2>
    </div>
  
    <div className="mt-10   sm:mx-auto sm:w-full sm:max-w-sm">
     
        <div>
          <h1 className="  font-bold   text-gray-900"><span>ACCOUNT NUMBER:</span>1450416017</h1>
          <h1  className="  font-bold  text-gray-900"><span>ACCOUNT BANK:</span>FCMB (First City Monument Bank) </h1>
          <h1 className="  font-bold  text-gray-900"><span>ACCOUNT NAME:</span>EMMANUEL TOKULA ENYOJO </h1>


         
        </div>

        
        <div className="p-4" >
        <h1 className="  font-bold "> Support Us from any Part of the world   </h1>
        <a href="https://www.buymeacoffee.com/AnotherStory01" className="inline-flex p-4 items-center justify-center text-white px-5 py-3 mr-3 text-base font-medium text-center  rounded-lg bg-[#621e67] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Buy us a Camera
                <svg className="w-5 h-5 ml-2 -mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>


        </div>
  
  
   
  
        
      </div>


      <div className="">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="max-w-2xl py-16 mx-auto sm:py-24 lg:max-w-none lg:py-32">
        <h2 className="text-2xl font-bold text-gray-900">Another Story Shows </h2>
  
        <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
          <div className="relative group">
            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src="/cover-img1.png" alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug." className="object-cover object-center w-full h-full"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="https://www.youtube.com/watch?v=Ye6Kk40mgy0&t=1s">
                <span className="absolute inset-0"></span>
                LIPS 'Life in Private School'
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">This is a Youtube series that talks about issuess in private school and the drama among student</p>
          </div>
          <div className="relative group">
            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src="/cover-img2.jpg" alt="Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant." className="object-cover object-center w-full h-full"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="https://www.youtube.com/watch?v=xWzFbwSbvuI">
                <span className="absolute inset-0"></span>
                Thunder fire you
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">This is a short drama about heart break</p>
          </div>
          <div className="relative group">
            <div className="relative w-full overflow-hidden bg-white rounded-lg h-80 sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
              <img src="/cover-img3.jpg" alt="Collection of four insulated travel bottles on wooden shelf." className="object-cover object-center w-full h-full"/>
            </div>
            <h3 className="mt-6 text-sm text-gray-500">
              <a href="https://www.youtube.com/watch?v=cbGHMFAFTq4">
                <span className="absolute inset-0"></span>
                Running to you
              </a>
            </h3>
            <p className="text-base font-semibold text-gray-900">Love Drama</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
   
    
  </div>
  );
}
