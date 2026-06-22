const topics = [
  {
    cat: "مقدمات",
    id: "intro",
    icon: "🚀",
    title: "مقدمه‌ای بر جاوااسکریپت",
    badge: "شروع",
    content: `<div class="ls">
      <h2>🚀 مقدمه‌ای بر جاوااسکریپت</h2>
      <p>جاوااسکریپت یک زبان برنامه‌نویسی سطح بالا، تفسیری و چندالگویی است که برای ساخت صفحات وب پویا استفاده می‌شود.</p>
      <p>با جاوااسکریپت می‌توانید:</p>
      <ul>
        <li>به المان‌های HTML دسترسی داشته باشید و آن‌ها را تغییر دهید</li>
        <li>به رویدادهای کاربر (کلیک، حرکت موس، فشردن کلید و...) پاسخ دهید</li>
        <li>داده‌ها را در مرورگر ذخیره کنید (localStorage)</li>
        <li>با سرور ارتباط برقرار کنید (API, Fetch, AJAX)</li>
        <li>انیمیشن‌ها و افکت‌های جذاب ایجاد کنید</li>
        <li>و بسیاری کارهای دیگر...</li>
      </ul>
      <div class="tip">💡 جاوااسکریپت یکی از محبوب‌ترین زبان‌های برنامه‌نویسی دنیاست و در همه مرورگرها پشتیبانی می‌شود.</div>
      <div class="tip">💡 برای شروع، فقط کافی است یک فایل HTML و یک فایل JS داشته باشید. کدهای JS را در تگ &lt;script&gt; قرار دهید یا به فایل جداگانه لینک کنید.</div>
    </div>`,
    code: `console.log("سلام دنیا!");
let name = "علی";
let age = 25;
let isStudent = true;
console.log(name, age, isStudent);
function sayHello(name) {
  return "سلام " + name + "!";
}
console.log(sayHello("رضا"));`,
  },
  {
    cat: "مقدمات",
    id: "vars",
    icon: "📦",
    title: "متغیرها (Variables)",
    badge: "پایه",
    content: `<div class="ls">
      <h2>📦 متغیرها در جاوااسکریپت</h2>
      <p>متغیر مثل یک جعبه است که مقدار را در خود نگه می‌دارد. در جاوااسکریپت سه روش برای تعریف متغیر داریم:</p>
      <h3>🔴 var — قدیمی و مشکل‌دار</h3>
      <p><span class="hl">var</span> در نسخه‌های قدیمی جاوااسکریپت استفاده می‌شد. امروزه دیگر استفاده از آن توصیه نمی‌شود.</p>
      <ul>
        <li><span class="hl">Function-scoped</span> است — یعنی فقط داخل تابع محدود می‌شود، نه داخل بلاک‌ها.</li>
        <li><span class="hl">Hoisting</span> دارد — قبل از تعریف undefined می‌دهد (نه خطا).</li>
        <li>می‌توان آن را دوباره تعریف کرد (re-declare).</li>
      </ul>
      <h3>🟢 let — برای مقادیر قابل تغییر ✅</h3>
      <p><span class="hl">let</span> روش مدرن برای تعریف متغیرهایی است که مقدار آنها تغییر می‌کند.</p>
      <ul>
        <li><span class="hl">Block-scoped</span> است — فقط داخل بلاک (محصور در {}) معتبر است.</li>
        <li>می‌توان مقدار آن را تغییر داد (reassign).</li>
        <li>نمی‌توان آن را دوباره تعریف کرد.</li>
      </ul>
      <h3>🔵 const — برای مقادیر ثابت ✅</h3>
      <p><span class="hl">const</span> برای متغیرهایی که مقدار آنها تغییر نمی‌کند استفاده می‌شود.</p>
      <ul>
        <li><span class="hl">Block-scoped</span> است.</li>
        <li>نمی‌توان مقدار آن را تغییر داد (مقاوم در برابر reassign).</li>
        <li>برای آرایه و آبجکت، محتوا قابل تغییر است ولی خود متغیر قابل تغییر نیست.</li>
      </ul>
      <div class="tip">💡 قانون طلایی: همیشه از const استفاده کنید، مگر اینکه بدانید قرار است مقدار متغیر تغییر کند، در آن صورت از let استفاده کنید. هرگز از var استفاده نکنید!</div>
      <table class="compare-table">
        <tr><th>ویژگی</th><th>var</th><th>let</th><th>const</th></tr>
        <tr><td>Scope (محدوده)</td><td>function</td><td>block</td><td>block</td></tr>
        <tr><td>Hoisting</td><td>✅ (undefined)</td><td>❌</td><td>❌</td></tr>
        <tr><td>Reassign (تغییر مقدار)</td><td>✅</td><td>✅</td><td>❌</td></tr>
        <tr><td>Re-declare (تعریف مجدد)</td><td>✅</td><td>❌</td><td>❌</td></tr>
      </table>
      <div class="warn">⚠️ تفاوت <span class="hl">let</span> و <span class="hl">const</span>: const نمی‌تواند reassign شود، اما اگر const یک آبجکت یا آرایه باشد، محتوای آن قابل تغییر است!</div>
    </div>`,
    code: `var x = 10;
var x = 20;
console.log("var x:", x);
console.log("hoisted:", hoisted);
var hoisted = "hello";
let age = 20;
age = 21;
console.log("let age:", age);
{
  let blockVar = "فقط داخل این بلاک";
  console.log("داخل بلاک:", blockVar);
}
const PI = 3.14159;
const arr = [1, 2, 3];
arr.push(4);
console.log("const array:", arr);
const obj = { name: "علی" };
obj.age = 25;
console.log("const object:", obj);
function testScope() {
  if (true) {
    var v = "var";
    let l = "let";
    const c = "const";
  }
  console.log("var خارج از بلاک:", v);
}
testScope();`,
  },
  {
    cat: "مقدمات",
    id: "types",
    icon: "🔢",
    title: "انواع داده (Data Types)",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔢 انواع داده در جاوااسکریپت</h2>
      <p>جاوااسکریپت ۸ نوع داده دارد که به دو دسته کلی <span class="hl">Primitive</span> (مقداری) و <span class="hl">Reference</span> (مرجعی) تقسیم می‌شوند.</p>
      <h3>📌 Primitive Types (انواع مقداری)</h3>
      <p>این نوع داده‌ها مقدار را مستقیماً در حافظه ذخیره می‌کنند و تغییر در آنها تأثیری روی متغیرهای دیگر ندارد.</p>
      <ul>
        <li><span class="hl">String</span> — رشته: "hello", 'world', \`template\`</li>
        <li><span class="hl">Number</span> — عدد: 42, 3.14, -5, Infinity, NaN</li>
        <li><span class="hl">Boolean</span> — true یا false</li>
        <li><span class="hl">undefined</span> — متغیر تعریف شده ولی مقدار ندارد</li>
        <li><span class="hl">null</span> — عمداً خالی گذاشته شده (نوعش object ← باگ JS)</li>
        <li><span class="hl">BigInt</span> — اعداد بسیار بزرگ: 9007199254740991n</li>
        <li><span class="hl">Symbol</span> — مقدار یکتا و منحصربه‌فرد</li>
      </ul>
      <h3>📌 Reference Types (انواع مرجعی)</h3>
      <p>این نوع داده‌ها آدرس حافظه را ذخیره می‌کنند و تغییر در آنها بر روی همه متغیرهایی که به آن اشاره دارند تأثیر می‌گذارد.</p>
      <ul>
        <li><span class="hl">Object</span> — آبجکت‌ها، آرایه‌ها، توابع، Map، Set و...</li>
      </ul>
      <h3>⚠️ Falsy Values</h3>
      <p>مقادیری که در شرط‌ها به false تبدیل می‌شوند:</p>
      <p><span class="hl">0</span>, <span class="hl">""</span> (رشته خالی), <span class="hl">null</span>, <span class="hl">undefined</span>, <span class="hl">NaN</span>, <span class="hl">false</span></p>
      <div class="warn">⚠️ <span class="hl">typeof null</span> → "object" — این یک باگ تاریخی در جاوااسکریپت است که به خاطر سازگاری باقی مانده است.</div>
      <div class="tip">💡 برای بررسی null، از <span class="hl">=== null</span> استفاده کنید نه typeof.</div>
    </div>`,
    code: `let name = "محمد";
let singleQ = 'علی';
let template = \`سلام \${name}!\`;
console.log("String:", template);
console.log("عدد:", 42);
console.log("اعشاری:", 3.14);
console.log("بی‌نهایت:", Infinity);
console.log("Not a Number:", NaN);
console.log("isNaN('hello'):", isNaN("hello"));
console.log("isNaN(42):", isNaN(42));
let isLoggedIn = true;
console.log("typeof isLoggedIn:", typeof isLoggedIn);
let notDefined;
let emptyOnPurpose = null;
console.log("typeof notDefined:", typeof notDefined);
console.log("typeof emptyOnPurpose:", typeof emptyOnPurpose);
console.log("null === null:", emptyOnPurpose === null);
console.log("Number('42'):", Number("42"));
console.log("Number(true):", Number(true));
console.log("Number(false):", Number(false));
console.log("Number(null):", Number(null));
console.log("Number('hello'):", Number("hello"));
console.log("String(42):", String(42));
console.log("String(true):", String(true));
console.log("Boolean(0):", Boolean(0));
console.log('Boolean(""):', Boolean(""));
console.log("Boolean(null):", Boolean(null));
console.log("Boolean(1):", Boolean(1));
console.log('Boolean("hi"):', Boolean("hi"));
console.log("!!0:", !!0);
console.log('!!"":', !!"");
console.log("!!null:", !!null);
console.log("!!undefined:", !!undefined);
console.log("!!NaN:", !!NaN);
console.log("!!'hello':", !!'hello');`,
  },
  {
    cat: "مقدمات",
    id: "operators",
    icon: "➕",
    title: "عملگرها (Operators)",
    badge: "پایه",
    content: `<div class="ls">
      <h2>➕ عملگرها در جاوااسکریپت</h2>
      <p>عملگرها برای انجام عملیات روی داده‌ها استفاده می‌شوند. در جاوااسکریپت انواع مختلفی از عملگرها وجود دارد.</p>
      <h3>📐 عملگرهای ریاضی</h3>
      <ul>
        <li><span class="hl">+</span> جمع | <span class="hl">-</span> تفریق | <span class="hl">*</span> ضرب | <span class="hl">/</span> تقسیم</li>
        <li><span class="hl">%</span> باقیمانده تقسیم | <span class="hl">**</span> توان</li>
        <li><span class="hl">++</span> یک واحد افزایش | <span class="hl">--</span> یک واحد کاهش</li>
      </ul>
      <h3>📝 عملگرهای انتساب</h3>
      <p><span class="hl">=</span> انتساب ساده | <span class="hl">+=</span> جمع و انتساب | <span class="hl">-=</span> تفریق و انتساب</p>
      <p><span class="hl">*=</span> ضرب و انتساب | <span class="hl">/=</span> تقسیم و انتساب | <span class="hl">%=</span> باقیمانده و انتساب</p>
      <p><span class="hl">**=</span> توان و انتساب</p>
      <h3>⚖️ عملگرهای مقایسه‌ای</h3>
      <ul>
        <li><span class="hl">==</span> برابری (نوع را چک نمی‌کند) — <span class="hl">اجتناب کنید!</span></li>
        <li><span class="hl">===</span> برابری دقیق (نوع و مقدار را چک می‌کند) — <span class="hl">✅ توصیه می‌شود</span></li>
        <li><span class="hl">!=</span> نابرابری | <span class="hl">!==</span> نابرابری دقیق</li>
        <li><span class="hl">&lt;</span> کوچک‌تر | <span class="hl">&gt;</span> بزرگ‌تر | <span class="hl">&lt;=</span> کوچک‌تر یا مساوی | <span class="hl">&gt;=</span> بزرگ‌تر یا مساوی</li>
      </ul>
      <h3>🔗 عملگرهای منطقی</h3>
      <ul>
        <li><span class="hl">&&</span> AND — هر دو شرط باید true باشند</li>
        <li><span class="hl">||</span> OR — حداقل یکی از شرایط باید true باشد</li>
        <li><span class="hl">!</span> NOT — برعکس کردن مقدار</li>
        <li><span class="hl">??</span> Nullish Coalescing — اگر null یا undefined بود، مقدار جایگزین را برمی‌گرداند</li>
        <li><span class="hl">?.</span> Optional Chaining — اگر وجود نداشت undefined برمی‌گرداند (نه خطا)</li>
      </ul>
      <div class="warn">⚠️ همیشه از <span class="hl">===</span> استفاده کنید نه <span class="hl">==</span>. مثلاً <span class="hl">0 == false</span> → true ولی <span class="hl">0 === false</span> → false</div>
      <div class="tip">💡 عملگر <span class="hl">??</span> با <span class="hl">||</span> تفاوت دارد: <span class="hl">||</span> همه falsy values را در نظر می‌گیرد، اما <span class="hl">??</span> فقط null و undefined را.</div>
    </div>`,
    code: `console.log("10 + 3 =", 10 + 3);
console.log("10 - 3 =", 10 - 3);
console.log("10 * 3 =", 10 * 3);
console.log("10 / 3 =", 10 / 3);
console.log("10 % 3 =", 10 % 3);
console.log("2 ** 10 =", 2 ** 10);
let x = 5;
console.log("x++:", x++);
console.log("x بعد از ++:", x);
console.log("++x:", ++x);
let n = 10;
n += 5; console.log("n += 5 →", n);
n -= 2; console.log("n -= 2 →", n);
n *= 2; console.log("n *= 2 →", n);
n **= 2; console.log("n **= 2 →", n);
console.log('5 == "5":', 5 == "5");
console.log('5 === "5":', 5 === "5");
console.log('null == undefined:', null == undefined);
console.log('null === undefined:', null === undefined);
console.log("true && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);
let user = null;
console.log("user ?? 'مهمان':", user ?? "مهمان");
let zero = 0;
console.log('zero || "پیش‌فرض":', zero || "پیش‌فرض");
console.log('zero ?? "پیش‌فرض":', zero ?? "پیش‌فرض");
let profile = { user: { name: "علی" } };
console.log("profile?.user?.name:", profile?.user?.name);
console.log("profile?.address?.city:", profile?.address?.city);
let age = 20;
let status = age >= 18 ? "بزرگسال" : "نوجوان";
console.log("status:", status);`,
  },
  {
    cat: "مقدمات",
    id: "isnan",
    icon: "🔍",
    title: "isNaN — بررسی عدد بودن",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔍 isNaN — بررسی عدد بودن</h2>
      <p><span class="hl">isNaN</span> مخفف "is Not a Number" است و بررسی می‌کند که آیا مقدار مورد نظر عدد نیست یا خیر.</p>
      <h3>🔹 نحوه استفاده</h3>
      <pre>isNaN(value)</pre>
      <h3>🔹 نکات مهم</h3>
      <ul>
        <li>اگر مقدار <span class="hl">عدد</span> باشد → <span class="hl">false</span> برمی‌گرداند</li>
        <li>اگر مقدار <span class="hl">عدد نباشد</span> → <span class="hl">true</span> برمی‌گرداند</li>
        <li>قبل از بررسی، سعی می‌کند مقدار را به عدد تبدیل کند</li>
        <li>برای رشته‌های عددی (مثل "123")، false برمی‌گرداند چون می‌توانند به عدد تبدیل شوند</li>
      </ul>
      <h3>🔹 کاربردها</h3>
      <ul>
        <li>اعتبارسنجی ورودی‌های عددی در فرم‌ها</li>
        <li>بررسی اینکه یک مقدار از API عدد است یا نه</li>
        <li>جلوگیری از خطاهای محاسباتی</li>
      </ul>
      <div class="tip">💡 برای بررسی دقیق‌تر از <span class="hl">Number.isNaN()</span> استفاده کنید که تبدیل نوع انجام نمی‌دهد.</div>
    </div>`,
    code: `console.log('isNaN("mohammad"):', isNaN("mohammad"));
console.log('isNaN("123"):', isNaN("123"));
console.log("isNaN(42):", isNaN(42));
console.log("isNaN(true):", isNaN(true));
console.log("isNaN(null):", isNaN(null));
console.log("isNaN(undefined):", isNaN(undefined));
let userInput = "89765432543647";
if (isNaN(userInput)) {
  console.log("❌ ورودی عدد نیست!");
} else {
  console.log("✅ ورودی عدد است!");
}
console.log("Number.isNaN('hello'):", Number.isNaN("hello"));
console.log("Number.isNaN(NaN):", Number.isNaN(NaN));
console.log("isNaN('hello'):", isNaN("hello"));
function validateNumber(input) {
  if (isNaN(input) || input === "") {
    return "❌ لطفاً یک عدد معتبر وارد کنید";
  }
  return "✅ عدد معتبر است";
}
console.log(validateNumber("25"));
console.log(validateNumber("abc"));
console.log(validateNumber(""));`,
  },
  {
    cat: "مقدمات",
    id: "concat",
    icon: "🔗",
    title: "concat — چسباندن رشته‌ها",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔗 concat — چسباندن رشته‌ها</h2>
      <p><span class="hl">concat()</span> یک متد برای چسباندن (اتصال) دو یا چند رشته به یکدیگر است.</p>
      <h3>🔹 نحوه استفاده</h3>
      <pre>str1.concat(str2, str3, ...)</pre>
      <h3>🔹 نکات مهم</h3>
      <ul>
        <li>رشته اصلی را تغییر نمی‌دهد (immutable)</li>
        <li>یک رشته جدید برمی‌گرداند</li>
        <li>می‌تواند چندین رشته را همزمان بچسباند</li>
        <li>اگر آرگومان داده نشود، یک کپی از رشته اصلی برمی‌گرداند</li>
      </ul>
      <h3>🔹 روش‌های دیگر چسباندن رشته</h3>
      <ul>
        <li><span class="hl">+</span> عملگر جمع — ساده‌ترین روش</li>
        <li><span class="hl">template literals</span> (با backtick) — روش مدرن و پیشنهادی</li>
        <li><span class="hl">concat()</span> — روش قدیمی‌تر</li>
      </ul>
      <div class="tip">💡 در جاوااسکریپت مدرن، از <span class="hl">template literals</span> (\`...\`) استفاده کنید که خوانایی بهتری دارد.</div>
    </div>`,
    code: `let firstName = "محمد ";
let lastName = "اکبری";
console.log("روش (+) :", firstName + lastName);
let result = firstName.concat("", lastName);
console.log("روش concat() :", result);
let fullName = \`\${firstName} \${lastName}\`;
console.log("روش template literal:", fullName);
let str1 = "سلام ";
let str2 = "دنیا ";
let str3 = "!";
console.log(str1.concat(str2, str3));
let original = "hello";
let copy = original.concat();
console.log("کپی:", copy);
console.log("آیا برابر هستند؟", original === copy);
let name = "علی";
let age = 25;
console.log("سلام " + name + " شما " + age + " ساله هستید");
console.log(\`سلام \${name} شما \${age} ساله هستید\`);`,
  },
  {
    cat: "مقدمات",
    id: "math-basics",
    icon: "📐",
    title: "عملگرهای ریاضی و Math",
    badge: "پایه",
    content: `<div class="ls">
      <h2>📐 عملگرهای ریاضی و متدهای Math</h2>
      <p>جاوااسکریپت عملگرهای ریاضی پایه و همچنین یک شیء <span class="hl">Math</span> با متدهای پیشرفته‌تر ارائه می‌دهد.</p>
      <h3>🔹 عملگرهای ریاضی پایه</h3>
      <ul>
        <li><span class="hl">+</span> جمع</li>
        <li><span class="hl">-</span> تفریق</li>
        <li><span class="hl">*</span> ضرب</li>
        <li><span class="hl">/</span> تقسیم</li>
        <li><span class="hl">%</span> باقیمانده تقسیم</li>
        <li><span class="hl">**</span> توان (ES6)</li>
      </ul>
      <h3>🔹 متدهای مهم Math</h3>
      <ul>
        <li><span class="hl">Math.pow(base, exp)</span> — توان (مشابه **)</li>
        <li><span class="hl">Math.sqrt(x)</span> — جذر (ریشه دوم)</li>
        <li><span class="hl">Math.abs(x)</span> — قدر مطلق</li>
        <li><span class="hl">Math.round(x)</span> — گرد کردن به نزدیک‌ترین عدد صحیح</li>
        <li><span class="hl">Math.ceil(x)</span> — گرد کردن به بالا (سقف)</li>
        <li><span class="hl">Math.floor(x)</span> — گرد کردن به پایین (کف)</li>
        <li><span class="hl">Math.trunc(x)</span> — حذف اعشار (فقط عدد صحیح)</li>
        <li><span class="hl">Math.min(...)</span> — کوچک‌ترین عدد</li>
        <li><span class="hl">Math.max(...)</span> — بزرگ‌ترین عدد</li>
        <li><span class="hl">Math.random()</span> — عدد تصادفی بین 0 و 1</li>
        <li><span class="hl">Math.sign(x)</span> — علامت عدد (1, -1, 0)</li>
      </ul>
      <div class="tip">💡 عملگر <span class="hl">**</span> (توان) از ES6 به جاوااسکریپت اضافه شده و جایگزین بهتری برای <span class="hl">Math.pow()</span> است.</div>
    </div>`,
    code: `console.log("10 + 3 =", 10 + 3);
console.log("10 - 3 =", 10 - 3);
console.log("10 * 3 =", 10 * 3);
console.log("10 / 3 =", 10 / 3);
console.log("10 % 3 =", 10 % 3);
console.log("2 ** 10 =", 2 ** 10);
console.log("Math.pow(3, 3):", Math.pow(3, 3));
console.log("3 ** 3:", 3 ** 3);
console.log("Math.sqrt(144):", Math.sqrt(144));
console.log("round(3.14):", Math.round(3.14));
console.log("round(3.88):", Math.round(3.88));
console.log("ceil(3.14):", Math.ceil(3.14));
console.log("floor(3.88):", Math.floor(3.88));
console.log("trunc(3.88):", Math.trunc(3.88));
console.log("trunc(-3.88):", Math.trunc(-3.88));
console.log("abs(-42):", Math.abs(-42));
console.log("sign(-5):", Math.sign(-5));
console.log("sign(0):", Math.sign(0));
console.log("sign(5):", Math.sign(5));
const nums = [5, 76, 90, 110, 19, 3];
console.log("min:", Math.min(...nums));
console.log("max:", Math.max(...nums));
console.log("random:", Math.random());
const dice = Math.floor(Math.random() * 6) + 1;
console.log("تاس:", dice);
function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("randInt(10, 20):", randInt(10, 20));`,
  },
  {
    cat: "کنترل جریان",
    id: "conditions",
    icon: "🔀",
    title: "شرط‌ها (if, else if, else)",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔀 شرط‌ها در جاوااسکریپت</h2>
      <p>شرط‌ها به برنامه اجازه می‌دهند بر اساس شرایط مختلف تصمیم‌گیری کند.</p>
      <h3>🔹 if / else if / else</h3>
      <p>ساده‌ترین و پرکاربردترین روش شرط‌گذاری. شرایط را به‌ترتیب بررسی می‌کند.</p>
      <h3>🔹 Ternary Operator</h3>
      <p>نسخه فشرده if/else: <span class="hl">شرط ? مقدارTrue : مقدارFalse</span></p>
      <h3>🔹 switch / case</h3>
      <p>برای مقایسه یک مقدار با چند حالت مختلف.</p>
    </div>`,
    code: `let score = 78;
if (score >= 90) {
  console.log("A - عالی!");
} else if (score >= 80) {
  console.log("B - خوب");
} else if (score >= 70) {
  console.log("C - قابل قبول");
} else {
  console.log("D - مردود");
}
let age = 20;
let msg = age >= 18 ? "بزرگسال" : "نوجوان";
console.log(msg);
let day = "monday";
switch (day) {
  case "saturday":
  case "friday":
    console.log("تعطیل!");
    break;
  case "monday":
    console.log("اول هفته...");
    break;
  default:
    console.log("روز عادی");
}
let isLoggedIn = false;
isLoggedIn && console.log("به داشبورد خوش آمدی");
let username = "";
let display = username || "مهمان";
console.log(display);
let theme = null;
theme ??= "dark";
console.log(theme);`,
  },
  {
    cat: "کنترل جریان",
    id: "loops",
    icon: "🔄",
    title: "حلقه‌ها (for, while, do-while)",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔄 حلقه‌ها در جاوااسکریپت</h2>
      <h3>🔹 for</h3>
      <p>وقتی تعداد تکرار مشخص است.</p>
      <pre>for (let i = 0; i < 10; i++) { ... }</pre>
      <h3>🔹 while</h3>
      <p>تا زمانی که شرط برقرار است.</p>
      <pre>while (شرط) { ... }</pre>
      <h3>🔹 do...while</h3>
      <p>حداقل یک بار اجرا می‌شود.</p>
      <pre>do { ... } while (شرط);</pre>
      <h3>🔹 for...of</h3>
      <p>پیمایش روی مقادیر آرایه و رشته.</p>
      <h3>🔹 for...in</h3>
      <p>پیمایش روی کلیدهای آبجکت.</p>
      <h3>🔹 break و continue</h3>
      <ul>
        <li><span class="hl">break</span> — از حلقه خارج می‌شود</li>
        <li><span class="hl">continue</span> — این تکرار را رد می‌کند</li>
      </ul>
    </div>`,
    code: `for (let i = 1; i <= 5; i++) {
  console.log("i =", i);
}
let count = 3;
while (count > 0) {
  console.log("شمارش:", count);
  count--;
}
let num = 100;
do {
  console.log("حداقل یک بار اجرا شد:", num);
  num--;
} while (num > 100);
let fruits = ["سیب", "موز", "انگور"];
for (let fruit of fruits) {
  console.log("میوه:", fruit);
}
let person = { name: "علی", age: 25, city: "تهران" };
for (let key in person) {
  console.log(key + ":", person[key]);
}
for (let i = 0; i < 10; i++) {
  if (i === 3) continue;
  if (i === 7) break;
  console.log(i);
}`,
  },
  {
    cat: "کنترل جریان",
    id: "do-while",
    icon: "🔄",
    title: "حلقه do-while",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔄 حلقه do-while</h2>
      <p>حلقه <span class="hl">do-while</span> مانند <span class="hl">while</span> است، با این تفاوت که <span class="hl">حداقل یک بار</span> اجرا می‌شود، حتی اگر شرط از ابتدا false باشد.</p>
      <h3>🔹 ساختار</h3>
      <pre>do {
  // کد (حداقل یک بار اجرا می‌شود)
} while (شرط);</pre>
      <h3>🔹 تفاوت با while</h3>
      <ul>
        <li><span class="hl">while</span> — اول شرط را بررسی می‌کند، اگر false باشد اجرا نمی‌شود</li>
        <li><span class="hl">do-while</span> — اول اجرا می‌کند، بعد شرط را بررسی می‌کند</li>
      </ul>
      <div class="tip">💡 از do-while زمانی استفاده کنید که می‌خواهید کد حداقل یک بار اجرا شود، مثل منوهای تعاملی.</div>
    </div>`,
    code: `let counter = 5;
do {
  console.log("شمارنده:", counter);
  counter--;
} while (counter > 0);
let num = 100;
do {
  console.log("حتی با شرط false هم اجرا شد:", num);
  num--;
} while (num > 100);
console.log("--- while ---");
let x = 10;
while (x < 10) {
  console.log("while اجرا نشد");
  x++;
}
console.log("--- do-while ---");
let y = 10;
do {
  console.log("do-while یک بار اجرا شد");
  y++;
} while (y < 10);`,
  },
  {
    cat: "آرایه‌ها",
    id: "array-basics",
    icon: "📋",
    title: "آرایه‌ها — مقدمات",
    badge: "مهم",
    content: `<div class="ls">
      <h2>📋 آرایه‌ها در جاوااسکریپت</h2>
      <p>آرایه یک لیست مرتب از مقادیر است. ایندکس‌ها از <span class="hl">0</span> شروع می‌شوند.</p>
      <h3>🔹 ایجاد آرایه</h3>
      <p><span class="hl">[]</span> — روش پیشنهادی</p>
      <p><span class="hl">new Array()</span> — روش قدیمی</p>
      <h3>🔹 اضافه و حذف</h3>
      <ul>
        <li><span class="hl">push()</span> — به انتها اضافه</li>
        <li><span class="hl">pop()</span> — از انتها حذف</li>
        <li><span class="hl">unshift()</span> — به ابتدا اضافه</li>
        <li><span class="hl">shift()</span> — از ابتدا حذف</li>
      </ul>
      <h3>🔹 جستجو</h3>
      <ul>
        <li><span class="hl">indexOf()</span> — ایندکس اولین تطابق</li>
        <li><span class="hl">lastIndexOf()</span> — ایندکس آخرین تطابق</li>
        <li><span class="hl">includes()</span> — وجود یا عدم وجود</li>
        <li><span class="hl">find()</span> — پیدا کردن با شرط</li>
        <li><span class="hl">findIndex()</span> — ایندکس با شرط</li>
      </ul>
    </div>`,
    code: `const arr = [3, 1, 4, 1, 5, 9, 2, 6];
console.log("آرایه:", arr);
console.log("arr[0]:", arr[0]);
console.log("arr.at(-1):", arr.at(-1));
arr.push(100);
console.log("بعد push:", arr);
let removed = arr.pop();
console.log("حذف شد:", removed);
arr.unshift(0);
console.log("بعد unshift:", arr);
arr.shift();
console.log("بعد shift:", arr);
let nums = [10, 20, 30, 20, 40];
console.log("indexOf(20):", nums.indexOf(20));
console.log("lastIndexOf(20):", nums.lastIndexOf(20));
console.log("includes(30):", nums.includes(30));
console.log("find(n => n > 25):", nums.find(n => n > 25));
console.log("findIndex(n => n > 25):", nums.findIndex(n => n > 25));`,
  },
  {
    cat: "آرایه‌ها",
    id: "array-methods",
    icon: "🛠️",
    title: "متدهای پیشرفته آرایه",
    badge: "مهم",
    content: `<div class="ls">
      <h2>🛠️ متدهای پیشرفته آرایه</h2>
      <p>این متدها <span class="hl">آرایه اصلی را تغییر نمی‌دهند</span>.</p>
      <h3>🔹 map()</h3>
      <p>تبدیل هر عنصر به مقدار جدید.</p>
      <h3>🔹 filter()</h3>
      <p>فیلتر بر اساس شرط.</p>
      <h3>🔹 reduce()</h3>
      <p>جمع‌بندی به یک مقدار.</p>
      <h3>🔹 forEach()</h3>
      <p>اجرا روی هر عنصر (بدون برگشت).</p>
      <h3>🔹 some() و every()</h3>
      <p>بررسی وجود یا همه بودن شرط.</p>
      <h3>🔹 flat()</h3>
      <p>صاف کردن آرایه تودرتو.</p>
      <h3>🔹 sort() / toSorted()</h3>
      <p>مرتب‌سازی.</p>
    </div>`,
    code: `const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("map:", doubled);
const bigNums = numbers.filter(n => n > 2);
console.log("filter:", bigNums);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("reduce (جمع):", sum);
numbers.forEach(n => console.log("عدد:", n));
console.log("some (>3):", numbers.some(n => n > 3));
console.log("every (>0):", numbers.every(n => n > 0));
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(2):", nested.flat(2));
const nums = [30, 2, 80, 20, 14];
console.log("sorted:", [...nums].sort((a, b) => a - b));
console.log("toSorted:", nums.toSorted((a, b) => a - b));
console.log("original:", nums);`,
  },
  {
    cat: "آرایه‌ها",
    id: "splice",
    icon: "✂️",
    title: "splice و toSpliced",
    badge: "پیشرفته",
    content: `<div class="ls">
      <h2>✂️ splice و toSpliced</h2>
      <h3>🔹 splice()</h3>
      <p>آرایه اصلی را تغییر می‌دهد. برای حذف، اضافه و جایگزینی استفاده می‌شود.</p>
      <pre>arr.splice(start, deleteCount, ...items)</pre>
      <h3>🔹 toSpliced()</h3>
      <p>مثل splice ولی آرایه اصلی را تغییر نمی‌دهد (ES2023).</p>
      <h3>🔹 کاربردها</h3>
      <ul>
        <li>حذف عناصر از آرایه</li>
        <li>اضافه کردن عناصر در موقعیت مشخص</li>
        <li>جایگزینی عناصر</li>
      </ul>
    </div>`,
    code: `let fruits = ["apple", "banana", "mango", "grape"];
fruits.splice(1, 2, "cherry", "kiwi");
console.log("splice:", fruits);
let original = ["a", "b", "c", "d"];
let newArr = original.toSpliced(1, 1, "x");
console.log("original (تغییر نکرد):", original);
console.log("newArr:", newArr);
let colors = ["red", "green", "blue", "yellow"];
let removed = colors.splice(1, 2);
console.log("حذف شد:", removed);
console.log("آرایه بعد از حذف:", colors);
let letters = ["a", "b", "c"];
letters.splice(1, 0, "x", "y");
console.log("بعد از اضافه:", letters);`,
  },
  {
    cat: "آرایه‌ها",
    id: "slice-concat",
    icon: "📦",
    title: "slice و concat",
    badge: "پایه",
    content: `<div class="ls">
      <h2>📦 slice و concat</h2>
      <h3>🔹 slice()</h3>
      <p>بخشی از آرایه را برش می‌دهد و یک آرایه جدید برمی‌گرداند. آرایه اصلی را تغییر نمی‌دهد.</p>
      <pre>arr.slice(start, end)</pre>
      <h3>🔹 concat()</h3>
      <p>آرایه‌ها را به هم متصل می‌کند و یک آرایه جدید برمی‌گرداند.</p>
      <pre>arr1.concat(arr2, arr3, ...)</pre>
    </div>`,
    code: `let fruits = ["apple", "banana", "mango", "grape", "orange"];
let sliced = fruits.slice(1, 3);
console.log("slice(1, 3):", sliced);
console.log("آرایه اصلی:", fruits);
console.log("slice(-2):", fruits.slice(-2));
let arr1 = ["a", "b", "c"];
let arr2 = [1, 2, 3];
let arr3 = ["x", "y", "z"];
let merged = arr1.concat(arr2, arr3);
console.log("concat:", merged);`,
  },
  {
    cat: "آرایه‌ها",
    id: "join-split",
    icon: "🔀",
    title: "join و split",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔀 join و split</h2>
      <h3>🔹 join()</h3>
      <p>آرایه را به رشته تبدیل می‌کند و عناصر را با جداکننده مشخص به هم متصل می‌کند.</p>
      <pre>arr.join(separator)</pre>
      <h3>🔹 split()</h3>
      <p>رشته را بر اساس جداکننده به آرایه تبدیل می‌کند.</p>
      <pre>str.split(separator)</pre>
    </div>`,
    code: `let fruits = ["سیب", "موز", "انگور", "هلو"];
console.log("join(', '):", fruits.join(", "));
console.log("join(' | '):", fruits.join(" | "));
console.log("join(''):", fruits.join(""));
let text = "سیب,موز,انگور,هلو";
let arr = text.split(",");
console.log("split(', '):", arr);
let sentence = "javascript is awesome";
let words = sentence.split(" ");
console.log("کلمات:", words);
console.log("برعکس:", words.reverse().join(" "));
console.log("حروف اول:", words.map(w => w[0].toUpperCase()).join(""));`,
  },
  {
    cat: "آبجکت‌ها",
    id: "objects",
    icon: "🗂️",
    title: "آبجکت‌ها (Objects)",
    badge: "مهم",
    content: `<div class="ls">
      <h2>🗂️ آبجکت‌ها در جاوااسکریپت</h2>
      <p>آبجکت مجموعه‌ای از جفت‌های <span class="hl">کلید: مقدار</span> است.</p>
      <h3>🔹 دسترسی به ویژگی‌ها</h3>
      <ul>
        <li><span class="hl">obj.key</span> — Dot notation</li>
        <li><span class="hl">obj["key"]</span> — Bracket notation</li>
      </ul>
      <h3>🔹 متدهای Object</h3>
      <ul>
        <li><span class="hl">Object.keys()</span> — کلیدها</li>
        <li><span class="hl">Object.values()</span> — مقادیر</li>
        <li><span class="hl">Object.entries()</span> — [key, value]ها</li>
        <li><span class="hl">Object.freeze()</span> — قفل کامل</li>
        <li><span class="hl">Object.seal()</span> — قفل جزئی</li>
      </ul>
    </div>`,
    code: `const person = {
  name: "محمد",
  age: 25,
  "full name": "محمد اکبری",
  address: { city: "تهران", zip: "11111" },
  greet() {
    return "سلام، " + this.name;
  }
};
console.log("person.name:", person.name);
console.log('person["full name"]:', person["full name"]);
console.log("person.address.city:", person.address.city);
console.log("person.greet():", person.greet());
console.log("keys:", Object.keys(person));
console.log("values:", Object.values(person));
Object.entries(person).forEach(([key, val]) => {
  console.log(key + ":", val);
});
const config = Object.freeze({ debug: false, ver: "1.0" });
config.debug = true;
console.log("freeze:", config.debug);
const settings = Object.seal({ theme: "dark", lang: "fa" });
settings.theme = "light";
console.log("seal:", settings);`,
  },
  {
    cat: "Destructuring & Spread",
    id: "destruct",
    icon: "📤",
    title: "Destructuring",
    badge: "مدرن",
    content: `<div class="ls">
      <h2>📤 Destructuring</h2>
      <p>استخراج مقادیر از آرایه یا آبجکت به صورت خوانا.</p>
      <h3>🔹 Array Destructuring</h3>
      <pre>const [a, b, ...rest] = arr;</pre>
      <h3>🔹 Object Destructuring</h3>
      <pre>const { name, age } = obj;</pre>
      <h3>🔹 Default Values</h3>
      <p>اگر مقدار undefined بود، مقدار پیش‌فرض استفاده می‌شود.</p>
    </div>`,
    code: `const colors = ["red", "green", "blue", "yellow"];
const [first, second, ...rest] = colors;
console.log("first:", first);
console.log("second:", second);
console.log("rest:", rest);
const product = {
  name: "لپ‌تاپ",
  price: 30000000,
  brand: "dell",
  specs: { ram: 16, storage: 512 }
};
const { name, price, brand } = product;
console.log("name, price, brand:", name, price, brand);
const { name: productName, brand: maker } = product;
console.log("productName, maker:", productName, maker);
const { color = "مشکی" } = product;
console.log("color:", color);
const { specs: { ram, storage } } = product;
console.log("ram, storage:", ram, storage);
function show({ name, price, color = "نامشخص" }) {
  console.log(\`\${name} - \${price} - \${color}\`);
}
show(product);`,
  },
  {
    cat: "Destructuring & Spread",
    id: "spread-rest",
    icon: "🌊",
    title: "Spread & Rest",
    badge: "مدرن",
    content: `<div class="ls">
      <h2>🌊 Spread و Rest</h2>
      <h3>🔹 Spread</h3>
      <p>آرایه یا آبجکت را باز می‌کند.</p>
      <h3>🔹 Rest</h3>
      <p>بقیه را در یک آرایه جمع می‌کند.</p>
    </div>`,
    code: `const original = [1, 2, 3];
const copy = [...original];
copy.push(99);
console.log("original:", original);
console.log("copy:", copy);
const arr1 = ["a", "b"];
const arr2 = [1, 2];
const merged = [...arr1, ...arr2];
console.log("merged:", merged);
const user = { name: "علی", age: 25 };
const updated = { ...user, age: 26, city: "تهران" };
console.log("updated:", updated);
function sum(first, ...rest) {
  console.log("اول:", first);
  console.log("بقیه:", rest);
  return [first, ...rest].reduce((a, b) => a + b, 0);
}
console.log("جمع:", sum(1, 2, 3, 4, 5));
const [a, b, ...others] = [10, 20, 30, 40, 50];
console.log("a, b, others:", a, b, others);
const { name: n, ...otherProps } = { name: "رضا", age: 25, city: "شیراز" };
console.log("name:", n);
console.log("otherProps:", otherProps);`,
  },
  {
    cat: "متدهای String",
    id: "char-at",
    icon: "🔤",
    title: "charAt و at",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔤 charAt و at</h2>
      <h3>🔹 charAt()</h3>
      <p>کاراکتر در ایندکس مشخص را برمی‌گرداند. اگر ایندکس نامعتبر باشد، رشته خالی برمی‌گرداند.</p>
      <pre>str.charAt(index)</pre>
      <h3>🔹 at()</h3>
      <p>مثل charAt ولی از ایندکس منفی پشتیبانی می‌کند (ES2022).</p>
      <pre>str.at(index)</pre>
    </div>`,
    code: `let text = "javascript";
console.log("charAt(0):", text.charAt(0));
console.log("charAt(10):", text.charAt(10));
console.log("at(-1):", text.at(-1));
console.log("at(-2):", text.at(-2));
console.log('text[-1]:', text[-1]);
console.log('text.at(-1):', text.at(-1));
console.log('text.charAt(-1):', text.charAt(-1));`,
  },
  {
    cat: "متدهای String",
    id: "index-of",
    icon: "🔍",
    title: "indexOf و lastIndexOf",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔍 indexOf و lastIndexOf</h2>
      <h3>🔹 indexOf()</h3>
      <p>اولین ایندکس یک زیررشته را برمی‌گرداند. اگر نباشد، -1 برمی‌گرداند.</p>
      <h3>🔹 lastIndexOf()</h3>
      <p>آخرین ایندکس یک زیررشته را برمی‌گرداند.</p>
    </div>`,
    code: `let text = "javascript is awesome javascript";
console.log('indexOf("java"):', text.indexOf("java"));
console.log('indexOf("script"):', text.indexOf("script"));
console.log('indexOf("python"):', text.indexOf("python"));
console.log('lastIndexOf("java"):', text.lastIndexOf("java"));
console.log('includes("java"):', text.includes("java"));
console.log('includes("python"):', text.includes("python"));
console.log('startsWith("java"):', text.startsWith("java"));
console.log('endsWith("script"):', text.endsWith("script"));`,
  },
  {
    cat: "متدهای String",
    id: "trim",
    icon: "✂️",
    title: "trim, trimStart, trimEnd",
    badge: "پایه",
    content: `<div class="ls">
      <h2>✂️ trim — حذف فاصله‌ها</h2>
      <h3>🔹 trim()</h3>
      <p>فاصله‌های اضافی از ابتدا و انتهای رشته را حذف می‌کند.</p>
      <h3>🔹 trimStart()</h3>
      <p>فقط فاصله‌های ابتدای رشته را حذف می‌کند.</p>
      <h3>🔹 trimEnd()</h3>
      <p>فقط فاصله‌های انتهای رشته را حذف می‌کند.</p>
    </div>`,
    code: `let text = "   hello world   ";
console.log('trim():', text.trim());
console.log('trimStart():', text.trimStart());
console.log('trimEnd():', text.trimEnd());
let email = "   user@example.com   ";
let cleanEmail = email.trim().toLowerCase();
console.log("ایمیل تمیز:", cleanEmail);
let multiSpace = "  hello   world  ";
console.log("trim():", multiSpace.trim());`,
  },
  {
    cat: "متدهای String",
    id: "case",
    icon: "🔠",
    title: "toUpperCase و toLowerCase",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔠 toUpperCase و toLowerCase</h2>
      <h3>🔹 toUpperCase()</h3>
      <p>همه حروف رشته را به بزرگ تبدیل می‌کند.</p>
      <h3>🔹 toLowerCase()</h3>
      <p>همه حروف رشته را به کوچک تبدیل می‌کند.</p>
    </div>`,
    code: `let text = "JavaScript is AWESOME";
console.log("toUpperCase:", text.toUpperCase());
console.log("toLowerCase:", text.toLowerCase());
let userInput = "   User@GMAIL.com   ";
let normalized = userInput.trim().toLowerCase();
console.log("نرمال شده:", normalized);
function compareIgnoreCase(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}
console.log(compareIgnoreCase("Hello", "hello"));
console.log(compareIgnoreCase("Hello", "world"));`,
  },
  {
    cat: "متدهای String",
    id: "slice-substring",
    icon: "✂️",
    title: "slice و substring",
    badge: "پایه",
    content: `<div class="ls">
      <h2>✂️ slice و substring</h2>
      <h3>🔹 slice(start, end)</h3>
      <p>بخشی از رشته را برش می‌دهد. از ایندکس منفی پشتیبانی می‌کند.</p>
      <h3>🔹 substring(start, end)</h3>
      <p>مثل slice ولی از ایندکس منفی پشتیبانی نمی‌کند.</p>
    </div>`,
    code: `let text = "javascript is awesome";
console.log("slice(0, 10):", text.slice(0, 10));
console.log("slice(11):", text.slice(11));
console.log("slice(-7):", text.slice(-7));
console.log("substring(0, 10):", text.substring(0, 10));
console.log("substring(-7):", text.substring(-7));
let card = "6219861953066601";
let masked = card.slice(-4).padStart(card.length, "*");
console.log("مخفی:", masked);`,
  },
  {
    cat: "متدهای String",
    id: "replace",
    icon: "🔄",
    title: "replace و replaceAll",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🔄 replace و replaceAll</h2>
      <h3>🔹 replace()</h3>
      <p>اولین مورد از یک زیررشته را جایگزین می‌کند.</p>
      <h3>🔹 replaceAll()</h3>
      <p>همه موارد یک زیررشته را جایگزین می‌کند.</p>
    </div>`,
    code: `let text = "hello world hello";
console.log('replace("hello", "hi"):', text.replace("hello", "hi"));
console.log('replaceAll("hello", "hi"):', text.replaceAll("hello", "hi"));
let msg = "سلام دنیا! دنیا زیباست.";
console.log('replace(/دنیا/g, "جهان"):', msg.replace(/دنیا/g, "جهان"));
let multiSpace = "hello   world    javascript";
console.log(multiSpace.replace(/\\s+/g, " "));`,
  },
  {
    cat: "متدهای String",
    id: "pad",
    icon: "📏",
    title: "padStart و padEnd",
    badge: "پایه",
    content: `<div class="ls">
      <h2>📏 padStart و padEnd</h2>
      <h3>🔹 padStart()</h3>
      <p>رشته را از ابتدا تا طول مشخص با کاراکتر مشخص پر می‌کند.</p>
      <h3>🔹 padEnd()</h3>
      <p>رشته را از انتها تا طول مشخص با کاراکتر مشخص پر می‌کند.</p>
    </div>`,
    code: `let hour = "9";
let minute = "5";
console.log(hour.padStart(2, "0") + ":" + minute.padStart(2, "0"));
let text = "hello";
console.log(text.padEnd(10, "-"));
let card = "6219861953066601";
let masked = card.slice(-4).padStart(card.length, "*");
console.log(masked);
let orderNumber = 42;
console.log(orderNumber.toString().padStart(6, "0"));`,
  },
  {
    cat: "متدهای String",
    id: "locale-string",
    icon: "🌍",
    title: "toLocaleString — فرمت اعداد",
    badge: "پایه",
    content: `<div class="ls">
      <h2>🌍 toLocaleString — فرمت اعداد با جداکننده</h2>
      <p><span class="hl">toLocaleString()</span> اعداد را به صورت محلی (مطابق با زبان و کشور) فرمت می‌کند.</p>
      <h3>🔹 نحوه استفاده</h3>
      <pre>number.toLocaleString(locale, options)</pre>
      <h3>🔹 کاربردها</h3>
      <ul>
        <li>جدا کردن اعداد با کاما (مثل ۱,۰۰۰,۰۰۰)</li>
        <li>فرمت قیمت‌ها و مبالغ</li>
        <li>نمایش اعداد به صورت محلی</li>
      </ul>
      <div class="tip">💡 برای نمایش قیمت در فروشگاه‌های ایرانی، از <span class="hl">toLocaleString("fa-IR")</span> استفاده کنید.</div>
    </div>`,
    code: `let price = 25000000;
console.log("fa-IR:", price.toLocaleString("fa-IR"));
console.log("en-US:", price.toLocaleString("en-US"));
console.log("de-DE:", price.toLocaleString("de-DE"));
let productPrice = 32000000;
let formatted = productPrice.toLocaleString("fa-IR") + " تومان";
console.log("قیمت:", formatted);
let number = 123456.789;
console.log(number.toLocaleString("fa-IR", {
  style: "currency",
  currency: "IRR",
  minimumFractionDigits: 0
}));
let ratio = 0.75;
console.log(ratio.toLocaleString("fa-IR", {
  style: "percent",
  minimumFractionDigits: 0
}));`,
  },
  {
    cat: "توابع",
    id: "functions",
    icon: "⚙️",
    title: "توابع (Functions)",
    badge: "مهم",
    content: `<div class="ls">
      <h2>⚙️ توابع در جاوااسکریپت</h2>
      <p>تابع یک بلوک کد است که یک کار مشخص را انجام می‌دهد و می‌توان آن را چندین بار فراخوانی کرد.</p>
      <h3>🔹 ۱. Function Declaration</h3>
      <p>با <span class="hl">function</span> تعریف می‌شود. <span class="hl">Hoisting</span> دارد.</p>
      <h3>🔹 ۲. Function Expression</h3>
      <p>تابع در متغیر قرار می‌گیرد. Hoisting ندارد.</p>
      <h3>🔹 ۳. Arrow Function ✅</h3>
      <p>نسخه کوتاه‌تر و مدرن‌تر.</p>
      <h3>🔹 ۴. IIFE</h3>
      <p>تابع خودصداکننده — فوری اجرا می‌شود.</p>
      <h3>🔹 پارامترهای پیشرفته</h3>
      <ul>
        <li><span class="hl">Default Parameter</span> — مقدار پیش‌فرض</li>
        <li><span class="hl">Rest Operator (...)</span> — جمع‌آوری آرگومان‌ها</li>
      </ul>
      <div class="tip">💡 <span class="hl">return</span> مقدار را برمی‌گرداند و تابع را متوقف می‌کند.</div>
    </div>`,
    code: `sayHi();
function sayHi() {
  console.log("سلام!");
}
const add = function(a, b) {
  return a + b;
};
console.log(add(3, 4));
const multiply = (a, b) => a * b;
console.log(multiply(5, 6));
const greet = name => "سلام " + name;
console.log(greet("علی"));
const getInfo = (name, age) => ({ name, age });
console.log(getInfo("رضا", 25));
(function() {
  console.log("خودکار اجرا شدم!");
})();
(() => console.log("من هم!"))();
function power(base, exp = 2) {
  return base ** exp;
}
console.log(power(3));
console.log(power(2, 8));
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3, 4, 5));`,
  },
  {
    cat: "توابع",
    id: "this",
    icon: "👉",
    title: "this و call/apply/bind",
    badge: "پیشرفته",
    content: `<div class="ls">
      <h2>👉 this در جاوااسکریپت</h2>
      <p><span class="hl">this</span> به آبجکت فعلی اشاره می‌کند. مقدار آن بستگی به نحوه فراخوانی دارد.</p>
      <h3>🔹 call()</h3>
      <p>فراخوانی با this مشخص + آرگومان جداگانه.</p>
      <h3>🔹 apply()</h3>
      <p>مثل call ولی آرگومان‌ها آرایه‌ای.</p>
      <h3>🔹 bind()</h3>
      <p>تابع جدید با this مشخص می‌سازد (اجرا نمی‌کند).</p>
    </div>`,
    code: `const person = {
  name: "محمد",
  greet: function() {
    console.log("سلام، " + this.name);
  },
  greetArrow: () => {
    console.log("سلام،", typeof this);
  }
};
person.greet();
person.greetArrow();
function introduce(age, city) {
  console.log(\`\${this.name} - \${age} ساله - \${city}\`);
}
const user = { name: "علی" };
introduce.call(user, 25, "تهران");
introduce.apply(user, [25, "اصفهان"]);
const bound = introduce.bind(user, 30);
bound("مشهد");`,
  },
  {
    cat: "OOP",
    id: "class-basics",
    icon: "🏗️",
    title: "کلاس‌ها — مقدمات",
    badge: "OOP",
    content: `<div class="ls">
      <h2>🏗️ OOP — برنامه‌نویسی شیءگرا</h2>
      <p>OOP روشی برای سازماندهی کدهاست. داده و رفتار را در <span class="hl">آبجکت</span> گروه‌بندی می‌کند.</p>
      <h3>🔹 مفاهیم اصلی</h3>
      <ul>
        <li><span class="hl">Encapsulation</span> — داده و رفتار در یک واحد</li>
        <li><span class="hl">Inheritance</span> — ارث‌بری</li>
        <li><span class="hl">Polymorphism</span> — رفتار متفاوت</li>
        <li><span class="hl">Abstraction</span> — مخفی کردن پیچیدگی</li>
      </ul>
      <h3>🔹 class در JS</h3>
      <p><span class="hl">constructor()</span> با <span class="hl">new</span> اجرا می‌شود.</p>
    </div>`,
    code: `class Car {
  constructor(name, engineStatus = "off") {
    this.name = name;
    this.speed = 0;
    this.isEngineOn = engineStatus === "on";
  }
  startEngine() {
    this.isEngineOn = true;
    console.log(\`\${this.name}: موتور روشن شد\`);
  }
  accelerate(amount) {
    if (!this.isEngineOn) {
      console.log("❌ اول موتور رو روشن کن!");
      return;
    }
    this.speed += amount;
    console.log(\`\${this.name}: سرعت → \${this.speed} km/h\`);
  }
  getInfo() {
    return \`\${this.name} | سرعت: \${this.speed}\`;
  }
}
const myCar = new Car("پژو ۴۰۵");
myCar.startEngine();
myCar.accelerate(60);
console.log(myCar.getInfo());`,
  },
  {
    cat: "OOP",
    id: "class-advanced",
    icon: "🔬",
    title: "Inheritance و Static",
    badge: "OOP",
    content: `<div class="ls">
      <h2>🔬 Inheritance و Static</h2>
      <h3>🔹 extends</h3>
      <p>کلاس فرزند از پدر ارث می‌برد. <span class="hl">super()</span> برای صدا زدن constructor پدر.</p>
      <h3>🔹 static</h3>
      <p>مربوط به کلاس، نه instance.</p>
      <h3>🔹 Getter/Setter</h3>
      <p>دسترسی به ویژگی‌ها با منطق پشت‌صحنه.</p>
      <h3>🔹 Private Fields (#)</h3>
      <p>فقط داخل کلاس قابل دسترس.</p>
    </div>`,
    code: `class Animal {
  #sound;
  constructor(name, sound) {
    this.name = name;
    this.#sound = sound;
    this.isAlive = true;
  }
  makeSound() {
    console.log(\`\${this.name}: \${this.#sound}\`);
  }
  get status() {
    return this.isAlive ? "زنده" : "نه زنده";
  }
  set alive(val) {
    if (typeof val !== "boolean") return;
    this.isAlive = val;
  }
  static describe() {
    console.log("Animal: موجود زنده");
  }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "هاپ هاپ!");
    this.breed = breed;
    this.tricks = [];
  }
  learn(trick) {
    this.tricks.push(trick);
    console.log(\`\${this.name} یاد گرفت: \${trick}\`);
  }
  get info() {
    return \`\${this.name} (\${this.breed}) - \${this.tricks.length} حقه\`;
  }
}
Animal.describe();
const dog = new Dog("رکس", "ژرمن");
dog.makeSound();
dog.learn("بشین");
console.log(dog.info);
console.log(dog.status);`,
  },
  {
    cat: "DOM",
    id: "dom",
    icon: "🎯",
    title: "DOM — کامل",
    badge: "DOM",
    content: `<div class="ls">
      <h2>🎯 DOM (Document Object Model)</h2>
      <p>DOM یک رابط بین جاوااسکریپت و HTML است.</p>
      <h3>🔹 انتخاب المان‌ها</h3>
      <table class="compare-table">
        <tr><th>روش</th><th>خروجی</th><th>توصیه</th></tr>
        <tr><td>getElementById</td><td>Element</td><td>✅</td></tr>
        <tr><td>querySelector</td><td>Element (اولی)</td><td>✅✅</td></tr>
        <tr><td>querySelectorAll</td><td>NodeList</td><td>✅✅</td></tr>
      </table>
      <h3>🔹 تغییر محتوا</h3>
      <ul>
        <li><span class="hl">textContent</span> — متن خالص</li>
        <li><span class="hl">innerHTML</span> — HTML</li>
      </ul>
      <h3>🔹 classList</h3>
      <p>add | remove | toggle | contains | replace</p>
    </div>`,
    code: `const fakeDOM = {
  create(tag, content, cls) {
    return { tag, content, className: cls, style: {} };
  }
};
const div = fakeDOM.create("div", "سلام", "card");
div.style.color = "red";
console.log("المان:", div.tag, div.content);`,
  },
  {
    cat: "رویدادها",
    id: "mouse-events",
    icon: "🖱️",
    title: "رویدادهای موس",
    badge: "DOM",
    content: `<div class="ls">
      <h2>🖱️ رویدادهای موس</h2>
      <h3>🔹 انواع رویدادها</h3>
      <ul>
        <li><span class="hl">click</span> — کلیک</li>
        <li><span class="hl">dblclick</span> — دوبار کلیک</li>
        <li><span class="hl">mousedown</span> — فشار دادن</li>
        <li><span class="hl">mouseup</span> — رها کردن</li>
        <li><span class="hl">mouseenter</span> — ورود موس</li>
        <li><span class="hl">mouseleave</span> — خروج موس</li>
        <li><span class="hl">mousemove</span> — حرکت موس</li>
        <li><span class="hl">contextmenu</span> — راست کلیک</li>
      </ul>
      <h3>🔹 Event Object</h3>
      <ul>
        <li><span class="hl">e.clientX / e.clientY</span> — موقعیت موس</li>
        <li><span class="hl">e.button</span> — دکمه موس</li>
        <li><span class="hl">e.target</span> — عنصر هدف</li>
      </ul>
    </div>`,
    code: `document.addEventListener("contextmenu", function(e) {
  e.preventDefault();
  console.log("🚫 راست کلیک جلوگیری شد");
});
class MouseSimulator {
  constructor() {
    this.listeners = {};
  }
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  }
  trigger(event, data = {}) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb({ target: data }));
    }
  }
}
const sim = new MouseSimulator();
sim.addEventListener("click", () => console.log("کلیک شبیه‌سازی شد!"));
sim.trigger("click");`,
  },
  {
    cat: "رویدادها",
    id: "keyboard-events",
    icon: "⌨️",
    title: "رویدادهای کیبورد",
    badge: "DOM",
    content: `<div class="ls">
      <h2>⌨️ رویدادهای کیبورد</h2>
      <h3>🔹 انواع رویدادها</h3>
      <ul>
        <li><span class="hl">keydown</span> — فشار دادن کلید</li>
        <li><span class="hl">keyup</span> — رها کردن کلید</li>
      </ul>
      <h3>🔹 Event Object</h3>
      <ul>
        <li><span class="hl">e.key</span> — مقدار کلید</li>
        <li><span class="hl">e.code</span> — کد فیزیکی کلید</li>
        <li><span class="hl">e.ctrlKey</span> — Ctrl فشار داده شده؟</li>
        <li><span class="hl">e.shiftKey</span> — Shift فشار داده شده؟</li>
      </ul>
    </div>`,
    code: `document.addEventListener("keydown", function(e) {
  if (e.ctrlKey && e.key === "s") {
    e.preventDefault();
    console.log("⛔ Ctrl+S جلوگیری شد!");
  }
});
class KeyboardSimulator {
  constructor() {
    this.listeners = {};
  }
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  }
  trigger(event, data = {}) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(cb => cb({ key: data.key || "a", ctrlKey: data.ctrlKey || false }));
    }
  }
}
const kbSim = new KeyboardSimulator();
kbSim.addEventListener("keydown", (e) => {
  console.log("⌨️ کلید:", e.key, "Ctrl:", e.ctrlKey);
});
kbSim.trigger("keydown", { key: "s", ctrlKey: true });`,
  },
  {
    cat: "رویدادها",
    id: "input-events",
    icon: "📝",
    title: "رویدادهای ورودی",
    badge: "DOM",
    content: `<div class="ls">
      <h2>📝 رویدادهای ورودی</h2>
      <h3>🔹 انواع رویدادها</h3>
      <ul>
        <li><span class="hl">input</span> — هر تغییر (لحظه‌ای)</li>
        <li><span class="hl">change</span> — بعد از فوکس رفت</li>
        <li><span class="hl">focus</span> — کلیک روی المان</li>
        <li><span class="hl">blur</span> — خروج از المان</li>
      </ul>
      <h3>🔹 تفاوت input و change</h3>
      <p><span class="hl">input</span> هر بار تایپ اجرا می‌شود، <span class="hl">change</span> فقط بعد از خارج شدن.</p>
    </div>`,
    code: `class InputSimulator {
  constructor() {
    this.value = "";
    this.listeners = {};
  }
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  }
  setValue(val) {
    this.value = val;
    if (this.listeners.input) {
      this.listeners.input.forEach(cb => cb({ target: { value: this.value } }));
    }
  }
  blur() {
    if (this.listeners.change) {
      this.listeners.change.forEach(cb => cb({ target: { value: this.value } }));
    }
  }
}
const inputSim = new InputSimulator();
inputSim.addEventListener("input", (e) => console.log("input:", e.target.value));
inputSim.addEventListener("change", (e) => console.log("change:", e.target.value));
inputSim.setValue("hello");
inputSim.blur();`,
  },
  {
    cat: "رویدادها",
    id: "form-events",
    icon: "📋",
    title: "رویدادهای فرم",
    badge: "DOM",
    content: `<div class="ls">
      <h2>📋 رویدادهای فرم</h2>
      <h3>🔹 submit</h3>
      <p>وقتی فرم ارسال می‌شود. با <span class="hl">e.preventDefault()</span> جلوگیری می‌کنیم.</p>
      <h3>🔹 reset</h3>
      <p>وقتی فرم ریست می‌شود.</p>
      <h3>🔹 اعتبارسنجی</h3>
      <p>بررسی ورودی‌ها قبل از ارسال.</p>
    </div>`,
    code: `class FormSimulator {
  constructor() {
    this.listeners = {};
  }
  addEventListener(event, cb) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(cb);
  }
  submit() {
    if (this.listeners.submit) {
      this.listeners.submit.forEach(cb => cb({ preventDefault: () => {} }));
    }
  }
}
const formSim = new FormSimulator();
formSim.addEventListener("submit", () => console.log("✅ فرم ارسال شد"));
formSim.submit();`,
  },
  {
    cat: "Async JS",
    id: "timers",
    icon: "⏱️",
    title: "setTimeout و setInterval",
    badge: "Async",
    content: `<div class="ls">
      <h2>⏱️ setTimeout و setInterval</h2>
      <h3>🔹 setTimeout</h3>
      <p>یک بار بعد از تأخیر اجرا می‌شود.</p>
      <pre>setTimeout(callback, delay)</pre>
      <h3>🔹 setInterval</h3>
      <p>هر delay یک بار اجرا می‌شود.</p>
      <pre>setInterval(callback, delay)</pre>
      <div class="warn">⚠️ setInterval را با <span class="hl">clearInterval</span> متوقف کنید تا مموری لیک نشود.</div>
    </div>`,
    code: `console.log("شروع");
setTimeout(() => {
  console.log("بعد از 500ms اجرا شدم!");
}, 500);
setTimeout(() => console.log("آخر"), 0);
console.log("زودتر");
let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("تیک:", count);
  if (count >= 3) {
    clearInterval(intervalId);
    console.log("✅ متوقف شد");
  }
}, 200);
function countdown(from) {
  let current = from;
  const id = setInterval(() => {
    console.log("⏰", current);
    current--;
    if (current < 0) {
      clearInterval(id);
      console.log("🚀 شروع!");
    }
  }, 300);
}
countdown(3);`,
  },
  {
    cat: "Async JS",
    id: "promises",
    icon: "🤝",
    title: "Promise",
    badge: "پیشرفته",
    content: `<div class="ls">
      <h2>🤝 Promise</h2>
      <p>Promise نمایانگر یک عملیات ناهمزمان است.</p>
      <h3>🔹 سه حالت</h3>
      <ul>
        <li><span class="hl">pending</span> — در انتظار</li>
        <li><span class="hl">fulfilled</span> — موفق</li>
        <li><span class="hl">rejected</span> — شکست</li>
      </ul>
      <h3>🔹 متدها</h3>
      <ul>
        <li><span class="hl">.then()</span> — موفق</li>
        <li><span class="hl">.catch()</span> — خطا</li>
        <li><span class="hl">.finally()</span> — همیشه</li>
        <li><span class="hl">Promise.all()</span> — همه با هم</li>
        <li><span class="hl">Promise.race()</span> — اولین</li>
      </ul>
    </div>`,
    code: `function fetchData(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id < 0) {
        reject(new Error("id نامعتبر"));
      } else {
        resolve({ id, data: "داده " + id });
      }
    }, 100);
  });
}
fetchData(1)
  .then(result => {
    console.log("✅", result.data);
    return result.id * 100;
  })
  .then(score => console.log("امتیاز:", score))
  .catch(err => console.error("❌", err.message))
  .finally(() => console.log("تموم شد"));
Promise.all([fetchData(1), fetchData(2), fetchData(3)])
  .then(results => results.forEach(r => console.log("all ✓", r.data)))
  .catch(err => console.error("all ❌", err));
Promise.race([fetchData(3), fetchData(1), fetchData(2)])
  .then(first => console.log("اولین:", first.data));`,
  },
  {
    cat: "Async JS",
    id: "async-await",
    icon: "⏳",
    title: "Async/Await",
    badge: "پیشرفته",
    content: `<div class="ls">
      <h2>⏳ Async/Await</h2>
      <p>روش مدرن برای کار با Promise. کد را sync می‌نویسیم.</p>
      <h3>🔹 قوانین</h3>
      <ul>
        <li>تابع باید <span class="hl">async</span> باشد</li>
        <li><span class="hl">await</span> فقط داخل async کار می‌کند</li>
        <li>از <span class="hl">try/catch</span> برای خطاها استفاده کنید</li>
      </ul>
    </div>`,
    code: `function wait(ms, value, fail = false) {
  return new Promise((res, rej) =>
    setTimeout(() => fail ? rej(new Error("خطا!")) : res(value), ms)
  );
}
async function loadUser() {
  console.log("شروع لود...");
  const user = await wait(100, { name: "علی", age: 25 });
  console.log("کاربر:", user.name);
  const score = await wait(50, 95);
  console.log("امتیاز:", score);
  return { user, score };
}
loadUser().then(result => console.log("نتیجه:", result));
async function safeLoad() {
  try {
    const data = await wait(50, "داده‌ها");
    console.log("✅", data);
    await wait(30, null, true);
  } catch (err) {
    console.error("❌", err.message);
  } finally {
    console.log("finally");
  }
}
safeLoad();
async function sequential() {
  console.time("seq");
  const a = await wait(100, "A");
  const b = await wait(100, "B");
  const c = await wait(100, "C");
  console.log(a, b, c);
  console.timeEnd("seq");
}
async function parallel() {
  console.time("par");
  const [a, b, c] = await Promise.all([
    wait(100, "A"),
    wait(100, "B"),
    wait(100, "C")
  ]);
  console.log(a, b, c);
  console.timeEnd("par");
}
sequential();
parallel();`,
  },
  {
    cat: "Storage & BOM",
    id: "localstorage",
    icon: "💾",
    title: "localStorage",
    badge: "مرورگر",
    content: `<div class="ls">
      <h2>💾 localStorage</h2>
      <p>ذخیره‌سازی داده در مرورگر کاربر.</p>
      <h3>🔹 متدها</h3>
      <ul>
        <li><span class="hl">setItem(key, value)</span> — ذخیره</li>
        <li><span class="hl">getItem(key)</span> — خواندن</li>
        <li><span class="hl">removeItem(key)</span> — حذف</li>
        <li><span class="hl">clear()</span> — پاک کردن همه</li>
      </ul>
      <div class="warn">⚠️ فقط <span class="hl">string</span> ذخیره می‌کند. برای آبجکت از <span class="hl">JSON.stringify</span> استفاده کنید.</div>
    </div>`,
    code: `const ls = {
  setItem: (k, v) => console.log(\`💾 ذخیره: \${k}\`),
  getItem: (k) => "محمد",
  removeItem: (k) => console.log(\`🗑️ حذف: \${k}\`)
};
ls.setItem("username", "محمد");
console.log(ls.getItem("username"));
const user = { name: "علی", age: 25 };
ls.setItem("user", JSON.stringify(user));
const savedUser = JSON.parse(ls.getItem("user"));
console.log(savedUser.name);
class Storage {
  constructor() {
    this.store = {};
  }
  set(key, val) {
    this.store[key] = JSON.stringify(val);
  }
  get(key) {
    try { return JSON.parse(this.store[key] ?? null); }
    catch { return null; }
  }
  remove(key) { delete this.store[key]; }
}
const store = new Storage();
store.set("config", { theme: "dark" });
console.log(store.get("config"));`,
  },
  {
    cat: "Storage & BOM",
    id: "json",
    icon: "📄",
    title: "JSON",
    badge: "مهم",
    content: `<div class="ls">
      <h2>📄 JSON</h2>
      <p>فرمت متنی برای تبادل داده.</p>
      <h3>🔹 متدها</h3>
      <ul>
        <li><span class="hl">JSON.stringify()</span> — آبجکت → string</li>
        <li><span class="hl">JSON.parse()</span> — string → آبجکت</li>
      </ul>
      <h3>🔹 قوانین</h3>
      <ul>
        <li>کلیدها با <span class="hl">double quote</span></li>
        <li><span class="hl">undefined</span> و <span class="hl">function</span> مجاز نیستند</li>
      </ul>
    </div>`,
    code: `const user = {
  name: "علی",
  age: 25,
  skills: ["JS", "React"],
  greet: function() {}
};
const json = JSON.stringify(user);
console.log(json);
console.log(typeof json);
const parsed = JSON.parse(json);
console.log(parsed.name);
const original = { a: 1, b: { c: 2 } };
const clone = JSON.parse(JSON.stringify(original));
clone.b.c = 999;
console.log("original:", original.b.c);
console.log("clone:", clone.b.c);
try {
  JSON.parse("{ invalid }");
} catch (err) {
  console.error("❌ JSON نامعتبر:", err.message);
}`,
  },
  {
    cat: "مفاهیم پیشرفته",
    id: "closure",
    icon: "🔒",
    title: "Closure",
    badge: "پیشرفته",
    content: `<div class="ls">
      <h2>🔒 Closure</h2>
      <p>Closure یعنی تابع داخلی به متغیرهای تابع بیرونی دسترسی دارد، <span class="hl">حتی بعد از اینکه تابع بیرونی تمام شده.</span></p>
      <h3>🔹 کاربردها</h3>
      <ul>
        <li>Private Variables — متغیرهای خصوصی</li>
        <li>Factory Functions — توابع اختصاصی</li>
        <li>Memoization — کش کردن</li>
      </ul>
    </div>`,
    code: `function outer() {
  let count = 0;
  return {
    increment() { count++; console.log("count:", count); },
    decrement() { count--; console.log("count:", count); },
    getCount() { return count; }
  };
}
const counter1 = outer();
counter1.increment();
counter1.increment();
const counter2 = outer();
counter2.increment();
function createMultiplier(factor) {
  return (n) => n * factor;
}
const double = createMultiplier(2);
console.log(double(10));
function createPerson(name, age) {
  let _age = age;
  return {
    getName: () => name,
    getAge: () => _age,
    birthday() { _age++; console.log(\`\${name} شد \${_age} ساله\`); }
  };
}
const ali = createPerson("علی", 24);
ali.birthday();
console.log(ali.getAge());`,
  },
  {
    cat: "API و Async",
    id: "fetch-api",
    icon: "🚀",
    title: "fetch API",
    badge: "پیشرفته",
    content: `<div class="ls">
      <h2>🚀 fetch API</h2>
      <p>روش مدرن برای درخواست‌های HTTP.</p>
      <h3>🔹 متدها</h3>
      <ul>
        <li><span class="hl">GET</span> — دریافت داده</li>
        <li><span class="hl">POST</span> — ارسال داده</li>
        <li><span class="hl">PUT</span> — به‌روزرسانی کامل</li>
        <li><span class="hl">PATCH</span> — به‌روزرسانی جزئی</li>
        <li><span class="hl">DELETE</span> — حذف داده</li>
      </ul>
      <div class="tip">💡 همیشه <span class="hl">res.ok</span> را بررسی کنید. fetch خطاهای ۴۰۴ را به catch نمی‌فرستد.</div>
    </div>`,
    code: `fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => {
    if (!res.ok) throw new Error("خطا");
    return res.json();
  })
  .then(data => console.log("کاربران:", data.slice(0, 2)))
  .catch(err => console.error("❌", err));
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ userId: 1, title: "عنوان", body: "متن" })
})
  .then(res => res.json())
  .then(data => console.log("✅ پست ایجاد شد:", data))
  .catch(err => console.error("❌", err));
fetch("https://jsonplaceholder.typicode.com/posts/100", {
  method: "DELETE"
})
  .then(res => console.log("✅ حذف شد"))
  .catch(err => console.error("❌", err));`,
  },
  {
    cat: "API و Async",
    id: "axios",
    icon: "📦",
    title: "Axios",
    badge: "پیشرفته",
    content: `<div class="ls">
      <h2>📦 Axios</h2>
      <p>کتابخانه محبوب برای درخواست‌های HTTP.</p>
      <h3>🔹 مزایا</h3>
      <ul>
        <li>✅ JSON را خودکار parse می‌کند</li>
        <li>✅ خطاهای HTTP را به catch می‌فرستد</li>
        <li>✅ از interceptors پشتیبانی می‌کند</li>
      </ul>
    </div>`,
    code: `const axiosSim = {
  get: (url) => {
    console.log(\`📤 GET: \${url}\`);
    return Promise.resolve({ data: { id: 1, name: "علی" } });
  }
};
axiosSim.get("/users").then(res => console.log("✅", res.data));`,
  },
  {
    cat: "Storage & BOM",
    id: "bom",
    icon: "🌐",
    title: "BOM — مرورگر",
    badge: "مرورگر",
    content: `<div class="ls">
      <h2>🌐 BOM (Browser Object Model)</h2>
      <p>BOM به شما امکان تعامل با مرورگر را می‌دهد.</p>
      <h3>🔹 window</h3>
      <p>ابجکت اصلی مرورگر.</p>
      <h3>🔹 location</h3>
      <p>اطلاعات آدرس صفحه.</p>
      <h3>🔹 history</h3>
      <p>تاریخچه مرورگر.</p>
      <h3>🔹 navigator</h3>
      <p>اطلاعات مرورگر کاربر.</p>
    </div>`,
    code: `console.log("innerWidth:", window.innerWidth);
console.log("innerHeight:", window.innerHeight);
console.log("href:", location.href);
console.log("hostname:", location.hostname);
console.log("pathname:", location.pathname);
console.log("userAgent:", navigator.userAgent);
console.log("language:", navigator.language);
console.log("online:", navigator.onLine);`,
  },
];

