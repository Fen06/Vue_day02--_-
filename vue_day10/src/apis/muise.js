import request from '@/suilt/request.js';

export const getRandomList = (params) =>
  request({
    url: '/personalized',
    params,
  });
