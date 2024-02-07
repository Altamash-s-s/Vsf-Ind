const Home = () => import(/* webpackChunkName: "vsf-home" */ 'theme/pages/Home.vue')
const PageNotFound = () => import(/* webpackChunkName: "vsf-not-found" */ 'theme/pages/PageNotFound.vue')
const ErrorPage = () => import(/* webpackChunkName: "vsf-error" */ 'theme/pages/Error.vue')
const Product = () => import(/* webpackChunkName: "vsf-product" */ 'theme/pages/Product.vue')
const Category = () => import(/* webpackChunkName: "vsf-category" */ 'theme/pages/Category.vue')
const CmsPage = () => import(/* webpackChunkName: "vsf-cms" */ 'theme/pages/CmsPage.vue')
const Checkout = () => import(/* webpackChunkName: "vsf-checkout" */ 'theme/pages/Checkout.vue')
const Compare = () => import(/* webpackChunkName: "vsf-compare" */ 'theme/pages/Compare.vue')
const MyAccount = () => import(/* webpackChunkName: "vsf-my-account" */ 'theme/pages/MyAccount.vue')
const Static = () => import(/* webpackChunkName: "vsf-static" */ 'theme/pages/Static.vue')
const ResetPassword = () => import(/* webpackChunkName: "vsf-reset-password" */ 'theme/pages/ResetPassword.vue');
const KnowUs = () => import(/* webpackChunkName: "vsf-about" */ 'theme/Insied-Page/KnowUs.vue');
const Collection = () => import(/* webpackChunkName: "vsf-collection" */ 'theme/pages/Collection.vue');
const Career = () => import(/* webpackChunkName: "vsf-career" */ 'theme/pages/Career.vue');
const Collaboration = () => import(/* webpackChunkName: "vsf-collabration" */ 'theme/pages/Collaboration.vue');
const Shipment_return = () => import(/* webpackChunkName: "vsf-collabration" */ 'theme/pages/Shipment_return.vue');
const Giveaway = () => import(/* webpackChunkName: "vsf-giveaway" */ 'theme/pages/Giveaway.vue');
const Giveaway_from = () => import(/* webpackChunkName: "vsf-giveaway_from" */ 'theme/forms/Giveaway_from.vue');
const sidebarForm = () => import(/* webpackChunkName: "vsf-sidebarForm" */ 'theme/forms/sidebarForm.vue');
const collabrationForm = () => import(/* webpackChunkName: "vsf-collabrationForm" */ 'theme/forms/collabrationForm.vue');
const collabrationSidebar = () => import(/* webpackChunkName: "vsf-collabrationSidebar" */ 'theme/forms/collabrationSidebar.vue');
const videoapi = () => import(/* webpackChunkName: "vsf-videoapi" */ 'theme/pages/videoapi.vue');
const ProductCare = () => import(/* webpackChunkName: "vsf-productcare" */ 'theme/pages/ProductCare.vue');
const WashCarePopup = () => import(/* webpackChunkName: "vsf-washcarepopup" */ 'theme/sidebar/WashCarePopup.vue');
const CareerForm = () => import(/* webpackChunkName: "vsf-careerform" */ 'theme/forms/CareerForm.vue');
const CareerSidebar = () => import(/* webpackChunkName: "vsf-careersidebar" */ 'theme/forms/CareerSidebar.vue');
const CustomerFeedback = () => import(/* webpackChunkName: "vsf-customerfeedback" */ 'theme/pages/CustomerFeedback.vue');
const Blog = () => import(/* webpackChunkName: "vsf-blog" */ 'theme/pages/Blog.vue');
const New = () => import(/* webpackChunkName: "vsf-new" */ 'theme/pages/New.vue');
const HopeBlog = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/HopeBlog.vue');
const Abstract = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/Abstract.vue');
const codelife = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/codelife.vue');
const HumanAI = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/HumanAI.vue');
const WhoCare = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/WhoCare.vue');
const Dragonfly = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/Dragonfly.vue');
const HABranding = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/HABranding.vue');
const HandGestures = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/HandGestures.vue');
const LoveWithoutLimits = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/LoveWithoutLimits.vue');
const MultipleIs = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/MultipleIs.vue');
const NotLazy = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/NotLazy.vue');
const WarmEmbrace = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/WarmEmbrace.vue');
const HotSpicy = () => import(/* webpackChunkName: "vsf-new" */ 'theme/inside-blog/HotSpicy.vue');
const ContactUs = () => import(/* webpackChunkName: "vsf-new" */ 'theme/Insied-Page/ContactUs.vue');
const ProductCollection = () => import(/* webpackChunkName: "vsf-new" */ 'theme/Insied-Page/ProductCollection.vue');
const WinterCollection = () => import(/* webpackChunkName: "vsf-new" */ 'theme/pages/collection/WinterCollection.vue');
const offers = () => import(/* webpackChunkName: "vsf-new" */ 'theme/pages/offers.vue');

