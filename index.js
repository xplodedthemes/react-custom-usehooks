

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

const usePrevPropsAndState = (props, state) => {
    const prevPropsAndStateRef = react.useRef({ props: null, state: null });
    const prevProps = prevPropsAndStateRef.current.props;
    const prevState = prevPropsAndStateRef.current.state;

    react.useEffect(() => {
        prevPropsAndStateRef.current = { props, state };
    });

    return { prevProps, prevState }
};

const useGetSnapshotBeforeUpdate = (cb, props, state) => {
    // get prev props and state
    const { prevProps, prevState } = usePrevPropsAndState(props, state);

    const snapshot = react.useRef(null);


    // getSnapshotBeforeUpdate - not run on mount + run on every update
    const componentJustMounted = react.useRef(true);
    react.useLayoutEffect(() => {
        if (!componentJustMounted.current) {
            snapshot.current = cb(prevProps, prevState);
        }
        componentJustMounted.current = false;
    });

    // 👇 look here
    const useComponentDidUpdate = cb => {
        react.useEffect(() => {
            if (!componentJustMounted.current) {
                cb(prevProps, prevState, snapshot.current);
            }
        });
    };
    // 👇 look here
    return useComponentDidUpdate
};

exports.useGetSnapshotBeforeUpdate = useGetSnapshotBeforeUpdate;
exports.usePrevPropsAndState = usePrevPropsAndState;
//# sourceMappingURL=index.js.map
