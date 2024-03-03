
/**
 * Parcel functionalities.
 * HMR - Hot module reloading (it will refresh the page automatically).
 * File water algorithm (based on File water algorithm Hot module reloading is happening).
 * Building.
 * Minifying.
 * Dev and production build.
 * Super fast build algorithm.
 * Image optimization.
 * Caching while development.
 * compression.
 * rewriting.
 * compatable with older version of browsers.
 * https on dev also. (npx parcel index.html --https)
 * it will assign the port.
 * Consist of hasing algorithm.
 * Zero config
 * Tree shaking (Removing unwanted code) (It will remove unused functions of the installed packages).
 */

/**
 * Transitive dependencies(each package has it own dependencies).
 * 
 * polyfill means converting the newer version of code to old code. (bable will do the functionality) 
 * If we mentioned the browsers list, then bable will do the polyfill, means it will convert the new version of code to old code.
 * We don't need to write the polyfill, bable will take care of it.
 * Bable will clearing the console log.
 */

import React, { Component } from "react";
import ReactDOM  from "react-dom/client";

    // if we import createElement from react we can directly call that function or by using alias also.
    // import {createElement} from "react";
    // const header1 = createElement("h1", { id:"header1", key:"h1"}, "Welcome to React app from parcel");
                                // or 
    // import {createElement as ce } from "react";
    // const header1 = ce("h1", { id:"header1", key:"h1"}, "Welcome to React app from parcel");

    // creat a react element 
    const header1 = React.createElement("h1", { id:"header1", key:"h1"}, "Welcome to React app from parcel");
    // React.createElement ==> javascript object => html (DOM) 
    const header2 = React.createElement("h2", { id:"header2", key:"h2"}, "Welcome to React app2");
    // we can keep all chiledren elements inside the array
    const container = React.createElement("div", { id:"container"}, [header1, header2]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element into root 
    // root.render(header1);

    // passing the react container element into root 
    // render will modify the dom
    // root.render(container);





    // creating the elements using jsx.
    // jsx means javascript xml 
    // jsx is html like syntax
    // single line jsx 
    const header = <h1 id="header1" key="header1key">header one</h1>;
    // mutiple line jsx
    // it's a react element
    const header3 = (
        <h1 id="header3" key="header3key">
            react element or jsx
        </h1>
    );
    // jsx => react.createElement => object => html (dom)
    // Bable will convert jsx to react.createElement then object then html (dom)

    // example for rendering the react element.
    // root.render(header3);


    // React Component (everything is a component in react)
    // 1. Functional Component.
    // 2. Class Component.
    // Functional component is normal java script function.
    // functional component name starts with capital letter.(not mandatory but its good practice).
    
    // single line Component.
    const HeaderComponent = () => {
        return <h1>functional component</h1>;
    }

    // Multi line Component.
    const HeaderComponents = () => {
        return (
            <div>
                <h1>functional component</h1>
                <h1>functional component</h1>
            </div>
        );
    }

    // component with out return statement.
    const HeaderComponent2 = () =>
        (
            <div>
                <h1>functional component</h1>
                <h1>functional component</h1>
            </div>
        );
    
    // component with function.
    const HeaderComponent3 = function () {
        return (
            <div>
                {header3} {/* we can write any javascript code */}
                <h1>This is React functional component</h1>
                <h1>This is h1 tag</h1>
                <HeaderComponent2 />{/* this is know as component composition */}
            </div>
        );
    }

    //here {header3} inserting the react element into a react component. 
    //here  <HeaderComponent2 /> inserting a react functional compont into another functional component.
    // <HeaderComponent2 /> or {HeaderComponent2()} both are same.
    // example of rendering the react componet.
    // inserting a component inside a component is called as component coposition.
    root.render(<HeaderComponent3 />)
