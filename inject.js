document.addEventListener("keydown", event => {
  if (!event.metaKey)
    return

  const selector = {
    ArrowUp:   "#app",
    ArrowDown: ".addChildButton"
  }[event.key]

  if (selector)
    document.querySelector(selector).scrollIntoView()
})
