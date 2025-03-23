import { NavLink } from 'react-router'


export default function Login() {
  return (
    <div>
      <div className="className">
                <div className='font-jura min-h-screen align-middle flex bg-gradient-to-tr from-black to-red-950'>
                <NavLink to="/" className="h-10 w-25 bg-red-500 text-white py-2 rounded text-2xl mt-6 ml-6 text-center ">Back</NavLink>

                  <div className='min-h-screen flex flex-col gap-18 items-center justify-center text-center max-w[800] w-full mx-auto p-4'>
                    <div className='h-[60%] w-[20%] bg-transparent rounded-2xl backdrop-blur-2xl border-gray-600 border-2 p-5 py-0.5 hover:shadow-2xl hover: shadow-blue-300 hover:duration-300 '>
                      <input type="text" className='bg-white w-70 rounded border-2 mt-29 hover:border-red-300' />

                    </div>

                  </div>
hi
                </div>
           
      </div>
    </div>
  )
}
