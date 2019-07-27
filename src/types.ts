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
 * Info about a media file
 */
export interface MediaInfo {
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
