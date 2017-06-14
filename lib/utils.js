'use strict';

exports.isSafeDomain = (domain, whiteList) => {
  // 在最前面加一个 . 字符串，因为白名单列表里面都是以 . 开始的
  const hostname = '.' + domain;
  return whiteList.some(function(rule) {
    return hostname.endsWith(rule);
  });
};