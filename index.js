const { app, BrowserWindow, screen } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 250,
        height: 250,
        icon: __dirname + '/favicon.ico',
        webPreferences: {
            nodeIntegration: true
        },
        frame: false,
        transparent: true,
        resizable: false,
        movable: true,
        center: true,

    });

    win.loadFile('index.html');

    win.on('will-move', (event, rectangle) => {
        const { width, height } = screen.getPrimaryDisplay().workAreaSize;



        rectangle.height + rectangle.y > height && event.preventDefault();
        rectangle.width + rectangle.x > width && event.preventDefault();

        // console.log({ y: rectangle.height + rectangle.y, wy: height });
        // console.log({ x: rectangle.width + rectangle.x, wx: width });

    })

    return;
}

app.whenReady().then(() => {
    createWindow()
})