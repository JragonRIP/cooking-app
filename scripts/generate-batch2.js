/**
 * Generates lib/more-recipes.ts and SVG placeholders for batch 2 (50 recipes).
 * Run: node scripts/generate-batch2.js
 */
const fs = require("fs");
const path = require("path");

/** @typedef {{ id: string, name: string }} Ing */
/** @typedef {{ instruction: string, ingredientIds?: string[], needsAdult?: boolean, adultReason?: string, timerSeconds?: number, timerLabel?: string }} StepIn */

const recipes = [
  // Breakfast 26-37
  {
    id: "pbj-sushi-rolls",
    title: "Peanut Butter & Jelly Sushi Rolls",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "PB&J rolled up and sliced into fun sushi circles — lunchbox magic!",
    emoji: "🍣",
    color: "#FFCC80",
    category: "breakfast",
    ingredients: [
      ["tortilla", "1 flour tortilla"],
      ["pb", "1 tbsp peanut butter (or alternative)"],
      ["jelly", "1 tbsp jelly"],
    ],
    steps: [
      ["Lay the tortilla flat.", ["tortilla"]],
      ["Spread peanut butter all over it.", ["pb"]],
      ["Spread jelly on top of the peanut butter.", ["jelly"]],
      ["Roll the tortilla up tightly like a log.", ["tortilla"]],
      ["Ask an adult to slice the roll into sushi circles.", [], { needsAdult: true, adultReason: "Slicing needs a knife!" }],
    ],
  },
  {
    id: "microwave-french-toast-mug",
    title: "Microwave French Toast in a Mug",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Cozy cinnamon French toast that cooks in a mug — breakfast in a flash!",
    emoji: "🍞",
    color: "#FFE0B2",
    category: "breakfast",
    ingredients: [
      ["bread", "1 slice of bread"],
      ["egg", "1 egg"],
      ["milk", "2 tbsp milk"],
      ["cinnamon", "A pinch of cinnamon"],
    ],
    steps: [
      ["Tear the bread into bite-sized pieces and put them in a mug.", ["bread"]],
      ["In a small bowl, whisk the egg, milk, and cinnamon.", ["egg", "milk", "cinnamon"]],
      ["Pour the egg mix over the bread in the mug.", []],
      ["Ask an adult to microwave for 1 minute or until the egg is set.", [], { needsAdult: true, adultReason: "Hot mug and microwave!", timerSeconds: 60, timerLabel: "Microwave" }],
      ["Top with a little syrup if you like!", []],
    ],
  },
  {
    id: "breakfast-fruit-pizza",
    title: "Breakfast Fruit Pizza",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "A yogurt-covered crust topped with berry 'pepperoni' — pizza for breakfast!",
    emoji: "🍕",
    color: "#F8BBD0",
    category: "breakfast",
    ingredients: [
      ["crust", "1 large rice cake or watermelon slice"],
      ["yogurt", "2 tbsp Greek yogurt"],
      ["fruit", "Sliced strawberries and blueberries"],
    ],
    steps: [
      ["Use the rice cake or watermelon slice as your pizza crust.", ["crust"]],
      ["Spread yogurt over the top like sauce.", ["yogurt"]],
      ["Decorate with fruit toppings.", ["fruit"]],
      ["Slice into triangles and eat!", []],
    ],
  },
  {
    id: "apple-sandwich-bites",
    title: "Apple Sandwich Bites",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Crunchy apple rings stuffed with peanut butter and granola — sandwich style!",
    emoji: "🍎",
    color: "#EF9A9A",
    category: "breakfast",
    ingredients: [
      ["apple", "1 apple"],
      ["pb", "2 tbsp peanut butter (or alternative)"],
      ["granola", "1 tbsp granola"],
    ],
    steps: [
      ["Ask an adult to slice the apple into thick rings and remove the core.", ["apple"], { needsAdult: true, adultReason: "Apple slicing needs a knife!" }],
      ["Spread peanut butter on one apple ring.", ["pb"]],
      ["Sprinkle granola on the peanut butter.", ["granola"]],
      ["Place another apple ring on top to make a sandwich!", ["apple"]],
    ],
  },
  {
    id: "frozen-yogurt-berry-bark",
    title: "Frozen Yogurt Berry Bark",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Yogurt frozen into snap-apart bark with berries and honey — icy breakfast candy!",
    emoji: "🫐",
    color: "#CE93D8",
    category: "breakfast",
    ingredients: [
      ["yogurt", "1 cup vanilla yogurt"],
      ["berries", "1/2 cup mixed berries"],
      ["honey", "1 tsp honey"],
    ],
    steps: [
      ["Line a tray with wax paper.", []],
      ["Spread the yogurt in a thin layer on the paper.", ["yogurt"]],
      ["Drop berries all over and drizzle with honey.", ["berries", "honey"]],
      ["Freeze until hard.", [], { timerSeconds: 7200, timerLabel: "Freeze time" }],
      ["Break into pieces and eat like a cold snack!", []],
    ],
  },
  {
    id: "cereal-trail-mix-bowl",
    title: "Cereal Trail Mix Bowl",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Cheerios, raisins, and pretzels swimming in milk — crunchy, sweet, and salty!",
    emoji: "🥣",
    color: "#FFF59D",
    category: "breakfast",
    ingredients: [
      ["cheerios", "1/2 cup Cheerios"],
      ["raisins", "1/4 cup raisins"],
      ["pretzels", "1/4 cup pretzels"],
      ["milk", "1/2 cup milk"],
    ],
    steps: [
      ["Mix the cereal, raisins, and pretzels in a bowl.", ["cheerios", "raisins", "pretzels"]],
      ["Pour the milk over the top.", ["milk"]],
      ["Dig into your crunchy breakfast trail mix!", []],
    ],
  },
  {
    id: "banana-sushi-cereal",
    title: "Banana Sushi",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "A nut-butter banana rolled in crispy cereal, sliced into sushi rounds!",
    emoji: "🍌",
    color: "#FFE566",
    category: "breakfast",
    ingredients: [
      ["banana", "1 banana"],
      ["butter", "1 tbsp almond or peanut butter"],
      ["cereal", "2 tbsp crispy rice cereal"],
    ],
    steps: [
      ["Peel the banana.", ["banana"]],
      ["Spread the nut butter all over the outside.", ["butter"]],
      ["Roll the banana in the cereal so it sticks.", ["cereal"]],
      ["Ask an adult to slice into sushi rounds.", [], { needsAdult: true, adultReason: "Slicing needs a knife!" }],
    ],
  },
  {
    id: "overnight-chia-pudding",
    title: "Overnight Chia Pudding",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Tiny chia seeds turn into thick pudding overnight — morning magic in a jar!",
    emoji: "🫙",
    color: "#B39DDB",
    category: "breakfast",
    ingredients: [
      ["milk", "1/2 cup milk"],
      ["chia", "2 tbsp chia seeds"],
      ["maple", "1 tsp maple syrup"],
      ["vanilla", "1/4 tsp vanilla"],
    ],
    steps: [
      ["Mix all the ingredients in a small jar.", ["milk", "chia", "maple", "vanilla"]],
      ["Stir really well so the seeds don't clump.", []],
      ["Put the lid on and leave it in the fridge overnight.", [], { timerSeconds: 300, timerLabel: "Optional chill — or skip & wait overnight" }],
      ["In the morning, enjoy your thick pudding!", []],
    ],
  },
  {
    id: "ham-cheese-breakfast-croissants",
    title: "Ham & Cheese Breakfast Croissants",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Flaky croissant stuffed with ham and melty cheese — bakery vibes at home!",
    emoji: "🥐",
    color: "#FFCC80",
    category: "breakfast",
    ingredients: [
      ["croissant", "1 pre-made croissant"],
      ["ham", "1 slice of ham"],
      ["cheese", "1 slice of cheese"],
    ],
    steps: [
      ["Ask an adult to carefully slice the croissant in half.", ["croissant"], { needsAdult: true, adultReason: "Slicing the croissant needs help!" }],
      ["Put the ham and cheese inside.", ["ham", "cheese"]],
      ["Eat cold, or ask an adult to warm 20 seconds to melt the cheese.", [], { needsAdult: true, adultReason: "Microwave is hot!", timerSeconds: 20, timerLabel: "Warm croissant" }],
    ],
  },
  {
    id: "hard-boiled-egg-chicks",
    title: 'Hard Boiled Egg "Chicks"',
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Peeled eggs dressed up as little chicks with carrot beaks — almost too cute to eat!",
    emoji: "🐣",
    color: "#FFF9C4",
    category: "breakfast",
    ingredients: [
      ["eggs", "2 hard-boiled eggs (pre-cooked)"],
      ["carrot", "1 small carrot"],
      ["eyes", "2 peppercorns or olive bits"],
    ],
    steps: [
      ["Peel the hard-boiled eggs.", ["eggs"]],
      ["Ask an adult to cut tiny carrot triangles for a beak and feet.", ["carrot"], { needsAdult: true, adultReason: "Carrot cutting needs a knife!" }],
      ["Press the carrot beak and olive eyes into the egg to make a chick!", ["eyes"]],
    ],
  },
  {
    id: "bagel-fruit-flowers",
    title: "Bagel with Fruit Flowers",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Cream-cheese bagels decorated with strawberry petals — garden on toast!",
    emoji: "🌸",
    color: "#F48FB1",
    category: "breakfast",
    ingredients: [
      ["bagel", "1 mini bagel"],
      ["cream", "2 tbsp cream cheese"],
      ["fruit", "Sliced strawberries and grapes"],
    ],
    steps: [
      ["Ask an adult to toast the bagel.", ["bagel"], { needsAdult: true, adultReason: "Toasters get hot!" }],
      ["Spread cream cheese on both halves.", ["cream"]],
      ["Arrange strawberry slices like petals and a grape for the center.", ["fruit"]],
    ],
  },
  {
    id: "breakfast-burrito-wrap",
    title: "Breakfast Burrito Wrap",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Scrambled egg and cheese rolled in a tortilla — a handheld morning burrito!",
    emoji: "🌯",
    color: "#FFB74D",
    category: "breakfast",
    ingredients: [
      ["tortilla", "1 small tortilla"],
      ["egg", "1 scrambled egg (pre-cooked)"],
      ["cheese", "2 tbsp shredded cheese"],
    ],
    steps: [
      ["Put the scrambled egg in the middle of the tortilla.", ["tortilla", "egg"]],
      ["Sprinkle cheese on top.", ["cheese"]],
      ["Fold the sides in and roll it up like a burrito.", []],
    ],
  },

  // Dinner 38-50
  {
    id: "pita-bread-pizzas",
    title: "Pita Bread Pizzas",
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Crispy pita crusts with sauce and bubbly cheese — personal pizzas in minutes!",
    emoji: "🫓",
    color: "#FF8A65",
    category: "dinner",
    ingredients: [
      ["pita", "1 pita bread"],
      ["sauce", "2 tbsp tomato sauce"],
      ["cheese", "1/2 cup shredded cheese"],
    ],
    steps: [
      ["Lay the pita flat on a baking sheet.", ["pita"]],
      ["Spread sauce and sprinkle cheese.", ["sauce", "cheese"]],
      ["Ask an adult to bake at 350°F for 5–7 minutes until bubbly.", [], { needsAdult: true, adultReason: "Ovens are hot!", timerSeconds: 360, timerLabel: "Bake pita pizza" }],
    ],
  },
  {
    id: "ham-cheese-sliders",
    title: "Ham & Cheese Sliders",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Tiny dinner-roll sandwiches stacked with ham and Swiss — lunchbox heroes!",
    emoji: "🥪",
    color: "#FFCCBC",
    category: "dinner",
    ingredients: [
      ["rolls", "2 small dinner rolls"],
      ["ham", "2 slices of ham"],
      ["cheese", "2 slices of Swiss cheese"],
    ],
    steps: [
      ["Pull the rolls apart and open them.", ["rolls"]],
      ["Put ham and cheese inside each one.", ["ham", "cheese"]],
      ["Pack cold in a lunchbox or eat right away!", []],
    ],
  },
  {
    id: "rainbow-pasta-salad",
    title: "Rainbow Pasta Salad",
    cookTimeMins: 10,
    safety: "kid-solo",
    description: "Cold pasta tossed with peas, carrots, and zesty dressing — a colorful bowl!",
    emoji: "🌈",
    color: "#81D4FA",
    category: "dinner",
    ingredients: [
      ["pasta", "1 cup cooked rotini pasta (cold)"],
      ["peas", "1/4 cup peas"],
      ["carrots", "1/4 cup chopped carrots"],
      ["dressing", "2 tbsp Italian dressing"],
    ],
    steps: [
      ["Put the cold pasta in a big bowl.", ["pasta"]],
      ["Add the peas and carrots.", ["peas", "carrots"]],
      ["Pour the dressing over and stir it all up.", ["dressing"]],
    ],
  },
  {
    id: "tuna-salad-boats",
    title: "Tuna Salad Boats",
    cookTimeMins: 10,
    safety: "kid-solo",
    description: "Celery boats filled with creamy tuna salad — sail into snack time!",
    emoji: "⛵",
    color: "#80CBC4",
    category: "dinner",
    ingredients: [
      ["tuna", "1 can of tuna (drained)"],
      ["mayo", "1 tbsp mayo"],
      ["celery", "2 large celery stalks"],
    ],
    steps: [
      ["Mix the tuna and mayo in a small bowl.", ["tuna", "mayo"]],
      ["Wash the celery and dry it.", ["celery"]],
      ["Spoon the tuna mix into the celery boats.", []],
    ],
  },
  {
    id: "hummus-veggie-wraps",
    title: "Hummus & Veggie Wraps",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Creamy hummus, lettuce, and cucumber rolled tight — fresh and crunchy!",
    emoji: "🥬",
    color: "#C5E1A5",
    category: "dinner",
    ingredients: [
      ["tortilla", "1 tortilla"],
      ["hummus", "2 tbsp hummus"],
      ["lettuce", "Shredded lettuce"],
      ["cucumber", "Thin cucumber slices"],
    ],
    steps: [
      ["Spread hummus all over the tortilla.", ["tortilla", "hummus"]],
      ["Lay the lettuce and cucumbers on top.", ["lettuce", "cucumber"]],
      ["Roll it up tight and enjoy!", []],
    ],
  },
  {
    id: "mini-bagel-turkey-burgers",
    title: "Mini Bagel Turkey Burgers",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Tiny bagel 'burgers' with turkey, cheese, and mustard — big flavor, small size!",
    emoji: "🥯",
    color: "#FFAB91",
    category: "dinner",
    ingredients: [
      ["bagel", "1 mini bagel"],
      ["turkey", "2 slices of deli turkey"],
      ["cheese", "1 slice of cheese"],
      ["mustard", "1 tsp mustard"],
    ],
    steps: [
      ["Spread mustard on the bagel.", ["bagel", "mustard"]],
      ["Fold the turkey and cheese to fit on the small bagel.", ["turkey", "cheese"]],
      ["Close the burger and take a big bite!", []],
    ],
  },
  {
    id: "taco-salad-crunch-bowls",
    title: "Taco Salad Crunch Bowls",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Crushed chips topped with beans, lettuce, and cheese — a crunchy taco bowl!",
    emoji: "🥗",
    color: "#FFD54F",
    category: "dinner",
    ingredients: [
      ["chips", "1 handful of tortilla chips"],
      ["beans", "1/4 cup black beans"],
      ["lettuce", "1/4 cup shredded lettuce"],
      ["cheese", "2 tbsp shredded cheese"],
    ],
    steps: [
      ["Crush the chips slightly and put them in a bowl.", ["chips"]],
      ["Top with beans, lettuce, and cheese.", ["beans", "lettuce", "cheese"]],
      ["Mix it up for a crunchy salad!", []],
    ],
  },
  {
    id: "pizza-hawaiian-sliders",
    title: "Pizza Hawaiian Sliders",
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Sweet Hawaiian rolls with pepperoni and melty cheese — pizza party sliders!",
    emoji: "🍕",
    color: "#FF8A80",
    category: "dinner",
    ingredients: [
      ["rolls", "2 Hawaiian sweet rolls"],
      ["pepperoni", "2 slices of pepperoni"],
      ["cheese", "1 cheese stick (cut in half)"],
    ],
    steps: [
      ["Open the rolls.", ["rolls"]],
      ["Put a pepperoni slice and half a cheese stick in each.", ["pepperoni", "cheese"]],
      ["Ask an adult to warm in the microwave for 15 seconds.", [], { needsAdult: true, adultReason: "Microwave melts cheese — adult help!", timerSeconds: 15, timerLabel: "Melt cheese" }],
    ],
  },
  {
    id: "chicken-salad-grapes",
    title: "Chicken Salad Grapes",
    cookTimeMins: 10,
    safety: "kid-solo",
    description: "Creamy chicken salad with sweet grape halves — scoop it up with crackers!",
    emoji: "🍇",
    color: "#E1BEE7",
    category: "dinner",
    ingredients: [
      ["chicken", "1/2 cup canned chicken (drained)"],
      ["mayo", "1 tbsp mayo"],
      ["grapes", "5 large grapes (cut in half)"],
    ],
    steps: [
      ["Mix the chicken and mayo.", ["chicken", "mayo"]],
      ["Stir in the grape halves for a sweet and savory lunch.", ["grapes"]],
      ["Eat with crackers!", []],
    ],
  },
  {
    id: "cheese-meat-kabobs",
    title: "Cheese & Meat Kabobs",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Cheese cubes, ham, and cherry tomatoes on a stick — party food you build!",
    emoji: "🍢",
    color: "#FFCDD2",
    category: "dinner",
    ingredients: [
      ["cheese", "Cheese cubes"],
      ["ham", "Folded ham slices"],
      ["tomatoes", "Cherry tomatoes"],
    ],
    steps: [
      ["Carefully slide a cheese cube onto a skewer. Watch the sharp point!", ["cheese"]],
      ["Add a piece of ham, then a tomato.", ["ham", "tomatoes"]],
      ["Repeat until the stick is full!", []],
    ],
  },
  {
    id: "veggie-sushi-rolls",
    title: "Veggie Sushi Rolls",
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Rice and cucumber rolled in nori or a tortilla — homemade veggie sushi!",
    emoji: "🍱",
    color: "#A5D6A7",
    category: "dinner",
    ingredients: [
      ["wrap", "1 sheet of nori or a tortilla"],
      ["rice", "1/2 cup cooked rice"],
      ["cucumber", "Thin cucumber strips"],
    ],
    steps: [
      ["Lay the nori or tortilla flat.", ["wrap"]],
      ["Spread the rice in a thin layer.", ["rice"]],
      ["Put the cucumber strips in a line.", ["cucumber"]],
      ["Roll it up, then ask an adult to slice into rounds.", [], { needsAdult: true, adultReason: "Slicing sushi needs a knife!" }],
    ],
  },
  {
    id: "microwave-bean-cheese-burrito",
    title: "Microwave Bean & Cheese Burrito",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Warm refried beans and cheese in a soft tortilla — melty burrito bliss!",
    emoji: "🌮",
    color: "#FFB74D",
    category: "dinner",
    ingredients: [
      ["tortilla", "1 tortilla"],
      ["beans", "1/4 cup refried beans"],
      ["cheese", "2 tbsp shredded cheese"],
    ],
    steps: [
      ["Spread the beans on the tortilla.", ["tortilla", "beans"]],
      ["Sprinkle cheese on top.", ["cheese"]],
      ["Ask an adult to microwave for 30 seconds.", [], { needsAdult: true, adultReason: "Hot burrito — adult microwave help!", timerSeconds: 30, timerLabel: "Warm burrito" }],
      ["Roll it up carefully — it will be hot!", []],
    ],
  },
  {
    id: "mini-corn-dogs",
    title: "Mini Corn Dogs",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Bite-sized corn dogs heated until hot — fair-food fun at home!",
    emoji: "🌭",
    color: "#FFCC80",
    category: "dinner",
    ingredients: [["corndogs", "4 frozen mini corn dogs"]],
    steps: [
      ["Ask an adult to place the corn dogs on a microwave-safe plate.", ["corndogs"], { needsAdult: true, adultReason: "Microwave cooking needs adult help!" }],
      ["Microwave for 45–60 seconds until hot all the way through.", [], { needsAdult: true, adultReason: "Hot food from the microwave!", timerSeconds: 60, timerLabel: "Heat corn dogs" }],
      ["Let them cool for a minute before eating.", [], { timerSeconds: 60, timerLabel: "Cool down" }],
    ],
  },

  // Dessert 51-63
  {
    id: "no-bake-pb-bars",
    title: "No-Bake Peanut Butter Bars",
    cookTimeMins: 10,
    safety: "kid-solo",
    description: "Peanut butter, honey, and graham crumbs pressed into chill-and-slice bars!",
    emoji: "🟫",
    color: "#D7CCC8",
    category: "dessert",
    ingredients: [
      ["pb", "1/2 cup peanut butter (or alternative)"],
      ["honey", "1/4 cup honey"],
      ["crumbs", "1 cup graham cracker crumbs"],
    ],
    steps: [
      ["Mix everything in a bowl until it's like dough.", ["pb", "honey", "crumbs"]],
      ["Press it into a small square pan.", []],
      ["Put it in the fridge until firm.", [], { timerSeconds: 3600, timerLabel: "Chill bars" }],
      ["Cut into small squares.", []],
    ],
  },
  {
    id: "fruit-salsa-cinnamon-chips",
    title: "Fruit Salsa & Cinnamon Chips",
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Chopped fruit salsa scooped up with crunchy cinnamon-sugar chips!",
    emoji: "🍎",
    color: "#FFAB91",
    category: "dessert",
    ingredients: [
      ["apple", "1 apple (finely chopped)"],
      ["berries", "5 strawberries (finely chopped)"],
      ["tortilla", "1 tortilla"],
      ["cinnamon", "A sprinkle of cinnamon and sugar"],
    ],
    steps: [
      ["Mix the chopped fruit in a bowl.", ["apple", "berries"]],
      ["Ask an adult to cut the tortilla into triangles and toast until crunchy.", ["tortilla"], { needsAdult: true, adultReason: "Oven toasting needs adult help!", timerSeconds: 480, timerLabel: "Toast chips" }],
      ["Sprinkle cinnamon and sugar on the warm chips.", ["cinnamon"]],
      ["Use the chips to scoop up the fruit salsa!", []],
    ],
  },
  {
    id: "smores-marshmallow-pops",
    title: "S'mores Marshmallow Pops",
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Marshmallows dipped in chocolate and graham crumbs — campfire pops!",
    emoji: "🍡",
    color: "#BCAAA4",
    category: "dessert",
    ingredients: [
      ["mallows", "4 large marshmallows"],
      ["chips", "1/4 cup chocolate chips"],
      ["graham", "2 graham crackers (crushed)"],
    ],
    steps: [
      ["Put a stick into each marshmallow.", ["mallows"]],
      ["Ask an adult to melt the chocolate in the microwave.", ["chips"], { needsAdult: true, adultReason: "Hot melted chocolate!", timerSeconds: 30, timerLabel: "Melt chocolate" }],
      ["Dip the marshmallow in chocolate, then roll in graham crumbs.", ["graham"]],
    ],
  },
  {
    id: "edible-jello-play-dough",
    title: "Edible Jello Play Dough",
    cookTimeMins: 10,
    safety: "kid-solo",
    description: "Colorful dough you can squish, sculpt, and snack on — play then eat!",
    emoji: "🎨",
    color: "#F48FB1",
    category: "dessert",
    ingredients: [
      ["flour", "1 cup flour"],
      ["jello", "1 pack of Jello powder"],
      ["water", "1/2 cup warm water"],
    ],
    steps: [
      ["Mix the flour and Jello powder.", ["flour", "jello"]],
      ["Add the warm water and stir until it's like dough.", ["water"]],
      ["Knead it with clean hands — play with it, then eat it!", []],
    ],
  },
  {
    id: "chocolate-dipped-pretzels",
    title: "Chocolate Dipped Pretzels",
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Salty pretzel rods dipped in chocolate and sprinkles — sweet and crunchy!",
    emoji: "🥨",
    color: "#A1887F",
    category: "dessert",
    ingredients: [
      ["pretzels", "10 pretzel rods"],
      ["chips", "1/2 cup chocolate chips"],
      ["sprinkles", "Sprinkles"],
    ],
    steps: [
      ["Ask an adult to melt the chocolate in a tall glass in the microwave.", ["chips"], { needsAdult: true, adultReason: "Hot melted chocolate!", timerSeconds: 45, timerLabel: "Melt chocolate" }],
      ["Dip half of each pretzel rod into the chocolate.", ["pretzels"]],
      ["Shake on sprinkles and let them dry on wax paper.", ["sprinkles"]],
    ],
  },
  {
    id: "frozen-grapes",
    title: "Frozen Grapes",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Grapes frozen into tiny sorbet balls — the simplest cold treat ever!",
    emoji: "🍇",
    color: "#CE93D8",
    category: "dessert",
    ingredients: [["grapes", "1 bunch of grapes"]],
    steps: [
      ["Wash the grapes and pull them off the stems.", ["grapes"]],
      ["Put them in a plastic bag and freeze them.", [], { timerSeconds: 7200, timerLabel: "Freeze grapes" }],
      ["Eat them like tiny fruit sorbet balls!", []],
    ],
  },
  {
    id: "yogurt-covered-blueberries",
    title: "Yogurt Covered Blueberries",
    cookTimeMins: 10,
    safety: "kid-solo",
    description: "Blueberries dipped in yogurt and frozen — little frosty berry gems!",
    emoji: "🔵",
    color: "#90CAF9",
    category: "dessert",
    ingredients: [
      ["berries", "1/2 cup blueberries"],
      ["yogurt", "1/2 cup vanilla yogurt"],
    ],
    steps: [
      ["Use a toothpick to dip each blueberry into the yogurt.", ["berries", "yogurt"]],
      ["Place them on a tray with wax paper.", []],
      ["Freeze until the yogurt is hard.", [], { timerSeconds: 3600, timerLabel: "Freeze berries" }],
    ],
  },
  {
    id: "no-bake-cheesecake-jars",
    title: "No-Bake Cheesecake Jars",
    cookTimeMins: 10,
    safety: "kid-solo",
    description: "Creamy cheesecake layers in a jar with graham crumbs and a berry on top!",
    emoji: "🧁",
    color: "#FCE4EC",
    category: "dessert",
    ingredients: [
      ["crumbs", "1/4 cup graham cracker crumbs"],
      ["cream", "1/2 cup cream cheese (soft)"],
      ["sugar", "2 tbsp powdered sugar"],
      ["whip", "1/4 cup whipped cream"],
    ],
    steps: [
      ["Put crumbs in the bottom of a small jar.", ["crumbs"]],
      ["Mix the cream cheese, sugar, and whipped cream until smooth.", ["cream", "sugar", "whip"]],
      ["Spoon the mix over the crumbs.", []],
      ["Top with a berry!", []],
    ],
  },
  {
    id: "popcorn-trail-mix",
    title: "Popcorn Trail Mix",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Popcorn, M&Ms, and mini pretzels — the perfect movie-night mix!",
    emoji: "🍿",
    color: "#FFF59D",
    category: "dessert",
    ingredients: [
      ["popcorn", "2 cups popped popcorn"],
      ["candy", "1/4 cup M&Ms"],
      ["pretzels", "1/4 cup mini pretzels"],
    ],
    steps: [
      ["Mix everything in a big bowl.", ["popcorn", "candy", "pretzels"]],
      ["Grab a handful for movie night!", []],
    ],
  },
  {
    id: "banana-split-bites",
    title: "Banana Split Bites",
    cookTimeMins: 10,
    safety: "adult-helper",
    description: "Banana rounds with chocolate, nuts, and cherry bits — mini banana splits!",
    emoji: "🍒",
    color: "#FFECB3",
    category: "dessert",
    ingredients: [
      ["banana", "1 banana"],
      ["syrup", "1 tbsp chocolate syrup"],
      ["nuts", "1 tbsp chopped peanuts (or seeds)"],
      ["cherry", "1 maraschino cherry"],
    ],
    steps: [
      ["Ask an adult to slice the banana into thick rounds.", ["banana"], { needsAdult: true, adultReason: "Banana slicing may need a knife!" }],
      ["Drizzle a little chocolate on each round.", ["syrup"]],
      ["Sprinkle with nuts and put a tiny piece of cherry on top.", ["nuts", "cherry"]],
    ],
  },
  {
    id: "rice-cake-animal-faces",
    title: "Rice Cake Animal Faces",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Nut butter rice cakes turned into lions, bears, or cats with fruit faces!",
    emoji: "🐯",
    color: "#FFE082",
    category: "dessert",
    ingredients: [
      ["cake", "1 rice cake"],
      ["butter", "1 tbsp nut butter"],
      ["fruit", "Banana, blueberry, and strawberry slices"],
    ],
    steps: [
      ["Spread nut butter on the rice cake.", ["cake", "butter"]],
      ["Use banana for ears, blueberries for eyes, and strawberry for a nose.", ["fruit"]],
      ["Make a lion, a bear, or a cat!", []],
    ],
  },
  {
    id: "graham-ice-cream-sandwiches",
    title: "Graham Cracker Ice Cream Sandwiches",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Soft ice cream squished between graham crackers, then frozen firm!",
    emoji: "🍦",
    color: "#D7CCC8",
    category: "dessert",
    ingredients: [
      ["graham", "2 graham cracker squares"],
      ["icecream", "1 scoop of softened ice cream"],
    ],
    steps: [
      ["Put the ice cream on one graham cracker.", ["graham", "icecream"]],
      ["Press the other cracker on top.", ["graham"]],
      ["Freeze until the ice cream is firm again.", [], { timerSeconds: 3600, timerLabel: "Freeze sandwich" }],
    ],
  },
  {
    id: "simple-fruit-leather-rolls",
    title: "Simple Fruit Leather Rolls",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Applesauce baked thin into peel-and-roll fruit leather — chewy and sweet!",
    emoji: "📜",
    color: "#FFAB91",
    category: "dessert",
    ingredients: [
      ["applesauce", "1 cup applesauce"],
      ["honey", "1 tsp honey"],
    ],
    steps: [
      ["Ask an adult to spread applesauce thin on a silicone-lined baking sheet.", ["applesauce", "honey"], { needsAdult: true, adultReason: "Oven prep needs adult help!" }],
      ["Ask an adult to bake on the lowest setting 2–3 hours until not sticky.", [], { needsAdult: true, adultReason: "Long oven time — grown-up job!", timerSeconds: 7200, timerLabel: "Bake leather (or skip & wait)" }],
      ["Peel it off and roll it up!", []],
    ],
  },

  // Drinks 64-75
  {
    id: "watermelon-slushie",
    title: "Watermelon Slushie",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Frozen watermelon blended into a snowy pink slush — sip with a spoon!",
    emoji: "🍉",
    color: "#EF9A9A",
    category: "drinks",
    ingredients: [
      ["melon", "2 cups frozen watermelon chunks"],
      ["water", "1/2 cup water"],
      ["lime", "1 tsp lime juice"],
    ],
    steps: [
      ["Put everything in the blender.", ["melon", "water", "lime"]],
      ["Ask an adult to blend until snowy.", [], { needsAdult: true, adultReason: "Blenders need adult hands!", timerSeconds: 30, timerLabel: "Blend slushie" }],
      ["Pour into a glass and drink with a spoon!", []],
    ],
  },
  {
    id: "orange-creamsicle-smoothie",
    title: "Orange Creamsicle Smoothie",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Orange juice and vanilla yogurt blended icy — tastes like a creamsicle!",
    emoji: "🍊",
    color: "#FFCC80",
    category: "drinks",
    ingredients: [
      ["juice", "1/2 cup orange juice"],
      ["yogurt", "1/2 cup vanilla yogurt"],
      ["ice", "1/2 cup ice"],
    ],
    steps: [
      ["Put all ingredients in the blender.", ["juice", "yogurt", "ice"]],
      ["Ask an adult to blend until smooth.", [], { needsAdult: true, adultReason: "Blenders need adult hands!", timerSeconds: 30, timerLabel: "Blend smoothie" }],
      ["Pour and enjoy your creamsicle sip!", []],
    ],
  },
  {
    id: "homemade-cold-apple-cider",
    title: "Homemade Cold Apple Cider",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Chilled apple juice with cinnamon and an orange slice — fancy fall vibes!",
    emoji: "🍎",
    color: "#FFCC80",
    category: "drinks",
    ingredients: [
      ["juice", "1 cup apple juice"],
      ["cinnamon", "A tiny pinch of cinnamon"],
      ["orange", "1 orange slice"],
    ],
    steps: [
      ["Pour the apple juice into a glass.", ["juice"]],
      ["Stir in the cinnamon.", ["cinnamon"]],
      ["Add the orange slice for a fancy look.", ["orange"]],
    ],
  },
  {
    id: "blueberry-lemonade",
    title: "Blueberry Lemonade",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Mashed blueberries turn lemonade purple — science experiment you can drink!",
    emoji: "💜",
    color: "#CE93D8",
    category: "drinks",
    ingredients: [
      ["lemonade", "1 cup lemonade"],
      ["berries", "5 blueberries (mashed)"],
    ],
    steps: [
      ["Mash the blueberries in the bottom of a glass with a spoon.", ["berries"]],
      ["Pour the lemonade over the top.", ["lemonade"]],
      ["Watch the drink turn purple!", []],
    ],
  },
  {
    id: "pineapple-coconut-mocktail",
    title: "Pineapple Coconut Mocktail",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Pineapple juice and coconut milk over ice — a tropical mocktail!",
    emoji: "🏝️",
    color: "#FFF59D",
    category: "drinks",
    ingredients: [
      ["pineapple", "1/2 cup pineapple juice"],
      ["coconut", "1/4 cup coconut milk"],
      ["ice", "Ice"],
    ],
    steps: [
      ["Put ice in a glass.", ["ice"]],
      ["Pour in the juice and coconut milk.", ["pineapple", "coconut"]],
      ["Stir it up for a tropical treat!", []],
    ],
  },
  {
    id: "chocolate-banana-milk",
    title: "Chocolate Banana Milk",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Blended banana and chocolate syrup make extra-creamy chocolate milk!",
    emoji: "🥛",
    color: "#BCAAA4",
    category: "drinks",
    ingredients: [
      ["milk", "1 cup milk"],
      ["banana", "1/2 banana"],
      ["syrup", "1 tbsp chocolate syrup"],
    ],
    steps: [
      ["Put everything in the blender.", ["milk", "banana", "syrup"]],
      ["Ask an adult to blend until the banana disappears.", [], { needsAdult: true, adultReason: "Blenders need adult hands!", timerSeconds: 30, timerLabel: "Blend milk" }],
      ["Pour and sip your creamy chocolate milk!", []],
    ],
  },
  {
    id: "grape-juice-spritzer",
    title: "Grape Juice Spritzer",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Grape juice topped with sparkling water — bubbly purple fun!",
    emoji: "🫧",
    color: "#BA68C8",
    category: "drinks",
    ingredients: [
      ["grape", "1/2 cup grape juice"],
      ["sparkle", "1/2 cup sparkling water"],
      ["ice", "Ice"],
    ],
    steps: [
      ["Fill a glass with ice.", ["ice"]],
      ["Pour in the grape juice.", ["grape"]],
      ["Top with sparkling water for bubbles!", ["sparkle"]],
    ],
  },
  {
    id: "raspberry-iced-tea",
    title: 'Raspberry Iced "Tea"',
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Cold-brewed raspberry tea with honey — cool, fruity, and caffeine-free!",
    emoji: "🫖",
    color: "#F8BBD0",
    category: "drinks",
    ingredients: [
      ["water", "1 cup cold water"],
      ["tea", "1 decaf raspberry tea bag"],
      ["honey", "1 tsp honey"],
    ],
    steps: [
      ["Put the tea bag in the cold water and let it sit for 10 minutes.", ["water", "tea"], { timerSeconds: 600, timerLabel: "Steep tea" }],
      ["Take the bag out and stir in the honey.", ["honey"]],
      ["Add ice for a cool drink!", []],
    ],
  },
  {
    id: "peach-fizz",
    title: "Peach Fizz",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Peach juice mixed with lemon-lime soda — sweet, fuzzy, and fizzy!",
    emoji: "🍑",
    color: "#FFAB91",
    category: "drinks",
    ingredients: [
      ["peach", "1/2 cup peach juice"],
      ["soda", "1/2 cup lemon-lime soda"],
    ],
    steps: [
      ["Mix the juice and soda in a glass.", ["peach", "soda"]],
      ["Sip your sweet peach fizz!", []],
    ],
  },
  {
    id: "fresh-strawberry-milk",
    title: "Fresh Strawberry Milk",
    cookTimeMins: 5,
    safety: "kid-solo",
    description: "Real mashed strawberries stirred into cold milk — better than the carton!",
    emoji: "🍓",
    color: "#F48FB1",
    category: "drinks",
    ingredients: [
      ["milk", "1 cup milk"],
      ["berries", "3 strawberries (mashed)"],
      ["sugar", "1 tsp sugar"],
    ],
    steps: [
      ["Mash the strawberries with the sugar until jammy.", ["berries", "sugar"]],
      ["Stir the strawberry mix into the cold milk.", ["milk"]],
      ["Drink your homemade strawberry milk!", []],
    ],
  },
  {
    id: "tropical-green-smoothie",
    title: "Tropical Green Smoothie",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Pineapple, banana, and spinach blend bright green — you can't taste the greens!",
    emoji: "🟢",
    color: "#A5D6A7",
    category: "drinks",
    ingredients: [
      ["juice", "1/2 cup pineapple juice"],
      ["spinach", "1/2 cup spinach"],
      ["banana", "1/2 banana"],
      ["ice", "Ice"],
    ],
    steps: [
      ["Put everything in the blender.", ["juice", "spinach", "banana", "ice"]],
      ["Ask an adult to blend until bright green and smooth.", [], { needsAdult: true, adultReason: "Blenders need adult hands!", timerSeconds: 30, timerLabel: "Blend green" }],
      ["Pour and taste the tropical surprise!", []],
    ],
  },
  {
    id: "warm-honey-vanilla-milk",
    title: "Warm Honey Vanilla Milk",
    cookTimeMins: 5,
    safety: "adult-helper",
    description: "Warm milk with honey and vanilla — the coziest bedtime sip!",
    emoji: "🌙",
    color: "#FFF8E1",
    category: "drinks",
    ingredients: [
      ["milk", "1 cup milk"],
      ["vanilla", "1/2 tsp vanilla"],
      ["honey", "1 tsp honey"],
    ],
    steps: [
      ["Mix everything in a mug.", ["milk", "vanilla", "honey"]],
      ["Ask an adult to microwave for 1 minute until warm.", [], { needsAdult: true, adultReason: "Hot drinks need adult help!", timerSeconds: 60, timerLabel: "Warm milk" }],
      ["Sip slowly before bedtime!", []],
    ],
  },
];

