import React, { useState } from "react";

// export default function SimpleCalculator() {
//   const [p, setP] = useState("");
//   const [h, setH] = useState("");
//   const [type, setType] = useState("обои");
//   const [width, setWidth] = useState("");
//   const [length, setLength] = useState("");
//   const [price, setPrice] = useState("");
//   const [result, setResult] = useState(null);

//   function calc() {
//     const area = parseFloat(p) * parseFloat(h);

//     if (type === "обои") {
//       const rollArea = parseFloat(width) * parseFloat(length);
//       const rolls = Math.ceil(area / rollArea);
//       const cost = rolls * parseFloat(price);

//       setResult({
//         text: `Нужно ${rolls} рулонов`,
//         cost: `${cost.toFixed(2)} руб`,
//       });
//     } else {
//       const liters = Math.ceil(area * parseFloat(width));
//       const cost = liters * parseFloat(price);

//       setResult({
//         text: `Нужно ${liters} л краски`,
//         cost: `${cost.toFixed(2)} руб`,
//       });
//     }
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
//       <h2>Калькулятор ремонта</h2>

//       <div style={{ marginBottom: "10px" }}>
//         <div>
//           Периметр: <input value={p} onChange={(e) => setP(e.target.value)} />
//         </div>
//         <div>
//           Высота: <input value={h} onChange={(e) => setH(e.target.value)} />
//         </div>
//         <div>
//           Тип:
//           <select value={type} onChange={(e) => setType(e.target.value)}>
//             <option value="обои">Обои</option>
//             <option value="краска">Краска</option>
//           </select>
//         </div>

//         {type === "обои" ? (
//           <>
//             <div>
//               Ширина рулона:{" "}
//               <input value={width} onChange={(e) => setWidth(e.target.value)} />
//             </div>
//             <div>
//               Длина рулона:{" "}
//               <input value={length} onChange={(e) => setLength(e.target.value)} />
//             </div>
//           </>
//         ) : (
//           <div>
//             Расход краски:{" "}
//             <input value={width} onChange={(e) => setWidth(e.target.value)} />
//           </div>
//         )}

//         <div>
//           Цена: <input value={price} onChange={(e) => setPrice(e.target.value)} />
//         </div>
//       </div>

//       <button onClick={calc} style={{ padding: "10px 20px", marginRight: "10px" }}>
//         Посчитать
//       </button>

//       {result && (
//         <div style={{ marginTop: "20px", padding: "10px" }}>
//           <p>
//             <strong>{result.text}</strong>
//           </p>
//           <p>
//             <strong>{result.cost}</strong>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

//=====================2==============================

// export default function SpeedFineCalculator() {
//   const [speed, setSpeed] = useState("");
//   const [result, setResult] = useState("");

//   function calc() {
//     const s = parseFloat(speed);
//     const over = s - 90;

//     if (over <= 0) {
//       setResult("Скорость автомобиля допустима на данном участке");
//     } else if (over <= 20) {
//       setResult("Штраф: 500 рублей");
//     } else if (over <= 40) {
//       setResult("Штраф: 500 рублей");
//     } else if (over <= 60) {
//       setResult("Штраф: 1500 рублей");
//     } else if (over <= 80) {
//       setResult("Штраф: 2500 рублей или лишение прав на 4 месяца");
//     } else {
//       setResult("Штраф: 5000 рублей или лишение прав на полгода");
//     }
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h3>Штраф за превышение скорости</h3>
//       <div>
//         Скорость: <input value={speed} onChange={(e) => setSpeed(e.target.value)} />
//       </div>
//       <button onClick={calc}>Проверить</button>
//       {result && (
//         <p>
//           <strong>{result}</strong>
//         </p>
//       )}
//     </div>
//   );
// }

//=====================3==============================

// export default function StudentsPullUpTest() {
//   const [numStudents, setNumStudents] = useState("");
//   const [results, setResults] = useState(null);
//   const [pullUpsList, setPullUpsList] = useState([]);

//   function generateTest() {
//     const n = parseInt(numStudents);

//     const pullUps = Array.from({ length: n }, () => Math.floor(Math.random() * 26));

