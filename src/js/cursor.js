export function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const dot = document.getElementById('cursor-dot');
  const outline = document.getElementById('cursor-outline');
  
  if (!dot || !outline) return;

  window.addEventListener('mousemove', (e) => {
    dot.style.left = `${e.clientX}px`;
    dot.style.top = `${e.clientY}px`;
    outline.style.left = `${e.clientX}px`;
    outline.style.top = `${e.clientY}px`;
  });

  window.addEventListener('mouseover', (e) => {
    const target = e.target;
    if (
      target.tagName.toLowerCase() === 'a' || 
      target.tagName.toLowerCase() === 'button' || 
      target.closest('a') || 
      target.closest('button') || 
      target.classList.contains('cursor-pointer')
    ) {
      dot.classList.add('hover');
      outline.classList.add('hover');
    } else {
      dot.classList.remove('hover');
      outline.classList.remove('hover');
    }
  });
}
