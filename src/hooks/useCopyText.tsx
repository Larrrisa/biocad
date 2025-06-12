import { useEffect, useState } from "react";

export function useCopyText() {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    function handleMouseUp() {
      const selection = window.getSelection();
      const text = selection?.toString();

      if (text && text.trim().length > 0) {
        navigator.clipboard.writeText(text.trim()).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1000);
        });
      }
    }

    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return copied;
}
