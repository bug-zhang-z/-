import licenseData from "./data/license.json";
import type { LicenseConfig } from "../types/config";

export const licenseConfig: LicenseConfig = {
	enable: licenseData.enable,
	name: licenseData.name,
	url: licenseData.url,
};