//     console.log(pullUps);

//     const grades = {
//       5: 0,
//       4: 0,
//       3: 0,
//       2: 0,
//     };

//     pullUps.forEach((pullUp) => {
//       if (pullUp >= 16) {
//         grades["5"]++;
//       } else if (pullUp >= 14) {
//         grades["4"]++;
//       } else if (pullUp >= 12) {
//         grades["3"]++;
//       } else {
//         grades["2"]++;
//       }
//     });

//     const minPullUps = Math.min(...pullUps);
//     const maxPullUps = Math.max(...pullUps);

//     setPullUpsList(pullUps);
//     setResults({
//       grades,
//       min: minPullUps,
//       max: maxPullUps,
//       totalStudents: n,
//     });
//   }

//   return (
//     <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
//       <h2>Зачет по подтягиванию</h2>

//       <div style={{ marginBottom: "20px" }}>
//         <div style={{ marginBottom: "10px" }}>
//           <label>Количество студентов: </label>
//           <input
//             type="number"
//             value={numStudents}
//             onChange={(e) => setNumStudents(e.target.value)}
//             min="1"
//             style={{
//               marginLeft: "10px",
//               padding: "5px",
//               width: "80px",
//             }}
//           />
//         </div>

//         <div style={{ marginBottom: "15px", fontSize: "14px", color: "#666" }}>
//           <p>
//             <strong>Нормативы:</strong>
//           </p>
//           <p>• 5 баллов: 16+ подтягиваний</p>
//           <p>• 4 балла: 14-15 подтягиваний</p>
//           <p>• 3 балла: 12-13 подтягиваний</p>
//           <p>• 2 балла: менее 12 подтягиваний</p>
//         </div>

//         <button
//           onClick={generateTest}
//           style={{
//             padding: "10px 20px",
//             backgroundColor: "#007bff",
//             color: "white",
//             border: "none",
//             borderRadius: "4px",
//             cursor: "pointer",
//           }}
//         >
//           Сгенерировать результаты
//         </button>
//       </div>

//       {results && (
//         <div>
//           <h3>Результаты зачета:</h3>

//           <div
//             style={{
//               padding: "15px",
//               borderRadius: "4px",
//               marginBottom: "20px",
//             }}
//           >
//             <p>
//               <strong>Общее количество студентов:</strong> {results.totalStudents}
//             </p>
//             <p>
//               <strong>Сдали на 5:</strong> {results.grades["5"]} студентов
//             </p>
//             <p>
//               <strong>Сдали на 4:</strong> {results.grades["4"]} студентов
//             </p>
//             <p>
//               <strong>Сдали на 3:</strong> {results.grades["3"]} студентов
//             </p>
//             <p>
//               <strong>Не сдали (2):</strong> {results.grades["2"]} студентов
//             </p>
//             <p>
//               <strong>Минимальное количество подтягиваний:</strong> {results.min}
//             </p>
//             <p>
//               <strong>Максимальное количество подтягиваний:</strong> {results.max}
//             </p>
//           </div>

//           <div>
//             <h4>Подробные результаты по студентам:</h4>
//             <div
//               style={{
//                 display: "flex",
//                 flexWrap: "wrap",
//                 gap: "10px",
//                 marginTop: "10px",
//               }}
//             >
//               {pullUpsList.map((pullUps, index) => {
//                 let grade;
//                 let color;

//                 if (pullUps >= 16) {
//                   grade = "5";
//                   color = "#28a745";
//                 } else if (pullUps >= 14) {
//                   grade = "4";
//                   color = "#17a2b8";
//                 } else if (pullUps >= 12) {
//                   grade = "3";
//                   color = "#ffc107";
//                 } else {
//                   grade = "2";
//                   color = "#dc3545";
//                 }

//                 return (
//                   <div
//                     key={index}
//                     style={{
//                       padding: "8px 12px",
//                       backgroundColor: color,
//                       color: "white",
//                       borderRadius: "4px",
//                       textAlign: "center",
//                       minWidth: "60px",
//                     }}
//                   >
//                     <div>
//                       <strong>Студент {index + 1}</strong>
//                     </div>
//                     <div>{pullUps} раз</div>
//                     <div>Оценка: {grade}</div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

