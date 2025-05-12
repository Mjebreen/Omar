
/**
 * Smoothly scrolls to the specified element ID
 * @param elementId - The ID of the element to scroll to
 */
export const smoothScrollToElement = (elementId: string) => {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
