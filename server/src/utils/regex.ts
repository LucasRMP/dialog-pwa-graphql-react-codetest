export function buildNameRegex(name: string) {
  return new RegExp(name.split(' ').join('.*\\ .*'), 'i')
}
