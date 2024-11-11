import img01 from "../all-images/cars-img/1.png";
import img02 from "../all-images/cars-img/2.png";
import img03 from "../all-images/cars-img/3.png";
import img04 from "../all-images/cars-img/4.png";
import img05 from "../all-images/cars-img/5.png";
import img06 from "../all-images/cars-img/6.png";
import img07 from "../all-images/cars-img/7.png";
import img08 from "../all-images/cars-img/8.png";
import img09 from "../all-images/cars-img/9.png";
import img10 from "../all-images/cars-img/10.png";
import img11 from "../all-images/cars-img/11.png";
import img12 from "../all-images/cars-img/12.png";
import img13 from "../all-images/cars-img/13.png";
import img14 from "../all-images/cars-img/14.png";
import img15 from "../all-images/cars-img/15.png";
import img16 from "../all-images/cars-img/16.png";
import img17 from "../all-images/cars-img/17.png";
import img18 from "../all-images/cars-img/18.png";
import img19 from "../all-images/cars-img/19.png";
import img20 from "../all-images/cars-img/20.png";
import img21 from "../all-images/cars-img/21.png";
import img22 from "../all-images/cars-img/22.png";
import img23 from "../all-images/cars-img/23.png";
import img24 from "../all-images/cars-img/24.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 4.5,
    carName: "Tesla Model 3 Rear Drive 2023",
    imgUrl: img01,
    model: "264 HP",
    price: "31,700",
    speed: "60.00 kWh/606 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Tesla Model 3 Rear-Wheel Drive 2023 is designed for efficiency and performance. It features advanced technology and safety features, making it a popular choice for eco-conscious drivers. With heated seats and GPS navigation, it provides a comfortable driving experience.",
  },
  {
    id: 2,
    brand: "Tesla",
    rating: 4.2,
    carName: "Tesla Model 3 2023 Long Range AWD Ver",
    imgUrl: img02,
    model: "491 HP",
    price: "36,900",
    speed: "75.0 kWh/713 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Tesla Model 3 2023 Long Range AWD offers a remarkable balance of range and performance. It features all-wheel drive, GPS navigation, and a cozy interior with heated seats, making it ideal for both city driving and long-distance travel.",
  },
  {
    id: 3,
    brand: "Tesla",
    rating: 4.6,
    carName: "Tesla Model Y 2023 Rear Wheel Drive version",
    imgUrl: img03,
    model: "264 HP",
    price: "35,689",
    speed: "82.1 kWh/554 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Tesla Model Y 2023 Rear Wheel Drive combines luxury and performance with an all-electric powertrain. It features advanced technology, heated seats, and GPS navigation, providing a comfortable and efficient driving experience for eco-conscious drivers.",
  },
  {
    id: 4,
    brand: "Tesla",
    rating: 4.1,
    carName: "Tesla Model Y 2023 Long Range AWD Version",
    imgUrl: img04,
    model: "347 HP",
    price: "41,422",
    speed: "82.1 kWh/713 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Tesla Model Y 2023 Long Range AWD is an all-electric vehicle that emphasizes performance and efficiency. With features like heated seats and GPS navigation, it provides a comfortable and enjoyable driving experience, perfect for both city and long-distance travel.",
  },
  {
    id: 5,
    brand: "VW",
    rating: 4.0,
    carName: "VW ID3 Active Pure",
    imgUrl: img05,
    model: "148 HP",
    price: "17,100",
    speed: "45 kWh/450 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The VW ID3 Active Pure is an electric hatchback designed for versatility and comfort. With features like heated seats and GPS navigation, it provides an enjoyable driving experience, making it suitable for both city commutes and longer journeys.",
  },
  {
    id: 6,
    brand: "VW",
    rating: 4.5,
    carName: "VW ID3 Extreme Intelligent",
    imgUrl: img06,
    model: "148 HP",
    price: "17,115",
    speed: "45 kWh/450 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The VW ID3 Extreme Intelligent is a luxury electric hatchback that combines performance with cutting-edge technology. It features heated seats and GPS navigation for a comfortable and connected driving experience, making it perfect for families and long journeys.",
  },
  {
    id: 7,
    brand: "VW",
    rating: 4.2,
    carName: "VW ID4 2024 Pure + Version",
    imgUrl: img07,
    model: "282 HP",
    price: "19,310",
    speed: "52 kWh/512 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The VW ID4 2024 Pure + Version offers a blend of practicality and advanced technology in an all-electric SUV. It includes heated seats and GPS navigation, ensuring a comfortable and efficient driving experience for all journeys.",
  },
  {
    id: 8,
    brand: "Toyota",
    rating: 3.5,
    carName: "Toyota Camry Hybrid 2024 Model 2.0HE Elite Version",
    imgUrl: img08,
    model: "152 HP",
    price: "27,500",
    speed: "50 kWh/100 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Toyota Camry Hybrid 2024 Model 2.0HE Elite Version combines efficiency with elegance. Equipped with heated seats and GPS navigation, it provides a smooth, comfortable, and fuel-efficient driving experience, ideal for both city commuting and longer journeys.",
  },
  {
    id: 9,
    brand: "Toyota",
    rating: 3.5,
    carName: "Toyota Camry Hybrid 2024 Model 2.0HGVP Luxury Version",
    imgUrl: img09,
    model: "152 HP",
    price: "29,040",
    speed: "50 kWh/100 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Toyota Camry Hybrid 2024 Model 2.0HGVP Luxury offers a premium driving experience, blending fuel efficiency with luxury. With heated seats and GPS navigation, it provides comfort and convenience, making it an excellent choice for both city and long-distance driving.",
  },
  {
    id: 10,
    brand: "Toyota",
    rating: 3.5,
    carName: "Toyota Camry Hybrid 2024 Model 2.0HG Premium Version",
    imgUrl: img10,
    model: "152 HP",
    price: "30,635",
    speed: "50 kWh/100 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Toyota Camry Hybrid 2024 Model 2.0HG Premium Version combines efficient hybrid technology with a premium design. With heated seats and GPS navigation, this car is ideal for drivers looking for both style and sustainability.",
  },
  {
    id: 11,
    brand: "Toyota",
    rating: 3.5,
    carName: "Toyota Camry Hybrid 2024 Model 2.0HS Sports Version",
    imgUrl: img11,
    model: "152 HP",
    price: "31,460",
    speed: "50 kWh/100 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Toyota Camry Hybrid 2024 Model 2.0HS Sports Version offers a sportier take on hybrid efficiency. Featuring heated seats and GPS navigation, it delivers a dynamic and eco-friendly driving experience.",
  },
  {
    id: 12,
    brand: "Toyota",
    rating: 3.5,
    carName: "Toyota Camry Hybrid 2024 Model 2.0HXS Extreme Sports Version",
    imgUrl: img12,
    model: "152 HP",
    price: "32,650",
    speed: "50 kWh/100 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Toyota Camry Hybrid 2024 Model 2.0HXS Extreme Sports Version is designed for drivers seeking an adventurous and efficient ride. Equipped with heated seats and GPS navigation, it brings a spirited drive while remaining eco-friendly.",
  },

  {
    id: 13,
    brand: "Honda",
    rating: 4.0,
    carName: "Honda Accord Hybrid 2024 Standard Version",
    imgUrl: img13,
    model: "204 HP",
    price: "28,500",
    speed: "48 kWh/100 km",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Hybrid",
    description:
      "The Honda Accord Hybrid 2024 Standard Version combines sleek design with hybrid efficiency. With GPS navigation and comfortable leather seats, this car offers a smooth and eco-friendly ride, ideal for everyday use.",
  },
  {
    id: 14,
    brand: "Honda",
    rating: 4.3,
    carName: "Honda Accord Hybrid 2024 Premium Version",
    imgUrl: img14,
    model: "204 HP",
    price: "30,800",
    speed: "48 kWh/100 km",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Hybrid",
    description:
      "The Honda Accord Hybrid 2024 Premium Version brings luxury and efficiency together. With advanced GPS navigation and leather seats, it offers a premium experience for drivers focused on sustainability and style.",
  },
  {
    id: 15,
    brand: "Ford",
    rating: 4.5,
    carName: "Ford Mustang Mach-E 2024 Standard Range",
    imgUrl: img15,
    model: "266 HP",
    price: "42,000",
    speed: "68 kWh/440 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Ford Mustang Mach-E 2024 Standard Range is an all-electric SUV that combines Mustang's performance legacy with electric efficiency. It features heated seats and GPS navigation, making it a powerful yet eco-friendly choice.",
  },
  {
    id: 16,
    brand: "Ford",
    rating: 4.7,
    carName: "Ford Mustang Mach-E 2024 Extended Range",
    imgUrl: img16,
    model: "346 HP",
    price: "47,000",
    speed: "88 kWh/610 km",
    gps: "GPS Navigation",
    seatType: "Heated and ventilated seats",
    automatic: "Electric",
    description:
      "The Ford Mustang Mach-E 2024 Extended Range offers an impressive electric range with high performance. With heated and ventilated seats and advanced GPS, it’s perfect for long journeys and eco-conscious drivers seeking power and comfort.",
  },
  {
    id: 17,
    brand: "BMW",
    rating: 4.6,
    carName: "BMW i4 eDrive40 2024",
    imgUrl: img17,
    model: "335 HP",
    price: "55,400",
    speed: "81 kWh/482 km",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Electric",
    description:
      "The BMW i4 eDrive40 2024 is a luxury electric sedan that combines performance with elegance. With leather seats and GPS navigation, it provides a high-end driving experience with an emphasis on sustainability.",
  },
  {
    id: 18,
    brand: "BMW",
    rating: 4.7,
    carName: "BMW iX xDrive50 2024",
    imgUrl: img18,
    model: "516 HP",
    price: "83,200",
    speed: "111.5 kWh/521 km",
    gps: "GPS Navigation",
    seatType: "Heated and ventilated seats",
    automatic: "Electric",
    description:
      "The BMW iX xDrive50 2024 is an all-electric SUV that offers luxury and impressive range. With heated and ventilated seats, as well as GPS navigation, this vehicle provides a high-performance and eco-friendly drive.",
  },
  {
    id: 19,
    brand: "Audi",
    rating: 4.6,
    carName: "Audi Q4 e-tron 2024",
    imgUrl: img19,
    model: "295 HP",
    price: "49,800",
    speed: "82 kWh/480 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Audi Q4 e-tron 2024 combines luxury with electric efficiency. Featuring heated seats and GPS navigation, this compact SUV offers an eco-friendly drive without compromising on comfort and style.",
  },
  {
    id: 20,
    brand: "Audi",
    rating: 4.8,
    carName: "Audi e-tron GT 2024",
    imgUrl: img20,
    model: "469 HP",
    price: "99,900",
    speed: "93.4 kWh/383 km",
    gps: "GPS Navigation",
    seatType: "Leather seats",
    automatic: "Electric",
    description:
      "The Audi e-tron GT 2024 is a high-performance electric sedan that combines luxury with impressive power. With leather seats and advanced GPS navigation, this car is ideal for drivers seeking a thrilling yet sustainable ride.",
  },
  {
    id: 21,
    brand: "Nissan",
    rating: 4.3,
    carName: "Nissan Leaf 2024",
    imgUrl: img21,
    model: "147 HP",
    price: "28,000",
    speed: "40 kWh/240 km",
    gps: "GPS Navigation",
    seatType: "Cloth seats",
    automatic: "Electric",
    description:
      "The Nissan Leaf 2024 is an affordable electric vehicle with efficient performance. With cloth seats and GPS navigation, it’s a practical choice for environmentally conscious drivers looking for daily commute solutions.",
  },
  {
    id: 22,
    brand: "Nissan",
    rating: 4.5,
    carName: "Nissan Ariya 2024",
    imgUrl: img22,
    model: "238 HP",
    price: "45,000",
    speed: "87 kWh/500 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Nissan Ariya 2024 is a stylish electric SUV with a spacious interior. It includes heated seats and GPS navigation, making it a comfortable choice for long trips as well as daily commutes.",
  },
  {
    id: 23,
    brand: "Hyundai",
    rating: 4.4,
    carName: "Hyundai Kona Electric 2024",
    imgUrl: img23,
    model: "201 HP",
    price: "37,400",
    speed: "64 kWh/415 km",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Electric",
    description:
      "The Hyundai Kona Electric 2024 offers a compact SUV experience with excellent range and features. With heated seats and GPS navigation, it’s ideal for those seeking an eco-friendly and versatile vehicle.",
  },
  {
    id: 24,
    brand: "Hyundai",
    rating: 4.6,
    carName: "Hyundai Ioniq 5 2024",
    imgUrl: img24,
    model: "225 HP",
    price: "43,500",
    speed: "77.4 kWh/490 km",
    gps: "GPS Navigation",
    seatType: "Heated and ventilated seats",
    automatic: "Electric",
    description:
      "The Hyundai Ioniq 5 2024 combines innovative design with efficient electric performance. It features heated and ventilated seats and GPS navigation, making it a comfortable and stylish choice for modern drivers.",
  },
];

export default carData;

