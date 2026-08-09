const fs = require("fs");
const path = require("path");

const dir = path.join("public", "recipes");
fs.mkdirSync(dir, { recursive: true });

const recipes = [
  [
    "no-bake-breakfast-balls",
    "#E8C39E",
    [
      ["circle", 200, 220, 70, "#C4A484"],
      ["circle", 320, 200, 65, "#B8956C"],
      ["circle", 260, 300, 60, "#D4B896"],
      ["circle", 180, 200, 8, "#4E342E"],
      ["circle", 300, 180, 7, "#4E342E"],
      ["circle", 250, 280, 9, "#4E342E"],
      ["circle", 220, 250, 6, "#4E342E"],
    ],
  ],
  [
    "rainbow-yogurt-parfait",
    "#A8E6CF",
    [
      ["rect", 180, 120, 160, 280, "#FFFFFF", 20],
      ["rect", 190, 320, 140, 60, "#FF8A80"],
      ["rect", 190, 260, 140, 60, "#FFF59D"],
      ["rect", 190, 200, 140, 60, "#81D4FA"],
      ["rect", 190, 140, 140, 60, "#F8BBD0"],
      ["circle", 220, 230, 10, "#E53935"],
      ["circle", 280, 290, 8, "#1E88E5"],
    ],
  ],
  [
    "smores-overnight-oats",
    "#D4A574",
    [
      ["rect", 170, 140, 180, 240, "#8D6E63", 24],
      ["rect", 180, 150, 160, 80, "#5D4037", 12],
      ["circle", 230, 280, 18, "#FFFDE7"],
      ["circle", 280, 300, 16, "#FFFDE7"],
      ["circle", 250, 330, 14, "#FFFDE7"],
      ["rect", 200, 250, 40, 12, "#D7CCC8", 4],
    ],
  ],
  [
    "funny-face-toast",
    "#FFE566",
    [
      ["rect", 140, 150, 240, 200, "#FFCC80", 28],
      ["circle", 200, 220, 28, "#FFE082"],
      ["circle", 300, 220, 28, "#FFE082"],
      ["circle", 200, 220, 10, "#5D4037"],
      ["circle", 300, 220, 10, "#5D4037"],
      ["smile", 200, 300, 320, 300, 260, 340, "#E53935"],
    ],
  ],
  [
    "microwave-egg-sandwich",
    "#FFD1A1",
    [
      ["ellipse", 260, 280, 120, 40, "#D7CCC8"],
      ["ellipse", 260, 240, 110, 50, "#FFF59D"],
      ["ellipse", 260, 220, 100, 20, "#FFECB3"],
      ["rect", 200, 200, 120, 20, "#FFE082", 6],
      ["ellipse", 260, 190, 110, 35, "#D7CCC8"],
    ],
  ],
  [
    "magic-2-ingredient-pancakes",
    "#FFB84D",
    [
      ["ellipse", 260, 320, 130, 35, "#F57C00"],
      ["ellipse", 260, 280, 120, 40, "#FFB300"],
      ["ellipse", 260, 240, 110, 38, "#FFCA28"],
      ["ellipse", 260, 200, 100, 35, "#FFD54F"],
      ["path", "M330 180 Q360 160 350 200", "none", "#E53935"],
    ],
  ],
  [
    "english-muffin-pizzas",
    "#FF8A5B",
    [
      ["circle", 260, 260, 120, "#FFE0B2"],
      ["circle", 260, 260, 100, "#E53935"],
      ["circle", 230, 230, 18, "#FFECB3"],
      ["circle", 290, 250, 20, "#FFECB3"],
      ["circle", 250, 290, 16, "#FFECB3"],
      ["circle", 220, 270, 12, "#C62828"],
      ["circle", 300, 280, 12, "#C62828"],
    ],
  ],
  [
    "walking-tacos",
    "#F4C430",
    [
      ["rect", 180, 140, 160, 240, "#FF9800", 16],
      ["rect", 190, 150, 140, 50, "#FFF3E0", 8],
      ["polygon", "200,220 240,300 220,300", "#FFEB3B"],
      ["polygon", "250,230 290,310 270,310", "#FFEB3B"],
      ["circle", 230, 250, 10, "#8D6E63"],
      ["circle", 270, 270, 8, "#E53935"],
    ],
  ],
  [
    "turkey-cheese-pinwheels",
    "#FFCCBC",
    [
      ["circle", 260, 260, 100, "#FFE0B2"],
      ["circle", 260, 260, 70, "#EF9A9A"],
      ["circle", 260, 260, 40, "#FFE082"],
      ["circle", 260, 260, 15, "#FFF8E1"],
    ],
  ],
  [
    "microwave-mac-mug",
    "#FFD54F",
    [
      ["path", "M180 180 L180 360 Q260 400 340 360 L340 180 Z", "#FFECB3"],
      ["rect", 180, 160, 160, 40, "#FFCC80", 10],
      ["ellipse", 260, 200, 60, 20, "#FFC107"],
      ["rect", 340, 200, 30, 80, "#FFCC80", 8],
    ],
  ],
  [
    "super-simple-quesadillas",
    "#FFB347",
    [
      ["path", "M140 300 Q260 120 380 300 Z", "#FFE0B2"],
      ["path", "M160 290 Q260 160 360 290", "#FFCC80"],
      ["circle", 230, 250, 8, "#FFECB3"],
      ["circle", 280, 240, 7, "#FFECB3"],
      ["line", 260, 160, 260, 300, "#E0E0E0"],
    ],
  ],
  [
    "diy-taco-bar",
    "#81C784",
    [
      ["path", "M160 180 Q260 120 360 180 L340 360 Q260 320 180 360 Z", "#FFE0B2"],
      ["path", "M190 220 L330 220 L320 280 L200 280 Z", "#8D6E63"],
      ["path", "M200 250 L320 250 L310 300 L210 300 Z", "#66BB6A"],
      ["circle", 240, 270, 8, "#FFECB3"],
      ["circle", 280, 275, 7, "#FFECB3"],
    ],
  ],
  [
    "ants-on-a-log",
    "#AED581",
    [
      ["rect", 120, 230, 280, 50, "#8BC34A", 20],
      ["rect", 140, 240, 240, 30, "#D7CCC8", 10],
      ["circle", 180, 255, 10, "#4E342E"],
      ["circle", 220, 255, 10, "#4E342E"],
      ["circle", 260, 255, 10, "#4E342E"],
      ["circle", 300, 255, 10, "#4E342E"],
      ["circle", 340, 255, 10, "#4E342E"],
    ],
  ],
  [
    "fruit-kabobs-dip",
    "#F48FB1",
    [
      ["line", 260, 80, 260, 400, "#BCAAA4"],
      ["circle", 260, 120, 28, "#E53935"],
      ["circle", 260, 180, 26, "#7E57C2"],
      ["circle", 260, 240, 28, "#FFCA28"],
      ["circle", 260, 300, 26, "#FF7043"],
      ["circle", 260, 360, 24, "#66BB6A"],
    ],
  ],
  [
    "rice-krispie-treats",
    "#FFF59D",
    [
      ["rect", 150, 160, 220, 200, "#FFE082", 16],
      ["line", 150, 230, 370, 230, "#FFD54F"],
      ["line", 150, 300, 370, 300, "#FFD54F"],
      ["line", 223, 160, 223, 360, "#FFD54F"],
      ["line", 296, 160, 296, 360, "#FFD54F"],
    ],
  ],
  [
    "puppy-chow",
    "#D7CCC8",
    [
      ["rect", 160, 140, 200, 260, "#90CAF9", 20],
      ["polygon", "160,200 260,140 360,200", "#64B5F6"],
      ["circle", 220, 260, 20, "#FFF8E1"],
      ["circle", 280, 280, 18, "#FFF8E1"],
      ["circle", 250, 320, 16, "#FFF8E1"],
      ["circle", 300, 240, 14, "#FFF8E1"],
    ],
  ],
  [
    "frozen-banana-lollies",
    "#FFF176",
    [
      ["rect", 245, 300, 30, 120, "#D7CCC8", 8],
      ["ellipse", 260, 200, 45, 110, "#FFE082"],
      ["circle", 240, 160, 8, "#E53935"],
      ["circle", 280, 180, 7, "#1E88E5"],
      ["circle", 250, 220, 8, "#43A047"],
      ["circle", 275, 240, 7, "#FB8C00"],
    ],
  ],
  [
    "dirt-cake-worms",
    "#8D6E63",
    [
      ["rect", 180, 140, 160, 260, "#FFFFFF", 16],
      ["rect", 190, 280, 140, 100, "#5D4037", 8],
      ["rect", 190, 200, 140, 90, "#3E2723", 8],
      ["path", "M210 250 Q240 220 270 260 Q300 290 320 240", "none", "#E91E63"],
      ["path", "M200 300 Q230 280 250 320", "none", "#FF5722"],
    ],
  ],
  [
    "apple-doughnuts",
    "#EF9A9A",
    [
      ["circle", 260, 260, 110, "#E53935"],
      ["circle", 260, 260, 40, "#FFF8E1"],
      ["circle", 220, 230, 8, "#FFECB3"],
      ["circle", 300, 250, 7, "#7E57C2"],
      ["circle", 250, 300, 8, "#42A5F5"],
    ],
  ],
  [
    "strawberry-banana-smoothie",
    "#F8BBD0",
    [
      ["path", "M190 160 L190 360 Q260 400 330 360 L330 160 Z", "#F48FB1"],
      ["ellipse", 260, 160, 70, 24, "#F8BBD0"],
      ["rect", 250, 80, 12, 90, "#90CAF9", 4],
      ["ellipse", 256, 70, 18, 12, "#EF5350"],
    ],
  ],
  [
    "fresh-lemonade",
    "#FFF59D",
    [
      ["path", "M180 160 L200 380 L320 380 L340 160 Z", "#FFF59D"],
      ["rect", 180, 150, 160, 30, "#FFEE58", 8],
      ["circle", 260, 260, 40, "#FDD835"],
      ["circle", 230, 300, 10, "#FFFFFF"],
      ["circle", 290, 320, 8, "#FFFFFF"],
    ],
  ],
  [
    "cozy-hot-cocoa",
    "#BCAAA4",
    [
      ["path", "M170 180 L190 380 L330 380 L350 180 Z", "#EFEBE9"],
      ["ellipse", 260, 180, 90, 30, "#6D4C41"],
      ["rect", 350, 220, 40, 70, "#BCAAA4", 10],
      ["circle", 230, 160, 16, "#FFFDE7"],
      ["circle", 270, 150, 18, "#FFFDE7"],
      ["circle", 250, 140, 14, "#FFFDE7"],
    ],
  ],
  [
    "fancy-fruit-water",
    "#B2EBF2",
    [
      ["path", "M190 120 L200 380 L320 380 L330 120 Z", "#E0F7FA"],
      ["ellipse", 260, 120, 70, 20, "#B2EBF2"],
      ["ellipse", 240, 220, 30, 12, "#81C784"],
      ["circle", 280, 260, 10, "#5C6BC0"],
      ["circle", 250, 300, 9, "#5C6BC0"],
      ["path", "M300 200 Q320 180 310 220", "none", "#66BB6A"],
    ],
  ],
  [
    "sparkling-fruit-punch",
    "#FF8A80",
    [
      ["path", "M190 140 L210 380 L310 380 L330 140 Z", "#FF8A80"],
      ["ellipse", 260, 140, 70, 22, "#FFAB91"],
      ["circle", 240, 220, 6, "#FFFFFF"],
      ["circle", 280, 260, 5, "#FFFFFF"],
      ["circle", 250, 300, 7, "#FFFFFF"],
      ["circle", 290, 320, 4, "#FFFFFF"],
    ],
  ],
  [
    "chocolate-milkshake",
    "#A1887F",
    [
      ["path", "M200 160 L220 400 L300 400 L320 160 Z", "#8D6E63"],
      ["ellipse", 260, 160, 60, 24, "#A1887F"],
      ["path", "M230 120 Q260 80 290 120 Q260 140 230 120", "#FAFAFA"],
      ["rect", 254, 40, 12, 90, "#CE93D8", 4],
    ],
  ],
];

