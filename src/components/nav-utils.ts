
export interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

export const navigationItems: NavigationItem[] = [
  { id: 'main', label: 'Home', href: '#main' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
];

/**
 * Scrolls to a section smoothly with offset for fixed navigation
 * @param sectionId - The ID of the section to scroll to
 * @param onComplete - Optional callback when scroll is complete
 */
export const scrollToSection = (sectionId: string, onComplete?: () => void): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    const navElement = document.querySelector('nav');
    const navHeight = navElement?.offsetHeight || 0;
    const sectionTop = section.offsetTop - navHeight;
    
    window.scrollTo({
      top: sectionTop,
      behavior: 'smooth'
    });
    
    // Call onComplete callback after scroll animation
    if (onComplete) {
      setTimeout(onComplete, 500); // Approximate scroll animation time
    }
  }
};

/**
 * Gets the current active section based on scroll position
 * @returns The ID of the currently active section
 */
export const getCurrentActiveSection = (): string => {
  const sections = navigationItems.map(item => document.getElementById(item.id)).filter(Boolean);
  const navHeight = document.querySelector('nav')?.offsetHeight || 0;
  const scrollPosition = window.scrollY + navHeight + 100; // Add some offset
  
  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i];
    if (section && section.offsetTop <= scrollPosition) {
      return section.id;
    }
  }
  
  return navigationItems[0]?.id || 'main';
};

/**
 * Debounce function for performance optimization
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};
