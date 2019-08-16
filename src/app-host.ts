import {
    AppSettings,
    Awaited,
    Capabilities,
    DeviceProfile,
    KeyOptions,
    Layout,
    MediaItem,
    Profile,
    ThemeSettings
} from "./types";

export interface AppHost {
    init(): Awaited<void>;

    supports(command: string): Awaited<boolean>;
    getCapabilities(): Awaited<Capabilities>;
    getSupportedFeatures(): Awaited<string[]>;
    supportsVoiceInput(): Awaited<boolean>;

    exit(): Awaited<void>;
    sleep(): Awaited<void>;
    restart(): Awaited<void>;
    shutdown(): Awaited<void>;

    appName(): Awaited<string>;
    appVersion(): Awaited<string>;
    deviceName(): Awaited<string>;
    deviceId(): Awaited<string>;

    getKeyOptions(): Awaited<KeyOptions>;

    setTheme(themeSettings: ThemeSettings): Awaited<void>;
    setUserScalable(scalable: boolean): Awaited<void>;
    getDefaultLayout(): Awaited<Layout>;

    getSyncProfile(
        profileBuilder: () => Profile,
        appSettings: AppSettings
    ): Awaited<Profile>;
    getDeviceProfile(mediaItem?: MediaItem): Awaited<DeviceProfile>;
}
