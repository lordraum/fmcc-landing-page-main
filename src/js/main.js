import '../css/style.css'
import 'normalize.css'
import brandBoost from './brand_boost'
import { brandItems } from './data'

const brandBoostElm = document.getElementById('brand-boost')
const brandBoostItemTemplate = document.getElementById('brand-boost-item')

brandBoost(brandBoostItemTemplate, brandItems, brandBoostElm)
