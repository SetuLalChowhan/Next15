import { StaticImageData } from "next/image";
import photo1 from "@/assets/images/image1.png";
import photo2 from "@/assets/images/image2.png";
import photo3 from "@/assets/images/image3.png";
export type WonderImage = {
  id: string;
  name: string;
  src: StaticImageData;
  photographer: string;
  location: string;
};

const wondersImages: WonderImage[] = [
  {
    id: "1",
    name: "Great Wall of China",
    src: photo1,
    photographer: "Photo by SylviaWetzel",
    location: "China",
  },
  {
    id: "2",
    name: "Petra",
    src: photo2,
    photographer: "Photo by ChiemSeherin",
    location: "Jordan",
  },
  {
    id: "3",
    name: "Christ the Redeemer",
    src: photo3,
    photographer: "Photo by Graham-H",
    location: "Brazil",
  },
]

export default wondersImages;