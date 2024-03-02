import { createContext, useContext, useState } from "react";

export const ConfigureContext = createContext();

export const ConfiguratorProvider = ({children}) => {
    const [legs, setLegs] = useState(0);
    const [tableWidth, setTableWidth] = useState(100);
    const [legsColor, setLegsColor] = useState("#777777");

    return (
        <ConfigureContext.Provider value={{tableWidth, setTableWidth, legs, setLegs, legsColor, setLegsColor}}>
            {children}
        </ConfigureContext.Provider>
    );
}

export const useConfigurator = () => {
    const context = useContext(ConfigureContext);

    if(context === undefined) {
        throw new Error (
            'useConfigurator must be used within a ConfiguratorProvider'
        );
    }

    return context;
}