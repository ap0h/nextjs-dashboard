"use client";

import {  useCallback, useRef } from "react";

const useDebounceCallback = (callback: any, delay: number) => {
    const timeoutRef = useRef<number|undefined>();
    const isReady = useRef(false);

    const debouncedCallback = useCallback(
        (...args: any[]) => {
        if (isReady.current) {
            console.log("searching...");
            callback(...args);
            isReady.current = false;
        } else {
            if(timeoutRef.current)
                clearTimeout(timeoutRef.current);
        }
    
        timeoutRef.current = setTimeout(() => {
            isReady.current = true;
            callback(...args);
        }, delay) as any;
        },
        [callback, delay]
    );
    
    return debouncedCallback;
}

export default useDebounceCallback;