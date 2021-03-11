import { performance } from 'perf_hooks'

const MeasureTime = (label?: string) => (
  target: Object,
  _propertyKey: string,
  descriptor: PropertyDescriptor,
) => {
  const originalMethod = descriptor.value

  descriptor.value = async function (...args: any[]) {
    const start = performance.now()
    const result = await originalMethod.apply(this, args)
    const finish = performance.now()
    console.log(
      `[${label ?? target.constructor.name}] Execution time: ${
        finish - start
      } milliseconds`,
    )
    return result
  }

  return descriptor
}

export default MeasureTime