function shapeToSvg(s) {
  const t = s[0];
  if (t === "circle") {
    return `<circle cx="${s[1]}" cy="${s[2]}" r="${s[3]}" fill="${s[4]}"/>`;
  }
  if (t === "ellipse") {
    return `<ellipse cx="${s[1]}" cy="${s[2]}" rx="${s[3]}" ry="${s[4]}" fill="${s[5]}"/>`;
  }
  if (t === "rect") {
    return `<rect x="${s[1]}" y="${s[2]}" width="${s[3]}" height="${s[4]}" fill="${s[5]}" rx="${s[6] || 0}"/>`;
  }
  if (t === "polygon") {
    return `<polygon points="${s[1]}" fill="${s[2]}"/>`;
  }
  if (t === "path") {
    const fill = s[2] || "none";
    const stroke = s[3] || (fill === "none" ? "#333" : "none");
    const sw = fill === "none" ? 10 : 0;
    return `<path d="${s[1]}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round"/>`;
  }
  if (t === "line") {
    return `<line x1="${s[1]}" y1="${s[2]}" x2="${s[3]}" y2="${s[4]}" stroke="${s[5]}" stroke-width="6" stroke-linecap="round"/>`;
  }
  if (t === "smile") {
    return `<path d="M${s[1]} ${s[2]} Q${s[5]} ${s[6]} ${s[3]} ${s[4]}" fill="none" stroke="${s[7]}" stroke-width="10" stroke-linecap="round"/>`;
  }
  return "";
}

for (const [id, bg, shapes] of recipes) {
  const body = shapes.map(shapeToSvg).join("\n  ");
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 520 520">
  <rect width="520" height="520" fill="${bg}"/>
  ${body}
</svg>
`;
  fs.writeFileSync(path.join(dir, `${id}.svg`), svg);
}

console.log(`Wrote ${recipes.length} SVG designs`);