//=====================4==============================

// export default function LongestWordFinder() {
//   const [text, setText] = useState("");
//   const [result, setResult] = useState("");

//   function find() {
//     const words = text.split(" ");
//     let longest = "";

//     words.forEach((word) => {
//       const clean = word.replace(/[^a-zA-Zа-яА-Я0-9]/g, ""); //регулярное выражение для удаления всех символов, кроме помеченных
//       if (clean.length > longest.length) {
//         longest = clean;
//       }
//     });

//     setResult(longest);
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h3>Самое длинное слово</h3>
//       <input
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//         style={{ width: "300px" }}
//       />
//       <button onClick={find}>Найти</button>
//       {result && (
//         <p>
//           <strong>Результат: {result}</strong>
//         </p>
//       )}
//     </div>
//   );
// }

//=====================5==============================

// export default function PasswordValidator() {
//   const [pass, setPass] = useState("");
//   const [result, setResult] = useState(null);

//   function checkPassword() {
//     const requirements = {
//       hasLowercase: /[a-z]/.test(pass), //тоже регулярка, проверяет, есть ли в pass, хоть один символ из диапозона a-z и возвращает true/false
//       hasUppercase: /[A-Z]/.test(pass),
//       hasNumber: /\d/.test(pass),
//       hasSpecialChar: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pass),
//       hasValidLength: pass.length >= 6 && pass.length <= 12,
//     };

//     const allValid = Object.values(requirements).every((value) => value === true);

//     setResult({
//       isValid: allValid,
//       details: requirements,
//     });
//   }

//   return (
//     <div style={{ padding: "20px" }}>
//       <h3>Проверка пароля</h3>
//       <input value={pass} onChange={(e) => setPass(e.target.value)} />
//       <button onClick={checkPassword}>Проверить</button>

//       {result && (
//         <div>
//           <p>
//             Результат: <strong>{result.isValid ? "TRUE" : "FALSE"}</strong>
//           </p>
//         </div>
//       )}
//     </div>
//   );
// }

//====================Задача 2 (ООП)=======================

// export default function MobileOperatorApp() {
//   const [results, setResults] = useState([]);

//   // Класс Тариф
//   class Tariff {
//     constructor(
//       number,
//       name,
//       monthlyPrice,
//       minutes,
//       sms,
//       internetGb,
//       overPriceMin,
//       overPriceSms,
//       overPriceGb
//     ) {
//       this.number = number;
//       this.name = name;
//       this.monthlyPrice = monthlyPrice;
//       this.minutes = minutes;
//       this.sms = sms;
//       this.internetGb = internetGb;
//       this.overPriceMin = overPriceMin;
//       this.overPriceSms = overPriceSms;
//       this.overPriceGb = overPriceGb;
//     }

//     getInfo() {
//       return `${this.number}. ${this.name}: ${this.monthlyPrice}₽/мес (${this.minutes} мин, ${this.sms} SMS, ${this.internetGb} ГБ)`;
//     }

//     calculateCost(usedMinutes, usedSms, usedInternet) {
//       let total = this.monthlyPrice;

//       if (usedMinutes > this.minutes) {
//         total += (usedMinutes - this.minutes) * this.overPriceMin;
//       }

//       if (usedSms > this.sms) {
//         total += (usedSms - this.sms) * this.overPriceSms;
//       }

//       if (usedInternet > this.internetGb) {
//         total += (usedInternet - this.internetGb) * this.overPriceGb;
//       }

//       return total;
//     }
//   }

//   // Класс Клиент
//   class Client {
//     constructor(name, age, usedMinutes, usedSms, usedInternet, tariff) {
//       this.name = name;
//       this.age = age;
//       this.usedMinutes = usedMinutes;
//       this.usedSms = usedSms;
//       this.usedInternet = usedInternet;
//       this.tariff = tariff;
//     }

//     getInfo() {
//       return `${this.name} (${this.age} лет), тариф: ${this.tariff.name}`;
//     }

