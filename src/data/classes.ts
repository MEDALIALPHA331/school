/**
 *@abstract utility for infering types from objects
 */
export type InferObjectType<T> = T extends { [K in keyof T]: infer U }
  ? U
  : never;

export const classes = [
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
  {
    label: "Ethik",
    emoji: "✍️",
    icon: "https://img.icons8.com/emoji/48/writing-hand.png",
    alt: "writing hand icon",
    description: "",
  },
];

export type Class = {
  label: string;
  emoji: string;
  icon: string;
  alt: string;
  description: string;
};

export interface School {
  id: number;
  name: string;
}

export const schools: School[] = [
  { id: 1, name: "France Elementary School" },
  { id: 2, name: "Italy High School" },
  { id: 3, name: "Spain Middle School" },
  { id: 4, name: "Germany Academy" },
  { id: 5, name: "Sweden International School" },
  { id: 6, name: "Norway Grammar School" },
  { id: 7, name: "Netherlands Secondary School" },
  { id: 8, name: "Belgium Junior High School" },
  { id: 9, name: "Portugal Preparatory School" },
  { id: 10, name: "Switzerland College" },
];
