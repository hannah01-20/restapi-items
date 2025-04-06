// LOADING SPINNER COMPONENT, WHEN USER PAGE IS LOADING IT WILL DISPLAY THIS SPINNER

import { DotLoader } from "react-spinners"

function Spinner(){
    return(
        <div className="w-full h-dvh ">
            <DotLoader className="absolute top-[50%] left-[50%] -translate-1/2"/>
        </div>
    )
}

export default Spinner