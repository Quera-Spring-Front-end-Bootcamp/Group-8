import {
  Calendar,
  CustomRenderingStore
} from "./chunk-RGIQ6LNF.js";
import {
  require_react_dom
} from "./chunk-NREMUTAN.js";
import {
  require_react
} from "./chunk-ST3U5LCA.js";
import {
  __toESM
} from "./chunk-DFKQJ226.js";

// node_modules/@fullcalendar/react/dist/index.js
var import_react = __toESM(require_react());
var import_react_dom = __toESM(require_react_dom());
var FullCalendar = class extends import_react.Component {
  constructor() {
    super(...arguments);
    this.elRef = (0, import_react.createRef)();
    this.isUpdating = false;
    this.isUnmounting = false;
    this.state = {
      customRenderingMap: /* @__PURE__ */ new Map()
    };
    this.requestResize = () => {
      if (!this.isUnmounting) {
        this.cancelResize();
        this.resizeId = requestAnimationFrame(() => {
          this.doResize();
        });
      }
    };
  }
  render() {
    const customRenderingNodes = [];
    for (const customRendering of this.state.customRenderingMap.values()) {
      customRenderingNodes.push(import_react.default.createElement(CustomRenderingComponent, { key: customRendering.id, customRendering }));
    }
    return import_react.default.createElement("div", { ref: this.elRef }, customRenderingNodes);
  }
  componentDidMount() {
    const customRenderingStore = new CustomRenderingStore();
    this.handleCustomRendering = customRenderingStore.handle.bind(customRenderingStore);
    this.calendar = new Calendar(this.elRef.current, Object.assign(Object.assign({}, this.props), { handleCustomRendering: this.handleCustomRendering }));
    this.calendar.render();
    let lastRequestTimestamp;
    customRenderingStore.subscribe((customRenderingMap) => {
      const requestTimestamp = Date.now();
      const isMounting = !lastRequestTimestamp;
      const runFunc = isMounting || this.isUpdating || this.isUnmounting || requestTimestamp - lastRequestTimestamp < 100 ? runNow : import_react_dom.flushSync;
      runFunc(() => {
        this.setState({ customRenderingMap }, () => {
          lastRequestTimestamp = requestTimestamp;
          if (isMounting) {
            this.doResize();
          } else {
            this.requestResize();
          }
        });
      });
    });
  }
  componentDidUpdate() {
    this.isUpdating = true;
    this.calendar.resetOptions(Object.assign(Object.assign({}, this.props), { handleCustomRendering: this.handleCustomRendering }));
    this.isUpdating = false;
  }
  componentWillUnmount() {
    this.isUnmounting = true;
    this.cancelResize();
    this.calendar.destroy();
  }
  doResize() {
    this.calendar.updateSize();
  }
  cancelResize() {
    if (this.resizeId !== void 0) {
      cancelAnimationFrame(this.resizeId);
      this.resizeId = void 0;
    }
  }
  getApi() {
    return this.calendar;
  }
};
FullCalendar.act = runNow;
var CustomRenderingComponent = class extends import_react.PureComponent {
  render() {
    const { customRendering } = this.props;
    const { generatorMeta } = customRendering;
    const vnode = typeof generatorMeta === "function" ? generatorMeta(customRendering.renderProps) : generatorMeta;
    return (0, import_react_dom.createPortal)(vnode, customRendering.containerEl);
  }
};
function runNow(f) {
  f();
}
export {
  FullCalendar as default
};
//# sourceMappingURL=@fullcalendar_react.js.map
