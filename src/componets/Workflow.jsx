import { CheckCircle2 } from "lucide-react" 
import { checklistItems } from "../constants"

const Workflow = () => {
  return (
    <div className="mt-20 w-screen h-auto">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6
        tracking-wide ">Acceleration your {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent
             bg-clip-text "></span>
             </h2>
             <div className="flex flex-wrap justify-center">
                <div className="p-2 w-64 lg:w-1/2">
                    <img src= "src/assets/code.jpg" alt="codeImg" />
                </div>
                 <div className="pt-12 w-full flex flex-wrap lg:mr-64 sm:mr-0 lg:w-12">
                    {checklistItems.map((item, index) => (
                        <div key={index} className="flex mb-2">
                            <div className="text-green-400 mx-6 bg-neutral-900 h-10
                            p-2 justify-center items-center rounded-full">
                                <CheckCircle2 />
                            </div>
                            <div  className="w-64">
                                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                                <p className="text-md text-neutral-500">{item.description}</p>
                            </div>
                        </div>
                    ))}
                 </div>
             </div>
    </div>
  )
}

export default Workflow