import {
    Awaited,
    CodecType,
    MediaInfo,
    PreferredCodecs,
    SupportedMedia
} from "./types";

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
    supportsFile(mediaInfo: MediaInfo): Awaited<SupportedMedia>;

    /**
     * Gives the client the ability to specify supported codecs (e.g codec that are hardware accelerated)
     */
    preferredCodecs(type: CodecType): Awaited<PreferredCodecs>;

    /**
     * Gets called before any of the "playback methods", e.g. directly after the user has clicked play
     */
    load(url: string): Awaited<void>;
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