//     calculateBill() {
//       return this.tariff.calculateCost(this.usedMinutes, this.usedSms, this.usedInternet);
//     }
//   }

//   const initialize = () => {
//     // Создаем тарифы
//     const basic = new Tariff(1, "Базовый", 300, 100, 50, 5, 2, 1, 100);
//     const standard = new Tariff(2, "Стандарт", 500, 300, 150, 15, 1.5, 0.5, 80);
//     const premium = new Tariff(3, "Премиум", 1000, 1000, 500, 30, 1, 0.3, 50);

//     // Создаем клиентов
//     const clients = [
//       new Client("Иван", 25, 120, 60, 6, basic),
//       new Client("Мария", 30, 350, 200, 20, standard),
//       new Client("Алексей", 28, 800, 400, 25, premium),
//       new Client("Ольга", 22, 30, 10, 1, basic),
//       new Client("Дмитрий", 35, 150, 100, 10, standard),
//     ];

//     // Считаем счета
//     const bills = clients.map((client) => ({
//       client: client.getInfo(),
//       used: `Минуты: ${client.usedMinutes}, SMS: ${client.usedSms}, Интернет: ${client.usedInternet} ГБ`,
//       bill: client.calculateBill(),
//     }));

//     setResults(bills);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
//       <h2>Мобильный оператор</h2>

//       <button onClick={initialize} style={{ padding: "10px 20px", marginBottom: "20px" }}>
//         Запустить расчет
//       </button>

//       {results.length > 0 && (
//         <div>
//           <h3>Результаты:</h3>
//           {results.map((result, index) => (
//             <div
//               key={index}
//               style={{
//                 padding: "15px",
//                 marginBottom: "10px",
//                 borderRadius: "5px",
//               }}
//             >
//               <div>
//                 <strong>{result.client}</strong>
//               </div>
//               <div>{result.used}</div>
//               <div style={{ marginTop: "10px", fontSize: "18px" }}>
//                 <strong>К оплате: {result.bill.toFixed(2)}₽</strong>
//               </div>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

//====================Задача 3=======================

// export default function GymApp() {
//   const [results, setResults] = useState([]);
//   const [companyInfo, setCompanyInfo] = useState(null);

//   // Базовый класс Тренер
//   class Trainer {
//     constructor(name, specialty, category, pricePerSession) {
//       this.name = name;
//       this.specialty = specialty;
//       this.category = category;
//       this.pricePerSession = pricePerSession;
//     }

//     getInfo() {
//       return `${this.name} (${this.specialty}, категория: ${this.category})`;
//     }
//   }

//   // Базовый класс Клиент
//   class Client {
//     constructor(name, gender, age, weight, visitsPerMonth, budget, preferences) {
//       this.name = name;
//       this.gender = gender;
//       this.age = age;
//       this.weight = weight;
//       this.visitsPerMonth = visitsPerMonth;
//       this.budget = budget;
//       this.preferences = preferences || []; // предпочтения по видам спорта
//     }

//     getInfo() {
//       return `${this.name} (${this.age} лет, ${this.visitsPerMonth} посещений/месяц, бюджет: ${this.budget}₽)`;
//     }
//   }

//   // Абстрактный класс Тариф
//   class Tariff {
//     constructor(id, name, dailyCost, durationDays) {
//       this.id = id;
//       this.name = name;
//       this._dailyCost = dailyCost; // стоимость в день
//       this.durationDays = durationDays; // срок действия в днях
//     }

//     // Геттер/сеттер для dailyCost с ограничением
//     get dailyCost() {
//       return this._dailyCost;
//     }

//     set dailyCost(value) {
//       if (value < 0) {
//         throw new Error("Стоимость не может быть отрицательной");
//       }
//       this._dailyCost = value;
//     }

//     // Так как в JS нет абстрактных классов, то просто сделаем заглушку
//     computeCost(client) {
//       throw new Error("Метод computeCost должен быть реализован в дочернем классе");
//     }
//   }

