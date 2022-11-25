import InputComp from "../../components/Input"

const Login = () => {
  const handleChange = () => {

  }
  return (
    <>
      <section id='login' className="pt-10">
        <div className="font-bold text-[62px] text-center text-blue-600 mb-2">
          facebook
        </div>
        <div className="flex flex-col items-center bg-white drop-shadow-2xl py-6 md:mx-[100px] lg:mx-[300px] xl:mx-[500px] rounded-lg">
          <div className="font-medium text-xl">
            Login to facebook
          </div>
          <div className="w-11/12 mt-5 space-y-4 flex flex-col ">
            <InputComp placeholder='Email address or phone number' />
            <InputComp placeholder='Password' />
            <button className="bg-blue-600 w-full py-3 text-center text-xl font-semibold text-white rounded-lg">
              Log in
            </button>
            <button className="text-blue-600 text-lg font-medium w-full">
              Forgotton account?
            </button>
            <div className="flex items-center py-4">
        <div className="flex-grow h-px bg-gray-400"></div> 
        <span className="flex-shrink text-2xl text-gray-500 px-4 italic font-light">or</span>
        <div className="flex-grow h-px bg-gray-400"></div>
    </div>
            <button className="bg-green-500 ml-16 w-2/3 py-3 text-xl font-semibold text-white rounded-lg">
              Create New Account
              </button>
          </div>
        </div>
     
      </section>
    </>
  )
}

export default Login
