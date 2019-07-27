export type Awaited<T> = T | Promise<T>;

export interface FoundServer {
    Id: string;
    Address: string;
    Name: string;
}

export interface Capabilities {
    PlayableMediaTypes: string[];
    SupportsPersistentIdentifier: true;
}

export interface KeyOptions {
    handleAltLeftBack: boolean;
    handleAltRightForward: boolean;
    keyMaps: {
        back: number[];
    };
}

export interface ThemeSettings {
    themeColor: string;
}

export enum Layout {
    Desktop = "desktop",
    Mobile = "mobile"
}

export interface Profile {}

export interface DeviceProfile {}

export interface AppSettings {}

export interface MediaItem {}

// Todo: Additional info needed?
export interface Codec {
    // Todo: FFMpeg id?
    id: string;

    hdr?: boolean;
    "4k"?: boolean;
}

/**
 * Info about a media file codecs
 */
export interface MediaCodecInfo {
    container: string;
    video: Codec[];
    audio: Codec[];
    subtitles: Codec[];
}

/**
 * Specification of codec support
 */
export enum CodecSupport {
    /**
     * Player cannot play the codec
     */
    NotSupported = "not-supported",
    /**
     * Player has support for playing the codec
     */
    Supported = "supported"
}

export interface SupportedMedia {
    containerSupported: boolean;
    video: CodecSupport[];
    audio: CodecSupport[];
    subtitles: CodecSupport[];
}

export enum CodecType {
    Video = "video",
    Audio = "audio",
    Subtitles = "subtitles"
}

export interface PreferredCodecs {
    video: Codec[];
    audio: Codec[];
    subtitles: Codec[];
}

/**
 * Unique id for a media item
 *
 * Todo: Does something like this even exist yet?
 */
export type MediaId = string;

/**
 * Describes whether a operation was successful
 */
export interface Success {
    successful: boolean;
    /**
     * Message to be displayed to the user (e.g. "Device storage is full" in case of a failure)
     */
    message?: string;
}

/**
 * Json object (not a string) that stores the media information (e.g. title, year, ...)
 */
export type MediaInfo = any;

/**
 * The url of the media to be downloaded, played, ...
 */
export type MediaUrl = string;
