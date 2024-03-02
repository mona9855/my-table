import React from "react";
import { useConfigurator } from "../contexts/Configurator";

const Interface = () => {
  const { tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor } =
    useConfigurator();

  return (
    <div className="absolute left-1 top-2 p-1  rounded border-white min-h-[80%] min-w-[20%]">
      <h1 className="font-bold sm:text-xl text-base text-[#044F67] font-Lora">Table Configurator</h1>

      <div className="flex flex-col gap-1 text-xs sm:text-sm md:text-base mx-auto rounded mt-1 bg-slate-400 
      shadow shadow-slate-50 opacity-90">
        
        <div className="mt-1 rounded bg-transparent px-2 py-2 flex md:flex-col flex-row gap-1">
          <label for="width" className="block text-[#5B3256] font-bold">
            Table Width
          </label>
          <input
            type="range"
            id="width"
            name="width"
            min={50}
            max={200}
            value={tableWidth}
            onChange={(e) => setTableWidth(e.target.value)}
          />
        </div>

        <div className="mt-1 rounded bg-transparent px-2 py-2 flex md:flex-col flex-row gap-2">
          <h3 className="mb-2 text-[#5B3256] font-bold">Table Layout</h3>

          <form
            value={legs}
            onChange={(e) => setLegs(parseInt(e.target.value))}
          className="flex md:flex-col flex-row gap-1">
            <label for="standard">
              <input type="radio" id="standard" name="layout" value={0} />
              Standard
            </label>
            

            <label for="solid">
              <input type="radio" id="solid" name="layout" value={1} />
              Solid
            </label>
            

            <label for="design">
              <input type="radio" id="design" name="layout" value={2} />
              Design
            </label>
           
          </form>
        </div>

        <div className="mt-1 rounded bg-transparent px-2 py-2 flex md:flex-col flex-row gap-2">
          <h3 className="mb-2 text-[#5B3256] font-bold">Legs Color</h3>

          <form
            value={legsColor}
            onChange={(e) => setLegsColor(e.target.value)}
            className="flex md:flex-col flex-row gap-1"
          >
            <label for="black">
              <input type="radio" id="black" name="color" value={"#777777"} />
              Black
            </label>
            

            <label for="chrome">
              <input type="radio" id="chrome" name="color" value={"#ECECEC"} />
              Chrome
            </label>
            

            <label for="gold">
              <input type="radio" id="gold" name="color" value={"#C9BD71"} />
              Gold
            </label>
            

            <label for="pinkGold">
              <input
                type="radio"
                id="pinkGold"
                name="color"
                value={"#C9A3B9"}
              />
              Pink Gold
            </label>
           
          </form>
        </div>
      </div>
    </div>
  );
};

export default Interface;