let currentTopicId = null;

function renderTopics(filter = "") {
  const list = document.getElementById("topic-list");
  list.innerHTML = "";
  let lastCat = "";
  const filtered = topics.filter(
    (t) =>
      t.title.includes(filter) ||
      t.cat.includes(filter) ||
      t.content.includes(filter),
  );
  filtered.forEach((t) => {
    if (t.cat !== lastCat) {
      const catDiv = document.createElement("div");
      catDiv.className = "cat-title";
      catDiv.textContent = t.cat;
      list.appendChild(catDiv);
      lastCat = t.cat;
    }
    const item = document.createElement("div");
    item.className = "topic-item" + (t.id === currentTopicId ? " active" : "");
    item.setAttribute("data-id", t.id);
    item.innerHTML = `
      <span>${t.icon}</span>
      <span>${t.title}</span>
      <span class="topic-badge" data-level="${t.badge}">${t.badge}</span>
    `;
    item.onclick = () => selectTopic(t.id);
    list.appendChild(item);
  });
}

function selectTopic(id) {
  currentTopicId = id;
  const topic = topics.find((t) => t.id === id);
  if (!topic) return;
  renderTopics();
  const lesson = document.getElementById("lesson");
  let codeHtml = "";
  if (topic.code) {
    codeHtml = `
      <div class="code-block">
        <div class="code-hdr">
          <div class="dots">
            <span class="d-r"></span>
            <span class="d-y"></span>
            <span class="d-g"></span>
          </div>
          <span class="code-run" onclick="runSpecificCode('${encodeURIComponent(topic.code)}')">▶ اجرا</span>
        </div>
        <pre>${topic.code}</pre>
      </div>
    `;
  }
  lesson.innerHTML = `
    <div class="ls">
      ${topic.content}
      ${codeHtml}
    </div>
  `;
  document.getElementById("content-title").textContent =
    topic.icon + " " + topic.title;
  document.getElementById("content-sub").textContent = topic.cat;

  closeSidebarMobile();
}

