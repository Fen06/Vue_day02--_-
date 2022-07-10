import request from '@/suilt/request.js';

export const getSongById = (id) =>
  request({
    url: `/song/detail?ids=${id}`,
    method: 'GET',
  });

export const getLyricById = (id) =>
  request({
    url: `/lyric?ids=${id}`,
    method: 'GET',
  });
