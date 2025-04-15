const question = document.querySelector("#notification");
const button = document.querySelector("button");
const messageBar = document.querySelector("#message-bar");
const userId = document.querySelector("#userId");
const clientId = document.querySelector(".client-id");
const socket = io();

socket.on("response", (data) => {
  question.innerHTML = data.question;
  userId.innerHTML = `(${data.id} - ${data.user.name})`;
});

socket.on("displayId", (id) => {
  let name = '';
  do {
    name = prompt("Tên giề????");
    socket.emit("setUserName", name);
  } while (name === null || name.trim() === "");
  clientId.innerHTML = `${id} - ${name}`;
});

function printMessage(e) {
  e.preventDefault();
  if (confirm("Sẵn sàng chưa :))?")) {
    let randomIndex = Math.floor(Math.random() * arrQuestionsBasic.length);
    let randomItem = arrQuestionsBasic[randomIndex];
    arrQuestionsBasic.splice(randomIndex, 1);
    socket.emit("message", randomItem);
  } else {
    alert(":))");
  }
}

button.addEventListener("click", printMessage);

const arrQuestionsBasic = [
  "Text interpolation là gì? Làm thế nào để sử dụng text interpolation trong Angular templates?",
  "Có những dạng biểu thức nào có thể được sử dụng trong text interpolation?",
  "Pipe là gì? Cho một ví dụ về custom pipe (live code)?",
  "Directive là gì? Cho một ví dụ về custom directive (live code)?",
  "Template statement là gì? Làm thế nào để sử dụng template statement trong Angular templates?",
  "Template reference variables là gì? Làm thế nào để tạo và sử dụng template reference variables trong Angular templates?",
  "Cho một ví dụ về @ViewChild components (live code)?",
  "View encapsulation là gì? Có những chế độ view encapsulation nào? Làm thế nào để định nghĩa chế độ view encapsulation cho một component? ",
  "Component interaction là gì? Có những cách nào để truyền dữ liệu giữa các component trong Angular?",
  "Content projection là gì? Làm thế nào để sử dụng content projection trong Angular templates?",
  "Phân biệt contructor, ngOnChanges và ngOnit (Hook)?",
  "Dependency injection là gì trong Angular? Làm thế nào để sử dụng Dependency injection trong Angular ?",
  "Injectable service là gì? Làm thế nào để tạo và sử dụng một injectable service trong Angular?",
  "Dependency providers là gì trong Angular? Làm thế nào để định nghĩa dependency providers trong Angular?",
  "Lazyload và preload là gì trong Angular? Làm thế nào để sử dụng lazyload và preload trong Angular để tối ưu hóa hiệu suất ứng dụng? Điểm khác biệt là gì?",
  "Cách sử dụng Class, Styles & Event binding (live code)?",
  "Reactive form là gì trong Angular? Có những lợi ích và hạn chế nào khi sử dụng reactive form trong Angular ? ",
  "Template driven là gì trong Angular? Có những lợi ích và hạn chế nào khi sử dụng Template driven trong Angular ? ",
  "Guard Types là gì trong Angular? Có những loại Guard Types nào trong Angular và khác nhau như thế nào ?",
  "Attribute Directive và Structural Directive là gì trong Angular và khác nhau như thế nào?",
];

const arrQuestionsAdvanced = [
  'What are the differences between Component and Directive?',
  'What is view encapsulation?',
  'What are lifecycle hooks available?',
  'What is metadata?',
  'What is Angular CLI?',
  'What is the difference between constructor and ngOnInit?',
  'What are template expressions?',
  'Give an example of custom pipe (live code)?',
  'Explain on how to use HttpClient with an example?',
  'What is the difference between promise and observable?',
  'What are dynamic components?',
  'Give an example for attribute directives (live code)?',
  'What is Angular Router?',
  'What happens if I import the same module twice?',
  'How do you detect route change in Angular?',
  'Is Angular supports dynamic imports?',
  'What is lazy loading?',
  'What is Angular Material?',
  'How do you find angular CLI version?',
  'What is the difference between interpolated content and innerHTML?',
  'What are Http Interceptors?',
  'What is the purpose of i18n attribute?',
  'What is the difference between ngIf and ngShow property?',
  'Why is not necessary to use entryComponents array every time?',
  'What is the role of ngModule metadata in compilation process?',
  'What are the differences between ngmodule and javascript module?',
  'What are the differences between reactive forms and template driven forms?',
  'What is the purpose of FormBuilder?',
  'How to set ngFor and ngIf on the same element?',
  'What is content projection?',
  'What is ng-content and its purpose?',
  'What are the various kinds of directives?',
  'What is router outlet?',
  'What are the restrictions of metadata?',
  'What is the purpose of common module?',
  'What are Http Interceptors?',
]
