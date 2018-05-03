# fitText

Adaptive text size to its container element.

## Experiment

This experiment consists of trying to come up with a method to make text adjustable to all widths and heights of its parent container.

The typical use case in this would be in buttons were the text length in a language is different from what it is in a translation, and in case designers suggest a fixed width, fitting all lengths of text in it would become tricky.

The solution would be to resize the font size of the text; i.e. scale it up or down as needed in order for it to fit.

## Methodology

As far as I understand the challenge; there are to methods to accomplish this.

"Mathematical", and "Graphical".

### Solving it with Maths
The first method just depends on how many characters are in the box and then divides them by each other to produce a number, we add a ratio (error margin) to that number and we get an approximate font size to apply to our text.
However mathematically, this version of the solution is not perfect because "fonts". Fonts have different shapes & sizes and each font gives a different land size for each of their characters.
Some fonts give the M and the I the same width; those are generally fonts used in code editors.

Other fonts give each font only the amount of space it requires. And it goes further than that.
So 1 mathematical formula, be it simple of overly complicated and while putting into consideration all the widths of different characters and what not.. will not be perfect and fail at some cases.

### Calling for DOM's help: solving it with JS & DOM
After finding those issues, I decided to start over with a more graphical method, it’s quite simple and efficient in my humble opinion.
We create a hidden DOM element (hidden box) that is exactly the size of the text (we use css property `display: inline-block`). We then measure the size of that box and voila we got the size of the text. We then start adding a “step counter” (for example 1 pixel) to our hidden box's text until it’s the same size of our original box (a button, or a div, or anything), then remove the hidden element (all of that takes a couple of milliseconds) and apply our newly acquired font to our text in the outerDiv.

The only downside to this method is that executing it so many times (100s of times) will make a noticeable lag. However for our purpose here it serves us well and more accurate than the first solution.

## Where's NodeJS, ES6, Webpack and Babel?
While it's fun to work on `fitText` in such an environment where ES6 reduces the amount of code we write, Babel transpiles it to a version of JS that the browser can understand, and Webpack to bundle and minify our library. I think a simple solution (simple in terms of lines of code and number of files) requires a simple setup.

## Improvements

There are so many good improvements that can be added to such a solution when it goes for production.

### Include event handlers and listeners.
While our little library only does what it's asked for, resizes the text to fit it's container. We can add event listeners for when the box's size is changed.

This, also, gets broken down to two methods: normal event listeners for when the screen size changes, the orientation is changed. And the more modern way: mutation observers; we simply ask JS to observe at all times any changes happen in the size of our box or "outputDiv" in our case; when a change event is triggered, we execute `fitText()` again.

### Parametirize `fitText`
Currently fit text only takes the element we want to work with. However in the code our scaling up and down depends on the size of the `step`. We can make it so that we add add a step of our own for the library to use instead of changing font size by 1 pixel each time.

We can also add a maximum font size and a minimum font size for when we don't want the size to exceed a certain value.
