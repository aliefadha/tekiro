"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc?: string;
  children?: React.ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  imageSrc,
  children,
}: ModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      previousActiveElement.current = document.activeElement as HTMLElement;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
          return;
        }

        if (e.key !== "Tab") return;

        const focusableElements = modalRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );

        if (focusableElements && focusableElements.length > 0) {
          const firstElement = focusableElements[0] as HTMLElement;
          const lastElement = focusableElements[
            focusableElements.length - 1
          ] as HTMLElement;

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);

      const focusableFirst = modalRef.current?.querySelector(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ) as HTMLElement;
      focusableFirst?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
        previousActiveElement.current?.focus();
      };
    } else {
      document.body.style.overflow = "auto";
      previousActiveElement.current?.focus();
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-2"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative  max-w-lg md:max-w-2xl transform transition-all duration-300 scale-100 opacity-100 flex flex-col max-h-[calc(100vh-2rem)]"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 md:top-4 md:right-4 text-white hover:text-white/80 text-2xl z-10 p-2"
          aria-label="Close modal"
        >
          ×
        </button>

        <div className="p-2 bg-white flex flex-col">
          {imageSrc && (
            <Image
              src={imageSrc}
              alt="Modal content"
              width={800}
              height={600}
              priority
              sizes="(max-width: 768px) 100vw, 66vw"
              className="w-full h-auto max-h-[calc(100vh-6rem)] object-cover"
            />
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
