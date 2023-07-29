const inputText = document.getElementById('inputText');
const charCount = document.getElementById('charCount');
const chineseCharCount = document.getElementById('chineseCharCount');
const letterCount = document.getElementById('letterCount');
const punctuationCount = document.getElementById('punctuationCount');
const chinesePunctuationCount = document.getElementById('chinesePunctuationCount');
const clearButton = document.getElementById('clearButton');

inputText.addEventListener('input', updateCharacterCounts);
clearButton.addEventListener('click', clearText);

function updateCharacterCounts() {
  const text = inputText.value;
  const characterCount = countCharacters(text);
  charCount.textContent = `文本长度统计：${characterCount}`;

  const chineseCount = countChineseCharacters(text);
  chineseCharCount.textContent = `汉字数统计：${chineseCount}`;

  const letterRegex = /[a-zA-Z]/g;
  const letterMatch = text.match(letterRegex);
  const letterCountValue = letterMatch ? letterMatch.length : 0;
  letterCount.textContent = `字母数统计：${letterCountValue}`;

  const punctuationRegex = /[,.!?;:'"(){}\[\]<>\/\\`~@#$%^&*_+=|–-]/g;
  const punctuationMatch = text.match(punctuationRegex);
  const punctuationCountValue = punctuationMatch ? punctuationMatch.length : 0;
  punctuationCount.textContent = `标点符号数统计：${punctuationCountValue}`;

  const chinesePunctuationRegex = /[，。！？；：“”‘’（）【】《》、—…]/g;
  const chinesePunctuationMatch = text.match(chinesePunctuationRegex);
  const chinesePunctuationCountValue = chinesePunctuationMatch ? chinesePunctuationMatch.length : 0;
  chinesePunctuationCount.textContent = `中文标点符号数统计：${chinesePunctuationCountValue}`;
}

function countCharacters(text) {
  return text.length;
}

function countChineseCharacters(text) {
  const chineseCharacters = text.match(/[\u4e00-\u9fa5]/g);
  return chineseCharacters ? chineseCharacters.length : 0;
}

function clearText() {
  inputText.value = '';
  updateCharacterCounts();
}

