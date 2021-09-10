import {
  AndroidConfig,
  createRunOncePlugin,
  withInfoPlist,
} from "@expo/config-plugins";

const pkg = require("@ramonhentges/react-native-esc-pos/package.json");

const BLUETOOTH = "Allow $(PRODUCT_NAME) to access bluetooth";

const BLUETOOTH_ADMIN = "Allow $(PRODUCT_NAME) to access bluetooth";

const withIosPermissions = (
  c,
  { bluetoothPermission, bluetoothAdminPermission } = {}
) => {
  return withInfoPlist(c, (config) => {
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
  return AndroidConfig.Permissions.withPermissions(config, [
    "android.permission.BLUETOOTH",
    "android.permission.BLUETOOTH_ADMIN",
  ]);
};

const withVoice = (config, props = {}) => {
  const _props = props ? props : {};
  config = withIosPermissions(config, _props);
  if (_props.bluetoothPermission !== false) {
    config = withAndroidPermissions(config);
  }
  return config;
};

export default createRunOncePlugin(withVoice, pkg.name, pkg.version);
