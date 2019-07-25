export type Awaited<T> = T | Promise<T>;

export interface FoundServer {
    Id: string;
    Address: string;
    Name: string;
}

export enum WindowState {
    Normal = "Normal",
    Minimized = "Minimized",
    Maximized = "Maximized",
    Fullscreen = "Fullscreen"
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

export interface Profile {

}

export interface DeviceProfile {

}

export interface AppSettings {

}

export interface MediaItem {

}
