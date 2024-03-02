
/**
 * Parcel functionalities.
 * HMR - Hot module reloading (it will refresh the page automatically).
 * File water algorithm (based on File water algorithm Hot module reloading is happening).
 * Building.
 * Minifying.
 * clearing the console log.
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
 */

/**
 * Transitive dependencies(each package has it own dependencies).
 */

import React from "react";
import ReactDOM  from "react-dom/client";
    // creat a react element 
    const header1 = React.createElement("h1", { id:"header1"}, "Welcome to React app from parcel");
    const header2 = React.createElement("h2", { id:"header2"}, "Welcome to React app2");
    // we can keep all chiledren elements inside the array
    const container = React.createElement("div", { id:"container"}, [header1, header2]);

    const root = ReactDOM.createRoot(document.getElementById("root"));
    // passing the react element into root 
    // root.render(header1);

    // passing the react container element into root 
    // render will modify the dom
    root.render(container); 