import type { BaseTranslation } from "../i18n-types";

const zh = {
    infoPopup: {
        buildBy: "制作人 ",
        version: "版本",
        releaseNotes: "发行说明",
    },
    sidebar: {
        search: "搜索",
        library: "歌曲库",
        albums: "专辑",
        favorites: "喜欢",
        playlists: "播放列表",
        smartPlaylists: "猜你喜欢",
        artistsToolkit: "艺术家工具",
        map: "地图",
        internetArchive: "互联网档案",
        stats: "统计",
    },
    library: {
        fields: {
            title: "歌曲名",
            artist: "艺术家",
            composer: "作曲家",
            album: "专辑",
            track: "音轨",
            year: "发行日期",
            dateAdded: "添加日期",
            genre: "风格",
            origin: "国家",
            duration: "时长",
            tags: "标签"
        }
    },
    bottomBar: {
        queue: "队列",
        lyrics: "歌词",
        lossySelector: {
            lossy: "有损",
            lossless: "无损",
            both: "有损 + 无损",
        },
        nextUp: "下一曲",
        stats: {
            songs: "歌曲",
            artists: "艺术家",
            albums: "专辑",
        },
    },
    smartPlaylists: {
        builtIn: {
            recentlyAdded: "最近添加",
            favourites: "收藏夹",
        },
        builder: {
            close: "关闭编辑器",
            save: "保存",
            placeholder: "我的新智能播放列表",
            addNewBlock: "添加新块",
            valid: "查询有效",
            invalid: "查询无效",
            parts: {
                byArtist: {
                    title: "按艺术家",
                    example: "例如: 按查理帕克",
                },
                releasedBetween: {
                    title: "发行时间之间",
                    example: "例如: 1950 到 1967",
                },
                releasedAfter: {
                    title: "发行时间大于",
                    example: "例如. 发行时间大于 1950",
                },
                releasedIn: {
                    title: "发行于",
                    example: "例如. 发行时间于 1999",
                },
                titleContains: {
                    title: "歌名包含 {text}",
                    example: " 例如. 歌曲名称包含 樱花草",
                },
                longerThan: {
                    title: "时长超过",
                    example: "例如. 时长超过 04:00",
                },
                containsGenre: {
                    title: "按类型",
                    example: "例如. 包含 流行",
                },
                fromCountry: {
                    title: "按国家",
                    example: "例如. 来自中国",
                },
                byComposer: {
                    title: "按作曲家",
                    example: "例如. 周杰伦",
                },
                containsTag: {
                    title: "按标签",
                    example: "例如. 包含爱"
                }
            }
        },
        newSmartPlaylist: "新的智能播放列表",
        libraryPlaceholder: {
            title: "智能播放列表结果将显示在此处",
            subtitle: "开心的查找中!",
        },
    },
    trackInfo: {
        title: "音轨信息",
        subtitle: "使用 “上 ”和 “下 ”切换音轨",
        overwriteFile: "覆盖文件",
        fileInfo: "文件信息",
        file: "文件",
        codec: "解码器",
        tagType: "标签类型",
        duration: "时长",
        sampleRate: "采样率",
        bitRate: "码率",
        enrichmentCenter: "活动中心",
        countryOfOrigin: "国籍",
        countryOfOriginTooltip:
            "将此选项设置为使用地图视图，并在智能播放列表中按国家/地区进行过滤",
        fetchingOriginCountry: "读取中...",
        save: "保存",
        fetchFromWikipedia: "从维基百科获取",
        artworkReadyToSave: "准备保存",
        artworkFound: "发现",
        noArtwork: "暂无艺术作品",
        fetchArt: "获取艺术品",
        metadata: "元数据",
        tools: "工具",
        aboutArtwork: "关于艺术作品",
        artworkTooltipTitle: "🎨 艺术作品优先",
        artworkTooltipBody:
            "<h3 style='margin:0'>🎨 艺术作品优先</h3><br/>首先，Musicat 会查找在文件元数据中编码的艺术作品，您可以通过单击此方块来覆盖这些图稿（支持 png 和 jpg）. <br/><br/>如果没有，它将在名为 <i>cover.jpg, folder.jpg</i> 或者 <i>artwork.jpg</i> (您可以在“设置”中更改此文件名列表).<br/><br/>否则，它将在相册文件夹中查找任何图像并使用它.",
        encodedInFile: "在文件中编码",
        bit: "bit",
        noMetadata: "歌曲没有元数据",
        unsupportedFormat: "尚不支持此文件类型进行元数据查看/编辑",
        fix: "修复",
        errors: {
            nullChars: "某些标签具有隐藏字符，可阻止它们被正确读取。",
        },
        artist: "艺术家",
        fixLegacyEncodings: {
            title: "修复旧版编码",
            body: "如果您有使用传统编码编码的 ID3 标签，则应将它们更新为通用 UTF-8，以便它们正确显示。选择一种编码，然后单击“修复”.",
            hint: "选择编码...",
        },
    },
    settings: {
        title: "设置",
        library: "歌曲库",
        audio: "音频",
        outputDevice: "输出设备",
        followSystem: "与系统设备相同",
        interface: "接口",
        features: "功能",
        subtitle: "配置内容",
        version: "版本",
        commaSeparatedFilenames: "文件名",
        llms: "gpt-3.5-turbo, gpt-4, ollama",
        foldersToWatch: "观看的文件夹",
        folder: "{{1 folder | ?? folders}}",
        importing: "导入中..",
        enableArtistsToolkit: "开启艺术家工具包",
        enableAIFeatures: "开启AI功能",
        aiModel: "AI模式 (LLM)",
        openApiKey: "OpenAI API 密钥",
        geniusApiKey: "Genius API 密钥",
    },
    wiki: {
        inArticle: "从您的图书馆中找到提及:",
        clickHint: "点击滚动提及",
        albums: "专辑",
        songs: "歌曲",
        artists: "艺术家",
    },
    tagCloud: {
        close: "关闭所有标签",
    }
} satisfies BaseTranslation;

export default zh;
