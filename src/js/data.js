import imageTransformDesktop from '../images/desktop/image-transform.jpg'
import imageTransformMobile from '../images/mobile/image-transform.jpg'
import imageStandOutDesktop from '../images/desktop/image-stand-out.jpg'
import imageStandOutMobile from '../images/mobile/image-stand-out.jpg'
import imageGraphicDesktop from '../images/desktop/image-graphic-design.jpg'
import imageGraphicMobile from '../images/mobile/image-graphic-design.jpg'
import imagePhotographyDesktop from '../images/desktop/image-photography.jpg'
import imagePhotographyMobile from '../images/mobile/image-photography.jpg'
import imageThomas from '../images/image-thomas.jpg'
import imageJennie from '../images/image-jennie.jpg'
import imageEmily from '../images/image-emily.jpg'

export const brandItems = [
  {
    title: 'Transform your brand',
    text: `We are a full-service creative agency specializing in helping brands grow fast.
    Engage your clients through compelling visuals that do most of the marketing for you.`,
    imgSet: `
    ${imageTransformDesktop}, 
    ${imageTransformMobile} 3x`
  },
  {
    title: 'Stand out to the right audience',
    text: 'Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.',
    imgSet: `    
    ${imageStandOutDesktop}, 
    ${imageStandOutMobile} 3x`
  }
]

export const services = [
  {
    title: 'Graphic design',
    text: "Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients' attention.",
    imgSet: `    
    ${imageGraphicDesktop},
    ${imageGraphicMobile} 3x`
  },
  {
    title: 'Photography',
    text: 'Increase your credibility by getting the most stunning, high-quality photos that improve your business image.',
    imgSet: `
    ${imagePhotographyDesktop},
    ${imagePhotographyMobile} 3x`
  }
]

export const clientTestimonials = [
  {
    text: 'We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.',
    author: 'Emily R.',
    position: 'Marketing Director',
    img: imageEmily
  },
  {
    text: 'Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.',
    author: 'Thomas S.',
    position: 'Chief Operating Officer',
    img: imageThomas
  },
  {
    text: 'Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!',
    author: 'Jennie F.',
    position: 'Business Owner',
    img: imageJennie
  }
]
