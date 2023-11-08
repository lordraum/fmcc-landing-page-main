import '../css/style.css'
import 'normalize.css'
import { createTtlTxtImgElm, createTestimonialElm, creategalleryElm } from './create_elm'
import { brandItems, clientTestimonials, galleryItems, services } from './data'
import toggleMenu from './toggle_menu'

const brandBoostElm = document.getElementById('brand-boost')
const brandBoostItemTemplate = document.getElementById('brand-boost-item-template')

const servicesElm = document.getElementById('services')
const serviceTemplate = document.getElementById('service-template')

const testimonialElm = document.getElementById('testimonials-box')
const testimonialTemplate = document.getElementById('testimonial-template')

const galleryElm = document.getElementById('gallery')
const galleryTemplate = document.getElementById('gallery-item-template')

const navigation = document.getElementById('navigation')

const toggleElm = document.getElementById('toggle-menu')

// Create brand boost items
createTtlTxtImgElm(brandBoostItemTemplate, brandItems, brandBoostElm)

// Create Services items
createTtlTxtImgElm(serviceTemplate, services, servicesElm)
createTestimonialElm(testimonialTemplate, clientTestimonials, testimonialElm)
creategalleryElm(galleryTemplate, galleryItems, galleryElm)

toggleElm.addEventListener('click', () => toggleMenu(navigation, 'nav--header-toggle')
)
