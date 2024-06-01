const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, React.createElement("h1", {
    id: "heading"
}, "Im a H1 Tag")));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
