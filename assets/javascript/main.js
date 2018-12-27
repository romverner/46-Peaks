// Setting global variables
var peaks = {
    0: {
        name: 'Mount Marcy',
        height: 5344,
        rank: 1,
        coordinates: [44.112734, -73.923726],
        url: "https://en.wikipedia.org/wiki/Mount_Marcy_(New_York)"
    },
    1: {
        name: 'Algonquin Peak',
        height: 5114,
        rank: 2,
        coordinates: [44.143611, -73.986667],
        url: "https://en.wikipedia.org/wiki/Algonquin_Peak"
    },
    2: {
        name: 'Mount Haystack',
        height: 4960,
        rank: 3,
        coordinates: [44.105556, -73.900556],
        url: "https://en.wikipedia.org/wiki/Mount_Haystack"
    },
    3: {
        name: 'Mount Skylight',
        height: 4920,
        rank: 4,
        coordinates: [44.099444, -73.930833],
        url: "https://en.wikipedia.org/wiki/Mount_Skylight"
    },
    4: {
        name: 'Whiteface Mountain',
        height: 4867,
        rank: 5,
        coordinates: [44.365833, -73.902778],
        url: "https://en.wikipedia.org/wiki/Whiteface_Mountain"
    },
    5: {
        name: 'Dix Mountain',
        height: 4857,
        rank: 6,
        coordinates: [44.082222, -73.786389],
        url: "https://en.wikipedia.org/wiki/Dix_Mountain"
    },
    6: {
        name: 'Gray Peak',
        height: 4840,
        rank: 7,
        coordinates: [44.111443, -73.934866],
        url: "https://en.wikipedia.org/wiki/Gray_Peak_(New_York)"
    },
    7: {
        name: 'Iroquois Peak',
        height: 4840,
        rank: 8,
        coordinates: [44.136997, -73.998203],
        url: "https://en.wikipedia.org/wiki/Iroquois_Peak"
    },
    8: {
        name: 'Basin Mountain',
        height: 4827,
        rank: 9,
        coordinates: [44.121164, -73.886253],
        url: "https://en.wikipedia.org/wiki/Basin_Mountain_(New_York)"
    },
    9: {
        name: 'Gothics',
        height: 4736,
        rank: 10,
        coordinates: [44.128108, -73.857085],
        url: "https://en.wikipedia.org/wiki/Gothics"
    },
    10: {
        name: 'Mount Colden',
        height: 4714,
        rank: 11,
        coordinates: [44.126998, -73.959867],
        url: "https://en.wikipedia.org/wiki/Mount_Colden"
    },
    11: {
        name: 'Giant Mountain',
        height: 4627,
        rank: 12,
        coordinates: [44.161143, -73.720209],
        url: "https://en.wikipedia.org/wiki/Giant_Mountain"
    },
    12: {
        name: 'Nippletop',
        height: 4620,
        rank: 13,
        coordinates: [44.089167, -73.816333],
        url: "https://en.wikipedia.org/wiki/Nippletop"
    },
    13: {
        name: 'Santanoni Peak',
        height: 4607,
        rank: 14,
        coordinates: [44.0825, -74.131167],
        url: "https://en.wikipedia.org/wiki/Santanoni_Peak"
    },
    14: {
        name: 'Mount Redfield',
        height: 4606,
        rank: 15,
        coordinates: [44.094777, -73.949866],
        url: "https://en.wikipedia.org/wiki/Mount_Redfield"
    },
    15: {
        name: 'Wright Peak',
        height: 4580,
        rank: 16,
        coordinates: [44.151667, -73.980278],
        url: "https://en.wikipedia.org/wiki/Wright_Peak"
    },
    16: {
        name: 'Saddleback Mountain',
        height: 4515,
        rank: 17,
        coordinates: [44.126667, -73.875167],
        url: "https://en.wikipedia.org/wiki/Saddleback_Mountain_(Keene,_New_York)"
    },
    17: {
        name: 'Panther Peak',
        height: 4442,
        rank: 18,
        coordinates: [44.098392, -74.132097],
        url: "https://en.wikipedia.org/wiki/Panther_Peak"
    },
    18: {
        name: 'Table Top Mountain',
        height: 4427,
        rank: 19,
        coordinates: [44.140667, -73.916333],
        url: "https://en.wikipedia.org/wiki/Table_Top_Mountain_(New_York)"
    },
    19: {
        name: 'Rocky Peak Ridge',
        height: 4420,
        rank: 20,
        coordinates: [44.154444, -73.705556],
        url: "https://en.wikipedia.org/wiki/Rocky_Peak_Ridge"
    },
    20: {
        name: 'Macomb Mountain',
        height: 4405,
        rank: 21,
        coordinates: [44.051721, -73.780135],
        url: "https://en.wikipedia.org/wiki/Macomb_Mountain"
    },
    21: {
        name: 'Armstrong Mountain',
        height: 4400,
        rank: 22,
        coordinates: [44.134774, -73.849029],
        url: "https://en.wikipedia.org/wiki/Armstrong_Mountain_(Keene_Valley,_New_York)"
    },
    22: {
        name: 'Hough Peak',
        height: 4400,
        rank: 23,
        coordinates: [44.069498, -73.777635],
        url: "https://en.wikipedia.org/wiki/Hough_Peak"
    },
    23: {
        name: 'Seward Mountain',
        height: 4361,
        rank: 24,
        coordinates: [44.159667, -74.199667],
        url: "https://en.wikipedia.org/wiki/Seward_Mountain_(New_York)"
    },
    24: {
        name: 'Mount Marshall',
        height: 4360,
        rank: 25,
        coordinates: [44.127554, -74.011814],
        url: "https://en.wikipedia.org/wiki/Mount_Marshall_(New_York)"
    },
    25: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    26: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    27: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    28: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    29: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    30: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    31: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    32: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    33: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    34: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    35: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    36: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    37: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    38: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    39: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    40: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    41: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    42: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    43: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    44: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    },
    45: {
        name: ,
        height: ,
        rank: ,
        coordinates: []
    }
};