import { AppHost } from "./app-host";
import { FileSystem } from "./file-system";
import { Player } from "./player";
import { Awaited, FoundServer } from "./types";

export interface NativeShell {
    apiVersion: number;

    appHost: AppHost;
    fileSystem?: FileSystem;
    player?: Player;

    enableFullscreen(): void;
    disableFullscreen(): void;

    getPlugins(): Awaited<string[]>;
    findServers(timeout: number): Awaited<FoundServer[]>;
    openUrl(url: string): void;
}