let routes = [
  { name: 'home', path: '/', component: Home, alias: '/pwa.html' },
  { name: 'knowus', path: '/knowus', component: KnowUs },
  { name: 'offers', path: '/offers', component: offers },
  { name: 'contact-us', path: '/contact-us', component: ContactUs },
  { name: 'create-password', path: '/create-password', component: ResetPassword },
  { name: 'new', path: '/new', component: New },
  { name: 'blog', path: '/blog', component: Blog },
  { name: 'whocare', path: '/whocare', component: WhoCare },
  { name: 'multipleis', path: '/multipleis', component: MultipleIs },
  { name: 'hotspicy', path: '/hotspicy', component: HotSpicy },
  { name: 'warmembrace', path: '/warmembrace', component: WarmEmbrace },
  { name: 'notlazy', path: '/notlazy', component: NotLazy },
  { name: 'dragonfly', path: '/dragonfly', component: Dragonfly },
  { name: 'lovewithoutlimits', path: '/lovewithoutlimits', component: LoveWithoutLimits },
  { name: 'handgestures', path: '/handgestures', component: HandGestures },
  { name: 'habranding', path: '/habranding', component: HABranding },
  { name: 'hopeblog', path: '/hopeblog', component: HopeBlog },
  { name: 'codelife', path: '/codelife', component: codelife },
  { name: 'humanai', path: '/humanai', component: HumanAI },
  { name: 'abstract', path: '/abstract', component: Abstract },
  { name: 'customerfeedback', path: '/customerfeedback', component: CustomerFeedback },
  { name: 'productcare', path: '/productcare', component: ProductCare },
  { name: 'careersidebar', path: '/careersidebar', component: CareerSidebar },
  { name: 'careerform', path: '/careerform', component: CareerForm },
  { name: 'washcarepopup', path: '/washcarepopup', component: WashCarePopup },
  { name: 'videoapi', path: '/videoapi', component: videoapi },
  { name: 'productcollection', path: '/productcollection', component: ProductCollection },
  { name: 'sidebarform', path: '/sidebarform', component: sidebarForm },
  { name: 'collabrationform', path: '/collabrationform', component: collabrationForm },
  { name: 'collabrationsidebar', path: '/collabrationsidebar', component: collabrationSidebar },
  { name: 'giveaway_from', path: '/giveaway_from', component: Giveaway_from },
  { name: 'WinterCollection', path: '/winter-collection', component: WinterCollection },
  { name: 'collection', path: '/liner-collection', component: Collection },
  { name: 'career', path: '/career', component: Career },
  { name: 'Collaboration', path: '/collaboration', component: Collaboration },
  { name: 'shipment_return', path: '/shipment-&-return', component: Shipment_return },
  { name: 'giveaway', path: '/giveaway', component: Giveaway },
  { name: 'checkout', path: '/checkout', component: Checkout },
  { name: 'legal', path: '/legal', component: Static, props: { page: 'lorem', title: 'Legal Notice' }, meta: { title: 'Legal Notice', description: 'Legal Notice - example of description usage' } },
  { name: 'privacy', path: '/privacy', component: Static, props: { page: 'lorem', title: 'Privacy' } },
  { name: 'magazine', path: '/magazine', component: Static, props: { page: 'lorem', title: 'Magazine' } },
  { name: 'sale', path: '/sale', component: Static, props: { page: 'lorem', title: 'Sale' } },
  { name: 'order-tracking', path: '/order-tracking', component: Static, props: { page: 'lorem', title: 'Track my Order' } },
  { name: 'my-account', path: '/my-account', component: MyAccount },
  { name: 'my-shipping-details', path: '/my-account/shipping-details', component: MyAccount, props: { activeBlock: 'MyShippingDetails' } },
  { name: 'my-newsletter', path: '/my-account/newsletter', component: MyAccount, props: { activeBlock: 'MyNewsletter' } },
  { name: 'my-orders', path: '/my-account/orders', component: MyAccount, props: { activeBlock: 'MyOrders' } },
  { name: 'my-order', path: '/my-account/orders/:orderId', component: MyAccount, props: { activeBlock: 'MyOrder' } },
  { name: 'my-recently-viewed', path: '/my-account/recently-viewed', component: MyAccount, props: { activeBlock: 'MyRecentlyViewed' } },
  { name: 'about-us', path: '/about-us', component: Static, props: { page: 'lorem', title: 'About us' } },
  { name: 'customer-service', path: '/customer-service', component: Static, props: { page: 'lorem', title: 'Customer service' } },
  { name: 'store-locator', path: '/store-locator', component: Static, props: { page: 'lorem', title: 'Store locator' } },
  { name: 'size-guide', path: '/size-guide', component: Static, props: { page: 'lorem', title: 'Size guide' } },
  { name: 'gift-card', path: '/gift-card', component: Static, props: { page: 'lorem', title: 'Gift card' } },
  { name: 'delivery', path: '/delivery', component: Static, props: { page: 'lorem', title: 'Delivery' } },
  { name: 'returns', path: '/returns', component: Static, props: { page: 'lorem', title: 'Returns policy' } },
  { name: 'order-from-catalog', path: '/order-from-catalog', component: Static, props: { page: 'lorem', title: 'Order from catalog' } },
  { name: 'contact', path: '/contact', component: Static, props: { page: 'contact', title: 'Contact' } },
  { name: 'compare', path: '/compare', component: Compare, props: { title: 'Compare Products' } },
  { name: 'error', path: '/error', component: ErrorPage },
  { name: 'virtual-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'bundle-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'simple-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'downloadable-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'grouped-product', path: '/p/:parentSku/:slug', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'configurable-product', path: '/p/:parentSku/:slug/:childSku', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'product', path: '/p/:parentSku/:slug/:childSku', component: Product }, // :sku param can be marked as optional with ":sku?" (https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js#L16), but it requires a lot of work to adjust the rest of the site
  { name: 'category', path: '/c/:slug', component: Category },
  { name: 'cms-page', path: '/i/:slug', component: CmsPage },
  { name: 'page-not-found', path: '*', component: PageNotFound }
]

export default routes
