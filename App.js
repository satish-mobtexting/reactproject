
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


    // creating a nested html using react.
    const parent =  React.createElement(
        "div",  // element name
        {id:"parent"}, // properties
        React.createElement(
            "div",  // element name
            {id:"child"}, // properties
            React.createElement(
                "h1",  // element name
                {}, // properties
                "its h1 tag" // children
                )
            )
        );

    // rendering the nested html using reactdom.
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parent);

        // creating a nested html using react.
        const parentwithsiblings =  React.createElement(
            "div",  // element name
            {id:"parent"}, // properties
            React.createElement(
                "div",  // element name
                {id:"child"}, // properties
                [
                    React.createElement(
                    "h1",  // element name
                    {}, // properties
                    "its h1 tag" // children
                    ),
                    React.createElement(
                    "h2",  // element name
                    {}, // properties
                    "its h2 tag" // children
                    )
                ]
                )
            );

            // const root = ReactDOM.createRoot(document.getElementById("root"));
            // root.render(parentwithsiblings);


        const parentwithchildsiblings =  React.createElement(
            "div",  // element name
            {id:"parent"}, // properties
            [   
                React.createElement(
                "div",  // element name
                {id:"child1"}, // properties
                [
                    React.createElement(
                    "h1",  // element name
                    {}, // properties
                    "its h1 tag" // children
                    ),
                    React.createElement(
                    "h2",  // element name
                    {}, // properties
                    "its h2 tag" // children
                    )
                ]
                ),
                React.createElement(
                    "div",  // element name
                    {id:"child2"}, // properties
                    [
                        React.createElement(
                        "h1",  // element name
                        {}, // properties
                        "its h1 tag" // children
                        ),
                        React.createElement(
                        "h2",  // element name
                        {}, // properties
                        "its h2 tag" // children
                        )
                    ]
                    )
                ]
            );

    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(parentwithchildsiblings);


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
                {header3} 
                {/* we can write any javascript code 
                
                *
                *
                * is jsx mandatory ? no
                * is typescript mandatory ? no 
                * is es6 mandatory ? no
                * 
                */}
                <h1>This is React functional component</h1>
                <h1>This is h1 tag</h1>
                <HeaderComponent2 />{/* this is know as component composition */}
            </div>
        );
    }

    //here {header3} inserting the react element into a react component. 
    // here  <HeaderComponent2 /> inserting a react functional component into another functional component.
    // <HeaderComponent2 /> or {HeaderComponent2()} both are same.
    // example of rendering the react componet.
    // inserting a component inside another component is called as component coposition.
    // root.render(<HeaderComponent3 />)


    const Title = () => {
        return (
            <a href="/"><img alt="image" className="logo" src="https://com-mt-production-ap-south-1-assets.s3.ap-south-1.amazonaws.com/53660/0216ee4e-6e51-423b-bc88-ca95af378a97.jpeg?X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARNLZC3JYWGS5WCXC%2F20240309%2Fap-south-1%2Fs3%2Faws4_request&X-Amz-Date=20240309T122010Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Signature=28ba51e632ccb471aa7f697b6f81ae9ccd4594803cd0bd81bfde0d179f60ac42"></img></a>
        );
    }

    const Header = () => {
        return (
            <div className="header">
                <Title></Title>
                <div className="navitems">
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Home</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        );
    }

    const Body = () => {
        return (
            <h1>body</h1>
        );
    }

    const Footer = () => {
        return (
            <h1>footer</h1>
        );
    }

    // jsx expressions must have one parent element.
    // const jsx = <h1>heading one</h1><h2>heading two</h2>  this is WRONG because jsx expression should have one parent element.
    // const jsx = <div><h1>heading one</h1><h2>heading two</h2></div> this is CORRECT because all child tags are wrapped into one parent tag.

    // Example: adding the empty <div></div> as a parent tag for the component.

    // const styleObj = {
    //  "background-color": "red",
    // };

    // const AppLayout = () => {
    //     return (
    //         <div style={styleObj}> // inline style in react.
    //             <Header />
    //             <Body />
    //             <Footer />
    //         </div>
    //     );
    // }

    // React.Fragment is a component exported by the react. 
    // so we can replace the empty <div></div> with <React.Fragment></React.Fragment>.  
    // const AppLayout = () => {
    //     return (
    //         <React.Fragment>
    //             <Header />
    //             <Body />
    //             <Footer />
    //         </React.Fragment>
    //     );
    // }

    // <React.Fragment></React.Fragment> is equal to <></>
    const AppLayout = () => {
        return (
            <>
                <Header />
                <Body />
                <Footer />
            </>
        );
    }
    
    root.render(<AppLayout />);