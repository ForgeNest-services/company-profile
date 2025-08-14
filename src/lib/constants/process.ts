type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: "research",
    number: "01",
    title: "Research",
    description:
      "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "/process/research.svg",
  },
  {
    id: "design",
    number: "02",
    title: "Design",
    description:
      "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "/process/design.svg",
  },
  {
    id: "develope",
    number: "03",
    title: "Develop",
    description:
      "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "/process/develop.svg",
  },
  {
    id: "test",
    number: "04",
    title: "Test",
    description:
      "It is a long established fact that a reader will be distra by the readable content of a page.",
    icon: "/process/test.svg",
  },
];

export default processSteps;
