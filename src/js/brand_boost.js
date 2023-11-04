const brandBoost = (template, items, box) => {
  items.forEach(({ title, text, imgSet }) => {
    const clone = template.content.cloneNode(true)
    const h2 = clone.querySelector('h2')
    const p = clone.querySelector('p')
    const img = clone.querySelector('img')
    h2.textContent = title
    p.textContent = text
    img.srcset = imgSet
    box.append(clone)
  })
}

export default brandBoost
