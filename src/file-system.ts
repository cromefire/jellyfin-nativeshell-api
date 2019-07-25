import { Awaited } from "./types";

export interface FileSystem {
    fileExists(path: string): Awaited<boolean>;
    directoryExists(path: string): Awaited<boolean>;
}
