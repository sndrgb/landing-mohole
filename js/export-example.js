// file Game.js
export class Mouse {} // QUANTI NE VUOI
export const followMouse = () => {} // QUANTI NE VUOI
export default class Game {} // SOLO UNO PER FILE

// file index.js
import Game from './game.js' // import solo class Game
import { Mouse, followMouse } from './game.js' // import solo non default

import Game, { Mouse, followMouse } from 'game.js' // import di tutti e tre