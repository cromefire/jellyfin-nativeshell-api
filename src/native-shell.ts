import { AppHost } from "./app-host";
import { FileSystem } from "./file-system";
import { Awaited, FoundServer } from "./types";

export interface NativeShell {
    version: number;

    AppHost: AppHost;
    FileSystem?: FileSystem;

    enableFullscreen(): void;
    disableFullscreen(): void;

    getPlugins(): Awaited<string[]>;
    findServers(timeout: number): Awaited<FoundServer[]>;
    openUrl(url: string): void;
}
