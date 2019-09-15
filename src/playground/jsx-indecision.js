console.log("App is running!");

const app = {
    title: "Indecision App",
    subtitle: "This is some info",
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        render();
    }
};

const removeOptions = (e) => {
    e.preventDefault();

    app.options = [];
    render();
};

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

// create "Remove All" button about list
// on click -> wipe the array -> rerender


const appRoot = document.getElementById("app");

// const numbers = [55, 101, 1000];

// JSX - JavaScript XML
const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options && (app.options.length > 0 ? "Here are your options" : "No options")}</p>
            <button disabled={app.options.length == 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeOptions}>Remove All</button>
            {
                /* numbers.map((number) => {
                    return <p key={number}>Number: {number}</p>
                }) */
            }
            <ol>
                {/* map over app.options getting back an array of lis (set key and text) */}
                {
                    app.options.map((option) => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

render();

// Create renger function that renders the new jsx
// Call it right away
// Call it after options array added to

// << Challenge Question 1 >>
// Create a templateTwo ver JSX expression
// div
//   h1 -> Jake Moh
//   p ->  Age: 26
//   p -> Location: Vancouver
// Render templateTwo instead  of template

// << Challenge Question 2 >>
// create app object title/subtitle
// user title/subtitle in the template
// render template

// if statements
// ternazy operators
// logical and operators

// << Challenge Question 3 >>
// only render the subtitle (and p tag) if subtitle exist
// - logical and operator
// redner new p tag - if options.length > 0 "Here are your options"
// "No options"