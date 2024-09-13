// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

import * as React from "react";
import { createUseScreenVariants } from "@plasmicapp/react-web";

export type WireframeValue = "unnamedVariant";
export const WireframeContext = React.createContext<WireframeValue | undefined>(
  "PLEASE_RENDER_INSIDE_PROVIDER" as any
);

export function useWireframe() {
  return React.useContext(WireframeContext);
}

export default WireframeContext;
/* prettier-ignore-end */