function filterTopics(val) {
  renderTopics(val);
}

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const btn = document.getElementById("sidebar-toggle");
  sidebar.classList.toggle("closed");
  btn.classList.toggle("closed");
  if (sidebar.classList.contains("closed")) {
    btn.textContent = "▶";
  } else {
    btn.textContent = "◀";
  }
}

function toggleConsole() {
  const panel = document.getElementById("console-panel");
  const btn = document.getElementById("console-toggle-btn");
  panel.classList.toggle("closed");
  btn.classList.toggle("closed");
  if (panel.classList.contains("closed")) {
    btn.textContent = "◀";
  } else {
    btn.textContent = "▶";
  }
}

function toggleTheme() {
  document.documentElement.classList.toggle("light");
  const btn = document.getElementById("theme-btn");
  if (document.documentElement.classList.contains("light")) {
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }
}

function runCode() {
  const lesson = document.getElementById("lesson");
  const codeBlocks = lesson.querySelectorAll(".code-block pre");
  if (codeBlocks.length > 0) {
    const code = codeBlocks[codeBlocks.length - 1].textContent;
    runSpecificCode(code);
  }
}

function runSpecificCode(encodedCode) {
  const code = decodeURIComponent(encodedCode);
  const out = document.getElementById("con-out");
  const empty = out.querySelector(".cempty");
  if (empty) empty.remove();
  const originalLog = console.log;
  const originalError = console.error;
  const originalWarn = console.warn;
  const originalInfo = console.info;
  console.log = function (...args) {
    addLine(
      "log",
      args
        .map((a) =>
          typeof a === "object" ? JSON.stringify(a, null, 2) : String(a),
        )
        .join(" "),
    );
    originalLog.apply(console, args);
  };
  console.error = function (...args) {
    addLine("error", args.map((a) => String(a)).join(" "));
    originalError.apply(console, args);
  };
  console.warn = function (...args) {
    addLine("warn", args.map((a) => String(a)).join(" "));
    originalWarn.apply(console, args);
  };
  console.info = function (...args) {
    addLine("info", args.map((a) => String(a)).join(" "));
    originalInfo.apply(console, args);
  };
  try {
    const result = eval(code);
    if (result !== undefined) {
      addLine(
        "log",
        "← " +
          (typeof result === "object"
            ? JSON.stringify(result, null, 2)
            : String(result)),
      );
    }
  } catch (e) {
    addLine("error", "❌ " + e.message);
  }
  console.log = originalLog;
  console.error = originalError;
  console.warn = originalWarn;
  console.info = originalInfo;
}

