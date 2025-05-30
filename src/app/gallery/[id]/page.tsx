import { notFound } from "next/navigation";
import GalleryView from "@/components/gallery/GalleryView";

// This would typically come from your database
const mockGalleryData = {
  id: "1",
  title: "Royal Wedding Celebration",
  category: "wedding",
  image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
  description: "A grand celebration of love and commitment, featuring elegant decorations and unforgettable moments.",
  photos: [
    // Wedding Ceremony Photos
    {
      id: "1",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
      title: "Wedding Ceremony",
      description: "The beautiful ceremony setup with floral arrangements",
      width: 1200,
      height: 800,
    },
    {
      id: "2",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
      title: "First Dance",
      description: "The couple's magical first dance moment",
      width: 800,
      height: 1200,
    },
    {
      id: "3",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop",
      title: "Wedding Cake",
      description: "Elegant three-tier wedding cake with floral decorations",
      width: 1200,
      height: 900,
    },
    // Reception Photos
    {
      id: "4",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=1200&fit=crop",
      title: "Table Settings",
      description: "Beautifully arranged reception tables with centerpieces",
      width: 900,
      height: 1200,
    },
    {
      id: "5",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
      title: "Guest Candids",
      description: "Joyful moments captured during the celebration",
      width: 1200,
      height: 800,
    },
    // Additional Wedding Photos
    {
      id: "6",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
      title: "Bouquet Toss",
      description: "The exciting bouquet toss moment",
      width: 800,
      height: 1200,
    },
    {
      id: "7",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop",
      title: "Reception Hall",
      description: "Grand reception hall with elegant lighting",
      width: 1200,
      height: 900,
    },
    {
      id: "8",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=1200&fit=crop",
      title: "Wedding Rings",
      description: "The symbol of eternal love",
      width: 900,
      height: 1200,
    },
    // More Wedding Photos
    {
      id: "9",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop",
      title: "Wedding Decorations",
      description: "Elegant floral arrangements throughout the venue",
      width: 1200,
      height: 800,
    },
    {
      id: "10",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
      title: "Bride's Entrance",
      description: "The magical moment of the bride's entrance",
      width: 800,
      height: 1200,
    },
    // Wedding Details
    {
      id: "11",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop",
      title: "Wedding Invitations",
      description: "Beautifully designed wedding invitations",
      width: 1200,
      height: 900,
    },
    {
      id: "12",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=1200&fit=crop",
      title: "Wedding Favors",
      description: "Elegant wedding favors for guests",
      width: 900,
      height: 1200,
    },
    // Wedding Ceremony Details
    {
      id: "13",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop",
      title: "Ceremony Arch",
      description: "Beautiful floral arch for the ceremony",
      width: 1200,
      height: 800,
    },
    {
      id: "14",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
      title: "Wedding Vows",
      description: "The emotional exchange of vows",
      width: 800,
      height: 1200,
    },
    // Reception Details
    {
      id: "15",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=900&fit=crop",
      title: "Dance Floor",
      description: "The vibrant dance floor setup",
      width: 1200,
      height: 900,
    },
    {
      id: "16",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&h=1200&fit=crop",
      title: "Bar Setup",
      description: "Elegant bar arrangement for guests",
      width: 900,
      height: 1200,
    },
    // Guest Photos
    {
      id: "17",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
      title: "Family Photos",
      description: "Beautiful family moments captured",
      width: 1200,
      height: 800,
    },
    {
      id: "18",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
      title: "Friend Group Photos",
      description: "Fun moments with friends",
      width: 800,
      height: 1200,
    },
    // Wedding Details
    {
      id: "19",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop",
      title: "Wedding Menu",
      description: "Exquisite menu presentation",
      width: 1200,
      height: 900,
    },
    {
      id: "20",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=1200&fit=crop",
      title: "Wedding Program",
      description: "Beautifully designed wedding program",
      width: 900,
      height: 1200,
    },
    // Additional Moments
    {
      id: "21",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop",
      title: "Cake Cutting",
      description: "The sweet moment of cake cutting",
      width: 1200,
      height: 800,
    },
    {
      id: "22",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
      title: "First Kiss",
      description: "The magical first kiss as newlyweds",
      width: 800,
      height: 1200,
    },
    // Venue Details
    {
      id: "23",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop",
      title: "Venue Entrance",
      description: "Grand entrance of the venue",
      width: 1200,
      height: 900,
    },
    {
      id: "24",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=1200&fit=crop",
      title: "Outdoor Setup",
      description: "Beautiful outdoor ceremony setup",
      width: 900,
      height: 1200,
    },
    // More Wedding Moments
    {
      id: "25",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop",
      title: "Wedding Toast",
      description: "Heartfelt wedding toasts",
      width: 1200,
      height: 800,
    },
    {
      id: "26",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
      title: "Dancing Moments",
      description: "Joyful dancing with family and friends",
      width: 800,
      height: 1200,
    },
    // Wedding Details
    {
      id: "27",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=900&fit=crop",
      title: "Wedding Favors",
      description: "Elegant wedding favors display",
      width: 1200,
      height: 900,
    },
    {
      id: "28",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&h=1200&fit=crop",
      title: "Guest Book",
      description: "Beautiful guest book setup",
      width: 900,
      height: 1200,
    },
    // Additional Photos
    {
      id: "29",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
      title: "Wedding Rings",
      description: "Close-up of the wedding rings",
      width: 1200,
      height: 800,
    },
    {
      id: "30",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
      title: "Bride's Bouquet",
      description: "Elegant bridal bouquet",
      width: 800,
      height: 1200,
    },
    // More Wedding Details
    {
      id: "31",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop",
      title: "Wedding Cake Details",
      description: "Intricate details of the wedding cake",
      width: 1200,
      height: 900,
    },
    {
      id: "32",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=1200&fit=crop",
      title: "Table Centerpieces",
      description: "Beautiful table centerpieces",
      width: 900,
      height: 1200,
    },
    // Guest Photos
    {
      id: "33",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop",
      title: "Family Portraits",
      description: "Beautiful family portraits",
      width: 1200,
      height: 800,
    },
    {
      id: "34",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
      title: "Friend Photos",
      description: "Fun moments with friends",
      width: 800,
      height: 1200,
    },
    // Wedding Details
    {
      id: "35",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop",
      title: "Wedding Menu",
      description: "Exquisite menu presentation",
      width: 1200,
      height: 900,
    },
    {
      id: "36",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=1200&fit=crop",
      title: "Wedding Program",
      description: "Beautifully designed wedding program",
      width: 900,
      height: 1200,
    },
    // Additional Moments
    {
      id: "37",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop",
      title: "Cake Cutting",
      description: "The sweet moment of cake cutting",
      width: 1200,
      height: 800,
    },
    {
      id: "38",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
      title: "First Kiss",
      description: "The magical first kiss as newlyweds",
      width: 800,
      height: 1200,
    },
    // Venue Details
    {
      id: "39",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=900&fit=crop",
      title: "Venue Entrance",
      description: "Grand entrance of the venue",
      width: 1200,
      height: 900,
    },
    {
      id: "40",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=900&h=1200&fit=crop",
      title: "Outdoor Setup",
      description: "Beautiful outdoor ceremony setup",
      width: 900,
      height: 1200,
    },
    // More Wedding Moments
    {
      id: "41",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=800&fit=crop",
      title: "Wedding Toast",
      description: "Heartfelt wedding toasts",
      width: 1200,
      height: 800,
    },
    {
      id: "42",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1200&fit=crop",
      title: "Dancing Moments",
      description: "Joyful dancing with family and friends",
      width: 800,
      height: 1200,
    },
    // Wedding Details
    {
      id: "43",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=900&fit=crop",
      title: "Wedding Favors",
      description: "Elegant wedding favors display",
      width: 1200,
      height: 900,
    },
    {
      id: "44",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&h=1200&fit=crop",
      title: "Guest Book",
      description: "Beautiful guest book setup",
      width: 900,
      height: 1200,
    },
    // Additional Photos
    {
      id: "45",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&h=800&fit=crop",
      title: "Wedding Rings",
      description: "Close-up of the wedding rings",
      width: 1200,
      height: 800,
    },
    {
      id: "46",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=1200&fit=crop",
      title: "Bride's Bouquet",
      description: "Elegant bridal bouquet",
      width: 800,
      height: 1200,
    },
    // More Wedding Details
    {
      id: "47",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&h=900&fit=crop",
      title: "Wedding Cake Details",
      description: "Intricate details of the wedding cake",
      width: 1200,
      height: 900,
    },
    {
      id: "48",
      url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=900&h=1200&fit=crop",
      title: "Table Centerpieces",
      description: "Beautiful table centerpieces",
      width: 900,
      height: 1200,
    },
    // Guest Photos
    {
      id: "49",
      url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=1200&h=800&fit=crop",
      title: "Family Portraits",
      description: "Beautiful family portraits",
      width: 1200,
      height: 800,
    },
    {
      id: "50",
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1200&fit=crop",
      title: "Friend Photos",
      description: "Fun moments with friends",
      width: 800,
      height: 1200,
    },
  ],
};

export default function GalleryPage({ params }: { params: { id: string } }) {
  // In a real application, you would fetch the gallery data based on the ID
  const gallery = mockGalleryData;

  if (!gallery) {
    notFound();
  }

  return <GalleryView event={gallery} />;
} 