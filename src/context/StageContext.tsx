import { createContext, useState } from 'react';

interface StageContextProps {
    stage: string;
    setStage: (description: string) => void;
}

interface StageContextProviderProps {
    children: React.ReactNode
}

export const StageContext = createContext<StageContextProps>({
    stage: 'Home',
    setStage: () => {},
});

export default function StageContextProvider({children}: StageContextProviderProps) {
    const [stage, setStage] = useState('Home');

    function handleChange(description: string) {
        setStage(description);
    }

    return (
        <StageContext.Provider value={{ stage, setStage: handleChange }}>
            {children}
        </StageContext.Provider>
    )

}
