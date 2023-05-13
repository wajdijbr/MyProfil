export const ProfilService = {
  getData() {
    return [
      {
        title: "Resume",
        FirstName: "JABEUR",
        LastName: "Wajdi",
        Adress: "Sahloul, Sousse 4051, Tunisia",
        behance: "https://www.behance.net/wajdijaber",
        Github: "https://github.com/wajdijbr",
        Email: "wajdi.wajdi@gmail.com",
        Phone: "+216 29 169 521",
        cv: "upload the cv file first",
        job: "Web developer",
        home: "I have the skills and expertise to build robust, dynamic web applications that meet the needs of clients and users alike.",

        parag1: "Hi, I'm JABEUR WAJDI,",
        parag2:
          "a freelance web developer with a passion for creating engaging, responsive, and user-friendly websites and web applications. I have honed my skills in various programming languages and frameworks such as HTML, CSS, JavaScript, Java and React. I specialize in collaborating with clients to deliver customized web solutions that meet their unique needs and achieve their business goals. As a freelancer, I offer flexible and affordable services, and I'm committed to delivering high-quality work that exceeds my clients' expectations. Let's bring your project to life!",
      },
    ];
  },

  getDatas() {
    return Promise.resolve(this.getData());
  },
};

// const Data = {
//   title: "Resume",
//   FristName: "JABEUR",
//   LastName: "Wajdi",
//   Adress: "Sahloul, Sousse 4051, Tunisia",
//   behance: "https://www.behance.net/wajdijaber",
//   Github: "https://github.com/wajdijbr",
//   Email: "wajdi.wajdi@gmail.com",
//   Phone: "+216 29 169 521",
//   cv: "upload the cv file first",
//   job: "Web developer",
//   home: "I have the skills and expertise to build robust, dynamic web applications that meet the needs of clients and users alike.",
//   about: {
//     parag_1: "Hi, I'm JABEUR WAJDI,",
//     parag_2:
//       "a freelance web developer with a passion for creating engaging, responsive, and user-friendly websites and web applications. I have honed my skills in various programming languages and frameworks such as HTML, CSS, JavaScript, Java and React. I specialize in collaborating with clients to deliver customized web solutions that meet their unique needs and achieve their business goals. As a freelancer, I offer flexible and affordable services, and I'm committed to delivering high-quality work that exceeds my clients' expectations. Let's bring your project to life!",
//   },
// };

// export default Data;
