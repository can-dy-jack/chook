import { useState } from "react";
import useClosure from "../useClosure";

function useMap<K, V>(initalVal?: Iterable<readonly [K, V]>) {
  const [map, setMap] = useState(new Map(initalVal));

  const set = (k: K, v: V) => {
    setMap((pre) => {
      let newMap = new Map(pre);
      newMap.set(k, v);
      return newMap;
    })
  }
  const reset = () => {
    setMap(new Map(initalVal))
  }
  const cover = (newMap: Iterable<readonly [K, V]>) => {
    setMap(new Map(newMap))
  }
  const remove = (k: K) => {
    setMap((pre) => {
      let newMap = new Map(pre)
      newMap.delete(k);
      return newMap;
    })
  }
  const get = (k: K) => map.get(k);

  return [map, {
    set: useClosure(set),
    reset: useClosure(reset),
    cover: useClosure(cover),
    remove: useClosure(remove),
    get: useClosure(get)
  }]
}

export default useMap;
