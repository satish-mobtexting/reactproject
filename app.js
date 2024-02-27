    // creat a react element 
    const header1 = React.createElement("h1", { id:"header1"}, "Welcome to React app");
    const header2 = React.createElement("h2", { id:"header2"}, "Welcome to React app2");
    // we can keep all chiledren elements inside the array
    const container = React.createElement("div", { id:"container"}, [header1, header2]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element into root 
    // root.render(header1);

    // passing the react container element into root 
    // render will modify the dom
    root.render(container); 