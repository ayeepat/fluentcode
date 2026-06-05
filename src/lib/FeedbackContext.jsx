import { createContext, useContext, useState } from "react";

const FeedbackContext = createContext(null);

export function FeedbackProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAutoOpen, setShouldAutoOpen] = useState(false);

  const openFeedbackWidget = (autoOpen = false) => {
    // Check if user has permanently dismissed feedback
    const isDismissed = localStorage.getItem("feedbackWidget_dismissed");
    // For auto-open (after lesson), respect dismissal - never force if dismissed
    // For manual opens (floating button), bypass dismissal - user explicitly clicked it
    if (autoOpen && isDismissed) {
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
