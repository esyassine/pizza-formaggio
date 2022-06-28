const data = [
  {
    id: "C0Xz8PARvYonPT6NHhkD",
    description:
      "An ice cream float or ice cream soda, or spider, is a chilled beverage that consists of ice cream in either a soft drink or a mixture of flavored syrup and carbonated water.",
    price: "6.90",
    createdAt: "Thu Apr 22 2021 21:43:56 GMT+0800 (Italia Time)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fcoke-float.jpg?alt=media&token=958c7d89-17ea-4960-a4a2-24be0401a3ee",
    name: "Coke Float",
  },
  {
    id: "CKAjJgf8KgKFj4c25Hxx",
    description:
      "Dr Pepper is a carbonated soft drink, (sometimes called soda or pop.) Dr Pepper is brown in color and is made up of 23 different flavors blended together to make a specific taste.",
    createdAt: "Thu Apr 22 2021 21:43:54 GMT+0800 (Italia Time)",
    name: "Dr Pepper 330ML",
    price: "3.90",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fdr-pepper.jpg?alt=media&token=76d09734-86ff-4400-8310-efb3603fd3ed",
  },
  {
    id: "Cl19BZ67znHFs0yfyysB",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fsupreme-pizza.jpg?alt=media&token=e3e422fa-8fe1-49da-b908-1e614a7b4808",
    description:
      "Chow down the supreme pizza! It’s a true supreme pizza topped with sausages, pepperoni slices, red and green bell pepper, red onion, black olives, mozzarella, Parmesan, and basil. The olives and peppers are classic additions that give the pizza a strong nostalgia factor.",
    price: "23.99",
    name: "Supreme Pizza",
    createdAt: "Thu Apr 22 2021 21:43:39 GMT+0800 (Italia Time)",
  },
  {
    id: "DFQGlnkd3Q1e4B0LtQtt",
    createdAt: "Thu Apr 22 2021 21:43:51 GMT+0800 (Italia Time)",
    name: "Breakfast Pizza",
    description:
      "Get your day started with our very own pizza topped with crispy bacon and soft boiled eggs. Just let the pizza do the work as it melts in your mouth!",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fbreakfast-pizza.jpg?alt=media&token=943a0abe-9a8d-4cfa-8f81-1a3d99e82a3b",
    price: "18.99",
  },
  {
    id: "FzoJjr8dg6yaTehDnH1W",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fclassic-cheese-pizza.jpg?alt=media&token=e6554f91-1a3b-41b8-818f-9deac2801385",
    createdAt: "Thu Apr 22 2021 21:43:40 GMT+0800 (Italia Time)",
    name: "Classic Cheese",
    description:
      "Simple and classic. This pizza is topped with melted buffalo mozzarella and parmesan cheese baked at high temperature, garnished with basil leaves and seasoned with black pepper.",
    price: "13.99",
  },
  {
    id: "GmqB0orR2phlKnptnUgJ",
    name: "Sausage Pepperoni",
    price: "20.99",
    createdAt: "Thu Apr 22 2021 21:43:46 GMT+0800 (Italia Time)",
    description:
      "Tender and lean Taiwanese sausages sliced and topped on melted cheddar and mozzarella cheese. It tastes slightly better than any other meat! It is also ever so slightly spicy to get your taste buds tingling.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Ftaiwan-sausage-pepperoni-pizza.jpg?alt=media&token=0de81c33-c729-446a-9470-f532f3297f86",
  },
  {
    id: "IVXyZp9GRWdcCyQlMXS8",
    createdAt: "Thu Apr 22 2021 21:43:43 GMT+0800 (Italia Time)",
    name: "Tomato Pizza",
    description:
      "If you are a tomato lover, this pizza is for you! Our tomatoes are fresh imports from China. Tomatoes are crushed bits and preserved well, making it the freshest tomato pizza you'll ever tasted!",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fchopped-tomato-pizza.jpg?alt=media&token=f1d62d39-ffa2-4831-be04-7acfd787a645",
    price: "13.99",
  },
  {
    id: "REqhK0LmBLArYjZUBlvm",
    name: "Ultimate Cheese",
    description:
      "The Ultimate Cheese pizza is a combination of buffalo mozzarella, parmesan, cheddar, goat cheese, provolone, gorgonzola and Pecorino-Romano cheese. You name it all, we have it all on one piece of crispy crusted bread.",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fultimate-cheese.jpg?alt=media&token=afba1c70-f654-42de-9358-0402c42c641c",
    createdAt: "Thu Apr 22 2021 21:43:41 GMT+0800 (Italia Time)",
    price: "18.99",
  },
  {
    id: "SFT0jxLVR9wGc57lQmgl",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fvariety-pizza.jpg?alt=media&token=20b241cb-ffbf-433e-b8ec-f2865d3ce15b",
    name: "Variety Pizza",
    price: "20.99",
    createdAt: "Thu Apr 22 2021 21:43:47 GMT+0800 (Italia Time)",
    description:
      "The juiciness of this pizza will blow your mind with its tasty and flavorful ingredients! It contains more than five ingredients, combined into one piece of bread. Yes, more than five ingredients!",
  },
  {
    id: "TKkp8oiUAktqCpzmo2sh",
    price: "15.99",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fvegetarian-pizza.jpg?alt=media&token=c6ec344e-c211-4194-baf5-79d55a086a50",
    description:
      "This vegetarian pizza recipe will delight vegetarians and carnivores alike. It's fresh and full of flavor, featuring red chili peppers, artichoke, bell peppers, olives, red onion and some hidden baby spinach. You'll find a base of rich tomato sauce and golden, bubbling mozzarella underneath, of course.",
    createdAt: "Thu Apr 22 2021 21:43:48 GMT+0800 (Italia Time)",
    name: "Veggie Mania",
  },
  {
    id: "VkzR5eEl7PxALqAwxDTR",
    price: "25.99",
    createdAt: "Thu Apr 22 2021 21:43:44 GMT+0800 (Italia Time)",
    name: "Meat Paradise",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fchicken-%26-beef-pepperoni-pizza.jpg?alt=media&token=5e8d8398-ef4a-4cc9-9f8d-4e6e8832fdfb",
    description:
      'Carnivores, get ready to "meat" your match! Enjoy the combinations of variety of meat, loaded with beef pepperoni, beef sausages, ground beef and chicken potpourri sausages. ',
  },
  {
    id: "ahtYvTrhsKZ2TJExhdcf",
    description:
      "Doughy and fluffy bread topped with a mozzarella, parmesan and cheddar cheese. And finally topped with our freshest basil leaves. Looks normal, but it contains secret sauce!",
    createdAt: "Thu Apr 22 2021 21:43:49 GMT+0800 (Italia Time)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fsignature-pizza.jpg?alt=media&token=1b0a709b-cdd1-48c5-a13e-14c7c7987640",
    price: "15.99",
    name: "The Original",
  },
  {
    id: "k5fNwYwgH0enoYX7ZEl2",
    name: "Aroma Pizza",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Faroma-pizza.jpg?alt=media&token=c3776b14-bc3d-4004-9302-65b6f185e978",
    createdAt: "Thu Apr 22 2021 21:43:50 GMT+0800 (Italia Time)",
    price: "20.99",
    description:
      "With the combinations of meat and veggies, you could sense the aromatic smell of this pizza from a mile away. Take a bite as the huge chunks of meat and mozzarella melts together in your mouth!",
  },
  {
    id: "nI1y4nYMfYRKODg6efr4",
    price: "5.90",
    description:
      "In 1902, a Catalan cork manufacturer named Arturo Mundet came to Mexico and created an apple flavored soft drink called Sidral Mundet. The soda was inspired by Mexico’s traditional “aguas frescas” drinks.",
    createdAt: "Thu Apr 22 2021 21:43:53 GMT+0800 (Italia Time)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fsidral-mundet.jpg?alt=media&token=5550fe8b-0c90-4416-b957-daab76a58692",
    name: "Sidral Mundet 350ML",
  },
  {
    id: "obotEVsVZCowdYCgd4I5",
    description:
      "Coca-Cola Zero Sugar is a new and improved sugar free cola that looks and tastes even more like Coca-Cola Classic, but without the sugar.",
    createdAt: "Thu Apr 22 2021 21:43:52 GMT+0800 (Italia Time)",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fcoke-zero.jpg?alt=media&token=2932f7a4-0831-4a38-b202-1fc35e1369ae",
    price: "3.90",
    name: "Coke Zero 350ML",
  },
  {
    id: "xdGb3F9WJr9pUX2WAidl",
    description:
      "This ooey gooey Chicken Pepperoni is made with chicken breasts coated with an Italian blend of seasonings and parmesan cheese. It's topped with pepperoni slices and a generous drizzle of pizza sauce then a heaping helping of mozzarella cheese seals the deal.",
    name: "Chicken Pepperoni",
    image:
      "https://firebasestorage.googleapis.com/v0/b/palette-store.appspot.com/o/images%2Fchicken-pepperoni-pizza.jpg?alt=media&token=18f7eee2-05e5-42db-9756-fb5636172912",
    createdAt: "Thu Apr 22 2021 21:43:45 GMT+0800 (Italia Time)",
    price: "18.99",
  },
];

export default data;
