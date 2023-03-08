// 如果执行中有错误，就捕捉这个错误
async function slientHandle<T, U = Error>(
  fn: Function,
  ...args: Array<unknown>
): Promise<[U, null] | [null, T]> {
  let result: [U, null] | [null, T];
  try {
    result = [null, await fn(...args)];
  } catch (error: any) {
    result = [error, null];
  }

  return result;
}

export default slientHandle;
