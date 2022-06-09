import { TitleScreen } from "./scenes/titleScreen.js"

var config = {
    width: window.innerWidth,
    height: window.innerHeight,
    title: "Super Mario Bros. -- Spadletskys",
    scenes: [TitleScreen],
    type: Phaser.AUTO
}

new Phaser.Game(config)