function escape(s) {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function stepToTs(step, idx) {
  const [instruction, ingredientIds = [], extra = {}] = step;
  const lines = [
    `      {`,
    `        id: "s${idx + 1}",`,
    `        instruction: "${escape(instruction)}",`,
  ];
  if (extra.timerSeconds) {
    lines.push(`        timerSeconds: ${extra.timerSeconds},`);
    if (extra.timerLabel) lines.push(`        timerLabel: "${escape(extra.timerLabel)}",`);
  }
  lines.push(
    `        ingredientIds: [${ingredientIds.map((id) => `"${id}"`).join(", ")}],`,
  );
  if (extra.needsAdult) {
    lines.push(`        needsAdult: true,`);
    if (extra.adultReason) lines.push(`        adultReason: "${escape(extra.adultReason)}",`);
  }
  lines.push(`      },`);
  return lines.join("\n");
}

function recipeToTs(r) {
  const pattern =
    "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.35) 0 14%, transparent 15%)";
  return `  {
    id: "${r.id}",
    title: "${escape(r.title)}",
    cookTimeMins: ${r.cookTimeMins},
    safety: "${r.safety}",
    description: "${escape(r.description)}",
    emoji: "${r.emoji}",
    placeholderColor: "${r.color}",
    pattern: "${pattern}",
    suggestedCookbook: "${r.category}",
    baseServings: 1,
    imageSrc: "/recipes/${r.id}.svg",
    ingredients: [
${r.ingredients.map(([id, name]) => `      { id: "${id}", name: "${escape(name)}" },`).join("\n")}
    ],
    steps: [
${r.steps.map((s, i) => stepToTs(s, i)).join("\n")}
    ],
  },`;
}

const outTs = `import type { Recipe } from "./types";

/** Extra mini-chef recipes (batch 2) */
export const MORE_RECIPES: Recipe[] = [
${recipes.map(recipeToTs).join("\n")}
];
`;

fs.writeFileSync(path.join("lib", "more-recipes.ts"), outTs);

const dir = path.join("public", "recipes");
fs.mkdirSync(dir, { recursive: true });

for (const r of recipes) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 520 520">
  <rect width="520" height="520" fill="${r.color}"/>
  <circle cx="260" cy="250" r="120" fill="rgba(255,255,255,0.35)"/>
  <text x="260" y="280" text-anchor="middle" font-size="120">${r.emoji}</text>
</svg>
`;
  fs.writeFileSync(path.join(dir, `${r.id}.svg`), svg);
}

console.log(`Wrote ${recipes.length} recipes + SVGs`);
