import Script from 'next/script';
import { useEffect, useState } from 'react';

declare global {
    interface Window {
        run: Function;
    }
}

function useScript(file: string) {
    const [scriptFunc, setScriptFunc] = useState<Function>()
    useEffect(() => {
        const script = document.createElement('script')
        script.src = `/api/get/script?file=${file}`;
        script.async = true;

        document.body.append(script);
        script.onload = () => setScriptFunc(window.run)

        return () => {
            if (script) document.body.removeChild(script)
        }
    }
        , [file, setScriptFunc])


    return !scriptFunc ? () => { } : scriptFunc;
}

export default useScript;
