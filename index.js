/**
 * @author yongbigang
 * @date 2017/06/14
 */

'use strict';

const isSafeDomain = require('./lib/utils').isSafeDomain;

/**
 * 白名单的域才允许重定向
 * @param {String} href 跳转的域名
 * @param {Array} whiteList 允许的白名单通域
 * @return {Boolen} 结果true or false
 */
const redirectByWhiteList = (href, whiteList) => {
  const reg = /(http:|https:)?(\/\/)?/g;
  const customHost = href.replace(reg, '').split('?')[ 0 ];
  const customDomain = customHost.split('/')[ 0 ];
  return isSafeDomain(customDomain, whiteList);
};

module.exports = redirectByWhiteList;