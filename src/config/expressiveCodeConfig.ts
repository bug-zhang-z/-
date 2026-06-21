import expressiveCodeData from "./data/expressive-code.json";
import type { ExpressiveCodeConfig } from "../types/config";

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	darkTheme: expressiveCodeData.darkTheme,
	lightTheme: expressiveCodeData.lightTheme,
	pluginCollapsible: {
		enable: expressiveCodeData.collapsibleEnable,
		lineThreshold: expressiveCodeData.collapsibleLineThreshold,
		previewLines: expressiveCodeData.collapsiblePreviewLines,
		defaultCollapsed: expressiveCodeData.collapsibleDefaultCollapsed,
	},
	pluginLanguageBadge: {
		enable: expressiveCodeData.languageBadgeEnable,
	},
};
