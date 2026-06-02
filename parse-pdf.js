const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.cjs');
const fs = require('fs');

async function parsePdf() {
  const data = new Uint8Array(fs.readFileSync('2026年中考英语复习必备单词词汇表(精校打印版).pdf'));

  const loadingTask = pdfjsLib.getDocument({ data });
  const pdf = await loadingTask.promise;

  console.log('总页数:', pdf.numPages);
  console.log('===================\n');

  let allText = '';

  for (let i = 1; i <= Math.min(pdf.numPages, 30); i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const text = content.items.map(item => item.str).join(' ');
    console.log(`--- 第 ${i} 页 ---`);
    console.log(text.substring(0, 2000));
    console.log('');
    allText += text + '\n';
  }

  // 保存完整内容
  fs.writeFileSync('vocabulary-raw.txt', allText);
  console.log('\n已保存到 vocabulary-raw.txt');
}

parsePdf().catch(console.error);