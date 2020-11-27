export default class GeneralService {
  getResource = async (url) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    });
    if (!res.ok) throw new Error(`Could not fetch ${res.url}, received ${res.status}`);
    return await res.json();
  };

  postResource = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error(`Could not fetch ${res.url}, received ${res.status}`);
    return await res.json();
  };

  getNavMenu = async () => await this.getResource('/menu/');

  postRegister = async (userData) => await this.postResource('/user/register/', userData);

  postLogin = async (userData) => await this.postResource('/user/login/', userData);

  getUser = async (token) => {
    const res = await fetch('/user/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });
    if (!res.ok) throw new Error(`Could not fetch ${res.url}, received ${res.status}`);
    return await res.json();
  };

  postProfile = async (token, userData) => {
    const res = await fetch('/user/profile/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) throw new Error(`Could not fetch ${res.url}, received ${res.status}`);
    return await res.json();
  };

  postPassword = async (token, userData) => {
    const res = await fetch('/user/password/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', 'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) throw new Error(`Could not fetch ${res.url}, received ${res.status}`);
    return await res.json();
  };

  getCategory = async (categoryId) =>
    await this.getResource(`/categories/?category_id=${categoryId}`);

  getProductList = async (categoryId, search, params) =>
    await this.getResource(
      `/products/?category_id=${categoryId}&q=${search}&p=${params}`);

  getProduct = async (productId) => await this.getResource(`/products/${productId}/`);

  getFAQS = async () => await this.getResource('/faqs/');
}
