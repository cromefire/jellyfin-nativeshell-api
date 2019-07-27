import { NativeShell } from "./native-shell";

declare global {
    interface Window {
        NativeShell?: NativeShell;
    }
}

/**
 * Registers the shell api with Jellyfin web
 */
export function registerApi(api: NativeShell) {
    window.NativeShell = api;
}
