/**
 * @description: 函数包裹器，生成一个可变函数
 * @param {array} args
 * @return {*}
 */
export default function <T extends (...args: any) => any>(fn: T) {
  type Params = Parameters<T>;
  type Return = ReturnType<T>;

  function wrappered(): Return;
  function wrappered(...args: Params): ()=>Return;
  function wrappered(...args: Params) {
    if (args.length) {
      return fn.bind({}, ...Array.from(args || []));
    } else {
      return fn(...Array.from(args || []));
    }
  }
  return wrappered;
}