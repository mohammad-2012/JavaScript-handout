// ❗اول خط 36 - 37 را مطالعه کنید❗

// class Modal {
//   constructor(openButton, closeButton, modalBox) {
//     this.openButton = document.querySelector(openButton);
//     this.closeButton = document.querySelector(closeButton);
//     this.modalBox = document.querySelector(modalBox);

//     // Event to open modal box
//     this.openButton.addEventListener("click", () => this.open()); // این کد ها کوتاه شد هاند

//     //Event to close modal box
//     this.closeButton.addEventListener("click", () => this.close());
//   }

//   open() {
//     this.modalBox.classList.add("open-modal");
//   }

//   close() {
//     this.modalBox.classList.remove("open-modal");
//   }
// }

// const firstModalInstance = new Modal(
//   ".first-open-btn",
//   ".first-close-btn",
//   ".first-modal"
// );

// const secondModalInstance = new Modal(
//   ".second-open-btn",
//   ".second-close-btn",
//   ".second-modal"
// );


// ❗❗بالایی خود پروژه بود و این کد های پایین کد ها را توضیح داده❗❗                             ❗🔴🔴❗
// ❗حتما یا بالایی را کامنت کنید یا پایینی را تا یکی اش کار کنه❗                                 ❗🔴🔴❗

//first modal element
// const firstOpenButton = document.querySelector(".first-open-btn");
// const firstCloseButton = document.querySelector(".first-close-btn");
// const firstModal = document.querySelector(".first-modal");

//seconde modal element
const secondOpenButton = document.querySelector(".second-open-btn");
const secondCloseButton = document.querySelector(".second-close-btn");
const secondModal = document.querySelector(".second-modal");

class Modal {
  constructor(openButton, closeButton, modalBox) {
    // this.openButton = document.querySelector(".first-open-btn");
    // this.closeButton = document.querySelector(".first-close-btn");  // الان ما این سه تا المنت ها را خارج از کلاس گرفتم  که بتونم از تریق ورودی هاش درون کانستراکچر  به صورت مجزا  اینا رو بگیم  تا این قابلیت را داشته باشم چندین تا مودال از روش بسازم
    // this.modalBox = document.querySelector(".first-modal");

    //برای اینکه از این ورودی ها را گرفتیم و دو تا مودال بسازیم این کار را می کنیم
    //this.openButton = openButton;  //این را کامنت می کنیم تا از روش کوتاه شده یعنی پایین کلاس ها را دادیموالان در اینجا المنت ها را میگیریم
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.modalBox = document.querySelector(modalBox);

    // Event to open modal box
    this.openButton.addEventListener("click", () => this.open()); // این کد ها کوتاه شده اند

    //Event to close modal box
    this.closeButton.addEventListener("click", () => this.close());
  }

  open() {
    this.modalBox.classList.add("open-modal");
  }

  close() {
    this.modalBox.classList.remove("open-modal");
  }
}

const firstModalInstance = new Modal(
  // firstOpenButton,
  // firstCloseButton,
  // firstModal
  //حالا یه راه ساده تر هس که می تونم بجا اینکه هی بیاییم بالا از کیوری سلکتور وو استفاده کنیم و کلاس هایی را بگیریم خیلی ساده میاییم اول بالا اون کیوری ها گرفتن المنته ا را کامنت می کنیم و در پایین کلاس اون المنته ا را می نویسیم
  ".first-open-btn",
  ".first-close-btn",
  ".first-modal"
  //!!!!!بعد از این کار کردن میاییم بالا  با کیوری سلکتور مقدار المت ها و خود المنت ها را گرفتن را در خود کلاس می نویسیم به  به داخل کلاس نگاه کنید بالا!!!!!!
);

// const secondModalInstance = new Modal(
//   secondOpenButton,
// secondCloseButton,
//   secondModal
// )

//❗❗این بالایی را هم نگاه کنید ولی در پایینی کد ها را کوتاه کردیم و توضیح این کد ها در مثال اولین مودال گفته شده❗❗

const secondModalInstance = new Modal(
  ".second-open-btn",
  ".second-close-btn",
  ".second-modal"
);

///❗❗ 161  162در این دو به کد های مهمی اشاره شده کهمن نکته برداری نکردم‼❗❗