//   // Обычные занятия (наследуется от Тарифа)
//   class RegularTraining extends Tariff {
//     constructor(id, name, dailyCost, durationDays, pricePerVisit) {
//       super(id, name, dailyCost, durationDays);
//       this.pricePerVisit = pricePerVisit; // стоимость одного посещения
//     }

//     computeCost(client) {
//       // Стоимость = (стоимость в день × длительность) + (посещения × цена за посещение)
//       const baseCost = this.dailyCost * this.durationDays;
//       const visitsCost = client.visitsPerMonth * this.pricePerVisit;
//       return baseCost + visitsCost;
//     }
//   }

//   // Занятия в группе (наследуется от Тарифа)
//   class GroupTraining extends Tariff {
//     constructor(id, name, dailyCost, durationDays, specialty, groupSize, trainer) {
//       super(id, name, dailyCost, durationDays);
//       this.specialty = specialty; // вид занятия
//       this._groupSize = groupSize; // размер группы
//       this.trainer = trainer; // тренер
//       this.pricePerPerson = 50; // базовая цена за человека в группе
//     }

//     // Геттер/сеттер для groupSize с ограничением
//     get groupSize() {
//       return this._groupSize;
//     }

//     set groupSize(value) {
//       if (value < 1) {
//         throw new Error("Размер группы должен быть не менее 1 человека");
//       }
//       this._groupSize = value;
//     }

//     computeCost(client) {
//       // Стоимость = базовая + услуги тренера + групповой коэффициент
//       const baseCost = this.dailyCost * this.durationDays;
//       const trainerCost = this.trainer.pricePerSession / this.groupSize;
//       const groupCost = this.pricePerPerson * client.visitsPerMonth;
//       return baseCost + trainerCost + groupCost;
//     }
//   }

//   // Занятие с тренером индивидуально (наследуется от Тарифа)
//   class PersonalTraining extends Tariff {
//     constructor(id, name, dailyCost, durationDays, specialty, trainer) {
//       super(id, name, dailyCost, durationDays);
//       this.specialty = specialty;
//       this.trainer = trainer;
//     }

//     computeCost(client) {
//       // Стоимость = базовая + услуги тренера с учетом его категории
//       const baseCost = this.dailyCost * this.durationDays;
//       const categoryMultiplier =
//         this.trainer.category === "pro"
//           ? 1.5
//           : this.trainer.category === "expert"
//           ? 2.0
//           : 1.0;
//       const trainerCost =
//         this.trainer.pricePerSession * categoryMultiplier * client.visitsPerMonth;
//       return baseCost + trainerCost;
//     }
//   }

//   // Класс Компания
//   class GymCompany {
//     constructor(name) {
//       this.name = name;
//       this.tariffs = [];
//       this.trainers = [];
//     }

//     addTariff(tariff) {
//       this.tariffs.push(tariff);
//     }

//     addTrainer(trainer) {
//       this.trainers.push(trainer);
//     }

//     // Подбор тарифов для клиента
//     findBestTariffs(client) {
//       const tariffResults = [];

//       // Рассчет стоимости для каждого тарифа
//       this.tariffs.forEach((tariff) => {
//         try {
//           const cost = tariff.computeCost(client);
//           const score = this.calculateScore(tariff, client, cost);

//           tariffResults.push({
//             tariff: tariff,
//             cost: cost,
//             score: score,
//             match: score >= 60, // считаем что подходит если оценка >= 60%
//           });
//         } catch (error) {
//           console.log(`Ошибка расчета для тарифа ${tariff.name}: ${error.message}`);
//         }
//       });

//       // Сортируем по оценке и берем топ-3
//       return tariffResults.sort((a, b) => b.score - a.score).slice(0, 3);
//     }

//     // Расчет оценки совпадения (от 0 до 100)
//     calculateScore(tariff, client, cost) {
//       let score = 0;

//       // 1. Проверка бюджета (макс 50 баллов)
//       const budgetMatch = Math.max(
//         0,
//         50 - ((cost - client.budget) / client.budget) * 100
//       );
//       score += Math.min(50, budgetMatch);

