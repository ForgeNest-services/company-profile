interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO at TechCorp",
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
    quote:
      "Working with this team has been an absolute game-changer for our business. Their attention to detail and innovative solutions have helped us achieve our goals faster than we imagined.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Founder of StartUp",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    quote:
      "The level of professionalism and expertise demonstrated by the team is outstanding. They don't just deliver results; they exceed expectations at every turn.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    position: "Marketing Director",
    image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg",
    quote:
      "I've worked with many agencies before, but none have shown the dedication and skill that this team brings to the table. They're truly in a league of their own.",
  },
  {
    id: 4,
    name: "David Kim",
    position: "Product Manager",
    image: "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg",
    quote:
      "Their innovative approach to problem-solving and commitment to excellence makes them stand out. They're not just service providers; they're partners in success.",
  },
];
