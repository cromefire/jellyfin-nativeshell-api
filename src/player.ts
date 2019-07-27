import {
    Awaited,
    CodecType,
    MediaCodecInfo,
    MediaId,
    MediaUrl,
    PreferredCodecs,
    SupportedMedia
} from "./types";

/**
 * Playable things
 */
export enum PlaybackType {
    /**
     * File stored on the Jellyfin server
     */
    Url = "url",
    /**
     * File stored offline
     *
     * Only used if Sync is enabled
     */
    Offline = "offline"
}

/**
 * Support for (external) players
 */
export interface Player {
    /**
     * Determines the support of playing video, audio and subtitles
     */
    supportsType(type: CodecType): Awaited<boolean>;

    /**
     * Determines if a file is supported and which parts of a file are supported
     */
    supportsFile(mediaInfo: MediaCodecInfo): Awaited<SupportedMedia>;

    /**
     * Gives the client the ability to specify supported codecs (e.g codec that are hardware accelerated)
     */
    preferredCodecs(type: CodecType): Awaited<PreferredCodecs>;

    /**
     * Gets called before any of the "playback methods", e.g. directly after the user has clicked play
     *
     * Only used when sync is enabled; The client is in charge of playing the file from the offline storage
     */
    load(type: PlaybackType.Offline, id: MediaId): Awaited<void>;
    /**
     * Gets called before any of the "playback methods", e.g. directly after the user has clicked play
     *
     * The file gets supplied using an url
     */
    load(type: PlaybackType.Url, url: MediaUrl): Awaited<void>;
    /**
     * Gets called after the user has clicked back or the video has finished
     */
    unload(): Awaited<void>;

    /**
     * Resumes the video playback
     */
    play(): Awaited<void>;
    /**
     * Pauses the video playback
     */
    pause(): Awaited<void>;

    /**
     * Fast forwards the video
     */
    fastForward(): Awaited<void>;
    /**
     * Goes back in time
     */
    backwards(): Awaited<void>;
}
