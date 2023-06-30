import { isAllEmpty } from '@pureadmin/utils'
function handRank(routeInfo) {
  const { name, path, parentId, meta } = routeInfo

  return isAllEmpty(parentId) ? (isAllEmpty(meta?.rank) || (meta?.rank === 0 && name !== 'Home' && path !== '/') ? true : false) : false
}

/** 按照路由中meta下的rank等级升序来排序路由 */
function ascending(arr) {
  arr.forEach((v, index) => {
    // 当rank不存在时，根据顺序自动创建，首页路由永远在第一位
    if (handRank(v)) v.meta.rank = index + 2
  })
  return arr.sort(
    // (a: { meta: { rank: number } }, b: { meta: { rank: number } }) => {
    (a, b) => {
      return a?.meta.rank - b?.meta.rank
    }
  )
}
export { ascending }
