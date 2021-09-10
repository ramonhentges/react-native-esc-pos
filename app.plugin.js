"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_plugins_1 = require("@expo/config-plugins");
const pkg = require("@ramonhentges/react-native-esc-pos/package.json");
const BLUETOOTH = "Allow $(PRODUCT_NAME) to access bluetooth";
const BLUETOOTH_ADMIN = "Allow $(PRODUCT_NAME) to access bluetooth";
/**
 * Adds `NSMicrophoneUsageDescription` and `NSSpeechRecognitionUsageDescription` to the `Info.plist`.
 *
 * @param props.bluetoothAdminPermission speech recognition message
 * @param props.bluetoothPermission microphone permission message
 * @returns
 */
const withIosPermissions = (
  c,
  { bluetoothAdminPermission, bluetoothPermission } = {}
) => {
  return config_plugins_1.withInfoPlist(c, (config) => {
    if (bluetoothPermission !== false) {
      config.modResults.NSBluetoothUsageDescription =
        bluetoothPermission ||
        config.modResults.NSBluetoothUsageDescription ||
        BLUETOOTH;
    }
    if (bluetoothAdminPermission !== false) {
      config.modResults.NSBluetoothAdminUsageDescription =
        bluetoothAdminPermission ||
        config.modResults.NSBluetoothAdminUsageDescription ||
        BLUETOOTH_ADMIN;
    }

    return config;
  });
};
/**
 * Adds the following to the `AndroidManifest.xml`: `<uses-permission android:name="android.permission.RECORD_AUDIO" />`
 */
const withAndroidPermissions = (config) => {
  return config_plugins_1.AndroidConfig.Permissions.withPermissions(config, [
    "android.permission.BLUETOOTH",
    "android.permission.BLUETOOTH_ADMIN",
  ]);
};
const withEscPos = (config, props = {}) => {
  const _props = props ? props : {};
  config = withIosPermissions(config, _props);
  if (_props.microphonePermission !== false) {
    config = withAndroidPermissions(config);
  }
  return config;
};
exports.default = config_plugins_1.createRunOncePlugin(
  withEscPos,
  pkg.name,
  pkg.version
);
