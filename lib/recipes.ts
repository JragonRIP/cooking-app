import type { Recipe } from "./types";

/** Placeholder recipes — swap titles/photos/steps later. */
export const RECIPES: Recipe[] = [
  {
    id: "banana-sushi",
    title: "Banana Sushi Rolls",
    cookTimeMins: 10,
    safety: "kid-solo",
    description:
      "Sweet banana wrapped in soft tortilla — bite-sized rolls that taste like dessert sushi!",
    emoji: "🍌",
    placeholderColor: "#FFE566",
    pattern:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.35) 0 16px, transparent 16px 32px)",
    suggestedCookbook: "dessert",
    ingredients: [
      { id: "banana", name: "1 banana" },
      { id: "tortilla", name: "1 soft tortilla" },
      { id: "nutbutter", name: "2 spoonfuls nut butter (or sunflower butter)" },
      { id: "sprinkles", name: "A pinch of sprinkles (optional)" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Lay the tortilla flat on a clean plate.",
        ingredientIds: ["tortilla"],
      },
      {
        id: "s2",
        instruction: "Spread nut butter evenly across the tortilla.",
        ingredientIds: ["nutbutter", "tortilla"],
      },
      {
        id: "s3",
        instruction: "Peel the banana and place it near one edge of the tortilla.",
        ingredientIds: ["banana"],
      },
      {
        id: "s4",
        instruction: "Roll the tortilla tightly around the banana.",
        ingredientIds: ["banana", "tortilla"],
      },
      {
        id: "s5",
        instruction:
          "Ask for a grown-up if you need the knife. Slice into sushi-sized rounds.",
        ingredientIds: ["banana"],
        needsAdult: true,
        adultReason: "Cutting needs careful knife help!",
      },
      {
        id: "s6",
        instruction: "Add sprinkles on top if you like. Dig in, Chef!",
        ingredientIds: ["sprinkles"],
      },
    ],
  },
  {
    id: "yogurt-parfait",
    title: "Rainbow Yogurt Parfait",
    cookTimeMins: 8,
    safety: "kid-solo",
    description:
      "Creamy yogurt stacked with juicy fruit and crunchy granola — a colorful morning treat.",
    emoji: "🥛",
    placeholderColor: "#A8E6CF",
    pattern:
      "repeating-linear-gradient(180deg, rgba(255,255,255,0.3) 0 14px, transparent 14px 28px)",
    suggestedCookbook: "breakfast",
    ingredients: [
      { id: "yogurt", name: "1 cup yogurt" },
      { id: "berries", name: "Handful of berries" },
      { id: "granola", name: "1/4 cup granola" },
      { id: "honey", name: "Drizzle of honey (optional)" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Spoon half the yogurt into a clear cup or bowl.",
        ingredientIds: ["yogurt"],
      },
      {
        id: "s2",
        instruction: "Add a layer of berries on top.",
        ingredientIds: ["berries"],
      },
      {
        id: "s3",
        instruction: "Sprinkle granola for crunch.",
        ingredientIds: ["granola"],
      },
      {
        id: "s4",
        instruction: "Add the rest of the yogurt and more berries.",
        ingredientIds: ["yogurt", "berries"],
      },
      {
        id: "s5",
        instruction: "Drizzle honey if you want it sweeter. Enjoy your rainbow!",
        ingredientIds: ["honey"],
      },
    ],
  },
  {
    id: "quesadilla",
    title: "Cheesy Quesadilla Triangles",
    cookTimeMins: 15,
    safety: "adult-helper",
    description:
      "Gooey melted cheese tucked in a crispy tortilla — perfect dunking triangles!",
    emoji: "🧀",
    placeholderColor: "#FFB347",
    pattern:
      "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4) 0 12%, transparent 13%)",
    suggestedCookbook: "dinner",
    ingredients: [
      { id: "tortilla", name: "1 large tortilla" },
      { id: "cheese", name: "1/2 cup shredded cheese" },
      { id: "salsa", name: "Salsa for dipping (optional)" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Sprinkle cheese on half of the tortilla.",
        ingredientIds: ["tortilla", "cheese"],
      },
      {
        id: "s2",
        instruction: "Fold the tortilla in half to make a half-moon.",
        ingredientIds: ["tortilla"],
      },
      {
        id: "s3",
        instruction:
          "An adult helps cook it in a pan until the cheese melts and both sides are golden.",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Hot stove and pan — grown-up help required!",
      },
      {
        id: "s4",
        instruction: "Let it cool a minute, then cut into triangles.",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Cutting and hot food — ask for help!",
      },
      {
        id: "s5",
        instruction: "Serve with salsa if you like. Cheese win!",
        ingredientIds: ["salsa"],
      },
    ],
  },
  {
    id: "pb-apple",
    title: "Apple Sailboats",
    cookTimeMins: 7,
    safety: "kid-solo",
    description:
      "Crisp apple wedges with peanut butter and raisin ‘sailors’ — snack adventure ahoy!",
    emoji: "🍎",
    placeholderColor: "#FF8A80",
    pattern:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.25) 0 10px, transparent 10px 20px)",
    suggestedCookbook: "breakfast",
    ingredients: [
      { id: "apple", name: "1 apple" },
      { id: "pb", name: "2 spoonfuls peanut butter (or alternative)" },
      { id: "raisins", name: "A few raisins" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Wash the apple. Ask for help slicing it into wedges if needed.",
        ingredientIds: ["apple"],
        needsAdult: true,
        adultReason: "Apple slicing can need a grown-up and a knife.",
      },
      {
        id: "s2",
        instruction: "Spread a little peanut butter on each wedge.",
        ingredientIds: ["pb", "apple"],
      },
      {
        id: "s3",
        instruction: "Press raisins on top like tiny sailors. Sail away!",
        ingredientIds: ["raisins"],
      },
    ],
  },
  {
    id: "smoothie",
    title: "Berry Blast Smoothie",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "Icy berries blended into a purple power drink — cool, sweet, and super slurpable.",
    emoji: "🫐",
    placeholderColor: "#B388FF",
    pattern:
      "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25) 0 8px, transparent 9px 22px)",
    suggestedCookbook: "drinks",
    ingredients: [
      { id: "berries", name: "1 cup frozen berries" },
      { id: "milk", name: "1 cup milk or milk alternative" },
      { id: "banana", name: "1/2 banana" },
      { id: "honey", name: "1 spoonful honey (optional)" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Add berries, milk, and banana to the blender pitcher.",
        ingredientIds: ["berries", "milk", "banana"],
      },
      {
        id: "s2",
        instruction: "Add honey if you want it sweeter.",
        ingredientIds: ["honey"],
      },
      {
        id: "s3",
        instruction: "An adult runs the blender until smooth and frothy.",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Blenders are loud and need adult hands!",
      },
      {
        id: "s4",
        instruction: "Pour into a cup and take a big berry sip!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "no-bake-cookies",
    title: "No-Bake Energy Bites",
    cookTimeMins: 12,
    safety: "kid-solo",
    description:
      "Oaty, chocolatey little balls you roll by hand — no oven, all fun.",
    emoji: "🍪",
    placeholderColor: "#D4A574",
    pattern:
      "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.35) 0 15%, transparent 16%)",
    suggestedCookbook: "dessert",
    ingredients: [
      { id: "oats", name: "1 cup oats" },
      { id: "pb", name: "1/3 cup peanut butter (or alternative)" },
      { id: "honey", name: "2 spoonfuls honey" },
      { id: "chips", name: "2 spoonfuls mini chocolate chips" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Mix oats, peanut butter, and honey in a bowl.",
        ingredientIds: ["oats", "pb", "honey"],
      },
      {
        id: "s2",
        instruction: "Stir in chocolate chips.",
        ingredientIds: ["chips"],
      },
      {
        id: "s3",
        instruction: "Roll spoonfuls into small balls with clean hands.",
        ingredientIds: [],
      },
      {
        id: "s4",
        instruction: "Chill in the fridge for a few minutes, then snack!",
        ingredientIds: [],
      },
    ],
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return RECIPES.find((r) => r.id === id);
}
