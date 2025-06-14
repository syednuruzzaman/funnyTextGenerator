const funnyTexts = [
    "I'm not arguing, I'm just explaining why I'm right.",
    "I'm addicted to placebos. I could quit, but it wouldn't make a difference.",
    "I'm not lazy, I'm just on energy-saving mode.",
    "I'm not a morning person. I'm not a night person. I'm a 'whenever the coffee kicks in' person.",
    "I'm reading a book about anti-gravity. It's impossible to put down.",
    "I'm not arguing, I'm just passionately expressing my point of view while completely dismissing yours.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm not lazy, I'm just conserving energy for more important things... like binge-watching Netflix.",
    "Why don't scientists trust atoms? Because they make up everything.",
    "I'm not a vegetarian because I love animals. I'm a vegetarian because I hate plants.",
    "What do you call a fake noodle? An impasta.",
    "I'm not a morning person. I'm a 'whenever the snooze button stops working' person.",
    "I'm addicted to placebos. I could quit, but I'd rather not.",
    "Why don't eggs tell jokes? They'd crack each other up.",
    "I'm not a night owl, I'm a 'whenever the Wi-Fi is working' person.",
    "What do you call a can opener that doesn't work? A can't opener.",
    "I'm not lazy, I'm just on research mode – researching the couch and the fridge.",
    "Why did the scarecrow win an award? Because he was outstanding in his field.",
    "I'm not a procrastinator, I'm just prioritizing my tasks... in reverse order.",
    "What do you call a bear with no socks on? Barefoot.",
    "I'm not a coffee person. I'm a 'without coffee, I'm a zombie' person.",
    "Why did the bicycle fall over? Because it was two-tired.",
    "I'm not arguing, I'm just explaining why my way is the best way – and you're wrong.",
    "Coffee is my love language.",
    "Procrastination is my superpower.",
    "Life is short. Eat the donut.",
    "My brain is 90% song lyrics and 10% remembering where I put my keys.",
    "I'm on a whiskey diet. I've lost three days already.",
    "The best part of waking up is the coffee, not the sunrise.",
    "My life is a mess, but my snacks are on point.",
    "I'm not bossy, I'm just good at getting things done.",
    "Someday I'll organize my closet. Maybe.",
    "Life hack: just pretend you're a functioning adult.",
    "My brain is a browser with too many tabs open.",
    "Today's goals: eat pizza, watch Netflix, repeat.",
    "My social life is a spreadsheet with one entry: me.",
    "I'm a master of doing the bare minimum.",
    "My therapist says I'm making progress. Progress toward what, I'm not sure.",
    "The only thing I'm consistent about is being inconsistent.",
    "My favorite hobby is collecting tabs on my browser.",
    "If I'm being honest, I've been practicing my 'adulting' face.",
    "Sometimes I just need a hug from a tree.",
    "My life motto: 'Good enough' is, well, good enough.",
];

const generateBtn = document.getElementById('generate-btn');
const funnyTextElement = document.getElementById('funny-text');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const shareBtn = document.getElementById('share-btn');
const historyList = document.getElementById('history-list');

let history = [];

generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * funnyTexts.length);
    const funnyText = funnyTexts[randomIndex];
    funnyTextElement.textContent = funnyText;
    addHistoryItem(funnyText);
});

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(funnyTextElement.textContent);
    alert('Text copied to clipboard!');
});

clearBtn.addEventListener('click', () => {
    funnyTextElement.textContent = '';
    history = [];
    updateHistoryList();
});

shareBtn.addEventListener('click', () => {
    const text = funnyTextElement.textContent;
    if (text) {
        const shareData = {
            title: 'Funny Text Generator',
            text: text,
        };
        navigator.share(shareData);
    } else {
        alert('No text to share!');
    }
});

function updateHistoryList() {
    historyList.innerHTML = '';
    history.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        historyList.appendChild(li);
    });
}

function addHistoryItem(text) {
    if (history.length >= 3) {
        history.shift();
    }
    history.push(text);
    updateHistoryList();
}

