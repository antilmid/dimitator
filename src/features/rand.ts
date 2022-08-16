export class RandOptions {
  max?: number = 92; // 最大值
  min?: number = 0; // 最小值
  accuracy?: number = 1; // 精度
}

/**
 * @description: 生成随机数
 * @param {RandOptions} 参数
 * @return {number} 
 */
export default function rand(
  { max = 0, min = 0, accuracy = 0 }: RandOptions = new RandOptions()
) {
  return Number(
    (
      Math.floor(Math.random() * (max - min) + min / accuracy) * accuracy
    ).toFixed((accuracy || 0).toString().replace(/.*\./g, "").length)
  ) || 0;
}