//       // 2. Проверка предпочтений по виду спорта (макс 30 баллов)
//       if (client.preferences.length > 0) {
//         if (tariff.specialty && client.preferences.includes(tariff.specialty)) {
//           score += 30;
//         } else if (tariff instanceof RegularTraining) {
//           score += 10; // обычные занятия подходят всем
//         }
//       } else {
//         score += 20; // если предпочтений нет, даем базовые баллы
//       }

//       // 3. Проверка типа занятий (макс 20 баллов)
//       if (tariff instanceof PersonalTraining && client.visitsPerMonth > 8) {
//         score += 20; // много посещений - лучше персональные
//       } else if (tariff instanceof GroupTraining && client.visitsPerMonth >= 4) {
//         score += 15; // групповые для среднего посещения
//       } else if (tariff instanceof RegularTraining && client.visitsPerMonth <= 6) {
//         score += 15; // обычные для редких посещений
//       }

//       return Math.min(100, score);
//     }
//   }

//   const initialize = () => {
//     // Создаем компанию
//     const gym = new GymCompany("IronFlex Gym");
//     setCompanyInfo(gym.name);

//     // Создаем тренеров
//     const trainer1 = new Trainer("Анна", "Йога", "pro", 2000);
//     const trainer2 = new Trainer("Игорь", "Фитнес", "expert", 2500);
//     const trainer3 = new Trainer("Мария", "Пилатес", "standard", 1500);
//     const trainer4 = new Trainer("Алексей", "Кроссфит", "pro", 2200);

//     gym.addTrainer(trainer1);
//     gym.addTrainer(trainer2);
//     gym.addTrainer(trainer3);
//     gym.addTrainer(trainer4);

//     // Создаем тарифы
//     const tariff1 = new RegularTraining(1, "Базовый", 100, 30, 300);
//     const tariff2 = new RegularTraining(2, "Интенсив", 150, 30, 250);
//     const tariff3 = new GroupTraining(3, "Групповая йога", 80, 30, "Йога", 10, trainer1);
//     const tariff4 = new GroupTraining(4, "Фитнес-группа", 120, 30, "Фитнес", 8, trainer2);
//     const tariff5 = new PersonalTraining(
//       5,
//       "Персональный фитнес",
//       200,
//       30,
//       "Фитнес",
//       trainer2
//     );
//     const tariff6 = new PersonalTraining(
//       6,
//       "Индивидуальная йога",
//       180,
//       30,
//       "Йога",
//       trainer1
//     );
//     const tariff7 = new PersonalTraining(
//       7,
//       "Персональный кроссфит",
//       220,
//       30,
//       "Кроссфит",
//       trainer4
//     );

//     gym.addTariff(tariff1);
//     gym.addTariff(tariff2);
//     gym.addTariff(tariff3);
//     gym.addTariff(tariff4);
//     gym.addTariff(tariff5);
//     gym.addTariff(tariff6);
//     gym.addTariff(tariff7);

//     // Создаем клиентов с разными пожеланиями
//     const clients = [
//       new Client("Иван", "муж", 28, 80, 8, 10000, ["Фитнес", "Кроссфит"]),
//       new Client("Мария", "жен", 32, 65, 12, 15000, ["Йога", "Пилатес"]),
//       new Client("Алексей", "муж", 25, 90, 4, 5000, []),
//       new Client("Ольга", "жен", 40, 70, 6, 8000, ["Йога"]),
//     ];

//     // Подбираем тарифы для каждого клиента
//     const recommendations = clients.map((client) => {
//       const bestTariffs = gym.findBestTariffs(client);
//       return {
//         client: client.getInfo(),
//         preferences:
//           client.preferences.length > 0
//             ? client.preferences.join(", ")
//             : "нет предпочтений",
//         recommendations: bestTariffs.map((item, index) => ({
//           rank: index + 1,
//           name: item.tariff.name,
//           type: item.tariff.constructor.name.replace("Training", ""),
//           cost: item.cost.toFixed(2),
//           score: item.score.toFixed(1),
//         })),
//       };
//     });

//     setResults(recommendations);
//   };

