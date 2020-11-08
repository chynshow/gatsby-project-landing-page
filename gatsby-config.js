module.exports = {
  siteMetadata: {
    title: "Landing page",
    description: "some random data",
    // Alias
    menu: {
      pizza: [
        {
          name: "Margherita",
          description:
            "sos z włoskich pomidorów, ser mozzarella, ser pecorino romano, świeża bazylia, oliwa extra vergine",
        },
        {
          name: "Salamino",
          description:
            "sos z włoskich pomidorów, ser mozzarella, salami napoli, czerwona cebula",
        },
        {
          name: "Cotto",
          description:
            "sos z włoskich pomidorów, ser mozzarella, szynka gotowana cotto",
        },
        {
          name: "Pancetta",
          description:
            "sos z włoskich pomidorów, ser mozzarella, bekon pancetta, biała cebula, ser pecorino romano",
        },
        {
          name: "Piccante",
          description:
            "sos z włoskich pomidorów, ser mozzarella, salami spianata piccante, czarne oliwki, ser gorgonzola, pasta chilli",
        },
        {
          name: "Verdura",
          description:
            "sos z włoskich pomidorów,ser mozzarella, bakłażan, czarne oliwki, czerwona cebula, pasta czosnkowa, oliwa extra vergine",
        },
        {
          name: "Bianca",
          description:
            "oliwa extra vergine, ser mozzarella, ser mascarpone, ser gorgonzola, rukola",
        },
        {
          name: "Anchois",
          description:
            "sos z włoskich pomidorów, ser mozzarella, anchois, ser pecorino romano, rukola, pasta czosnkowa",
        },
        {
          name: "Parma",
          description:
            "sos z włoskich pomidorów, ser mozzarella, prosciutto crudo di parma, pomidory cherry, ser pecorino romano, rukola, oliwa extra vergine",
        },
        {
          name: "Gamberetto",
          description:
            "oliwa extra vergine, ser mozzarella, ser mascarpone, krewetki tygrysie, ser pecorino romano, rukola, pasta czosnkowa",
        },
      ],
      gnocchi: [
        {
          name: "Pomodoro",
          description:
            "włoskie kluseczki gnocchi, sos z włoskich pomidorów, ser mozzarella, ser pecorino romano, rukola",
        },
        {
          name: "Parma",
          description:
            "włoskie kluseczki gnocchi, prosciutto crudo di parma, cebula biała, słodka śmietanka, kapary, ser pecorino romano, rukola",
        },
        {
          name: "Cacio e pepe",
          description:
            "włoskie kluseczki gnocchi, masło, świeżo mielony pieprz, ser pecorino romano",
        },
        {
          name: "Formaggio",
          description:
            "włoskie kluseczki gnocchi, ser mascarpone, ser gorgonzola, rukola, pistacje",
        },
        {
          name: "Gamberetto",
          description:
            "włoskie kluseczki gnocchi, krewetki tygrysie, wino białe, masło, pasta czosnkowa, ser pecorino romano, pomidory cherry, rukola",
        },
        {
          name: "Piccante",
          description:
            "włoskie kluseczki gnocchi, sos z włoskich pomidorów, salami spianata piccante, bekon pancetta, cebula czerwona, pasta czosnkowa, pasta chilli, ser pecorino romano",
        },
      ],
      insalata: [
        {
          name: "Mozzarella",
          description:
            "mix sałat, pomidory cherry, ser mozzarella, czarne oliwki, ser pecorino romano , dressing musztardowo-miodowy",
        },
        {
          name: "Pollo",
          description:
            "mix sałat, pomidory cherry, czerwona cebula, kurczak wędzony, bekon pancetta, ser pecorino romano, dressing anchois",
        },
        {
          name: "Parma",
          description:
            "mix sałat, pomidory cherry, prosciutto crudo di parma, ser pecorino romano, dressing miodowo-musztardowy",
        },
      ],
      antipasto: [
        {
          name: "Talerz dobroci z włoch",
          description: "wędliny, sery prosto z włoch",
        },
        {
          name: "Focaccia",
          description: "płaski chlebek z rozmarynem oraz oliwa extra vergine",
        },
        {
          name: "Panini",
          description: "świeżo wypiekane bułeczki",
        },
      ],
      dodatki: [
        "sos anchois",
        "sos z włoskich pomidorów",
        "sos czosnkowy z pieczonego czosnku",
        "oliwa extra vergine",
      ],
    },
    workHours: "10:00 - 22:00",
    phoneNum: "+48 555 555 555",
    location: {
      text: "Złotniki, plac Grzybowy 18",
      url:
        "https://www.google.com/maps/place/plac+Grzybowy+18,+62-002+Z%C5%82otniki/@52.4797716,16.8559261,15z/data=!4m5!3m4!1s0x470443b601dabfbf:0xe463a8c955227328!8m2!3d52.4797716!4d16.8559261",
    },
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-sass",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
  ],
}
