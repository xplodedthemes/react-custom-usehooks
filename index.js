

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

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var usePrevPropsAndState = _interopDefault(require('hooks/usePrevPropsAndState'));
var useGetSnapshotBeforeUpdate = _interopDefault(require('hooks/useGetSnapshotBeforeUpdate'));



exports.usePrevPropsAndState = usePrevPropsAndState;
exports.useGetSnapshotBeforeUpdate = useGetSnapshotBeforeUpdate;
//# sourceMappingURL=index.js.map
