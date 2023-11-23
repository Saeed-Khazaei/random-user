import deepEqual from "@/utils/deepEqual";
import { memo, useEffect, useRef, useState } from "react";

interface Props<T> {
  data: T;
  children: React.ReactNode;
}

 function HighlightableWrapper<T>({
  data,
  children,
}: Props<T>) {
  const [highlighted, setHighlighted] = useState(false);
  const prevDataRef = useRef<T>({ ...data });

  useEffect(() => {
    const hasChanged = !deepEqual(data, prevDataRef.current);
    if (hasChanged) {
      setHighlighted(true);
      const timeoutId = setTimeout(() => {
        setHighlighted(false);
      }, 1_000);

      return () => clearTimeout(timeoutId);
    }
    prevDataRef.current = { ...data };
  }, [data]);

  return (
    <div
      className={`transition duration-500 rounded-md p-1 ${
        highlighted ? "bg-pink-400" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default memo(HighlightableWrapper)