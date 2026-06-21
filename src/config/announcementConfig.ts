import announcementData from "./data/announcement.json";
import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	title: announcementData.title,
	content: announcementData.content,
	closable: announcementData.closable,
	link: {
		enable: announcementData.linkEnable,
		text: announcementData.linkText,
		url: announcementData.linkUrl,
		external: announcementData.linkExternal,
	},
};
