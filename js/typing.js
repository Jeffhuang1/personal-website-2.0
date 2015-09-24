// Instantiation
var theater = new TheaterJS();

// Describe actors
theater
    .describe("Typer", 1.2, "#typer");

// Write the scenario
theater
    .write("Typer:Objected Oriented Programming",2000)
    .write("Typer:Mobile Programming", 2000)
    .write("Typer:The LAMP Stack", 2000)
    .write("Typer:The MEAN Stack", 2000)
    .write("Typer:Software Design", 2000)
    .write(function () { theater.play(true); });

// Listen to theater's events
theater
    .on("say:start, erase:start", function () {
        // add blinking caret
    })
    .on("say:end, erase:end", function () {
        // remove blinking caret
    })
    .on("*", function () {
        // do something
    });