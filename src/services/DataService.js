export const DataService = {
  getData() {
    return [
      {
        id: "0",
        label: "PFE Project",

        desc: "This is a web-based cash tracking application built with Angular and Spring Boot. It allows users to track cash, journals, advances, and view direct purchases, advances, and refunds. The project was created for the Compagnie de Phosphates de Gafsa as part of a final year project.",
        imgPath: require("../assets/projectsImg/PFE/cpg-logo.jpg"),
        img: [
          require("../assets/projectsImg/PFE/screan1.jpg"),
          require("../assets/projectsImg/PFE/screan2.jpg"),
          require("../assets/projectsImg/PFE/screan3.jpg"),
          require("../assets/projectsImg/PFE/screan4.jpg"),
        ],
      },

      {
        id: "1",
        label: "Dropshipping",

        desc: "This is a dropshipping application for wall clocks, built with WordPress and WooCommerce. It allows users to import products from a supplier and sell them on their own store. The application includes features such as inventory management, order tracking, and payment processing, making it a great choice for entrepreneurs looking to start a dropshipping business.",
        imgPath: require("../assets/projectsImg/dropshipping.jpg"),
        img: [require("../assets/projectsImg/dropshipping.jpg")],
      },

      {
        id: "2",
        label: "The world of Parfumes",

        desc: "This is a perfume sales application developed with React and Spring Boot. It is customized based on customer characteristics provided in a 9-question form and orders are suggested and placed by an experienced salesperson. The application also includes advanced features for inventory and order management.",
        imgPath: require("../assets/projectsImg/parfums/1.jpg"),
        img: [require("../assets/projectsImg/parfums/1.jpg")],
      },
      {
        id: "3",
        label: "Portfolio",

        desc: "This is a portfolio application developed using React. It allows users to create a customized portfolio to showcase their skills and projects. Users can upload images and videos to showcase their work, as well as provide detailed descriptions for each project. The application also includes filtering functionality to make it easy for visitors to find projects based on specific skills or technologies.",
        imgPath: require("../assets/projectsImg/portfolio/1.png"),
        img: [require("../assets/projectsImg/portfolio/1.png")],
      },

      {
        id: "4",
        label: "Media AI",

        desc: "This is a PHP script purchased from Envato Market that serves as an AI assistant. It consumes the OpenAI API to generate documents or images based on descriptions provided by the user. The script is hosted on a VPS server and linked to a domain name, allowing users to easily access its advanced functionality.",
        imgPath: require("../assets/projectsImg/mediaai/1.png"),
        img: [
          require("../assets/projectsImg/mediaai/11.png"),

          require("../assets/projectsImg/mediaai/2.png"),
          require("../assets/projectsImg/mediaai/3.png"),
          require("../assets/projectsImg/mediaai/4.png"),
          require("../assets/projectsImg/mediaai/5.png"),
        ],
      },

      {
        id: "5",
        label: "E-commerce Application",

        desc: "This is an e-commerce web application currently under development. It includes a user interface for buyers as well as a dashboard for online store owners. The user interface is designed to offer a user-friendly and intuitive shopping experience, with advanced features such as product search, category-based product selection, shopping cart management, and secure online payment processing. The dashboard is intended for online store owners and offers features for managing orders, products, customers, and promotions. This e-commerce application is designed to be scalable and customizable to meet the needs of different types of businesses and industries.",
        imgPath: require("../assets/projectsImg/ecommerce/1.jpg"),
        img: [require("../assets/projectsImg/ecommerce/1.jpg")],
      },
    ];
  },

  getDatas() {
    return Promise.resolve(this.getData());
  },
};
