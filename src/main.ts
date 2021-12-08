import * as PIXI from 'pixi.js'
class Main
{
    constructor() {
        console.log("main")
        const app = new PIXI.Application({
            width: 800, height: 600, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
        });
        document.body.appendChild(app.view);
    }
}

window.addEventListener("load" , () =>
{
    new Main()
})
