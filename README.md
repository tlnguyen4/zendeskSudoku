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

- App.js contains all components of the game and dictates the general layout of the page. App.js handles states and
props from Redux and passes these down to its child components Board and Buttons. App is then connected to Redux
via connect() before being exported to index.js.
- Board.js
- Buttons
- Tile

- Redux

## Known bugs / limitations

## Problems encountered