$(function() {
  // Splice in transparent for the center circle
  Highcharts.getOptions().colors.splice(0, 0, "transparent");

  Highcharts.chart("sunburst", {
    chart: {
      height: "100%"
    },

    title: {
      text: "Nepal with its provinces and districts"
    },
    subtitle: {
      text: ""
    },

    series: [
      {
        padding: 32,
        type: "sunburst",
        data: data,
        allowDrillToNode: true,
        cursor: "pointer",
        dataLabels: {
          format: "{point.name}",
          filter: {
            property: "innerArcLength",
            operator: ">",
            value: 16
          },
          style: {
            color: "white",
            textShadow: null,
            textOutline: 0
          }
        },
        levels: [
          {
            level: 1,
            colorByPoint: true,
            levelIsConstant: false,
            dataLabels: {
              filter: {
                property: "outerArcLength",
                operator: ">",
                value: 64
              }
            }
          },
          {
            level: 2,

            colorByPoint: true,
            style: {
              color: "black",
              textShadow: null,
              textOutline: 0
            }
          },
          {
            level: 3,
            colorVariation: {
              key: "brightness",
              to: -0.5
            }
          },
          {
            level: 4,
            colorVariation: {
              key: "brightness",
              to: 0.5
            }
          }
        ]
      }
    ],
    tooltip: {
      headerFormat: "",
      pointFormat: ""
    }
  });
  var data = [
    {
      id: "0.0",
      parent: "",
      name: "Nepal"
    },
    {
      id: "1.1",
      parent: "0.0",
      name: "Province 1"
    },
    {
      id: "1.2",
      parent: "0.0",
      name: "Province 2"
    },
    {
      id: "1.3",
      parent: "0.0",
      name: "Province 3"
    },
    {
      id: "1.4",
      parent: "0.0",
      name: "Province 4"
    },
    {
      id: "1.5",
      parent: "0.0",
      name: "Province 5"
    },
    {
      id: "1.6",
      parent: "0.0",
      name: "Province 6"
    },
    {
      id: "1.7",
      parent: "0.0",
      name: "Province 7"
    },

    /* Africa */
    {
      id: "2.1",
      parent: "1.1",
      name: "Bhojpur"
    },

    {
      id: "2.2",
      parent: "1.1",
      name: "Dhankuta",
      value: 104957438
    },
    {
      id: "2.3",
      parent: "1.1",
      name: "Illam",
      value: 104957438
    },
    {
      id: "2.4",
      parent: "1.1",
      name: "Jhapa",
      value: 104957438
    },
    {
      id: "2.4",
      parent: "1.1",
      name: "Panchattar",
      value: 104957438
    },
    {
      id: "2.5",
      parent: "1.1",
      name: "Sankhuwasabha",
      value: 104957438
    },
    {
      id: "2.6",
      parent: "1.1",
      name: "Khotang",
      value: 104957438
    },
    {
      id: "2.7",
      parent: "1.1",
      name: "Morang",
      value: 104957438
    },
    {
      id: "2.8",
      parent: "1.1",
      name: "Okhaldhunga",
      value: 104957438
    },
    {
      id: "2.9",
      parent: "1.1",
      name: "Solukhumbu ",
      value: 104957438
    },
    {
      id: "2.10",
      parent: "1.1",
      name: "Sunsari ",
      value: 104957438
    },
    {
      id: "2.11",
      parent: "1.1",
      name: "Taplejung",
      value: 104957438
    },
    {
      id: "2.12",
      parent: "1.1",
      name: "Terhathum",
      value: 104957438
    },
    {
      id: "2.13",
      parent: "1.1",
      name: "Udayapur",
      value: 104957438
    },

    // ptovince 2

    {
      id: "2.1",
      parent: "1.2",
      name: "Saptari",
      value: 104957438
    },

    {
      id: "2.2",
      parent: "1.2",
      name: "Parsa",
      value: 104957438
    },

    {
      id: "2.3",
      parent: "1.2",
      name: "Sarlahi",
      value: 104957438
    },

    {
      id: "2.4",
      parent: "1.2",
      name: "Bara",
      value: 104957438
    },

    {
      id: "2.5",
      parent: "1.2",
      name: "Siraha",
      value: 104957438
    },
    {
      id: "2.6",
      parent: "1.2",
      name: "Dhanusha",
      value: 104957438
    },
    {
      id: "2.7",
      parent: "1.2",
      name: "Raurahat",
      value: 104957438
    },
    {
      id: "2.8",
      parent: "1.2",
      name: "Mahottari",
      value: 104957438
    },

    //province 3

    {
      id: "2.1",
      parent: "1.3",
      name: "Bhaktapur",
      value: 104957438
    },
    {
      id: "2.2",
      parent: "1.3",
      name: "Chitwan",
      value: 104957438
    },
    {
      id: "2.3",
      parent: "1.3",
      name: "Dhading",
      value: 104957438
    },
    {
      id: "2.4",
      parent: "1.3",
      name: "Dholakha",
      value: 104957438
    },
    {
      id: "2.5",
      parent: "1.3",
      name: "Kathmandu",
      value: 104957438
    },
    {
      id: "2.6",
      parent: "1.3",
      name: "Kavrepalanchok",
      value: 104957438
    },
    {
      id: "2.7",
      parent: "1.3",
      name: "Lalitpur",
      value: 104957438
    },
    {
      id: "2.8",
      parent: "1.3",
      name: "Makwanpur",
      value: 104957438
    },
    {
      id: "2.9",
      parent: "1.3",
      name: "Nuwakot",
      value: 104957438
    },
    {
      id: "2.10",
      parent: "1.3",
      name: "Ramechhap",
      value: 104957438
    },
    {
      id: "2.11",
      parent: "1.3",
      name: "Rasuwa",
      value: 104957438
    },
    {
      id: "2.12",
      parent: "1.3",
      name: "Sindhuli",
      value: 104957438
    },
    {
      id: "2.13",
      parent: "1.3",
      name: "Sindhupalchok",
      value: 104957438
    },

    //province 4

    {
      id: "2.1",
      parent: "1.4",
      name: "Baglung",
      value: 104957438
    },

    {
      id: "2.2",
      parent: "1.4",
      name: "Gorkha",
      value: 104957438
    },

    {
      id: "2.3",
      parent: "1.4",
      name: "Kaski",
      value: 104957438
    },

    {
      id: "2.4",
      parent: "1.4",
      name: "Lamjung",
      value: 104957438
    },

    {
      id: "2.5",
      parent: "1.4",
      name: "Manang",
      value: 104957438
    },

    {
      id: "2.6",
      parent: "1.4",
      name: "Mustang",
      value: 104957438
    },
    {
      id: "2.6",
      parent: "1.4",
      name: "Mustang",
      value: 104957438
    },
    {
      id: "2.6",
      parent: "1.4",
      name: "Myadi",
      value: 104957438
    },
    {
      id: "2.7",
      parent: "1.4",
      name: "Nawalpur",
      value: 104957438
    },
    {
      id: "2.8",
      parent: "1.4",
      name: "Parbat",
      value: 104957438
    },
    {
      id: "2.9",
      parent: "1.4",
      name: "Syangja",
      value: 104957438
    },
    {
      id: "2.10",
      parent: "1.4",
      name: "Taahun",
      value: 104957438
    },

    //province 5

    {
      id: "2.1",
      parent: "1.5",
      name: "Arghakhanchi",
      value: 104957438
    },

    {
      id: "2.2",
      parent: "1.5",
      name: "Banke",
      value: 104957438
    },

    {
      id: "2.3",
      parent: "1.5",
      name: "Bardiya",
      value: 104957438
    },

    {
      id: "2.4",
      parent: "1.5",
      name: "Dang",
      value: 104957438
    },

    {
      id: "2.5",
      parent: "1.5",
      name: "Eastern Rukum",
      value: 104957438
    },

    {
      id: "2.6",
      parent: "1.5",
      name: "Gulmi",
      value: 104957438
    },

    {
      id: "2.7",
      parent: "1.5",
      name: "Kapilvastu",
      value: 104957438
    },

    {
      id: "2.8",
      parent: "1.5",
      name: "Nawalparasi",
      value: 104957438
    },

    {
      id: "2.9",
      parent: "1.5",
      name: "Palpa",
      value: 104957438
    },

    {
      id: "2.10",
      parent: "1.5",
      name: "Nawalparasi",
      value: 104957438
    },

    {
      id: "2.1",
      parent: "1.5",
      name: "Pyuthan",
      value: 104957438
    },

    {
      id: "2.11",
      parent: "1.5",
      name: "Rolpa",
      value: 104957438
    },

    {
      id: "2.11",
      parent: "1.5",
      name: "Rupandehi",
      value: 104957438
    },

    //province 6

    {
      id: "2.1",
      parent: "1.6",
      name: "Dailekh",
      value: 104957438
    },

    {
      id: "2.2",
      parent: "1.6",
      name: "Dolpa",
      value: 104957438
    },

    {
      id: "2.3",
      parent: "1.6",
      name: "Humla",
      value: 104957438
    },

    {
      id: "2.4",
      parent: "1.6",
      name: "Jajarkot",
      value: 104957438
    },

    {
      id: "2.5",
      parent: "1.6",
      name: "Jumla",
      value: 104957438
    },

    {
      id: "2.6",
      parent: "1.6",
      name: "Kalikot",
      value: 104957438
    },

    {
      id: "2.7",
      parent: "1.6",
      name: "Mugu",
      value: 104957438
    },

    {
      id: "2.8",
      parent: "1.6",
      name: "Salyan",
      value: 104957438
    },

    {
      id: "2.9",
      parent: "1.6",
      name: "Surkhet",
      value: 104957438
    },

    {
      id: "2.10",
      parent: "1.6",
      name: "Western Rukum",
      value: 104957438
    },

    //Province 7

    {
      id: "2.1",
      parent: "1.7",
      name: "Achham ",
      value: 104957438
    },
    {
      id: "2.2",
      parent: "1.7",
      name: "Baitadi ",
      value: 104957438
    },
    {
      id: "2.3",
      parent: "1.7",
      name: "Bajhang",
      value: 104957438
    },
    {
      id: "2.4",
      parent: "1.7",
      name: "Bajura",
      value: 104957438
    },
    {
      id: "2.5",
      parent: "1.7",
      name: "Dadeldhura",
      value: 104957438
    },
    {
      id: "2.6",
      parent: "1.7",
      name: "Darchula",
      value: 104957438
    },
    {
      id: "2.7",
      parent: "1.7",
      name: "Doti",
      value: 104957438
    },

    {
      id: "2.8",
      parent: "1.7",
      name: "Kailali",
      value: 104957438
    },

    {
      id: "2.9",
      parent: "1.7",
      name: "Kanchanpur",
      value: 104957438
    }
  ];
});
