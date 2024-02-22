import Nav from "../components/nav/nav";
import Button from "../components/button/button";
import Footer from "../components/footer/footer";
import Slide from "../components/slide-image";
import Card from "../components/card";
import './Home.css'

export default function Home() {
  return (
    <>
      <Nav></Nav>
      <div className="newArtWorks flex flex-row mb-24 mt-10">
        <div className="slide-container w-1/2 ml-10">
          <Slide></Slide>
        </div>
        <div className="discriptionContainer m-auto flex flex-col mx-auto w-1/2">
          <h1 className="text-[40px] font-bold text-center">New Art Works</h1>
          <p className="text-center text-[20px] mb-10">
            A lot of beautiful art works are available for sale now
          </p>
          <Button
            value="More"
            className="normal font-semibold h-10 mx-auto"
          ></Button>
        </div>
      </div>

      <div className="popularArtist">
        <h1 className="text-[30px] font-semibold text-center mb-3">
          Popular Artists
        </h1>
        <div className="con bg-slate-200 pt-16 grid grid-cols-5 pb-20 px-40 border-t border-b border-slate-400">
          <Card url="https://i.pinimg.com/564x/3c/af/22/3caf22a16f6687993eb283ca969488b3.jpg"></Card>
          <Card url="https://i.pinimg.com/564x/b5/88/10/b58810fcf4e720986be187497e698056.jpg"></Card>
          <Card url="https://i.pinimg.com/564x/9e/50/c3/9e50c35ea61d942ec28bc9c765e80f5c.jpg"></Card>
          <Card url="https://i.pinimg.com/564x/49/9b/67/499b67ba47061c414c0bf82b7586917f.jpg"></Card>
          <Card></Card>
        </div>
      </div>

      <div className="artOfTheDay flex flex-cols py-20">
        <div className="text-clock w-2/4 h-fit my-auto ml-10px">
          <h1 className="font-semibold text-[30px] text-center mb-3">
            Art Of The Day
          </h1>
          <div className="mx-auto w-fit mb-20">
            <span className="font-extralight text-xl">
              We recommended gorgeous four arts with{" "}
            </span>
            <span className="font-semibold text-[#FE0000] text-xl">
              20% off
            </span>
          </div>
          <div className="clock p-4 shadow-inner w-fit rounded-full shadow-slate-400 mx-auto">
            <h1 className="text-[#FE0000] text-[35px] font-bold" id="time">03:26:38</h1>
          </div>
        </div>
        <div className="arts w-5/6 grid grid-cols-2 gap-20 border-l border-slate-400 pl-40">
            <div className="img w-3/4">
                <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="p-3 shadow-md shadow-slate-400 mb-3"/>
                <div className="mx-auto w-fit"><span className="font-semibold text-xs"><s>5000</s></span><span className="text-[#FE0000] font-light text-[8px]"> THB</span></div>
                <div className="mx-auto w-fit mb-5">
                    <span className="text-[#FE0000] font-bold">4000</span><span className="text-[#FE0000] font-light text-xs"> THB</span>
                </div>
                <div className="mx-auto w-fit"><Button value="Buy" className="submit h-7 w-20 text-sm"></Button></div>
            </div>
            <div className="img w-3/4">
                <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="p-3 shadow-md shadow-slate-400 mb-3"/>
                <div className="mx-auto w-fit"><span className="font-semibold text-xs"><s>5000</s></span><span className="text-[#FE0000] font-light text-[8px]"> THB</span></div>
                <div className="mx-auto w-fit mb-5">
                    <span className="text-[#FE0000] font-bold">4000</span><span className="text-[#FE0000] font-light text-xs"> THB</span>
                </div>
                <div className="mx-auto w-fit"><Button value="Buy" className="submit h-7 w-20 text-sm"></Button></div>
            </div>
            <div className="img w-3/4">
                <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="p-3 shadow-md shadow-slate-400 mb-3"/>
                <div className="mx-auto w-fit"><span className="font-semibold text-xs"><s>5000</s></span><span className="text-[#FE0000] font-light text-[8px]"> THB</span></div>
                <div className="mx-auto w-fit mb-5">
                    <span className="text-[#FE0000] font-bold">4000</span><span className="text-[#FE0000] font-light text-xs"> THB</span>
                </div>
                <div className="mx-auto w-fit"><Button value="Buy" className="submit h-7 w-20 text-sm"></Button></div>
            </div>
            <div className="img w-3/4">
                <img src="https://i.pinimg.com/736x/46/07/44/46074402e28fb6637d1f0f7ed11676e2.jpg" alt="" className="p-3 shadow-md shadow-slate-400 mb-3"/>
                <div className="mx-auto w-fit"><span className="font-semibold text-xs"><s>5000</s></span><span className="text-[#FE0000] font-light text-[8px]"> THB</span></div>
                <div className="mx-auto w-fit mb-5">
                    <span className="text-[#FE0000] font-bold">4000</span><span className="text-[#FE0000] font-light text-xs"> THB</span>
                </div>
                <div className="mx-auto w-fit"><Button value="Buy" className="submit h-7 w-20 text-sm"></Button></div>
            </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
