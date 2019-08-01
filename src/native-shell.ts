import { AppHost } from "./app-host";
import { FileSystem } from "./file-system";
import { Player } from "./player";
import { Sync } from "./sync";
import { Awaited, FoundServer } from "./types";

export interface NativeShell {
    apiVersion: number;

    appHost: AppHost;
    fileSystem?: FileSystem;
    player?: Player;
    sync?: Sync;

    getPlugins(): Awaited<any[]>;
    getServers(timeout: number): Awaited<FoundServer[]>;
    openUrl(url: string): void;
}
