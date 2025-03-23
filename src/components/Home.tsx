import SideBar from "./SideBar";
import {Player} from "./Player.tsx";
import Header from "./Header.tsx";
import Display from "./Display.tsx";

function Home() {
  return (
    <div>
      <div className="overflow bg-gradient-to-tr from-black to-red-950">
        <div className="font-jura min-h-screen flex ">
            <div className="w-full">
                <Header/>
              
                <div className="flex w-full h-[90%]">
                <SideBar/>
                <Display/>
                </div>
                <Player/>

            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
