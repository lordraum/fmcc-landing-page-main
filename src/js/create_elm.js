// Booster Brand and Services

export const createTtlTxtImgElm = (template, items, box) => {
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

export const createTestimonialElm = (template, items, box) => {
  items.forEach(({ text, author, position, image }) => {
    const clone = template.content.cloneNode(true)
    const img = clone.querySelector('img')
    const p = clone.querySelector('p')
    const spans = Array.from(clone.querySelectorAll('span'))
    const spanAuthor = spans[0]
    const spanPosition = spans[1]

    img.src = image
    p.textContent = text
    spanAuthor.textContent = author
    spanPosition.textContent = position
    box.append(clone)
  })
}

export const creategalleryElm = (template, items, box) => {
  items.forEach(({ altAtb, imgSet }) => {
    const clone = template.content.cloneNode(true)
    const img = clone.querySelector('img')

    img.srcset = imgSet
    img.alt = altAtb
    box.append(clone)
  })
}
