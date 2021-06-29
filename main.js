var product = "Socks";
var app = new Vue({
  el: '#app',
  data: {
    product: "Socks",
    description: "A pair of warm, fuzzy socks",
    image: "./images/socks-white.jpeg",
    altText: "A pair of socks",
    linkToShop: "https://rozetka.com.ua/the_pair_of_socks_roz6400000454/p208142947/",
    inStock: true,
    onSale: true,
    inventory: 100,
    size: 40,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [{
        variantId: 2234,
        variantColor: "green",
        variantImage: "./images/green-socks.jpeg"
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage: "./images/blue-socks.jpeg"
      }
    ],
    cart: 0
  },
  methods: {
    addToCart() {
      this.cart += 1
    },
    updateProduct(variantImage) {
      this.image = variantImage
    }
  }
});
