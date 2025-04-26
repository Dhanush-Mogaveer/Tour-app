import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/places/tajmahal.jpg";
import Img2 from "../../assets/places/water.jpg";
import Img3 from "../../assets/places/boat.jpg";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Top places to visit in India",
    description:
      "India, a land of diverse cultures and rich history, offers countless breathtaking destinations to explore. From the snow-capped Himalayas to the sun-kissed beaches of Goa, each region holds its own magic. The iconic Taj Mahal in Agra stands as a timeless symbol of love, while the royal palaces of Rajasthan, including the majestic Amber Fort and City Palace, offer a glimpse into India's regal past. Nature lovers can find peace in Kerala’s serene backwaters and lush tea gardens of Munnar. The holy city of Varanasi on the banks of the Ganges radiates spiritual energy, attracting pilgrims and travelers alike. In the south, the temple towns of Madurai and Hampi reveal architectural marvels that have stood the test of time. For those seeking vibrant city life, Mumbai's fast-paced streets and Delhi's historic monuments provide endless excitement. Adventure seekers can trek in Ladakh or enjoy the scenic valleys of Himachal Pradesh. India's northeast, with gems like Shillong and Tawang, boasts misty hills and unique traditions. From desert safaris in Jaisalmer to houseboat cruises in Kashmir, every corner of India tells a different story. Rich festivals, colorful markets, delicious cuisine, and warm hospitality make India a truly unforgettable travel destination, offering something special for every kind of explorer. Whether you are in search of tranquility, adventure, history, or spirituality, India promises a journey of endless discovery and wonder.",
    author: "Rakshan Udupi",
    date: "April 22, 2022",
  },
  {
    id: 1,
    image: Img2,
    title: "Top places to visit in US",
    description:
      "The United States, a vast land of extraordinary diversity, offers countless unforgettable destinations to explore. From the iconic skyline of New York City to the golden beaches of California, every corner has something unique. Marvel at the Grand Canyon’s breathtaking landscapes or experience the magic of Walt Disney World in Florida. Discover the historic charm of Washington, D.C., with its monuments and museums, or wander the vibrant streets of New Orleans, rich with jazz and culture. Adventure lovers can hike in the majestic national parks like Yellowstone and Yosemite, while road trippers can cruise along Route 66 for a classic American journey. Feel the energy of Las Vegas' dazzling nightlife, or enjoy the laid-back vibes of Miami's beaches. San Francisco’s Golden Gate Bridge, Chicago’s towering architecture, and Boston’s historic Freedom Trail offer endless urban adventures. Nature seekers can bask in the beauty of Hawaii’s volcanic landscapes or the serene wilderness of Alaska. From the scenic coastal drives of Oregon to the artistic soul of Austin, Texas, the US is packed with destinations that inspire awe and wonder. Whether you're chasing city lights, natural wonders, historical treasures, or cultural experiences, the United States promises an incredible journey at every turn. Each state, each city, tells a new story, making the US a dream destination for travelers from all around the globe.",
    author: "Lois Lane",
    date: "June 25, 2023",
  },
  {
    id: 1,
    image: Img3,
    title: "Top places to visit in Japan",
    description:
      "Japan, a mesmerizing blend of ancient tradition and futuristic innovation, offers countless must-visit destinations for travelers. Begin your journey in Tokyo, a bustling metropolis where towering skyscrapers meet historic temples and vibrant street culture. Kyoto, with its stunning shrines, serene Zen gardens, and traditional geisha districts, captures the timeless beauty of old Japan. Marvel at the iconic Mount Fuji, best viewed from the picturesque town of Hakone or while riding the bullet train. Discover the charm of Osaka’s lively street food scene and the majestic beauty of Himeji Castle, one of Japan’s finest surviving samurai fortresses. Visit Hiroshima for a moving experience at the Peace Memorial Park and then bask in the tranquil beauty of Miyajima Island, home to the famous floating torii gate. The snowy landscapes of Hokkaido offer stunning winter sports, while Okinawa’s tropical islands boast crystal-clear waters and vibrant coral reefs. Explore the samurai heritage of Kanazawa, the alpine villages of Shirakawa-go, and the historic streets of Nara, where friendly deer roam freely. Springtime visitors can enjoy breathtaking cherry blossoms in parks across the country, while autumn paints the landscapes in vivid reds and golds. Whether it's ancient castles, neon-lit cities, sacred mountains, or traditional tea houses, Japan promises an unforgettable adventure filled with beauty, culture, and wonder at every step.",
    author: "Gong Yoo",
    date: "December 10, 2024",
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="dark:bg-gray-900 dark:text-white py-10">
        <section data-aos="fade-up" className="container ">
          <h1 className=" my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold">
            Our Latest Blogs
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
