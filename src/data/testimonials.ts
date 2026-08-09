export interface Testimonial {
  name: string;
  handle?: string;
  rating: number;
  text: string;
  avatar: string;
  photos?: string[];
}

// Verbatim from The Himalayan Ramble's Google Business listing —
// https://share.google/9D0WT2HgiJPNx5L6Z — copied over by the founder, not scraped.
export const GOOGLE_TESTIMONIALS: Testimonial[] = [
  {
    name: "Kyaw Kyaw Win",
    handle: "Jo Jo",
    rating: 5,
    text: "Had a great experience with Mr. Sanjay planning our trip covering Delhi, Mussoorie, Shimla, Manali, Kasol, and Chandigarh. Everything was well organized and smooth throughout the journey. He was very helpful, responsive, and made sure all arrangements were taken care of. The trip was hassle-free and we truly enjoyed every place. Would definitely recommend him for travel planning!",
    avatar: "/assets/testimonials/jojo-000.webp",
    photos: ["/assets/testimonials/jojo-001.webp", "/assets/testimonials/jojo-002.webp"],
  },
  {
    name: "Hey Thiri",
    rating: 5,
    text: "We recently rented a Tempo Traveller for our Spiti Valley trip, and the experience was absolutely amazing! The vehicle was clean, spacious, and perfect for the long, challenging mountain routes. What really stood out was our driver — extremely patient, calm, and clearly very experienced with the terrain. He navigated the tricky roads with confidence, making us feel safe and relaxed throughout the journey.",
    avatar: "/assets/testimonials/hey-thiri-000.png",
    photos: ["/assets/testimonials/hey-thiri-001.webp", "/assets/testimonials/hey-thiri-002.webp"],
  },
  {
    name: "Saurav Haldar",
    rating: 5,
    text: "I had a great experience with the Himalayan Rumble team on our Shimla to Spiti trip. A special thanks to Chetan and Sanjay for their exceptional support and coordination throughout the journey. The hotel locations were absolutely spectacular, offering stunning views and great comfort. Despite the toughest snow conditions, the trip was incredibly well-organized, making us feel safe and well taken care of at every step. Kudos to the entire team for making this adventure smooth and memorable!",
    avatar: "/assets/testimonials/saurav-haldar-000.png",
    photos: ["/assets/testimonials/saurav-haldar-001.webp", "/assets/testimonials/saurav-haldar-002.webp"],
  },
  {
    name: "Vishal Sharma",
    rating: 5,
    text: "I had an incredible experience with The Himalayan Ramble on the 4-day Kinnar Kailash, Pwari, Rakchham, and Chhitkul tour led by Sanjay Thakur. The journey was filled with breathtaking views, challenging yet rewarding treks, and immersive cultural interactions. Sanjay's expertise and guidance were invaluable, ensuring our safety and enhancing the overall experience. From the sacred sites of Kinner Kailash to the charming villages of Rakchham and Chhitkul, each day brought new adventures and memories. I highly recommend The Himalayan Ramble and Sanjay Thakur for anyone seeking an unforgettable Himalayan adventure.",
    avatar: "/assets/testimonials/vishal-sharma-000.png",
    photos: ["/assets/testimonials/vishal-sharma-001.webp", "/assets/testimonials/vishal-sharma-002.webp"],
  },
  {
    name: "Srikanth Tayi",
    rating: 5,
    text: "They provided a very good vehicle. The driver was very friendly, on time, and very supportive. On request they took us to places which were not mentioned in the itinerary without any additional amount. Overall we are very happy with the tour operator.",
    avatar: "/assets/testimonials/srikanth-tayi-000.png",
    photos: ["/assets/testimonials/srikanth-tayi-001.webp", "/assets/testimonials/srikanth-tayi-002.webp"],
  },
  {
    name: "Upayan Haldar",
    rating: 5,
    text: "Planned a winter Spiti expedition with The Himalayan Ramble — great driver (Chetan Negi). Home-stays were great with good scenic beauty (though there was a water crisis due to winter, FYI). Great planning, all-over great experience. Thanks, The Himalayan Ramble.",
    avatar: "/assets/testimonials/upayan-haldar-000.png",
    // 001/002 supplied were identical to 000 (same file) — omitted rather than repeat one photo twice.
  },
];
