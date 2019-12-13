var allLocations = [
    {
      name: "Allatoona Battlefield",
      lat: 34.1134889,
      lng: -84.7169586,
      address: "Old Allatoona Rd SE",
      city: "Cartersville",
      state: "GA",
      zip: "30121",
      phone: "(770) 975-0055",
    },
    {
      name: "Allatoona Lake",
      lat: 34.1330018,
      lng: -84.7734182,
      address: "303 McKaskey Creek Rd SE",
      city: "Cartersville",
      state: "GA",
      zip: "30121",
      phone: "(000) 000-0000",
    },
    {
      name: "Barnsley Gardens",
      lat: 34.2974287,
      lng: -84.9882803,
      address: "597 Barnsley Gardens Rd",
      city: "Adairsville",
      state: "GA",
      zip: "30103",
      phone: "(770) 773-7480",
    },
    {
      name: "Turner Field Naval Hospital",
      lat: 31.608120,
      lng: -84.103000,
      address: "1939 McAdams Rd",
      city: "Albany",
      state: "GA",
      zip: "31705",
      phone: "(000) 000-0000",
    },
    {
      name: "1913 Hospital",
      lat: 32.059690,
      lng: -84.229340,
      address: "130 W Dodson St",
      city: "Americus",
      state: "GA",
      zip: "31709",
      phone: "(000) 000-0000",
    },
    {
      name: "Best Western Plus Windsor Hotel",
      lat: 32.072370,
      lng: -84.233510,
      address: "125 W Lamar St",
      city: "Americus",
      state: "GA",
      zip: "31709",
      phone: "(229) 924-1555",
    },
    {
      name: "Andersonville National Historic Site",
      lat: 32.197870,
      lng: -84.127490,
      address: "760 POW Rd",
      city: "Andersonville",
      state: "GA",
      zip: "31711",
      phone: "(229) 924-0343",
    },
    {
      name: "Jackson Street Cemetery",
      lat: 33.954438,
      lng: -83.372167,
      address: "350 S. Jackson St",
      city: "Athens",
      state: "GA",
      zip: "30602",
      phone: "(000) 000-0000",
    },
    {
      name: "The Masquerade",
      lat: 33.751678,
      lng: -84.389785,
      address: "50 Lower Alabama Street",
      city: "Atlanta",
      state: "GA",
      zip: "30303",
      phone: "(404) 577-8178",
    },
    {
      name: "Oakland Cemetery",
      lat: 33.748020,
      lng: -84.372070,
      address: "248 Oakland Ave SE",
      city: "Atlanta",
      state: "GA",
      zip: "30312",
      phone: "(404) 688-2107",
    },
    {
      name: "Shakespeare Tavern Playhouse",
      lat: 33.768180,
      lng: -84.384920,
      address: "499 Peachtree St NE",
      city: "Atlanta",
      state: "GA",
      zip: "30308",
      phone: "(404) 874-5299",
    },
    {
      name: "Augusta University - Summerville Campus",
      lat: 33.475910,
      lng: -82.023262,
      address: "2500 Walton Way",
      city: "Augusta",
      state: "GA",
      zip: "30904",
      phone: "(706) 721-0211",
    },
    {
      name: "The Partridge Inn Augusta",
      lat: 33.475080,
      lng: -82.010110,
      address: "2110 Walton Way",
      city: "Augusta",
      state: "GA",
      zip: "30904",
      phone: "(706) 737-8888",
    },
    {
      name: "Pendleton King Park",
      lat: 33.460380,
      lng: -82.012470,
      address: "1600 Troupe St",
      city: "Augusta",
      state: "GA",
      zip: "30904",
      phone: "(706) 564-7462",
    },
    {
      name: "Tilley Bend Church",
      lat: 34.799160,
      lng: -84.245330,
      address: "6216 Old Dial Rd",
      city: "Morganton",
      state: "GA",
      zip: "30560",
      phone: "(706) 374-1587",
    },
    {
      name: "Braselton Town Hall",
      lat: 34.107067,
      lng: -83.762132,
      address: "4982 GA-53",
      city: "Braselton",
      state: "GA",
      zip: "30517",
      phone: "(706) 654-3915",
    },
    {
      name: "Chickamauga Battlefield",
      lat: 34.939880,
      lng: -85.258812,
      address: "3370 Lafayette Rd",
      city: "Fort Oglethorpe",
      state: "GA",
      zip: "30742",
      phone: "(706) 866-1159",
    },
    {
      name: "Springer Opera House",
      lat: 32.465018,
      lng: -84.991367,
      address: "103 E 10th St",
      city: "Columbus",
      state: "GA",
      zip: "31901",
      phone: "(706) 327-3688",
    },
    {
      name: "Holly Theatre",
      lat: 34.531590,
      lng: -83.985930,
      address: "69 W Main St",
      city: "Dahlonega",
      state: "GA",
      zip: "30533",
      phone: "(706) 530-5162",
    },
    {
      name: "Amicalola Falls State Park & Lodge",
      lat: 34.565289,
      lng: -84.242540,
      address: "418 Amicalola Falls State Park Rd",
      city: "Dawsonville",
      state: "GA",
      zip: "30534",
      phone: "(706) 344-1500",
    },
    {
      name: "Piedmont College",
      lat: 34.565902,
      lng: -83.542595,
      address: "1021 Central Ave",
      city: "Demorest",
      state: "GA",
      zip: "30535",
      phone: "(706) 778-3000",
    },
    {
      name: "Holliday-Dorsey-Fife Museum",
      lat: 33.448424,
      lng: -84.455891,
      address: "140 Floy Farr Pkwy",
      city: "Fayetteville",
      state: "GA",
      zip: "30214",
      phone: "(770) 716-5332",
    },
    {
      name: "Jekyll Island Club Resort",
      lat: 31.0595354,
      lng: -81.4241634,
      address: "371 S Riverview Dr",
      city: "Jekyll Island",
      state: "GA",
      zip: "31527",
      phone: "(888) 445-3179",
    },
    {
      name: "The Warren House",
      lat: 33.533673,
      lng: -84.3554562,
      address: "102 W Mimosa Dr",
      city: "Jonesboro",
      state: "GA",
      zip: "30236",
      phone: "(678) 685-1821",
    },
    {
      name: "Kennesaw Mountain National Battlefield Park",
      lat: 33.9830771,
      lng: -84.580117,
      address: "900 Kennesaw Mountain Dr",
      city: "Kennesaw",
      state: "GA",
      zip: "30152",
      phone: "(770) 427-4686",
    },
    
];
