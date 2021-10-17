import { useState, useCallback } from "react";

/** 強制的に再レンダリングさせる */
export const useForceUpdate = () => {
  const [, forceUpdate] = useState<undefined | boolean>(undefined);
  return useCallback(() => {
    forceUpdate((s) => !s);
  }, []);
};
