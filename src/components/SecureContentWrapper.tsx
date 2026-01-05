import { useEffect, useRef, useState } from 'react';
import { ShieldAlert } from 'lucide-react';

/**
 * SecureContentWrapper Component
 * 
 * DISCLAIMER: This is a conceptual, client-side deterrent and NOT a foolproof security solution.
 * True content protection against determined users requires robust Digital Rights Management (DRM) services.
 * This component attempts to discourage casual screen recording and right-clicking.
 *
 * Features:
 * - Disables right-click context menu.
 * - Displays a watermark overlay.
 * - Listens for common screenshot/recording keyboard shortcuts (best-effort).
 * - Uses CSS properties to make content harder to select and inspect.
 */
const SecureContentWrapper = ({ children }) => {
  const wrapperRef = useRef(null);
  const [warning, setWarning] = useState(false);

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleKeyDown = (e) => {
      // Check for Print Screen key
      if (e.key === 'PrintScreen') {
        e.preventDefault();
        setWarning(true);
      }
      // Check for common screenshot combos (Cmd/Ctrl+Shift+3/4, etc.)
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && ['3', '4', '5'].includes(e.key)) {
         e.preventDefault();
         setWarning(true);
      }
    };

    const currentRef = wrapperRef.current;
    if (currentRef) {
      currentRef.addEventListener('contextmenu', handleContextMenu);
      window.addEventListener('keydown', handleKeyDown);
    }

    // Hide warning after a few seconds
    let timeoutId;
    if (warning) {
      timeoutId = setTimeout(() => setWarning(false), 3000);
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('contextmenu', handleContextMenu);
      }
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(timeoutId);
    };
  }, [warning]);

  const secureStyles = {
    position: 'relative',
    userSelect: 'none', // Prevents text selection
    WebkitTouchCallout: 'none', // Prevents callout menu on iOS
    pointerEvents: 'none', // Makes it harder to inspect elements
    filter: 'blur(0)', // This can be used to blur content if recording is detected
  };

  const childContainerStyles = {
    pointerEvents: 'auto', // Re-enable pointer events for children for interaction
  };

  return (
    <div ref={wrapperRef} style={secureStyles}>
      {warning && (
        <div className="absolute inset-0 bg-red-900/80 z-50 flex flex-col items-center justify-center text-white p-4 rounded-lg">
          <ShieldAlert className="w-16 h-16 mb-4" />
          <h3 className="text-xl font-bold">Recording is Prohibited</h3>
          <p className="text-center">To protect instructor content, screen capture and recording are not allowed.</p>
        </div>
      )}
      {/* Watermark Overlay */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-4 z-10 pointer-events-none">
        {[...Array(9)].map((_, i) => (
          <div key={i} className="flex items-center justify-center text-white/5 -rotate-12 select-none">
            Qene © 2024
          </div>
        ))}
      </div>
      <div style={childContainerStyles}>
        {children}
      </div>
    </div>
  );
};

export default SecureContentWrapper;
