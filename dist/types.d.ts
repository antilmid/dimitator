export class RandOptions {
    max?: number;
    min?: number;
    accuracy?: number;
}
/**
 * @description: 生成随机数
 * @param {RandOptions} 参数
 * @return {number}
 */
export function rand({ max, min, accuracy }?: RandOptions): number;
declare const _default: {
    rand: {
        (): number;
        (args_0?: RandOptions): () => number;
    };
};
export default _default;

//# sourceMappingURL=types.d.ts.map
