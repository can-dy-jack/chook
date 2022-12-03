export default function _tags(name: string): Function {
  var tag = '[object ' + name + ']';
  return function(obj: any): boolean {
    return obj.toString() === tag || typeof obj === name;
  };
}