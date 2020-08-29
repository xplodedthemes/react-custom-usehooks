// custom Hook for getting previous props and state
// https://reactjs.org/docs/hooks-faq.html#how-to-get-the-previous-props-or-state
import {useEffect, useRef} from "react";

const usePrevPropsAndState = (props, state) => {
    const prevPropsAndStateRef = useRef({ props: null, state: null })
    const prevProps = prevPropsAndStateRef.current.props
    const prevState = prevPropsAndStateRef.current.state

    useEffect(() => {
        prevPropsAndStateRef.current = { props, state }
    })

    return { prevProps, prevState }
};

export default usePrevPropsAndState;