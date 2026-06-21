import plantumlData from "./data/plantuml.json";
import type { PlantUMLConfig } from "../types/config";

export const plantumlConfig: PlantUMLConfig = {
	enable: plantumlData.enable,
	server: plantumlData.server,
	lightTheme: plantumlData.lightTheme,
	darkTheme: plantumlData.darkTheme,
};
