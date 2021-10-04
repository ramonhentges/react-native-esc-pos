import { EmitterSubscription } from "react-native";

export function addListener(eventName: 'bluetoothStateChanged' | 'bluetoothDeviceFound', callback: (event: eventObject)=>void): EmitterSubscription;
export function connect(address: string, port?: string): Promise<void>;
export function scanDevices(): void;
export function stopScan(): void;
export function setConfig(props: setConfigProps): void;
export function setPrintingSize(size: string): void;
export function setTextDensity(density: number): void;
export function printSample(): Promise<void>;
export function cutPart(): Promise<void>;
export function beep(): Promise<void>;
export function disconnect(): Promise<void>;
export function cutFull(): Promise<void>;
export function kickCashDrawerPin2(): Promise<void>;
export function kickCashDrawerPin5(): Promise<void>;
export function printImage(base64: string): Promise<void>;
export function printImageWithOffset(base64: string, offset: number): Promise<void>;
export function printDesign(design: string): Promise<void>;
export function printQRCode(text: string, size: number): Promise<void>;
export function printBarcode(code: string, type: BARCODES, width: number, height: number, font: FONTS, fontPosition: FONTPOSITION): Promise<void>;
export const PRINTING_SIZE_58_MM: string;
export const PRINTING_SIZE_78_MM: string;
export const PRINTING_SIZE_80_MM: string;
export const BLUETOOTH_DEVICE_FOUND: string;
export const BLUETOOTH_CONNECTED: string;

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