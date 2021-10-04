import { DeviceEventEmitter, NativeModules } from "react-native";

const { LayoutBuilder } = NativeModules;

const EscPos = {
  ...NativeModules.EscPos,
  addListener(eventName, cb) {
    switch (eventName) {
      case "bluetoothStateChanged":
        EscPos.initBluetoothConnectionListener();
        return DeviceEventEmitter.addListener("bluetoothStateChanged", cb);

      case "bluetoothDeviceFound":
        return DeviceEventEmitter.addListener("bluetoothDeviceFound", cb);

      default:
        throw new Error(`${eventName} is not a valid event name.`);
    }
  },
  // TODO: What is the best way to add optional arguments to @ReactMethod? overloading doesn seem to be working??
  connect(address, port) {
    if (!port) {
      return NativeModules.EscPos.connectBluetoothPrinter(address);
    } else {
      return NativeModules.EscPos.connectNetworkPrinter(address, port);
    }
  }
};

const FONTPOSITION = Object.freeze({
  'none': 0,
  'top': 1,
  'bottom': 2,
  'top-bottom': 3
})

const FONTS = Object.freeze({
  FontA: 0,
  FontB: 1
})

const BARCODES = Object.freeze({
  'UPC-A': 65,
  'UPC-E': 66,
  'EAN13': 67,
  'EAN8': 68,
  'CODE39': 69,
  'ITF': 70,
  'CODABAR': 71,
  'CODE93': 72,
  'CODE128': 73
})

export { EscPos, LayoutBuilder, FONTPOSITION, FONTS, BARCODES };
export default EscPos;
