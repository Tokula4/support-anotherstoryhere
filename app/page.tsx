import Image from "next/image";

export default function Home() {
  return (
    <div className="flex  bg-white min-h-full flex-col justify-center px-6 py-12 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <img className="mx-auto h-20 w-auto" src="./logo.png" alt="Another Story"/>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Support Us at Another Story  </h2>
    </div>
  
    <div className="mt-10   sm:mx-auto sm:w-full sm:max-w-sm">
     
        <div>
          <h1 className="  font-bold   text-gray-900"><span>ACCOUNT NUMBER:</span>1450416017</h1>
          <h1  className="  font-bold  text-gray-900"><span>ACCOUNT BANK:</span>FCMB (First City Monument Bank) </h1>
          <h1 className="  font-bold  text-gray-900"><span>ACCOUNT NAME:</span>EMMANUEL TOKULA ENYOJO </h1>


          <div>
        <h1 className="  font-bold bg-white ">  </h1>
        <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                Buy us a Camera
                <svg className="w-5 h-5 ml-2 -mr-1 animate-pulse" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>


        </div>
         
        </div>
  
  
   
  
        
      </div>
  
   
    
  </div>
  );
}
