import {useEffect, useLayoutEffect, useRef} from "react";
import usePrevPropsAndState from "./usePrevPropsAndState";

const useGetSnapshotBeforeUpdate = (cb, props, state) => {
    // get prev props and state
    const { prevProps, prevState } = usePrevPropsAndState(props, state)

    const snapshot = useRef(null)


    // getSnapshotBeforeUpdate - not run on mount + run on every update
    const componentJustMounted = useRef(true)
    useLayoutEffect(() => {
        if (!componentJustMounted.current) {
            snapshot.current = cb(prevProps, prevState)
        }
        componentJustMounted.current = false
    })

    // 👇 look here
    const useComponentDidUpdate = cb => {
        useEffect(() => {
            if (!componentJustMounted.current) {
                cb(prevProps, prevState, snapshot.current)
            }
        })
    }
    // 👇 look here
    return useComponentDidUpdate
};

export default useGetSnapshotBeforeUpdate;