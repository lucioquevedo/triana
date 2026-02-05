import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const ImageFullScreenModal = ({
  children,
  isOpen,
  onClose,
}: ImageFullScreenModalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted || !isOpen) return null;

  return createPortal(
    <div
      className="fixed max-h-screen inset-0 overflow-clip grid cursor-zoom-out"
      onClick={onClose}
      style={{ zIndex: 300 }}
    >
      <div
        className="fixed inset-0 bg-black opacity-40"
        style={{ zIndex: -1 }}
      />
      <div
        className="w-full lg:max-w-5xl self-center justify-self-center" /* onClick={(e) => e.stopPropagation()} */
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")!,
  );
};

export default ImageFullScreenModal;

interface ImageFullScreenModalProps extends React.HTMLAttributes<HTMLDivElement> {
  isOpen: boolean;
  onClose: () => void;
}