function addLine(type, text) {
  const out = document.getElementById("con-out");
  const empty = out.querySelector(".cempty");
  if (empty) empty.remove();
  const div = document.createElement("div");
  div.className = "cline " + type;
  div.textContent = text;
  out.appendChild(div);
  out.scrollTop = out.scrollHeight;
}

function clearCon() {
  const out = document.getElementById("con-out");
  out.innerHTML = `
    <div class="cempty">
      <span style="font-size:28px;opacity:0.3">🖥️</span>
      <span>کنسول خالیه</span>
    </div>
  `;
}

function handleInput(e) {
  if (e.key === "Enter") {
    const input = document.getElementById("con-input");
    const code = input.value.trim();
    if (code) {
      runSpecificCode(encodeURIComponent(code));
      input.value = "";
    }
  }
}

function openSidebarMobile() {
  document.getElementById("sidebar").classList.add("open");
  document.getElementById("sidebar-overlay").classList.add("active");
}

function closeSidebarMobile() {
  document.getElementById("sidebar").classList.remove("open");
  document.getElementById("sidebar-overlay").classList.remove("active");
}

function openConsoleMobile() {
  document.getElementById("console-panel").classList.add("open");
  document.getElementById("console-overlay").classList.add("active");
}

function closeConsoleMobile() {
  document.getElementById("console-panel").classList.remove("open");
  document.getElementById("console-overlay").classList.remove("active");
}

renderTopics();
