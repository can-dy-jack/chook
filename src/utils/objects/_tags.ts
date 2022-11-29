export default function _tags(name: string): Function {
  var tag = '[object ' + name + ']';
  return function(obj: any) {
    return obj.toString() === tag;
  };
}