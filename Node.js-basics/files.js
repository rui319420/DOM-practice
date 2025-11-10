const fs = require('fs') // file systemの略

/* ファイルの読み込み */

// fs.readFile('./docs/blog1.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log(data.toString())
// }) // readFile()は非同期なのでコードブロックを起こさない

// console.log('last line');

/* ファイルの書き込み */ 
// fs.writeFile('./docs/blog1.txt', 'Good morning, world', () => {
//   console.log('file was written');
// });

// fs.writeFile('./docs/blog2.txt', 'Good morning, world again', () => {
//   console.log('file was written');
// });

/* directories */
if(!fs.existsSync('./assets')){
  fs.mkdir('./assets', (err) => {
    if (err) {
      console.log(err);
    }
    console.log('folder created');
  })
} else {
  fs.rmdir('./assets', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('folder deleted')
  })
}

/* ファイルの削除 */
if (fs.existsSync('./docs/deleteme.txt')) {
  fs.unlink('./docs/deleteme.txt', (err) => {
  if (err) {
    console.log(err);
  }
  console.log('file deleted');
  })
}