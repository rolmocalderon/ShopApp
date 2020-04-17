export default class Product {
  id = null;
  name = null;
  price = null;
  description = null;
  image = null;

  constructor(id, name, price, description, image) {
    if (validateProduct(id, name, price, description, image)) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.image = image;
    } else {
      //console.error("Estupido esto no funciona");
    }
  }
};

function validateProduct(id, name, price, description, image){
  return validateImage(image);
}

function validateImage(image) {
  return /\.(gif|jpe?g|tiff|png|webp|bmp)$/i.test(image) ? true : false;
}
