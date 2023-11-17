export const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const elements = document.querySelectorAll('[data-scroll]');
  elements.forEach(element => {
    let id = element.getAttribute('id');
    const elementTop = element.getBoundingClientRect().top + window.scrollY - 1;

    if (scrollPosition >= elementTop) {
      //   setScrollCategory(id || '');
    }
  });
};

export const scrollToCategory = (category: string) => {
  const element = document.querySelector(`[data-scroll="${category}"]`);
  //   setScrollCategory(category);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
