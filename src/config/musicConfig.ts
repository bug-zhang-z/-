import type { MusicPlayerConfig } from "../types/musicConfig";

// 音乐播放器配置
export const musicPlayerConfig: MusicPlayerConfig = {
	// 禁用音乐播放器方法：
	// 模板默认侧边栏和导航栏两个都显示
	// 1. 侧边栏：在sidebarConfig.ts侧边栏配置把音乐组件enable设为false禁用即可
	// 2. 导航栏：在本配置文件把showInNavbar设为false禁用即可

	// 是否在导航栏显示音乐播放器入口
	showInNavbar: true,

	// 使用方式："meting" 使用 Meting API，"local" 使用本地音乐列表
	mode: "meting",

	// 默认音量 (0-1)
	volume: 0.5,

	// 播放模式：'list'=列表循环, 'one'=单曲循环, 'random'=随机播放
	playMode: "list",

	// 是否显启用歌词
	showLyrics: false,

	// Meting API 配置
	meting: {
		// Meting API 地址
		// 默认使用官方 API，也可以使用自定义 API
		api: "https://api.i-meto.com/meting/api?server=:server&type=:type&id=:id&r=:r",
		// 音乐平台：netease=网易云音乐, tencent=QQ音乐, kugou=酷狗音乐, xiami=虾米音乐, baidu=百度音乐
		server: "netease",
		// 类型：song=单曲, playlist=歌单, album=专辑, search=搜索, artist=艺术家
		type: "playlist",
		// 歌单/专辑/单曲 ID 或搜索关键词
		id: "12309864345",
		// 认证 token（可选）
		auth: "",
		// 备用 API 配置（当主 API 失败时使用）
		fallbackApis: [
			"https://api.injahow.cn/meting/?server=:server&type=:type&id=:id",
			"https://api.moeyao.cn/meting/?server=:server&type=:type&id=:id",
		],
	},

	// 本地音乐配置（当 mode 为 'local' 时使用）
	// 1. 支持传入歌词文件的路径
	// lrc: "/assets/music/lrc/使一颗心免于哀伤-哼唱.lrc",
	// 2. 或者直接填入歌词字符串内容
	// lrc: "[00:00.00]歌词内容...",
	local: {
		playlist: [
			{
				name: "孤雏",
				artist: "AGA",
				url: "/assets/music/AGA - 孤雏.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "Baby, Don't Cry (人鱼的眼泪)",
				artist: "EXO",
				url: "/assets/music/EXO - Baby, Don't Cry (人鱼的眼泪).mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "Dehors",
				artist: "JORDANN",
				url: "/assets/music/JORDANN - Dehors.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "我不难过",
				artist: "孙燕姿",
				url: "/assets/music/孙燕姿 - 我不难过.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "一样的月光",
				artist: "徐佳莹",
				url: "/assets/music/徐佳莹 - 一样的月光.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "新地球",
				artist: "林俊杰",
				url: "/assets/music/林俊杰 - 新地球.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "呓语",
				artist: "毛不易",
				url: "/assets/music/毛不易 - 呓语.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "最后一页",
				artist: "江语晨",
				url: "/assets/music/江语晨 - 最后一页.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "给你呀（又名：for ya）",
				artist: "蒋小呢",
				url: "/assets/music/蒋小呢 - 给你呀（又名：for ya）.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "达尔文",
				artist: "蔡健雅",
				url: "/assets/music/蔡健雅 - 达尔文.mp3",
				cover: "",
				lrc: "",
			},
			{
				name: "心墙",
				artist: "郭静",
				url: "/assets/music/郭静 - 心墙.mp3",
				cover: "",
				lrc: "",
			},
		],
	},
};
