function handleAnchorScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();

  const link = event.currentTarget;
  const href = link.getAttribute('href');

  if (!href || !href.startsWith("#")) return;

  const anchorId = href.replace("#", "");
  const anchor = document.getElementById(anchorId);

  if (anchor) {
    const offsetTop = anchor.offsetTop - 120;
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });
  }
}
export {
    handleAnchorScroll
}
