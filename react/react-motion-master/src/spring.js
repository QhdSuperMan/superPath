/* @flow */
import presets from './presets';
import type { OpaqueConfig, SpringHelperConfig } from './Types';

const defaultConfig = {
  ...presets.noWobble,
  precision: 0.01,
};

export default function spring(
  val: number,
  config?: SpringHelperConfig,
): OpaqueConfig {
  let obj = { ...defaultConfig, ...config, val }
  return obj;
}
