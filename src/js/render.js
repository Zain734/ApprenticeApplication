const {remote} = require('electron');
const {BrowserWindow} = remote;

document.onreadystatechange = () => {
    //When index.html fully loads.
    if (document.readyState === "complete") {
        handleWindowControls();
    }
};

function handleWindowControls() {
    // Make minimise/close buttons work when they are clicked
    document.getElementById('min-button').addEventListener("click", event => {
        BrowserWindow.getFocusedWindow().minimize();
    });

    document.getElementById('max-button').addEventListener("click", event => {
        BrowserWindow.getFocusedWindow().maximize();
        toggleMaxRestoreButtons();
    });

    document.getElementById('restore-button').addEventListener("click", event => {
        BrowserWindow.getFocusedWindow().restore();
        toggleMaxRestoreButtons();
    });

    document.getElementById('close-button').addEventListener("click", event => {
        BrowserWindow.getFocusedWindow().close();
    });

    function toggleMaxRestoreButtons() {
        if (BrowserWindow.getFocusedWindow().isMaximized()) {
            document.body.classList.add('maximized');
        } else {
            document.body.classList.remove('maximized');
        }
    }
}

function checkResizeButton(){

    if (!BrowserWindow.getFocusedWindow().isMaximized()){
        document.body.classList.remove('maximized');
    } else if (BrowserWindow.getFocusedWindow().isMaximized()){
        document.body.classList.add('maximized');
    }

}