export {};

declare global {
  interface Window {
    frameflow?: { ping: () => Promise<string> };
  }
}