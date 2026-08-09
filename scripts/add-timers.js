const fs = require("fs");
const path = require("path");

const file = path.join("lib", "recipes.ts");
let src = fs.readFileSync(file, "utf8");

const timers = [
  {
    needle: 'instruction: "Put the bowl in the fridge for 20 minutes to make it firm.",',
    insert: `instruction: "Put the bowl in the fridge for 20 minutes to make it firm.",
        timerSeconds: 1200,
        timerLabel: "Chill time",`,
  },
  {
    needle: 'instruction: "Put the lid on and leave it in the fridge overnight.",',
    insert: `instruction: "Put the lid on and leave it in the fridge overnight.",
        timerSeconds: 300,
        timerLabel: "Optional chill — or skip & wait overnight",`,
  },
  {
    needle:
      'instruction: "Ask an adult to microwave for 45–60 seconds until the egg is puffy.",',
    insert: `instruction: "Ask an adult to microwave for 45–60 seconds until the egg is puffy.",
        timerSeconds: 60,
        timerLabel: "Microwave egg",`,
  },
  {
    needle:
      'instruction: "Ask an adult to pour small circles onto a warm greased pan.",',
    insert: `instruction: "Ask an adult to pour small circles onto a warm greased pan.",
        timerSeconds: 120,
        timerLabel: "Cook pancakes",`,
  },
  {
    needle:
      'instruction: "Ask an adult to bake at 375°F for 5–8 minutes until melty.",',
    insert: `instruction: "Ask an adult to bake at 375°F for 5–8 minutes until melty.",
        timerSeconds: 360,
        timerLabel: "Bake pizzas",`,
  },
  {
    needle:
      'instruction:\n          "Ask an adult to microwave in 2-minute bursts until the pasta is soft.",',
    insert: `instruction:
          "Ask an adult to microwave in 2-minute bursts until the pasta is soft.",
        timerSeconds: 240,
        timerLabel: "Cook pasta",`,
  },
  {
    needle:
      'instruction: "Ask an adult to cook in a warm pan 2 minutes per side.",',
    insert: `instruction: "Ask an adult to cook in a warm pan 2 minutes per side.",
        timerSeconds: 240,
        timerLabel: "Quesadilla pan time",`,
  },
  {
    needle:
      'instruction: "Ask an adult to melt butter and marshmallows until gooey.",',
    insert: `instruction: "Ask an adult to melt butter and marshmallows until gooey.",
        timerSeconds: 90,
        timerLabel: "Melt marshmallows",`,
  },
  {
    needle:
      'instruction: "Let it cool, then ask an adult to cut into squares!",',
    insert: `instruction: "Let it cool, then ask an adult to cut into squares!",
        timerSeconds: 600,
        timerLabel: "Cooling time",`,
  },
  {
    needle:
      'instruction: "Ask an adult to melt chocolate and peanut butter in the microwave.",',
    insert: `instruction: "Ask an adult to melt chocolate and peanut butter in the microwave.",
        timerSeconds: 30,
        timerLabel: "Melt chocolate",`,
  },
  {
    needle: 'instruction: "Freeze on a tray until hard like ice cream!",',
    insert: `instruction: "Freeze on a tray until hard like ice cream!",
        timerSeconds: 3600,
        timerLabel: "Freeze time",`,
  },
  {
    needle: 'instruction: "Ask an adult to blend until smooth and pink.",',
    insert: `instruction: "Ask an adult to blend until smooth and pink.",
        timerSeconds: 30,
        timerLabel: "Blend smoothie",`,
  },
  {
    needle:
      'instruction: "Ask an adult to microwave about 1 minute until warm.",',
    insert: `instruction: "Ask an adult to microwave about 1 minute until warm.",
        timerSeconds: 60,
        timerLabel: "Warm cocoa",`,
  },
  {
    needle:
      'instruction: "Let it sit a few minutes so the water tastes like fruit.",',
    insert: `instruction: "Let it sit a few minutes so the water tastes like fruit.",
        timerSeconds: 180,
        timerLabel: "Flavor soak",`,
  },
  {
    needle:
      'instruction: "Ask an adult to blend on high for about 30 seconds.",',
    insert: `instruction: "Ask an adult to blend on high for about 30 seconds.",
        timerSeconds: 30,
        timerLabel: "Blend shake",`,
  },
  {
    needle: 'instruction: "Let it cool for a minute before eating!",',
    insert: `instruction: "Let it cool for a minute before eating!",
        timerSeconds: 60,
        timerLabel: "Cool down",`,
  },
];

let count = 0;
for (const { needle, insert } of timers) {
  if (!src.includes(needle)) {
    console.warn("MISSING:", needle.slice(0, 60));
    continue;
  }
  if (src.includes(insert)) continue;
  src = src.replace(needle, insert);
  count += 1;
}

// Add baseServings: 1 after each cookTimeMins line if missing — simpler: once after suggestedCookbook patterns
if (!src.includes("baseServings:")) {
  src = src.replace(
    /(suggestedCookbook: "[a-z]+",\n)/g,
    "$1    baseServings: 1,\n",
  );
}

fs.writeFileSync(file, src);
console.log("Added timers to", count, "steps");
