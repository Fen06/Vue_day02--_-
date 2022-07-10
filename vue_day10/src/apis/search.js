import request from '@/suilt/request.js';

export const getSearchList = (params) =>
  request({
    url: '/cloudsearch',
    params,
  });

export const getHotList = (params) =>
  request({
    url: '/search/hot',
    params,
  });

