# js-picross
[Live link][js-picross]
[js-picross]: http://pyi891.github.io/js-picross

## About
**js-picross** is a Picross puzzle game written in JavaScript and React.

More information on Picross puzzles (also known as nonogram puzzles) can be found on its [Wikipedia article.][wiki]

[wiki]: https://en.wikipedia.org/wiki/Nonogram

## How to Play
The objective of a nonogram puzzle is to solve the grid by shading the tiles according to the given sets of hints for each column and row.  Each set of hints along each row and column indicates the groupings of shaded tiles in order along the axis. For example, a row with the hint set "3 1 2" means that along that row, there is a group of three shaded tiles, followed by a single shaded tile, followed by two shaded tiles, each separated by at least one blank tile.

The difficulty of the puzzle can be set via the slider underneath the grid.  Simply drag the slider and select a grid dimension (5x5, 10x10, 15x15 and 20x20).  Tiles can be shaded via left clicking and marked as invalid via right clicking.  The game will notify you when the puzzle has been successfuly completed.
