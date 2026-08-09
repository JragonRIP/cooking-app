import type { Recipe } from "./types";

/** Mini-chef recipes for Discover */
export const RECIPES: Recipe[] = [
  {
    id: "no-bake-breakfast-balls",
    title: "No-Bake Breakfast Balls",
    cookTimeMins: 10,
    safety: "kid-solo",
    description:
      "Chewy oat bites with peanut butter and chocolate chips — a grab-and-go breakfast treat!",
    emoji: "🥣",
    placeholderColor: "#E8C39E",
    pattern:
      "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.35) 0 12%, transparent 13%)",
    suggestedCookbook: "breakfast",
    baseServings: 1,
    imageSrc: "/recipes/no-bake-breakfast-balls.svg",
    ingredients: [
      { id: "oats", name: "1 cup oats" },
      { id: "pb", name: "1/2 cup peanut butter (or sunflower butter)" },
      { id: "chips", name: "1/2 cup chocolate chips" },
      { id: "honey", name: "1/4 cup honey" },
      { id: "vanilla", name: "1/2 tsp vanilla" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Put all the ingredients into a big bowl.",
        ingredientIds: ["oats", "pb", "chips", "honey", "vanilla"],
      },
      {
        id: "s2",
        instruction: "Stir everything together until it's all mixed up.",
        ingredientIds: [],
      },
      {
        id: "s3",
        instruction: "Put the bowl in the fridge for 20 minutes to make it firm.",
        timerSeconds: 1200,
        timerLabel: "Chill time",
        ingredientIds: [],
      },
      {
        id: "s4",
        instruction: "Roll the mixture into small balls using your clean hands.",
        ingredientIds: [],
      },
      {
        id: "s5",
        instruction: "Keep them in a container in the fridge to eat later!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "rainbow-yogurt-parfait",
    title: "Rainbow Yogurt Parfait",
    cookTimeMins: 5,
    safety: "kid-solo",
    description:
      "Creamy yogurt stacked with juicy berries and crunchy granola — a colorful morning rainbow!",
    emoji: "🥛",
    placeholderColor: "#A8E6CF",
    pattern:
      "repeating-linear-gradient(180deg, rgba(255,255,255,0.3) 0 14px, transparent 14px 28px)",
    suggestedCookbook: "breakfast",
    baseServings: 1,
    imageSrc: "/recipes/rainbow-yogurt-parfait.svg",
    ingredients: [
      { id: "yogurt", name: "1 cup vanilla yogurt" },
      { id: "granola", name: "1/2 cup granola" },
      { id: "berries", name: "1/2 cup mixed berries" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Find a clear glass or bowl so you can see the colors.",
        ingredientIds: [],
      },
      {
        id: "s2",
        instruction: "Spoon some yogurt into the bottom.",
        ingredientIds: ["yogurt"],
      },
      {
        id: "s3",
        instruction: "Add a layer of berries.",
        ingredientIds: ["berries"],
      },
      {
        id: "s4",
        instruction: "Sprinkle some granola on top.",
        ingredientIds: ["granola"],
      },
      {
        id: "s5",
        instruction: "Repeat the layers until your glass is full!",
        ingredientIds: ["yogurt", "berries", "granola"],
      },
    ],
  },
  {
    id: "smores-overnight-oats",
    title: "S'mores Overnight Oats",
    cookTimeMins: 5,
    safety: "kid-solo",
    description:
      "Chocolatey oats that chill overnight, then get topped with marshmallows — campfire vibes for breakfast!",
    emoji: "🔥",
    placeholderColor: "#D4A574",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.2) 0 10px, transparent 10px 20px)",
    suggestedCookbook: "breakfast",
    baseServings: 1,
    imageSrc: "/recipes/smores-overnight-oats.svg",
    ingredients: [
      { id: "oats", name: "1/2 cup oats" },
      { id: "milk", name: "1/2 cup milk" },
      { id: "cocoa", name: "1 spoonful cocoa powder" },
      { id: "mallows", name: "A few mini marshmallows" },
      { id: "graham", name: "1 graham cracker, crushed" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Mix the oats, milk, and cocoa powder in a jar or bowl.",
        ingredientIds: ["oats", "milk", "cocoa"],
      },
      {
        id: "s2",
        instruction: "Put the lid on and leave it in the fridge overnight.",
        timerSeconds: 300,
        timerLabel: "Optional chill — or skip & wait overnight",
        ingredientIds: [],
      },
      {
        id: "s3",
        instruction: "In the morning, stir it up.",
        ingredientIds: [],
      },
      {
        id: "s4",
        instruction: "Top with marshmallows and crushed graham crackers!",
        ingredientIds: ["mallows", "graham"],
      },
    ],
  },
  {
    id: "funny-face-toast",
    title: "Funny Face Peanut Butter Toast",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "Warm toast with a peanut-butter smile made of fruit — breakfast that giggles back!",
    emoji: "😄",
    placeholderColor: "#FFE566",
    pattern:
      "radial-gradient(circle at 70% 30%, rgba(255,255,255,0.4) 0 14%, transparent 15%)",
    suggestedCookbook: "breakfast",
    baseServings: 1,
    imageSrc: "/recipes/funny-face-toast.svg",
    ingredients: [
      { id: "bread", name: "1 slice of bread" },
      { id: "pb", name: "1 tbsp peanut butter (or alternative)" },
      { id: "banana", name: "1 banana, sliced" },
      { id: "blueberries", name: "A few blueberries" },
      { id: "strawberry", name: "1 strawberry, sliced" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Ask an adult to toast the bread until golden brown.",
        ingredientIds: ["bread"],
        needsAdult: true,
        adultReason: "Toasters get hot!",
      },
      {
        id: "s2",
        instruction: "Spread peanut butter all over the warm toast.",
        ingredientIds: ["pb", "bread"],
      },
      {
        id: "s3",
        instruction: "Use two banana slices for eyes and put a blueberry on each one.",
        ingredientIds: ["banana", "blueberries"],
      },
      {
        id: "s4",
        instruction: "Use a strawberry slice for a big smiley mouth.",
        ingredientIds: ["strawberry"],
      },
      {
        id: "s5",
        instruction: "Add another fruit piece for a nose. Hello, funny face!",
        ingredientIds: ["banana"],
      },
    ],
  },
  {
    id: "microwave-egg-sandwich",
    title: "Microwave Egg Sandwich",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "A fluffy mug egg tucked in a toasted muffin with melty cheese — breakfast in a flash!",
    emoji: "🥪",
    placeholderColor: "#FFD1A1",
    pattern:
      "repeating-linear-gradient(-20deg, rgba(255,255,255,0.25) 0 12px, transparent 12px 24px)",
    suggestedCookbook: "breakfast",
    baseServings: 1,
    imageSrc: "/recipes/microwave-egg-sandwich.svg",
    ingredients: [
      { id: "egg", name: "1 egg" },
      { id: "milk", name: "1 tbsp milk" },
      { id: "cheese", name: "1 slice of cheese" },
      { id: "muffin", name: "1 English muffin" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Crack the egg into a microwave-safe mug.",
        ingredientIds: ["egg"],
      },
      {
        id: "s2",
        instruction: "Add the milk and whisk it with a fork.",
        ingredientIds: ["milk"],
      },
      {
        id: "s3",
        instruction: "Ask an adult to microwave for 45–60 seconds until the egg is puffy.",
        timerSeconds: 60,
        timerLabel: "Microwave egg",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Microwaves and hot mugs need grown-up help!",
      },
      {
        id: "s4",
        instruction: "Ask an adult to toast the English muffin.",
        ingredientIds: ["muffin"],
        needsAdult: true,
        adultReason: "Toasters get hot!",
      },
      {
        id: "s5",
        instruction: "Slide the egg onto the muffin and top with cheese.",
        ingredientIds: ["cheese", "muffin"],
      },
    ],
  },
  {
    id: "magic-2-ingredient-pancakes",
    title: "Magic 2-Ingredient Pancakes",
    cookTimeMins: 10,
    safety: "adult-helper",
    description:
      "Just banana and eggs — soft little pancakes that taste like weekend magic!",
    emoji: "🥞",
    placeholderColor: "#FFB84D",
    pattern:
      "radial-gradient(circle at 40% 50%, rgba(255,255,255,0.35) 0 18%, transparent 19%)",
    suggestedCookbook: "breakfast",
    baseServings: 1,
    imageSrc: "/recipes/magic-2-ingredient-pancakes.svg",
    ingredients: [
      { id: "banana", name: "1 ripe banana" },
      { id: "eggs", name: "2 eggs" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Peel the banana and mash it in a bowl with a fork until mushy.",
        ingredientIds: ["banana"],
      },
      {
        id: "s2",
        instruction: "Crack the eggs into the bowl and stir until mixed.",
        ingredientIds: ["eggs"],
      },
      {
        id: "s3",
        instruction: "Ask an adult to pour small circles onto a warm greased pan.",
        timerSeconds: 120,
        timerLabel: "Cook pancakes",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Hot stove cooking needs a grown-up!",
      },
      {
        id: "s4",
        instruction: "Ask an adult to flip when bubbly, then cook 1 more minute.",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Pancake flipping on a hot pan!",
      },
      {
        id: "s5",
        instruction: "Serve with a little syrup or fruit!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "english-muffin-pizzas",
    title: "English Muffin Pizzas",
    cookTimeMins: 10,
    safety: "adult-helper",
    description:
      "Mini pizzas you build yourself — saucy, cheesy, and ready in minutes!",
    emoji: "🍕",
    placeholderColor: "#FF8A5B",
    pattern:
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0 20%, transparent 21%)",
    suggestedCookbook: "dinner",
    baseServings: 1,
    imageSrc: "/recipes/english-muffin-pizzas.svg",
    ingredients: [
      { id: "muffins", name: "2 English muffins" },
      { id: "sauce", name: "1/2 cup pizza sauce" },
      { id: "cheese", name: "1 cup shredded mozzarella" },
      { id: "pepperoni", name: "Pepperoni or veggies (optional)" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Split the English muffins so you have four circles.",
        ingredientIds: ["muffins"],
      },
      {
        id: "s2",
        instruction: "Spread a big spoonful of sauce on each one.",
        ingredientIds: ["sauce"],
      },
      {
        id: "s3",
        instruction: "Sprinkle lots of cheese on top.",
        ingredientIds: ["cheese"],
      },
      {
        id: "s4",
        instruction: "Add pepperoni or your favorite veggies.",
        ingredientIds: ["pepperoni"],
      },
      {
        id: "s5",
        instruction: "Ask an adult to bake at 375°F for 5–8 minutes until melty.",
        timerSeconds: 360,
        timerLabel: "Bake pizzas",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Ovens are hot — grown-up job!",
      },
    ],
  },
  {
    id: "walking-tacos",
    title: "Walking Tacos",
    cookTimeMins: 5,
    safety: "kid-solo",
    description:
      "Chips, beans, cheese, and salsa mixed right in the bag — dinner you can walk with!",
    emoji: "🌮",
    placeholderColor: "#F4C430",
    pattern:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.25) 0 14px, transparent 14px 28px)",
    suggestedCookbook: "dinner",
    baseServings: 1,
    imageSrc: "/recipes/walking-tacos.svg",
    ingredients: [
      { id: "chips", name: "1 small bag of corn chips" },
      { id: "beans", name: "1/4 cup canned beans, rinsed" },
      { id: "cheese", name: "2 tbsp shredded cheese" },
      { id: "salsa", name: "1 tbsp salsa" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Open the bag of chips carefully.",
        ingredientIds: ["chips"],
      },
      {
        id: "s2",
        instruction: "Spoon the beans and cheese right into the bag.",
        ingredientIds: ["beans", "cheese"],
      },
      {
        id: "s3",
        instruction: "Add a scoop of salsa.",
        ingredientIds: ["salsa"],
      },
      {
        id: "s4",
        instruction: "Use a spoon to mix it all up inside the bag.",
        ingredientIds: [],
      },
      {
        id: "s5",
        instruction: "Eat it straight out of the bag with your spoon!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "turkey-cheese-pinwheels",
    title: "Turkey & Cheese Pinwheels",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "Rolled-up turkey and cheese tortillas sliced into fun little wheels!",
    emoji: "🌀",
    placeholderColor: "#FFCCBC",
    pattern:
      "repeating-radial-gradient(circle at 0 0, rgba(255,255,255,0.3) 0 8px, transparent 9px 20px)",
    suggestedCookbook: "dinner",
    baseServings: 1,
    imageSrc: "/recipes/turkey-cheese-pinwheels.svg",
    ingredients: [
      { id: "tortilla", name: "1 large flour tortilla" },
      { id: "cream", name: "1 tbsp cream cheese" },
      { id: "turkey", name: "2 slices of turkey" },
      { id: "cheese", name: "1 slice of cheese" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Lay the tortilla flat on a plate.",
        ingredientIds: ["tortilla"],
      },
      {
        id: "s2",
        instruction: "Spread the cream cheese all over it.",
        ingredientIds: ["cream"],
      },
      {
        id: "s3",
        instruction: "Place the turkey and cheese slices on top.",
        ingredientIds: ["turkey", "cheese"],
      },
      {
        id: "s4",
        instruction: "Roll the tortilla up tightly like a sleeping bag.",
        ingredientIds: ["tortilla"],
      },
      {
        id: "s5",
        instruction: "Ask an adult to cut the roll into small wheels.",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Knives need careful grown-up hands!",
      },
    ],
  },
  {
    id: "microwave-mac-mug",
    title: "Microwave Mac in a Mug",
    cookTimeMins: 10,
    safety: "adult-helper",
    description:
      "Creamy cheesy macaroni made in a mug — the coziest mini dinner ever!",
    emoji: "🧀",
    placeholderColor: "#FFD54F",
    pattern:
      "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.4) 0 16%, transparent 17%)",
    suggestedCookbook: "dinner",
    baseServings: 1,
    imageSrc: "/recipes/microwave-mac-mug.svg",
    ingredients: [
      { id: "pasta", name: "1/2 cup macaroni pasta" },
      { id: "water", name: "1/2 cup water" },
      { id: "cheese", name: "1/2 cup shredded cheddar" },
      { id: "milk", name: "1 tbsp milk" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Put the pasta and water in a large microwave-safe mug.",
        ingredientIds: ["pasta", "water"],
      },
      {
        id: "s2",
        instruction:
          "Ask an adult to microwave in 2-minute bursts until the pasta is soft.",
        timerSeconds: 240,
        timerLabel: "Cook pasta",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Hot mug and microwave — adult help!",
      },
      {
        id: "s3",
        instruction: "If there is extra water, carefully pour it out (adult can help).",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Hot water can splash!",
      },
      {
        id: "s4",
        instruction: "Stir in the cheese and milk until creamy and gooey.",
        ingredientIds: ["cheese", "milk"],
      },
      {
        id: "s5",
        instruction: "Let it cool for a minute before eating!",
        timerSeconds: 60,
        timerLabel: "Cool down",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "super-simple-quesadillas",
    title: "Super Simple Quesadillas",
    cookTimeMins: 10,
    safety: "adult-helper",
    description:
      "Crispy tortilla triangles stuffed with melty cheese and beans or chicken!",
    emoji: "🫓",
    placeholderColor: "#FFB347",
    pattern:
      "radial-gradient(circle at 30% 40%, rgba(255,255,255,0.4) 0 12%, transparent 13%)",
    suggestedCookbook: "dinner",
    baseServings: 1,
    imageSrc: "/recipes/super-simple-quesadillas.svg",
    ingredients: [
      { id: "tortilla", name: "1 flour tortilla" },
      { id: "cheese", name: "1/2 cup shredded cheese" },
      { id: "filling", name: "1/4 cup cooked chicken or beans" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Lay the tortilla flat and sprinkle cheese on one half.",
        ingredientIds: ["tortilla", "cheese"],
      },
      {
        id: "s2",
        instruction: "Add chicken or beans on top of the cheese.",
        ingredientIds: ["filling"],
      },
      {
        id: "s3",
        instruction: "Fold the tortilla in half.",
        ingredientIds: ["tortilla"],
      },
      {
        id: "s4",
        instruction: "Ask an adult to cook in a warm pan 2 minutes per side.",
        timerSeconds: 240,
        timerLabel: "Quesadilla pan time",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Hot stove and pan!",
      },
      {
        id: "s5",
        instruction: "Ask an adult to cut into triangles like pizza.",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Cutting hot food needs help!",
      },
    ],
  },
  {
    id: "diy-taco-bar",
    title: "DIY Taco Bar",
    cookTimeMins: 10,
    safety: "adult-helper",
    description:
      "Build-your-own tacos with beans, lettuce, cheese, and sour cream — chef's choice!",
    emoji: "🌯",
    placeholderColor: "#81C784",
    pattern:
      "repeating-linear-gradient(135deg, rgba(255,255,255,0.2) 0 10px, transparent 10px 20px)",
    suggestedCookbook: "dinner",
    baseServings: 1,
    imageSrc: "/recipes/diy-taco-bar.svg",
    ingredients: [
      { id: "shells", name: "Soft taco shells" },
      { id: "beans", name: "Canned black beans (warmed)" },
      { id: "lettuce", name: "Shredded lettuce" },
      { id: "cheese", name: "Shredded cheese" },
      { id: "cream", name: "Sour cream" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Ask an adult to warm the beans.",
        ingredientIds: ["beans"],
        needsAdult: true,
        adultReason: "Warming beans needs heat help!",
      },
      {
        id: "s2",
        instruction: "Put all the toppings in different small bowls.",
        ingredientIds: ["lettuce", "cheese", "cream", "beans"],
      },
      {
        id: "s3",
        instruction: "Take a taco shell and fill it with beans first.",
        ingredientIds: ["shells", "beans"],
      },
      {
        id: "s4",
        instruction: "Pile on lettuce, cheese, and a dollop of sour cream.",
        ingredientIds: ["lettuce", "cheese", "cream"],
      },
      {
        id: "s5",
        instruction: "Fold it up and enjoy your creation!",
        ingredientIds: ["shells"],
      },
    ],
  },
  {
    id: "ants-on-a-log",
    title: "Ants on a Log",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "Crunchy celery logs filled with peanut butter and raisin 'ants' — a classic snack adventure!",
    emoji: "🐜",
    placeholderColor: "#AED581",
    pattern:
      "repeating-linear-gradient(90deg, rgba(255,255,255,0.3) 0 8px, transparent 8px 16px)",
    suggestedCookbook: "dessert",
    baseServings: 1,
    imageSrc: "/recipes/ants-on-a-log.svg",
    ingredients: [
      { id: "celery", name: "2 celery stalks" },
      { id: "pb", name: "2 tbsp peanut butter (or alternative)" },
      { id: "raisins", name: "10–12 raisins" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Wash the celery and dry it with a paper towel.",
        ingredientIds: ["celery"],
      },
      {
        id: "s2",
        instruction: "Ask an adult to cut the celery into 3-inch pieces.",
        ingredientIds: ["celery"],
        needsAdult: true,
        adultReason: "Celery cutting needs a knife!",
      },
      {
        id: "s3",
        instruction: "Fill the valley of the celery with peanut butter.",
        ingredientIds: ["pb"],
      },
      {
        id: "s4",
        instruction: "Place raisins in a line on top of the peanut butter.",
        ingredientIds: ["raisins"],
      },
      {
        id: "s5",
        instruction: "Look — the ants are walking on the log!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "fruit-kabobs-dip",
    title: "Fruit Kabobs with Dip",
    cookTimeMins: 10,
    safety: "kid-solo",
    description:
      "Colorful fruit wands with sweet yogurt-honey dip — snack time looks like a party!",
    emoji: "🍡",
    placeholderColor: "#F48FB1",
    pattern:
      "repeating-linear-gradient(180deg, rgba(255,255,255,0.25) 0 12px, transparent 12px 24px)",
    suggestedCookbook: "dessert",
    baseServings: 1,
    imageSrc: "/recipes/fruit-kabobs-dip.svg",
    ingredients: [
      { id: "grapes", name: "Grapes" },
      { id: "melon", name: "Melon chunks" },
      { id: "strawberries", name: "Strawberries" },
      { id: "yogurt", name: "1/2 cup yogurt" },
      { id: "honey", name: "1 tsp honey" },
    ],
    steps: [
      {
        id: "s1",
        instruction:
          "Slide fruit onto wooden skewers one by one. Be careful of the pointy end!",
        ingredientIds: ["grapes", "melon", "strawberries"],
      },
      {
        id: "s2",
        instruction: "In a small bowl, mix the yogurt and honey together.",
        ingredientIds: ["yogurt", "honey"],
      },
      {
        id: "s3",
        instruction: "Place your fruit wands on a plate.",
        ingredientIds: [],
      },
      {
        id: "s4",
        instruction: "Dip the fruit into the yogurt for a sweet snack!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "rice-krispie-treats",
    title: "No-Bake Rice Krispie Treats",
    cookTimeMins: 10,
    safety: "adult-helper",
    description:
      "Gooey marshmallow cereal squares that are sticky, sweet, and super fun to press!",
    emoji: "⬜",
    placeholderColor: "#FFF59D",
    pattern:
      "radial-gradient(circle at 40% 40%, rgba(255,200,100,0.35) 0 15%, transparent 16%)",
    suggestedCookbook: "dessert",
    baseServings: 1,
    imageSrc: "/recipes/rice-krispie-treats.svg",
    ingredients: [
      { id: "cereal", name: "3 cups Rice Krispies cereal" },
      { id: "mallows", name: "2 cups mini marshmallows" },
      { id: "butter", name: "2 tbsp butter" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Ask an adult to melt butter and marshmallows until gooey.",
        timerSeconds: 90,
        timerLabel: "Melt marshmallows",
        ingredientIds: ["butter", "mallows"],
        needsAdult: true,
        adultReason: "Melting on stove or microwave is hot!",
      },
      {
        id: "s2",
        instruction: "Stir until it looks like a white cloud.",
        ingredientIds: [],
      },
      {
        id: "s3",
        instruction: "Pour in the cereal and stir quickly until sticky.",
        ingredientIds: ["cereal"],
      },
      {
        id: "s4",
        instruction: "Press the mixture into a square pan with a buttered spoon.",
        ingredientIds: [],
      },
      {
        id: "s5",
        instruction: "Let it cool, then ask an adult to cut into squares!",
        timerSeconds: 600,
        timerLabel: "Cooling time",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Cutting squares needs a knife!",
      },
    ],
  },
  {
    id: "puppy-chow",
    title: "Puppy Chow (Muddy Buddies)",
    cookTimeMins: 15,
    safety: "adult-helper",
    description:
      "Crunchy cereal coated in chocolate and powdered sugar — shake it in a bag for snowy snacks!",
    emoji: "🐶",
    placeholderColor: "#D7CCC8",
    pattern:
      "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0 6px, transparent 7px 16px)",
    suggestedCookbook: "dessert",
    baseServings: 1,
    imageSrc: "/recipes/puppy-chow.svg",
    ingredients: [
      { id: "cereal", name: "4 cups Chex cereal" },
      { id: "chips", name: "1/2 cup chocolate chips" },
      { id: "pb", name: "1/4 cup peanut butter (or alternative)" },
      { id: "sugar", name: "1 cup powdered sugar" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Ask an adult to melt chocolate and peanut butter in the microwave.",
        timerSeconds: 30,
        timerLabel: "Melt chocolate",
        ingredientIds: ["chips", "pb"],
        needsAdult: true,
        adultReason: "Hot melted chocolate needs adult help!",
      },
      {
        id: "s2",
        instruction: "Pour the melted mix over the cereal and stir gently.",
        ingredientIds: ["cereal"],
      },
      {
        id: "s3",
        instruction: "Put the powdered sugar in a large plastic bag.",
        ingredientIds: ["sugar"],
      },
      {
        id: "s4",
        instruction: "Add the chocolatey cereal, seal tight, and SHAKE!",
        ingredientIds: [],
      },
      {
        id: "s5",
        instruction: "Pour it out and enjoy the snowy treats!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "frozen-banana-lollies",
    title: "Frozen Banana Lollies",
    cookTimeMins: 10,
    safety: "kid-solo",
    description:
      "Banana pops dipped in yogurt and sprinkles, then frozen like ice cream on a stick!",
    emoji: "🍌",
    placeholderColor: "#FFF176",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,150,200,0.2) 0 10px, transparent 10px 20px)",
    suggestedCookbook: "dessert",
    baseServings: 1,
    imageSrc: "/recipes/frozen-banana-lollies.svg",
    ingredients: [
      { id: "bananas", name: "2 bananas" },
      { id: "yogurt", name: "1/2 cup yogurt" },
      { id: "sprinkles", name: "Colorful sprinkles" },
      { id: "sticks", name: "Popsicle sticks" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Peel the bananas and cut them in half (adult can help if needed).",
        ingredientIds: ["bananas"],
      },
      {
        id: "s2",
        instruction: "Push a popsicle stick into the bottom of each banana half.",
        ingredientIds: ["sticks", "bananas"],
      },
      {
        id: "s3",
        instruction: "Dip the banana into the yogurt until covered.",
        ingredientIds: ["yogurt"],
      },
      {
        id: "s4",
        instruction: "Roll the banana in sprinkles.",
        ingredientIds: ["sprinkles"],
      },
      {
        id: "s5",
        instruction: "Freeze on a tray until hard like ice cream!",
        timerSeconds: 3600,
        timerLabel: "Freeze time",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "dirt-cake-worms",
    title: "Dirt Cake with Worms",
    cookTimeMins: 10,
    safety: "kid-solo",
    description:
      "Chocolate pudding 'dirt' with crushed cookies and gummy worms crawling out — silly and sweet!",
    emoji: "🪱",
    placeholderColor: "#8D6E63",
    pattern:
      "radial-gradient(circle at 50% 60%, rgba(0,0,0,0.15) 0 30%, transparent 31%)",
    suggestedCookbook: "dessert",
    baseServings: 1,
    imageSrc: "/recipes/dirt-cake-worms.svg",
    ingredients: [
      { id: "pudding", name: "1 cup chocolate pudding" },
      { id: "oreos", name: "4 Oreo cookies" },
      { id: "worms", name: "3 gummy worms" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Crush the Oreos in a bag until they look like dirt.",
        ingredientIds: ["oreos"],
      },
      {
        id: "s2",
        instruction: "Spoon the pudding into a clear cup.",
        ingredientIds: ["pudding"],
      },
      {
        id: "s3",
        instruction: "Sprinkle the cookie dirt on top of the pudding.",
        ingredientIds: ["oreos"],
      },
      {
        id: "s4",
        instruction: "Poke gummy worms into the dirt so they look like crawling out!",
        ingredientIds: ["worms"],
      },
    ],
  },
  {
    id: "apple-doughnuts",
    title: 'Apple "Doughnuts"',
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "Crisp apple rings topped with peanut butter and sprinkles — a healthy doughnut look-alike!",
    emoji: "🍎",
    placeholderColor: "#EF9A9A",
    pattern:
      "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.35) 0 18%, transparent 19%)",
    suggestedCookbook: "dessert",
    baseServings: 1,
    imageSrc: "/recipes/apple-doughnuts.svg",
    ingredients: [
      { id: "apple", name: "1 apple" },
      { id: "pb", name: "2 tbsp peanut butter (or alternative)" },
      { id: "toppings", name: "Chocolate chips or sprinkles" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Ask an adult to slice apple rings and remove the core.",
        ingredientIds: ["apple"],
        needsAdult: true,
        adultReason: "Apple slicing and coring needs a knife!",
      },
      {
        id: "s2",
        instruction: "Spread peanut butter on one side of each apple ring.",
        ingredientIds: ["pb"],
      },
      {
        id: "s3",
        instruction: "Sprinkle chocolate chips or sprinkles on top.",
        ingredientIds: ["toppings"],
      },
      {
        id: "s4",
        instruction: "Eat your healthy doughnut!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "strawberry-banana-smoothie",
    title: "Strawberry Banana Smoothie",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "A pink, frothy blend of banana, berries, milk, and yogurt — sip it with a straw!",
    emoji: "🍓",
    placeholderColor: "#F8BBD0",
    pattern:
      "repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.3) 0 8px, transparent 9px 20px)",
    suggestedCookbook: "drinks",
    baseServings: 1,
    imageSrc: "/recipes/strawberry-banana-smoothie.svg",
    ingredients: [
      { id: "banana", name: "1 banana" },
      { id: "berries", name: "5 frozen strawberries" },
      { id: "milk", name: "1/2 cup milk" },
      { id: "yogurt", name: "1/2 cup yogurt" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Peel the banana and break it into pieces.",
        ingredientIds: ["banana"],
      },
      {
        id: "s2",
        instruction: "Put banana, strawberries, milk, and yogurt into the blender.",
        ingredientIds: ["banana", "berries", "milk", "yogurt"],
      },
      {
        id: "s3",
        instruction: "Ask an adult to blend until smooth and pink.",
        timerSeconds: 30,
        timerLabel: "Blend smoothie",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Blenders are loud and need adult hands!",
      },
      {
        id: "s4",
        instruction: "Pour into a glass and add a straw!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "fresh-lemonade",
    title: "Fresh Squeezed Lemonade",
    cookTimeMins: 10,
    safety: "adult-helper",
    description:
      "Bright, tangy lemonade you stir yourself — perfect on a sunny day!",
    emoji: "🍋",
    placeholderColor: "#FFF59D",
    pattern:
      "repeating-linear-gradient(45deg, rgba(255,255,255,0.35) 0 12px, transparent 12px 24px)",
    suggestedCookbook: "drinks",
    baseServings: 1,
    imageSrc: "/recipes/fresh-lemonade.svg",
    ingredients: [
      { id: "lemons", name: "2 lemons" },
      { id: "water", name: "2 cups water" },
      { id: "sugar", name: "1/4 cup sugar" },
      { id: "ice", name: "Ice" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Ask an adult to cut the lemons in half.",
        ingredientIds: ["lemons"],
        needsAdult: true,
        adultReason: "Lemon cutting needs a knife!",
      },
      {
        id: "s2",
        instruction: "Squeeze the lemon juice into a pitcher (watch for seeds!).",
        ingredientIds: ["lemons"],
      },
      {
        id: "s3",
        instruction: "Add the water and sugar.",
        ingredientIds: ["water", "sugar"],
      },
      {
        id: "s4",
        instruction: "Stir, stir, stir until the sugar disappears.",
        ingredientIds: [],
      },
      {
        id: "s5",
        instruction: "Add ice and enjoy your refreshing drink!",
        ingredientIds: ["ice"],
      },
    ],
  },
  {
    id: "cozy-hot-cocoa",
    title: "Cozy Hot Cocoa",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "Warm chocolate milk topped with a marshmallow mountain — hug-in-a-mug!",
    emoji: "☕",
    placeholderColor: "#BCAAA4",
    pattern:
      "radial-gradient(circle at 50% 30%, rgba(255,255,255,0.45) 0 20%, transparent 21%)",
    suggestedCookbook: "drinks",
    baseServings: 1,
    imageSrc: "/recipes/cozy-hot-cocoa.svg",
    ingredients: [
      { id: "milk", name: "1 cup milk" },
      { id: "cocoa", name: "1 tbsp cocoa powder" },
      { id: "sugar", name: "1 tbsp sugar" },
      { id: "mallows", name: "Mini marshmallows" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Mix the cocoa powder and sugar in a mug.",
        ingredientIds: ["cocoa", "sugar"],
      },
      {
        id: "s2",
        instruction: "Add a little milk and stir until it's a paste.",
        ingredientIds: ["milk"],
      },
      {
        id: "s3",
        instruction: "Pour in the rest of the milk.",
        ingredientIds: ["milk"],
      },
      {
        id: "s4",
        instruction: "Ask an adult to microwave about 1 minute until warm.",
        timerSeconds: 60,
        timerLabel: "Warm cocoa",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Hot drinks and microwaves need adult help!",
      },
      {
        id: "s5",
        instruction: "Stir again and top with a mountain of marshmallows!",
        ingredientIds: ["mallows"],
      },
    ],
  },
  {
    id: "fancy-fruit-water",
    title: 'Fruit Infused "Fancy" Water',
    cookTimeMins: 5,
    safety: "kid-solo",
    description:
      "Cool water dressed up with cucumber, blueberries, and mint — like a spa in a glass!",
    emoji: "💧",
    placeholderColor: "#B2EBF2",
    pattern:
      "repeating-linear-gradient(180deg, rgba(255,255,255,0.35) 0 10px, transparent 10px 20px)",
    suggestedCookbook: "drinks",
    baseServings: 1,
    imageSrc: "/recipes/fancy-fruit-water.svg",
    ingredients: [
      { id: "water", name: "2 cups water" },
      { id: "cucumber", name: "3 slices of cucumber" },
      { id: "blueberries", name: "4 blueberries" },
      { id: "mint", name: "2 mint leaves" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Fill a glass or water bottle with cold water.",
        ingredientIds: ["water"],
      },
      {
        id: "s2",
        instruction: "Drop in the cucumber, blueberries, and mint.",
        ingredientIds: ["cucumber", "blueberries", "mint"],
      },
      {
        id: "s3",
        instruction: "Give it a little stir.",
        ingredientIds: [],
      },
      {
        id: "s4",
        instruction: "Let it sit a few minutes so the water tastes like fruit.",
        timerSeconds: 180,
        timerLabel: "Flavor soak",
        ingredientIds: [],
      },
      {
        id: "s5",
        instruction: "Sip your fancy spa drink!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "sparkling-fruit-punch",
    title: "Sparkling Fruit Punch",
    cookTimeMins: 5,
    safety: "kid-solo",
    description:
      "Orange and cranberry juices with a fizzy splash — watch the bubbles dance!",
    emoji: "🍹",
    placeholderColor: "#FF8A80",
    pattern:
      "radial-gradient(circle at 30% 70%, rgba(255,255,255,0.35) 0 10%, transparent 11%)",
    suggestedCookbook: "drinks",
    baseServings: 1,
    imageSrc: "/recipes/sparkling-fruit-punch.svg",
    ingredients: [
      { id: "orange", name: "1 cup orange juice" },
      { id: "cranberry", name: "1 cup cranberry juice" },
      { id: "soda", name: "1 cup lemon-lime soda" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Pour the orange juice and cranberry juice into a pitcher.",
        ingredientIds: ["orange", "cranberry"],
      },
      {
        id: "s2",
        instruction: "Stir them together.",
        ingredientIds: [],
      },
      {
        id: "s3",
        instruction: "Right before serving, pour in the soda to make it fizzy.",
        ingredientIds: ["soda"],
      },
      {
        id: "s4",
        instruction: "Pour into glasses and watch the bubbles!",
        ingredientIds: [],
      },
    ],
  },
  {
    id: "chocolate-milkshake",
    title: "Classic Chocolate Milkshake",
    cookTimeMins: 5,
    safety: "adult-helper",
    description:
      "Thick, creamy chocolate milkshake — a tall glass of cold dessert joy!",
    emoji: "🍫",
    placeholderColor: "#A1887F",
    pattern:
      "repeating-linear-gradient(-30deg, rgba(255,255,255,0.2) 0 10px, transparent 10px 20px)",
    suggestedCookbook: "drinks",
    baseServings: 1,
    imageSrc: "/recipes/chocolate-milkshake.svg",
    ingredients: [
      { id: "icecream", name: "2 scoops vanilla ice cream" },
      { id: "milk", name: "1/2 cup milk" },
      { id: "syrup", name: "2 tbsp chocolate syrup" },
    ],
    steps: [
      {
        id: "s1",
        instruction: "Put the ice cream, milk, and syrup into the blender.",
        ingredientIds: ["icecream", "milk", "syrup"],
      },
      {
        id: "s2",
        instruction: "Ask an adult to blend on high for about 30 seconds.",
        timerSeconds: 30,
        timerLabel: "Blend shake",
        ingredientIds: [],
        needsAdult: true,
        adultReason: "Blenders need adult hands!",
      },
      {
        id: "s3",
        instruction: "Pour into a tall glass.",
        ingredientIds: [],
      },
      {
        id: "s4",
        instruction: "Add whipped cream on top if you have it!",
        ingredientIds: [],
      },
    ],
  },
];

export function getRecipeById(id: string): Recipe | undefined {
  return RECIPES.find((r) => r.id === id);
}
