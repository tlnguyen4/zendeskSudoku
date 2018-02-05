# Thanh's Zendesk 1 Board Sudoku Game

## Technologies used
- JavaScript (React)
- Redux
- HTML/CSS

## General structure
The game is broken down into smaller React components that receive states and functions from Redux:
    Tile given and empty (the cells inside the board)
        -> Board (container of all of the cells) / Buttons (contains buttons underneath the board)
            -> App (handle props and dispatch from Redux)
                -> index (attach the components to the HTML page).

- Redux maintains the states of the game: current board array, check for correctness array, if the solve button was
clicked, if the board is solved. Redux defines the different actions that would happen depends on the type of action
being sent back from App.js. All actions are carried out in linear time (according to the length of the board).
- App.js contains all components of the game and dictates the general layout of the page. App.js handles states and
props from Redux and passes these down to its child components Board and Buttons. App is then connected to Redux
via connect() before being exported to index.js.
- Board.js is the actual board component consisting of 81 cells displayed in a table format. The board component sets
the layout of the sudoku game via Board.css. The board takes in an array of number and displays the appropriate
cell: TileGiven for given (positive) value or correct (1 in check array) value and TileEmpty for 0 (no input) or
wrong (-1 in check array) input.
- Buttons.js displays the buttons with their titles and functions passed in as props from App.js.
- TileEmpty.js and TileGiven.js are the smallest components. TileEmpty is an input field where the value is the props
value being passed in or empty if the value is 0. TileGiven displays given cell in black if the value is positive or in
green if the value is negative.

## Known bugs / limitations
- User could input multiple digits into one cell but this could be useful for keeping track of guesses for potential
numbers in that cell.
- Board starts out as all input fields (matters more on display and appearance of the initial empty board)

## Problems encountered
- For quite a while I couldn't figure out why the board component wasn't getting updated even though Redux accepts the
input and makes a change to the array and send the new state back to App.js. This was because React does a shallow
check of the array and, by reference, the array is the same as itself. To bypass this, I added a user input counter in
state and increment the count every time there's an input. By sending this change back to App.js, App.js does
rerender the board and the input is shown in the input field.