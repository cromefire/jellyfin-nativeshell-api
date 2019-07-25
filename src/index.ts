import { NativeShell } from "./native-shell";

declare global {
    interface Window {
        NativeShell?: NativeShell;
    }
}

export function registerApi(api: NativeShell) {
    window.NativeShell = api;
}
