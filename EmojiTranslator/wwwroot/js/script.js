﻿const emojiDict = {
    "happy": "😊",
    "love": "❤️",
    "cat": "🐱",
    "dog": "🐶",
    "sun": "☀️",
    "pizza": "🍕",
    "car": "🚗",
    "tree": "🌳",
    "dance": "💃",
    "music": "🎵",
    "fire": "🔥",
    "laugh": "😂",
    "smile": "🙂",
    "sad": "😢",
    "angry": "😠",
    "cool": "😎",
    "coffee": "☕",
    "book": "📖",
    "star": "⭐",
    "flower": "🌸",
    "school": "🏫",
    "movie": "🎬",
    "money": "💵",
    "gift": "🎁",
    "game": "🎮",
    "heart": "💖",
    "thumbs up": "👍",
    "clap": "👏",
    "wink": "😉",
    "cry": "😭",
    "kiss": "😘",
    "party": "🎉",
    "rocket": "🚀",
    "lightbulb": "💡",
    "computer": "💻",
    "phone": "📱",
    "house": "🏠",
    "bicycle": "🚲",
    "airplane": "✈️",
    "train": "🚆",
    "bus": "🚌",
    "beer": "🍺",
    "wine": "🍷",
    "burger": "🍔",
    "fries": "🍟",
    "ice cream": "🍦",
    "cake": "🍰",
    "chocolate": "🍫",
    "cookie": "🍪",
    "apple": "🍎",
    "banana": "🍌",
    "grapes": "🍇",
    "watermelon": "🍉",
    "strawberry": "🍓",
    "cherry": "🍒",
    "peach": "🍑",
    "pineapple": "🍍",
    "avocado": "🥑",
    "broccoli": "🥦",
    "carrot": "🥕",
    "corn": "🌽",
    "potato": "🥔",
    "tomato": "🍅",
    "egg": "🥚",
    "bacon": "🥓",
    "cheese": "🧀",
    "bread": "🍞",
    "sandwich": "🥪",
    "sushi": "🍣",
    "taco": "🌮",
    "burrito": "🌯",
    "salad": "🥗",
    "spaghetti": "🍝",
    "ramen": "🍜",
    "steak": "🥩",
    "chicken": "🍗",
    "fish": "🐟",
    "shrimp": "🍤",
    "crab": "🦀",
    "lobster": "🦞",
    "octopus": "🐙",
    "whale": "🐳",
    "dolphin": "🐬",
    "shark": "🦈",
    "turtle": "🐢",
    "frog": "🐸",
    "snake": "🐍",
    "dragon": "🐉",
    "unicorn": "🦄",
    "horse": "🐴",
    "cow": "🐮",
    "pig": "🐷",
    "sheep": "🐑",
    "goat": "🐐",
    "chicken": "🐔",
    "duck": "🦆",
    "eagle": "🦅",
    "owl": "🦉",
    "bat": "🦇",
    "butterfly": "🦋",
    "bee": "🐝",
    "ladybug": "🐞",
    "ant": "🐜",
    "spider": "🕷️",
    "scorpion": "🦂",
    "cricket": "🦗",
    "snail": "🐌",
    "worm": "🪱",
    "microbe": "🦠",
    "bacteria": "🦠",
    "virus": "🦠",
    "pill": "💊",
    "syringe": "💉",
    "thermometer": "🌡️",
    "stethoscope": "🩺",
    "tooth": "🦷",
    "bone": "🦴",
    "brain": "🧠",
    "heart": "❤️",
    "lungs": "🫁",
    "kidney": "🫀",
    "liver": "🫁",
    "stomach": "🫁",
    "intestine": "🫁",
    "eye": "👁️",
    "ear": "👂",
    "nose": "👃",
    "mouth": "👄",
    "tongue": "👅",
    "hand": "✋",
    "foot": "🦶",
    "leg": "🦵",
    "arm": "💪",
    "head": "🗣️",
    "face": "🙂",
    "hair": "💇",
    "beard": "🧔",
    "mustache": "👨‍🦰",
    "glasses": "👓",
    "hat": "🎩",
    "scarf": "🧣",
    "gloves": "🧤",
    "coat": "🧥",
    "shirt": "👕",
    "pants": "👖",
    "dress": "👗",
    "skirt": "👚",
    "shoes": "👟",
    "socks": "🧦",
    "boots": "👢",
    "sandals": "👡",
    "flip flops": "🩴",
    "bag": "👜",
    "backpack": "🎒",
    "wallet": "👛",
    "watch": "⌚",
    "ring": "💍",
    "necklace": "📿",
    "bracelet": "📿",
    "earrings": "📿",
    "crown": "👑",
    "medal": "🏅",
    "trophy": "🏆",
    "ribbon": "🎀",
    "balloon": "🎈",
    "confetti": "🎊",
    "sparkles": "✨",
    "fireworks": "🎆",
    "sparkler": "🎇",
    "candle": "🕯️",
    "lamp": "💡",
    "flashlight": "🔦",
    "lantern": "🏮",
    "torch": "🔥",
    "fire": "🔥",
    "water": "💧",
    "rain": "🌧️",
    "snow": "❄️",
    "wind": "💨",
    "cloud": "☁️",
    "storm": "⛈️",
    "lightning": "⚡",
    "tornado": "🌪️",
    "hurricane": "🌀",
    "earthquake": "🌍",
    "volcano": "🌋",
    "mountain": "🏔️",
    "hill": "⛰️",
    "valley": "🏞️",
    "river": "🏞️",
    "lake": "🏞️",
    "ocean": "🌊",
    "beach": "🏖️",
    "island": "🏝️",
    "desert": "🏜️",
    "forest": "🌲",
    "jungle": "🌴",
};

function translate() {
    const inputText = document.getElementById("inputText").value;
    const words = inputText.split(" ");
    const translated = words.map(word => {
        const lowerWord = word.toLowerCase();
        return emojiDict[lowerWord] || emojiDict[lowerWord.replace(/s$/, '')] || word;
    }).join(" ");
    document.getElementById("output").innerText = translated;
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.header').classList.toggle('dark-mode');
    document.querySelector('.translator-container').classList.toggle('dark-mode');
    document.querySelector('textarea').classList.toggle('dark-mode');
    document.querySelectorAll('button').forEach(button => button.classList.toggle('dark-mode'));
    document.getElementById('output').classList.toggle('dark-mode');
    document.querySelector('.footer').classList.toggle('dark-mode');
}

document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button").addEventListener("click", translate);
});
