import { PropertyProps } from "@/interfaces";

export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    name: "Seaside Villa",
    rating: 4,
    address: {
      city: "Monrovia",
      country: "Liberia",
    },
    image: "https://via.placeholder.com/600x400", // Replace with real image
    description: "A beautiful seaside villa perfect for vacation.",
    category: ["WiFi", "Pool", "Kitchen", "Parking"],
    price: 120,
    reviews: [
      {
        name: "John Doe",
        avatar: "https://via.placeholder.com/100",
        rating: 5,
        comment: "Absolutely loved it!",
      },
      {
        name: "Jane Smith",
        avatar: "https://via.placeholder.com/100",
        rating: 4,
        comment: "Great experience, would visit again.",
      },
    ],
  },
  // Add more sample properties as needed
];
