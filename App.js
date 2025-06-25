// TO  create this type of structure(NESTED STRUCTURES)
 /**
  * <div id = "parent">  * 
  * <div id = "child">
  * <h1>Hello I am h1 Tag</h1>
  * <h2>Hello I am h2 Tag</h2>
  * </div>
  * </div> 
  * 
  * ReactElement(Object) => HTML(Browser Understand)
  */
 const parent = React.createElement("div",{id:"parent"},
    React.createElement("div",{id:"child1"}, [
       React.createElement("h1",{},"Hello I am h1 Tag"),
       React.createElement("h2",{},"Hello I am h2 Tag")
     ]),
      React.createElement("div",{id:"child2"}, [
       React.createElement("h1",{},"Hello I am h1 Tag"),
       React.createElement("h2",{},"Hello I am h2 Tag")
     ])
    );
    console.log(parent);      
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(parent);
 




    //To create h1 tag and print the output
    // const heading = React.createElement(
    //   "h1",
    //   {id:"heading"},
    //   "Hello World from React!"
    // );
    // console.log(heading);
    // const root = ReactDOM.createRoot(document.getElementById("root"));    
    // root.render(heading);
 

    // Print the hello world in Javascript 
// const heading = document.createElement("h1");
// heading.innerHTML="Hello World fron JavaScript";
// const roots = document.getElementById("root");
// roots.appendChild(heading);