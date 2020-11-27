export default class DummyGeneralService {
  _categories = {
    results: [
      {
        category_id: 1, url: '/categories/1/', name: 'Rings', filters: {
          sort: [
            'Featured', 'Lowest Price', 'Highest Price', 'Alphabetically, A-Z',
            'Alphabetically, Z-A'],
          metal: ['9ct Yellow Gold', '18ct Yellow Gold'],
          stone: ['White Diamond with White Diamonds', 'White Diamond with Gray Diamonds'],
        },
      },
      {
        category_id: 2, url: '/categories/2/', name: 'Earrings', filters: {
          sort: [
            'Featured', 'Lowest Price', 'Highest Price', 'Alphabetically, A-Z',
            'Alphabetically, Z-A'],
          metal: ['9ct Yellow Gold', '18ct Yellow Gold'],
          stone: ['White Diamond with White Diamonds'],
        },
      },
      {
        category_id: 3, url: '/categories/3/', name: 'Necklaces', filters: {
          sort: [
            'Featured', 'Lowest Price', 'Highest Price', 'Alphabetically, A-Z',
            'Alphabetically, Z-A'],
          metal: ['9ct Yellow Gold'],
          stone: ['White Diamond'],
        },
      },
      {
        category_id: 4, url: '/categories/4/', name: 'Bracelets', filters: {
          sort: [
            'Featured', 'Lowest Price', 'Highest Price', 'Alphabetically, A-Z',
            'Alphabetically, Z-A'],
          metal: ['9ct Yellow Gold', '18ct Yellow Gold'],
        },
      },
    ],
  };
  _products = {
    results: [
      {
        product_id: 1, url: '/products/1/', name: 'Etta Ring', price: 7909,
        description: 'A vintage inspired band with an abundance of precious gems. Six baguette stones are paired with a unique pear cut diamond, then accented by the tiniest 1mm stone. This band is stunning worn on its own, or with solitaire rings and more.',
        img_urls: [
          '/images/products/ring_1.png',
          '/images/products/ring_1_1.jpg',
          '/images/products/ring_1_2.jpg'],
        category_id: 1, category_url: '/categories/1/',
        metal: '18ct Yellow Gold',
        stone: 'White Diamond with Gray Diamonds',
      },
      {
        product_id: 2, url: '/products/2/', name: 'Brilliant Halo Ring', price: 16539,
        description: 'A stunning 6mm round brilliant stone is held in a classic basket setting and finished with a triple pave band set with 66 diamonds.',
        img_urls: [
          '/images/products/ring_2.png',
          '/images/products/ring_2_1.jpg',
          '/images/products/ring_2_2.jpg'],
        category_id: 1, category_url: '/categories/1/',
        metal: '9ct Yellow Gold',
        stone: 'White Diamond with White Diamonds',
      },
      {
        product_id: 3, url: '/products/3/', name: 'Wildflower Earrings Pave', price: 6805,
        description: 'An extravagant reimagining of one of our most beloved styles. Each imaginary flower is hand set with 86 precious gems covering the outer surface of its blooming petals. True statement earrings.<br/><br/>Approximately 16mm x 16mm each. Fastened with a Meadowlark Signature Butterfly. Sold as a pair.',
        img_urls: [
          '/images/products/earring_1.png',
          '/images/products/earring_1_1.jpg',
          '/images/products/earring_1_2.jpg'],
        category_id: 2, category_url: '/categories/2/',
        metal: '9ct Yellow Gold',
        stone: 'White Diamond with White Diamonds',
      },
      {
        product_id: 4, url: '/products/4/', name: 'Petal Pearl Drop Earrings', price: 1579,
        description: 'Our new favourite style of pearl, the petal pearl is an unusual flat oval shape. We have chosen the biggest ones we can find to make these beautiful drop earrings. Fastened with a disc back, these earrings swing elegantly from the lobe.<br/><br/>We have extremely limited quantities of these pearls available and advise ordering while you can!<br/><br/>The natural organic shaped petal pearl means every piece is different, and will not appear identical to the image. Every pearl is hand selected, but will include shape & texture irregularities. Small holes or pits may be present. Sold as a pair.',
        img_urls: [
          '/images/products/earring_2.png',
          '/images/products/earring_2_1.jpg',
          '/images/products/earring_2_2.jpg'],
        category_id: 2, category_url: '/categories/2/',
        metal: '18ct Yellow Gold',
      },
      {
        product_id: 5, url: '/products/5/', name: 'Baroque Necklace', price: 1605,
        description: 'The freshwater baroque pearl takes centre stage on this elegant necklace. Fastened to a beautiful snake chain with rounded links and a smooth finish.<br/><br/>Chain 55cm in length.<br><br/>The natural organic shaped baroque pearl means every piece is different, and will not appear identical to the image. Every pearl is hand selected, but will include shape & texture irregularities. Small holes or pits may be present.',
        img_urls: [
          '/images/products/necklace_1.png',
          '/images/products/necklace_1_1.jpg',
          '/images/products/necklace_1_2.jpg'],
        category_id: 3, category_url: '/categories/3/',
        metal: '9ct Yellow Gold',
      },
      {
        product_id: 6, url: '/products/6/', name: 'Ursa Necklace Large', price: 1625,
        description: 'This everyday necklace has a subtle elegance within its sunburst engravings, a compass of sorts to bring its wearer home. Set with a 3mm stone radiating from its centre.<br/><br/>14mm pendant on a 45cm chain.',
        img_urls: [
          '/images/products/necklace_2.png',
          '/images/products/necklace_2_1.jpg'],
        category_id: 3, category_url: '/categories/3/',
        metal: '9ct Yellow Gold',
        stone: 'White Diamond',
      },
      {
        product_id: 7, url: '/products/7/', name: 'Maiden Ankle Bracelet', price: 1339,
        description: 'A simple ankle bracelet including some of our favourite adornments from the Palace collection. Each charm matches in scale, and includes intricate etched & embossed detailing.<br/><br/>Available in multiple sizes.',
        img_urls: [
          '/images/products/bracelet_1.png',
          '/images/products/bracelet_1_1.jpg'],
        category_id: 4, category_url: '/categories/4/',
        metal: '9ct Yellow Gold',
      },
      {
        product_id: 8, url: '/products/8/', name: 'Fob Bracelet', price: 2765,
        description: 'Inspired by classic time-tested jewellery, this fob bracelet features a mid weight curb chain and finished with a sleek circular closure and Meadowlark stamped bar.<br/><br/>Approximately 19cm long. Made in our NZ-based atelier.',
        img_urls: [
          '/images/products/bracelet_2.png',
          '/images/products/bracelet_2_1.jpg',
          '/images/products/bracelet_2_2.jpg'],
        category_id: 4, category_url: '/categories/4/',
        metal: '18ct Yellow Gold',
      },
    ],
  };
  _navMenu = {
    results: [
      {
        menu_id: 1, name: 'Shop', link: '/collections', category_id: null,
        submenu: [
          { menu_id: 5, name: 'Rings', link: '/rings', category_id: 1 },
          { menu_id: 6, name: 'Earrings', link: '/earrings', category_id: 2 },
          { menu_id: 7, name: 'Necklaces', link: '/necklaces', category_id: 3 },
          { menu_id: 8, name: 'Bracelets', link: '/bracelets', category_id: 4 },
        ],
      },
      { menu_id: 2, name: 'Blog', link: '/blog', category_id: null, parent_id: null },
      { menu_id: 3, name: 'FAQS', link: '/faqs', category_id: null, parent_id: null },
      { menu_id: 4, name: 'About us', link: '/about', category_id: null, parent_id: null },
    ],
  };
  _user = {
    results: {
      user_id: 1,
      first_name: 'Vladislav',
      last_name: 'Filimonov',
      address: null,
      address2: null,
      city: null,
      country: null,
      postcode: null,
      phone: null,
      email: 'artful197@gmail.com',
      orderHistoryItems: [],
      access: 1,
    },
    jwt: 'aaaaaaa.bbbbbbbb.ccccccc',
  };
  _faqs = {
    results: [
      {
        faq_id: 1, name: 'What is my ring size?',
        description: '<p>Your ring size is not related to your clothing size and we don’t recommend you guess your size!</p><p>We recommend going to your local jewellery store to get sized correctly or send us an email to request a free ring sizer.</p><p>If you are buying a gift choose either for women: small (5.5), medium (7) or large (8.5) and for men: small (8.5), medium (9) or large (10.5)</p><p>If your ring needs to be resized there will be a charge for this.</p>',
      },
      {
        faq_id: 2, name: 'Can I request a different stone?',
        description: '<p>Yes you can. Send us an email and we will do our best to source your ideal stone.</p>',
      },
      {
        faq_id: 3, name: 'Where are your stones and metals from?',
        description: '<p>We work closely with many suppliers around the world to source the best quality ethical stones and metals.</p>',
      },
    ],
  };
  _blog = {
    results: [
      {
        blog_id: 1, title: 'Another blog post',
        date: '2019-12-31T10:00:00.000+03:00',
        text: '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>',
      },
      {
        blog_id: 2, title: 'Another blog post',
        date: '2019-12-31T08:00:00.000+03:00',
        text: '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>',
      },
      {
        blog_id: 3, title: 'Another blog post',
        date: '2019-12-31T08:00:00.000+03:00',
        text: '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p><p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>',
      },
      {
        blog_id: 4, title: 'Another blog post',
        date: '2019-12-31T08:00:00.000+03:00',
        text: '<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p><p>Curabitur blandit tempus porttitor. Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p><p>Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>',
      },
    ],
  };
  _about = { results: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dicta distinctio eligendi facere fuga in inventore ipsa itaque iure molestiae, necessitatibus nihil numquam quaerat tempora totam ut voluptatem, voluptatibus! Repellendus.</p>' };

  getResource = async (data) => await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(data);
      reject(new Error('Something bad happened'));
    }, 1000));

  getNavMenu = async () => await this.getResource(this._navMenu);

  postRegister = async (userData) => await this.getResource(this._user);

  postLogin = async (userData) => await this.getResource(this._user);

  getUser = async (token) => await this.getResource(this._user);

  postProfile = async (token, userData) => await this.getResource(this._user);

  postPassword = async (token, userData) => await this.getResource(this._user);

  getCategory = async (categoryId) =>
    await this.getResource(this._categories.results[categoryId - 1]);

  getProductList = async (categoryId, search, params) =>
    await this.getResource(this.personalFilters(this._products, categoryId, search, params));

  getProduct = async (productId) => await this.getResource(this._products.results[productId - 1]);

  getFAQS = async () => await this.getResource(this._faqs);

  getBlog = async () => await this.getResource(this._blog);

  getAbout = async () => await this.getResource(this._about);

  personalFilters = ({ results }, categoryId = null, search = null, params = null) => {
    let _products = results;
    if (categoryId) _products = _products.filter((product) => categoryId === product.category_id);
    if (search) _products = _products.filter(
      (product) => product.name.toLowerCase().indexOf(search.toLowerCase()) > -1);
    if (params) {
      params = JSON.parse(params);
      if (params['sort'])
        if (params['sort'].length > 0) {
          if (params['sort'] === '1') _products.sort((a, b) => a.price > b.price ? 1 : -1);
          if (params['sort'] === '2') _products.sort((a, b) => a.price < b.price ? 1 : -1);
          if (params['sort'] === '3') _products.sort(
            (a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1);
          if (params['sort'] === '4') _products.sort(
            (a, b) => a.name.toLowerCase() < b.name.toLowerCase() ? 1 : -1);
        }
      if (params['metal'])
        if (params['metal'].length > 0) {
          params['metal'].forEach((param) =>
            _products = _products.filter(({ metal }) => metal === param));
        }
      if (params['stone'])
        if (params['stone'].length > 0) {
          params['stone'].forEach((param) =>
            _products = _products.filter(({ stone }) => stone === param));
        }
    }
    return { results: _products };
  };
}
