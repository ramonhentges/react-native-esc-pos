import { EmitterSubscription } from "react-native";
export default EscPos;
export namespace EscPos {
    function addListener(eventName: 'bluetoothStateChanged' | 'bluetoothDeviceFound', callback: (event: eventObject)=>void): EmitterSubscription;
    function connect(address: string, port?: string): Promise<void>;
    function scanDevices(): void;
    function stopScan(): void;
    function setConfig(props: setConfigProps): void;
    function setPrintingSize(size: string): void;
    function setTextDensity(density: number): void;
    function printSample(): Promise<void>;
    function cutPart(): Promise<void>;
    function beep(): Promise<void>;
    function disconnect(): Promise<void>;
    function cutFull(): Promise<void>;
    function kickCashDrawerPin2(): Promise<void>;
    function kickCashDrawerPin5(): Promise<void>;
    function printImage(base64: string): Promise<void>;
    function printImageWithOffset(base64: string, offset: number): Promise<void>;
    function printDesign(design: string): Promise<void>;
    function printQRCode(text: string, size: number): Promise<void>;
    function printBarcode(code: string, type: BARCODES, width: number, height: number, font: FONTS, fontPosition: FONTPOSITION): Promise<void>;
    const PRINTING_SIZE_58_MM: string;
    const PRINTING_SIZE_78_MM: string;
    const PRINTING_SIZE_80_MM: string;
    const BLUETOOTH_DEVICE_FOUND: string;
    const BLUETOOTH_CONNECTED: string;
}

export const LayoutBuilder: any;

export enum FONTPOSITION {
    'none' = 0,
    'top' = 1,
    'bottom' = 2,
    'top-bottom' = 3
}

export enum FONTS {
    FontA = 0,
    FontB = 1
}

export enum BARCODES {
    'UPC-A' = 65,
    'UPC-E' = 66,
    'EAN13' = 67,
    'EAN8' = 68,
    'CODE39' = 69,
    'ITF' = 70,
    'CODABAR' = 71,
    'CODE93' = 72,
    'CODE128' = 73
}

type setConfigProps = {
    type: 'bluetooth' | 'network'
}

type eventObject = {
    state: string,
    deviceInfo: {
        name: string,
        macAddress: string
    }
}