import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAutoOpen, setShouldAutoOpen] = useState(false);

  const openFeedbackWidget = (autoOpen = false) => {
    // Check if user has permanently dismissed feedback
    const isDismissed = localStorage.getItem("feedbackWidget_dismissed");
    if (isDismissed && !autoOpen) {
      // Allow manual opening via button even if auto-dismissed
      setIsOpen(true);
      return;
    }
    if (isDismissed) {
      // Don't auto-open if dismissed
      return;
    }
    setShouldAutoOpen(autoOpen);
    setIsOpen(true);
  };

  const closeFeedbackWidget = (markDismissed = false) => {
    setIsOpen(false);
    setShouldAutoOpen(false);
    if (markDismissed) {
      localStorage.setItem("feedbackWidget_dismissed", "true");
    }
  };

  const resetFeedbackWidget = () => {
    localStorage.removeItem("feedbackWidget_dismissed");
  };

  const value = {
    isOpen,
    shouldAutoOpen,
    openFeedbackWidget,
    closeFeedbackWidget,
    resetFeedbackWidget,
  };

  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}

export const useFeedbackWidget = () => {
  const context = useContext(FeedbackContext);
  if (!context) {
    throw new Error("useFeedbackWidget must be used within FeedbackProvider");
  }
  return context;
};