//   return (
//     <div style={{ padding: "20px", maxWidth: "900px", margin: "auto" }}>
//       <h2>Тренажерный зал: подбор тарифов</h2>
//       <h3>{companyInfo && `Компания: ${companyInfo}`}</h3>

//       <button onClick={initialize} style={{ padding: "10px 20px", marginBottom: "20px" }}>
//         Подобрать тарифы
//       </button>

//       {results.length > 0 && (
//         <div>
//           {results.map((result, clientIndex) => (
//             <div
//               key={clientIndex}
//               style={{
//                 padding: "20px",
//                 marginBottom: "30px",
//                 border: "1px solid #dee2e6",
//                 borderRadius: "5px",
//               }}
//             >
//               <h3>Клиент: {result.client}</h3>
//               <p>Предпочтения: {result.preferences}</p>

//               <h4>Топ-3 рекомендованных тарифа:</h4>
//               {result.recommendations.map((tariff, index) => (
//                 <div
//                   key={index}
//                   style={{
//                     padding: "15px",
//                     marginBottom: "10px",
//                     border: `1px solid ${
//                       index === 0 ? "#c3e6cb" : index === 1 ? "#ffeaa7" : "#f5c6cb"
//                     }`,
//                     borderRadius: "4px",
//                   }}
//                 >
//                   <div>
//                     <strong>
//                       #{tariff.rank}. {tariff.name}
//                     </strong>{" "}
//                     ({tariff.type})
//                   </div>
//                   <div>Стоимость: {tariff.cost}₽</div>
//                   <div>Оценка соответствия: {tariff.score}%</div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

//=======Задача 1 по экзамену=======

// export default function AnimalApp() {
//   const [animals, setAnimals] = useState([]);
//   const [averageAge, setAverageAge] = useState(0);
//   const [youngAnimals, setYoungAnimals] = useState([]);

//   class Animal {
//     constructor(name, age, weight) {
//       this.name = name;
//       this.age = age;
//       this.weight = weight;
//     }
//   }

//   class Dog extends Animal {
//     constructor(name, age, weight, breed) {
//       super(name, age, weight);
//       this.breed = breed;
//     }
//   }

//   class Cat extends Animal {
//     constructor(name, age, weight, color) {
//       super(name, age, weight);
//       this.color = color;
//     }
//   }

//   const generateAnimals = () => {
//     const animalsList = [];
//     for (let i = 0; i < 10; i++) {
//       if (Math.random() > 0.5) {
//         animalsList.push(
//           new Dog(
//             `Собака ${i}`,
//             Math.floor(Math.random() * 15) + 1,
//             Math.floor(Math.random() * 30) + 1,
//             ["овчарка", "такса"][Math.floor(Math.random() * 2)],
//           ),
//         );
//       } else {
//         animalsList.push(
//           new Cat(
//             `Кот ${i}`,
//             Math.floor(Math.random() * 15) + 1,
//             Math.floor(Math.random() * 10) + 1,
//             ["рыжий", "черный"][Math.floor(Math.random() * 2)],
//           ),
//         );
//       }
//     }

//     const totalAge = animalsList.reduce((sum, animal) => sum + animal.age, 0);
//     const avgAge = totalAge / animalsList.length;

//     const youngList = animalsList.filter((animal) => animal.age < avgAge);

//     setAnimals(animalsList);
//     setAverageAge(avgAge);
//     setYoungAnimals(youngList);
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Животные</h2>

//       <button
//         onClick={generateAnimals}
//         style={{ padding: "10px 20px", marginBottom: "20px" }}
//       >
//         Сгенерировать животных
//       </button>

//       {animals.length > 0 && (
//         <div>
//           <div style={{ marginBottom: "20px", padding: "10px" }}>
//             <p>Всего животных: {animals.length}</p>
//             <p>Средний возраст: {averageAge.toFixed(1)}</p>
//             <p>Животных младше среднего: {youngAnimals.length}</p>
//           </div>

