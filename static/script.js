function countWordsAndChars(text) {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).length : 0;
    const chars = text.length;
    return { words, chars };
}

function updateCounts() {
    const text = document.getElementById("textInput").value;
    const { words, chars } = countWordsAndChars(text);
    document.getElementById("wordCount").innerText = words;
    document.getElementById("charCount").innerText = chars;
}

function clearText() {
    document.getElementById("textInput").value = "";
    updateCounts();
}

document.addEventListener("DOMContentLoaded", () => {
    const textarea = document.getElementById("textInput");
    textarea.addEventListener("input", updateCounts);
    updateCounts();
});
