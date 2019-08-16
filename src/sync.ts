import { Awaited, MediaId, MediaInfo, MediaUrl, Success } from "./types";

/**
 * Media stored offline
 */
export interface StoredMedia {
    id: MediaId;
    info: MediaInfo;
}

/**
 * Allows media to be synced to the local device for e.g. offline playback
 */
export interface Sync {
    /**
     * Stores a file offline on the client
     *
     * Errors or other messages can be shown to the user using {@link Success}
     */
    store(mediaId: MediaId, url: MediaUrl, info: MediaInfo): Awaited<Success>;

    /**
     * Whether a media file is stored
     */
    isStored(mediaId: MediaId): Awaited<boolean>;

    /**
     * List the files currently stored
     */
    list(): Awaited<StoredMedia[]>;
}
