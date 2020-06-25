const puppeteer = require('puppeteer');


const funcao = async () =>{
    const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.utb.com.br/horarios-linha/cidade-ocidental');
  const result = await page.evaluate(async() => {
    const books = []
    const dddd = document;
    debugger;
    document.querySelectorAll('section > div > ol > li img')
            .forEac
            h(book => books.push(book.getAttribute('alt')))
    debugger;
    
    return books
  });
  debugger;
  // await page.screenshot({path: 'example.png'});
  await browser.close();
  
};

funcao();

