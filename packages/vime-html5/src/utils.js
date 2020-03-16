import { 
  is_instance_of, is_string, can_play_hls_natively,
  is_array, is_object, is_number
} from '@vime/utils';

export const DROPBOX_URL = /www\.dropbox\.com\/.+/;
export const DROPBOX_ORIGIN = 'www.dropbox.com';
export const DROPBOX_CONTENT_ORIGIN = 'dl.dropboxusercontent.com';

export const AUDIO_EXT = /\.(m4a|mp4a|mpga|mp2|mp2a|mp3|m2a|m3a|wav|weba|aac|oga|spx)($|\?)/i;
export const VIDEO_EXT = /\.(mp4|og[gv]|webm|mov|m4v)($|\?)/i;
export const HLS_EXT = /\.(m3u8)($|\?)/i;

export const is_media_stream = src => is_instance_of(src, window.MediaStream);
export const is_qualities_set = src => is_array(src) && src.every(resource => is_number(resource.quality));
export const is_dropbox_url = src => is_string(src) && DROPBOX_URL.test(src);
export const is_audio = src => AUDIO_EXT.test(src);
export const is_video = src => VIDEO_EXT.test(src) || (can_play_hls_natively() && HLS_EXT.test(src));

export const extract_media_resource = resource => {
  if (is_string(resource) || is_media_stream(resource)) {
    return resource;
  } else if (is_object(resource)) {
    return resource.src;
  } else {
    return '';
  }
};

export const run_on_every_src = (src, cb) => is_array(src) 
  ? src.every(resource => cb(extract_media_resource(resource)))
  : cb(extract_media_resource(src));

export const can_play = (src, extensionCanPlay = () => false) => is_media_stream(src) ||
  run_on_every_src(src, is_audio) ||
  run_on_every_src(src, is_video);