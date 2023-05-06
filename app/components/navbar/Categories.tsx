'use client'
import Container from "../Container";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import {IoDiamond} from 'react-icons/io5'
import {
  GiWindmill,
  GiIsland,
  GiBoatFishing,
  GiCastle,
  GiForestCamp,
  GiCaveEntrance,
  GiCactus,
  GiBarn,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import { usePathname, useSearchParams } from "next/navigation";
import CategoryBox from "../CategoryBox";
export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "This property is close to the beach",
  },
  {
    label: "Windmills",
    icon: GiWindmill,
    description: "This property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "This property is modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "this property is in the countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "this property has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "this property is on an island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "this property is close to a lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "this property has skiing activites",
  },
  {
    label: "Castles",
    icon: GiCastle,
    description: "this property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "this property has camping activites",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "this property has snow",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "this property is in a cave",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "this property is in the desert",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "this property is in the barn",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "this property is luxurious",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  const isMainPage = pathname === "/";
  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto categories">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            label={item.label}
            icon={item.icon}
            description={item.description}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
};
export default Categories;
