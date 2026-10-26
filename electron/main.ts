import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';

const DEV_URL = process.env.FRAMEFLOW_DEV_URL ?? 'http://localhost:3001';

function createWindow(): void {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  void win.loadURL(DEV_URL);
}

ipcMain.handle('ping', () => 'pong depuis le processus principal');

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});