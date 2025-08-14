type Blog = {
  id: number;
  title: string;
  date: string;
  image: string;
};

export const blogs: Blog[] = [
  {
    id: 1,
    title: "The Art of Modern Web Development",
    date: "January 15, 2025",
    image:
      "https://images.pexels.com/photos/326514/pexels-photo-326514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    title: "Understanding React Design Patterns",
    date: "January 22, 2025",
    image:
      "https://d2ms8rpfqc4h24.cloudfront.net/perks_of_using_design_patterns_in_reactjs_dca2ef4c38.jpg",
  },
  {
    id: 3,
    title: "Building Responsive Layouts with Tailwind",
    date: "January 30, 2025",
    image: "",
  },
];
