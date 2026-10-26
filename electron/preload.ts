import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('frameflow', {
  ping: (): Promise<string> => ipcRenderer.invoke('ping'),
});