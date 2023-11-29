import { useCallback, useState } from "react"

export function useArray(initarray) {

    const [array, Setarray] = useState(initarray)

    const push = useCallback(element => {
        Setarray(currentarray => [...currentarray, element])
    }, [])


    const replace = useCallback((index, newelement) => {
        Setarray(currentarray => {
            return [...currentarray.slice(0, index), newelement, ...currentarray.slice(index + 1)]
        })
    }, [])
    const filter = useCallback((element) => {
        Setarray((currentarray) => {
            return currentarray.filter(element)
        })
    }, [])
    const remove = useCallback((index) => {
        Setarray(currentarray => {
            return [...currentarray.slice(0, index), ...currentarray.slice(index + 1)]
        })
    }, [])
    const clear = useCallback(() => {
        Setarray([])
    }, [])
    const reset = useCallback(() => {
        Setarray(initarray)
    }, [])


    return { array, set: Setarray, push, replace, filter, remove, clear, reset }

}