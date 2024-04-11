


const parent=React.createElement("div",
{id: "parent"},
[React.createElement("div",{id: "child"},
[React.createElement("h1",{id: "header"},"here i am"),React.createElement("h2",{id: "header"},"here i am too")]),
React.createElement("div",{id: "child2"},
[React.createElement("h1",{id: "header"},"here i am"),React.createElement("h2",{id: "header"},"here i am too")])]);

/*const heading=React.createElement("h1",
{id: "heading" , xyz: "abc"},
"Hello World from react"
);*/
console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);