//           <div style={{ marginBottom: "20px" }}>
//             <h3>Все животные:</h3>
//             {animals.map((animal, i) => (
//               <div key={i} style={{ marginBottom: "5px" }}>
//                 {animal.name} - {animal.age} лет, {animal.weight}кг
//                 {animal.breed && `, ${animal.breed}`}
//                 {animal.color && `, ${animal.color}`}
//               </div>
//             ))}
//           </div>

//           <div>
//             <h3>Животные младше среднего:</h3>
//             {youngAnimals.map((animal, i) => (
//               <div key={i} style={{ marginBottom: "5px" }}>
//                 {animal.name} - {animal.age} лет
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

//=======Задача 2 по экзамену=======

export default function TravelOrganizer() {
  const [orders, setOrders] = useState([]);

  class Hotel {
    constructor(name, stars) {
      this.name = name;
      this.stars = Math.min(5, Math.max(1, stars));
    }
  }

  class Country {
    constructor(name, basePrice) {
      this.name = name;
      this.basePrice = basePrice;
    }
  }

  class AsiaCountry extends Country {
    constructor(name, basePrice) {
      super(name, basePrice * 1.3);
      this.continent = "Asia";
    }
  }

  class EuropeanCountry extends Country {
    constructor(name, basePrice) {
      super(name, basePrice * 1.5);
      this.continent = "Europe";
    }
  }

  class AmericaCountry extends Country {
    constructor(name, basePrice) {
      super(name, basePrice * 1.8);
      this.continent = "America";
    }
  }

  class Order {
    constructor(country, hotel, days) {
      this.country = country;
      this.hotel = hotel;
      this.days = Math.max(1, days);
    }

    calculate() {
      let baseCost = this.country.basePrice * this.days;

      const starMultipliers = {
        1: 1.0,
        2: 1.3,
        3: 1.6,
        4: 2.0,
        5: 2.5,
      };

      const starMultiplier = starMultipliers[this.hotel.stars] || 1.0;

      let continentBonus = 1.0;
      if (this.country.continent === "Asia") continentBonus = 1.1;
      if (this.country.continent === "Europe") continentBonus = 1.2;
      if (this.country.continent === "America") continentBonus = 1.3;

      return baseCost * starMultiplier * continentBonus;
    }
  }

  const generateOrders = () => {
    const hotels = [
      new Hotel("Люкс", 5),
      new Hotel("Стандарт", 3),
      new Hotel("Эконом", 2),
      new Hotel("Бутик", 4),
    ];

    const countries = [
      new AsiaCountry("Тайланд", 1000),
      new AsiaCountry("Япония", 1500),
      new EuropeanCountry("Франция", 2000),
      new EuropeanCountry("Россия", 1200),
      new AmericaCountry("США", 2500),
      new AmericaCountry("Бразилия", 1800),
    ];

    const ordersList = [];
    for (let i = 0; i < 6; i++) {
      const country = countries[Math.floor(Math.random() * countries.length)];
      const hotel = hotels[Math.floor(Math.random() * hotels.length)];
      const days = Math.floor(Math.random() * 14) + 7; // 7-21 день

      ordersList.push(new Order(country, hotel, days));
    }

    setOrders(ordersList);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>TravelOrganizer - расчет стоимости туров</h2>

      <button
        onClick={generateOrders}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        Сгенерировать туры
      </button>

      {orders.length > 0 && (
        <div>
          <div
            style={{
              padding: "15px",
              marginBottom: "20px",
              borderRadius: "5px",
            }}
          ></div>

          <h3>Детализация заказов:</h3>
          {orders.map((order, index) => (
            <div
              key={index}
              style={{
                padding: "15px",
                marginBottom: "15px",
                border: "1px solid #dee2e6",
                borderRadius: "5px",
              }}
            >
              <div>
                <strong>Тур #{index + 1}</strong>
              </div>
              <div>
                Страна: {order.country.name} ({order.country.continent})
              </div>
              <div>
                Отель: {order.hotel.name} ({order.hotel.stars}★)
              </div>
              <div>Длительность: {order.days} дней</div>
              <div style={{ marginTop: "10px", fontSize: "18px", color: "#28a745" }}>
                <strong>Стоимость: {order.calculate().toFixed(2)} ₽</strong>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
