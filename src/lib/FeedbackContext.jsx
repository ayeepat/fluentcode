import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext();

export function FeedbackProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAutoOpen, setShouldAutoOpen] = useState(false);

  const openFeedbackWidget = (autoOpen = false) => {
    // Check if user has permanently dismissed feedback
    const isDismissed = localStorage.getItem("feedbackWidget_dismissed");
    // If dismissed and not auto-opening (manual click), don't show
    if (isDismissed && !autoOpen) {
      return;
    }
    // If dismissed and auto-opening (after exercise), override and show anyway
    // This ensures auto-popup after successful exercise works even if user previously dismissed
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
