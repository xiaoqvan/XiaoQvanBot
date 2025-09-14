import type {
  sendMessage as Td$sendMessageOriginal,
  sendMessageAlbum as Td$sendMessageAlbumOriginal,
  editMessageCaption as Td$editMessageCaptionOriginal,
  editMessageText as Td$editMessageTextOriginal,
} from "tdlib-types";

export type Td$sendMessage = Omit<Td$sendMessageOriginal, "_"> & {
  _?: Td$sendMessageOriginal["_"];
};

export type Td$sendMessageAlbum = Omit<Td$sendMessageAlbumOriginal, "_"> & {
  _?: Td$sendMessageAlbumOriginal["_"];
};

export type Td$editMessageCaption = Omit<Td$editMessageCaptionOriginal, "_"> & {
  _?: Td$editMessageCaptionOriginal["_"];
};

export type Td$editMessageText = Omit<Td$editMessageTextOriginal, "_"> & {
  _?: Td$editMessageTextOriginal["_"];
};

export type inputFile = {
  /**
   * 远程文件 ID / url
   *
   * url文件太大则会发送失败
   *
   * 当使用 `url` 时 对于 `图片` 你不用传递`width` `height` `thumbnail`
   *
   * 当使用 `url` 时 对于 `视频` 你不用传递`cover` `width` `height` `duration`
   */
  readonly id?: string;
  /** 文件路径 */
  readonly path?: string;
};

export type inputThumbnail = {
  /** 要发送的缩略图文件。目前TDLib不支持按 `file_id` 发送缩略图 */
  readonly thumbnail: {
    /** 文件路径 */
    readonly path: string;
  };
  /** 缩略图宽度，通常不应超过 320。如果未知，请使用 0 */
  readonly width?: number;
  /** 缩略图高度，通常不应超过 320。如果未知，请使用 0 */
  readonly height?: number;
};

export type photoMessage = {
  /** 照片文件 */
  readonly photo: inputFile;
  /** 照片缩略图(可不提供会自动生成) */
  readonly thumbnail?: inputThumbnail;
  /** 照片宽度 */
  readonly width?: number;
  /** 照片高度 */
  readonly height?: number;
  /** 照片剧透遮罩 */
  readonly has_spoiler?: boolean;
};

// 新增：将 media 中的各项拆成独立接口（与 photo 一致）
export type fileMessage = {
  /** 发送文档消息（一般文件）。 */
  readonly file: inputFile;
  readonly thumbnail?: inputThumbnail;
};

export type videoMessage = {
  /** 视频文件 */
  readonly video: inputFile;
  /** 视频封面 */
  readonly cover?: inputFile;
  /** 视频的时长，以秒为单位 */
  readonly duration?: number;
  /** 视频宽度 */
  readonly width?: number;
  /** 视频高度 */
  readonly height?: number;
  /** 如果视频预览必须被剧透动画覆盖 */
  readonly has_spoiler?: boolean;
  /** 如果视频预计会流式传输(边下边看) */
  readonly supports_streaming?: boolean;
};

export type audioMessage = {
  /** 音频文件 */
  readonly audio: inputFile;
  /** 专辑封面的缩略图 */
  readonly album_cover_thumbnail?: inputThumbnail;
  /** 音频的持续时间，以秒为单位;可以由服务器替换 */
  readonly duration?: number;
  /** 音频标题;0-64 个字符;可由服务器替换 */
  readonly title: string;
  /** 音频的执行者;0-64 个字符，可由服务器替换 */
  readonly performe: string;
};

export type sendMessage = {
  /** 消息文本 */
  readonly text?: string;
  /** 发送媒体消息如果你需要发送相册组请使用 `sendMessageAlbum` 而不是 `sendMessage` */
  readonly media?: photoMessage | videoMessage | audioMessage | fileMessage;
  /** 回复消息 ID */
  readonly reply_to_message_id?: number;
  /** 话题模式群组 话题ID */
  readonly thread_id?: number;
  /** 是否禁用链接预览 */
  readonly link_preview?: boolean;
  /** TDLib 原始调用方法 */
  readonly invoke?: Td$sendMessage;
};

export type sendMessageAlbum = {
  /** 对话 ID */
  readonly chat_id?: number;
  /** 媒体内容 */
  readonly medias?:
    | Array<photoMessage | videoMessage>
    | Array<fileMessage>
    | Array<audioMessage>;
  /** 回复消息 ID */
  readonly caption?: string;
  /** 回复消息 ID */
  readonly reply_to_message_id?: number;
  /** 话题模式群组 话题ID */
  readonly thread_id?: number;
  /** TDLib 原始调用方法 */
  readonly invoke?: Td$sendMessageAlbum;
};

export type editMessageCaption = {
  /** 对话 ID */
  readonly chat_id?: number;
  /** 消息 ID */
  readonly message_id?: number;
  /** 新的消息文本 */
  readonly text?: string;
  /** 原始调用方法 */
  readonly invoke?: Td$editMessageCaption;
};

export type editMessageText = {
  /** 对话 ID */
  readonly chat_id?: number;
  /** 消息 ID */
  readonly message_id?: number;
  /** 新的消息文本 */
  readonly text?: string;
  /** 是否禁用链接预览 */
  readonly link_preview?: boolean;
  /** 原始调用方法 */
  readonly invoke?: Td$editMessageText;
};
