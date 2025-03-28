import SideBar from "./SideBar";
// import {Player} from "./Player.tsx";
import Header from "./Header.tsx";
import Side from "./Side.tsx";
import DisplayAdded from "./DisplayAdded.tsx";
function Added() {
  return (
    <div>
      <div className="overflow bg-gradient-to-tr from-black to-red-950 duration-300">
        <div className="font-jura min-h-screen flex ">
            <div className="w-full">
                <Header/>
              
                <div className="flex w-[100%] h-[90%] ">
                <SideBar/>
                <DisplayAdded/>
                <Side/>
                </div>
                

            </div>
        </div>
      </div>
    </div>
  );
}

export default Added;