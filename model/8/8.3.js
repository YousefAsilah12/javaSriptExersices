const mybook1 = {
  name: "Yous3f book",
  author: "Yousef Asilah",
  year: 2000,
}
const mybook2 = {
  name: "dream book",
  author: "jhon alli",
  year: 2009,
}

let bookUtils={}
bookUtils.getFirstPublished=(mybook1,mybook2)=> mybook1.year< mybook2.year ? mybook1:mybook2  ;

bookUtils.setNewEdition= function (book,yearEdit) {
  book.lastedition=yearEdit;
}

bookUtils.setLanguage=function(book,newlanguage){
  book.language=newlanguage;

}

bookUtils.setTranslation = function(book, language, translator) {
  book.translation ={
    translator:translator,
    language:language
  }
}


bookUtils.setPuplisher=function(book,name,location){
book.puplisher={name:name , location:location}
}

bookUtils.isSamePublisher=function(book1,book2){
  return book1.puplisher.name===book2.puplisher.name && book1.puplisher.location===book2.puplisher.location;

}

let firstPublished = bookUtils.getFirstPublished(mybook1, mybook2);
console.log(firstPublished);

bookUtils.setNewEdition(mybook1, 2023);
console.log(mybook1);

bookUtils.setLanguage(mybook1, 'english');
console.log(mybook1);

bookUtils.setTranslation(mybook1, 'english','romio');
console.log(mybook1);

bookUtils.setPuplisher(mybook1, 'yousef','jerusalem');
console.log(mybook1);
bookUtils.setPuplisher(mybook2, 'yousef','jerusalem');
console.log(mybook2);

console.log(`is the same puplisher ? ${bookUtils.isSamePublisher(mybook1,mybook2)}`);

