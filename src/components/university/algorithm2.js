function kernighanLinAlgorithm() {
  // =============================================
  // ШАГ 1: ПОДГОТОВКА ДАННЫХ
  // =============================================

  // Создаем граф связей (кто с кем дружит/связан)
  // connections[1] = [2, 4, 5] значит:
  // у чувака 1 есть связи с чуваками 2, 4 и 5
  const connections = {
    1: [2, 4, 5], // Чувак 1 связан с 2, 4 и 5
    2: [1, 4, 6], // Чувак 2 связан с 1, 4 и 6
    3: [5, 6], // Чувак 3 связан с 5 и 6
    4: [1, 2], // Чувак 4 связан с 1 и 2
    5: [1, 3], // Чувак 5 связан с 1 и 3
    6: [2, 3], // Чувак 6 связан с 2 и 3
  };

  // Изначальное разбиение на две комнаты
  // roomA и roomB - это массивы с номерами чуваков
  let roomA = [1, 2, 3]; // Комната А
  let roomB = [4, 5, 6]; // Комната Б

  console.log("НАЧАЛЬНАЯ РАССТАНОВКА:");
  console.log("Комната А:", roomA);
  console.log("Комната Б:", roomB);
  console.log("Граф связей:", connections);

  // =============================================
  // ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
  // =============================================

  /**
   * Проверяет, есть ли связь между двумя чуваками
   * @param {number} a - номер первого чувака
   * @param {number} b - номер второго чувака
   * @returns {boolean} true если есть связь, false если нет
   */
  function isConnected(a, b) {
    // connections[a] - это массив связей чувака a
    // includes(b) проверяет, есть ли b в этом массиве
    // Если connections[a] содержит b, значит они связаны
    return connections[a] && connections[a].includes(b);
  }

  /**
   * Определяет, в какой комнате находится чувак
   * @param {number} dude - номер чувака
   * @returns {string} 'A' или 'B' или null если не найден
   */
  function getRoomOf(dude) {
    // includes проверяет, есть ли элемент в массиве
    if (roomA.includes(dude)) {
      return "A";
    } else if (roomB.includes(dude)) {
      return "B";
    } else {
      return null; // Такого чувака нет ни в одной комнате
    }
  }

  /**
   * Считает "балл недовольства" для одного чувака
   * Балл = (внешние связи) - (внутренние связи)
   * @param {number} dude - номер чувака
   * @returns {number} балл недовольства
   */
  function calculateScore(dude) {
    // Получаем массив друзей (связей) этого чувака
    const friends = connections[dude] || [];

    // Узнаем, в какой комнате находится сам чувак
    const dudeRoom = getRoomOf(dude);

    // Счетчики для внешних и внутренних связей
    let externalCount = 0; // Связи с другой комнатой
    let internalCount = 0; // Связи со своей комнатой

    // Перебираем всех друзей чувака
    for (const friend of friends) {
      // Узнаем, в какой комнате находится друг
      const friendRoom = getRoomOf(friend);

      // Если комнаты разные - это внешняя связь
      if (dudeRoom !== friendRoom) {
        externalCount++;
      }
      // Если комнаты одинаковые - это внутренняя связь
      else {
        internalCount++;
      }
    }

    // Балл недовольства = внешние - внутренние
    const score = externalCount - internalCount;

    // Для отладки можно посмотреть детали
    console.log(`Чувак ${dude} (комната ${dudeRoom}):`);
    console.log(`Внешние связи: ${externalCount}, Внутренние: ${internalCount}`);
    console.log(`Балл: ${externalCount} - ${internalCount} = ${score}`);

    return score;
  }

  /**
   * Считает общее количество связей МЕЖДУ комнатами
   * @returns {number} количество межкомнатных связей
   */
  function countCrossRoomConnections() {
    let crossCount = 0;

    // Перебираем всех чуваков в комнате А
    for (const a of roomA) {
      // Берем всех друзей чувака a
      const friends = connections[a] || [];

      // Для каждого друга проверяем, в какой он комнате
      for (const friend of friends) {
        // Если друг находится в комнате Б - это межкомнатная связь
        if (roomB.includes(friend)) {
          crossCount++;
        }
      }
    }

    return crossCount;
  }

  // =============================================
  // ШАГ 2: ЗАПУСК ОДНОЙ ПОЛНОЙ ИТЕРАЦИИ
  // =============================================

  /**
   * Выполняет одну полную итерацию алгоритма
   * Возвращает последовательность обменов и общую выгоду
   */
  function runSingleIteration() {
    console.log("\n ЗАПУСК НОВОЙ ИТЕРАЦИИ");
    console.log("-".repeat(30));

    // Создаем копии комнат, чтобы не портить оригиналы
    // пока мы только тестируем обмены
    let tempRoomA = [...roomA]; // ... - spread оператор, создает копию массива
    let tempRoomB = [...roomB];

    // Массив для хранения последовательности обменов
    const swaps = [];

    // Set для хранения заблокированных (уже обменянных) чуваков
    // Set - это коллекция уникальных значений
    const locked = new Set();

    // Создаем копию баллов всех чуваков
    const allScores = {};
    for (const dude of [...tempRoomA, ...tempRoomB]) {
      allScores[dude] = calculateScore(dude);
    }

    // Максимальное количество шагов в итерации =
    // минимальное количество чуваков в одной из комнат
    const maxSteps = Math.min(tempRoomA.length, tempRoomB.length);

    console.log(`\n ИЩЕМ ЛУЧШИЕ ОБМЕНЫ (максимум ${maxSteps} шагов):`);

    // Выполняем несколько шагов обменов
    for (let step = 1; step <= maxSteps; step++) {
      console.log(`\n ШАГ ${step}:`);

      let bestGain = -Infinity; // Начальное значение - очень маленькое
      let bestPair = null; // Лучшая пара для обмена

      // Перебираем ВСЕ возможные пары (чувак из А + чувак из Б)
      for (const a of tempRoomA) {
        // Пропускаем заблокированных чуваков
        if (locked.has(a)) continue;

        for (const b of tempRoomB) {
          // Пропускаем заблокированных
          if (locked.has(b)) continue;

          // Узнаем, есть ли связь между a и b
          const connectionExists = isConnected(a, b) ? 1 : 0;

          // Считаем выгоду от обмена этой пары
          // Формула: gain = score(a) + score(b) - 2 * (есть ли связь a-b)
          const gain = allScores[a] + allScores[b] - 2 * connectionExists;

          // Если эта выгода лучше, чем предыдущая лучшая
          if (gain > bestGain) {
            bestGain = gain;
            bestPair = { a, b, gain };
          }

          // Для отладки выводим информацию о паре
          console.log(
            `Пара (${a},${b}): ${allScores[a]} + ${allScores[b]} - 2*${connectionExists} = ${gain}`,
          );
        }
      }

      // Если не нашли подходящую пару - выходим
      if (!bestPair) {
        console.log("Не найдено подходящих пар для обмена");
        break;
      }

      console.log(
        `ЛУЧШАЯ ПАРА: (${bestPair.a}, ${bestPair.b}) с выгодой ${bestPair.gain}`,
      );

      // Запоминаем этот обмен
      swaps.push(bestPair);

      // Блокируем выбранных чуваков (больше их не трогаем в этой итерации)
      locked.add(bestPair.a);
      locked.add(bestPair.b);

      // ВИРТУАЛЬНЫЙ ОБМЕН: меняем чуваков местами в временных комнатах
      // Удаляем a из tempRoomA
      tempRoomA = tempRoomA.filter((dude) => dude !== bestPair.a);
      // Удаляем b из tempRoomB
      tempRoomB = tempRoomB.filter((dude) => dude !== bestPair.b);
      // Добавляем a в tempRoomB
      tempRoomB.push(bestPair.a);
      // Добавляем b в tempRoomA
      tempRoomA.push(bestPair.b);

      // ОБНОВЛЯЕМ БАЛЛЫ всех оставшихся незаблокированных чуваков
      // В реальном алгоритме здесь сложная логика, но для простоты
      // мы просто пересчитаем все баллы заново для наглядности
      console.log("Обновляем баллы после обмена...");

      // Пересчитываем баллы для всех незаблокированных чуваков
      for (const dude of [...tempRoomA, ...tempRoomB]) {
        if (!locked.has(dude)) {
          // Временно меняем комнаты для расчета
          const originalRoomA = roomA;
          const originalRoomB = roomB;
          roomA = tempRoomA;
          roomB = tempRoomB;

          allScores[dude] = calculateScore(dude);

          // Возвращаем оригинальные комнаты
          roomA = originalRoomA;
          roomB = originalRoomB;
        }
      }
    }

    // Возвращаем комнаты к исходному состоянию
    // (мы работали с временными копиями)

    return swaps;
  }

  /**
   * Анализирует последовательность обменов и находит лучший префикс
   * @param {Array} swaps - массив обменов из итерации
   * @returns {Object} лучший префикс и его выгода
   */
  function findBestPrefix(swaps) {
    if (swaps.length === 0) {
      return { bestStep: 0, bestTotalGain: 0 };
    }

    console.log("\n АНАЛИЗ ПОСЛЕДОВАТЕЛЬНОСТИ ОБМЕНОВ:");
    console.log("=".repeat(40));

    let currentGain = 0; // Текущая накопленная выгода
    let bestTotalGain = 0; // Лучшая накопленная выгода
    let bestStep = 0; // На каком шаге была лучшая выгода

    // Перебираем все обмены и считаем накопленную выгоду
    for (let i = 0; i < swaps.length; i++) {
      const swap = swaps[i];
      currentGain += swap.gain;

      console.log(`После обмена ${i + 1} (${swap.a}↔${swap.b}):`);
      console.log(`Выгода этого шага: ${swap.gain}`);
      console.log(`Накопленная выгода: ${currentGain}`);

      // Если текущая накопленная выгода лучше лучшей
      if (currentGain > bestTotalGain) {
        bestTotalGain = currentGain;
        bestStep = i + 1; // i+1 потому что шаги с 1
        console.log(`НОВЫЙ РЕКОРД! Делать ${bestStep} обменов`);
      }

      console.log("-".repeat(30));
    }

    return { bestStep, bestTotalGain };
  }

  /**
   * Выполняет реальный обмен чуваков между комнатами
   * @param {Array} swaps - массив всех обменов
   * @param {number} stepsToTake - сколько обменов выполнить
   */
  function performRealSwaps(swaps, stepsToTake) {
    console.log(
      `\n ВЫПОЛНЯЕМ РЕАЛЬНЫЕ ОБМЕНЫ (первые ${stepsToTake} из ${swaps.length}):`,
    );

    for (let i = 0; i < stepsToTake; i++) {
      const swap = swaps[i];
      console.log(`Шаг ${i + 1}: Меняем ${swap.a} (из А) и ${swap.b} (из Б)`);

      // Удаляем a из комнаты А
      roomA = roomA.filter((dude) => dude !== swap.a);
      // Удаляем b из комнаты Б
      roomB = roomB.filter((dude) => dude !== swap.b);

      // Добавляем a в комнату Б
      roomB.push(swap.a);
      // Добавляем b в комнату А
      roomA.push(swap.b);

      console.log(`Комната А стала: [${roomA}]`);
      console.log(`Комната Б стала: [${roomB}]`);
    }
  }

  // =============================================
  // ШАГ 3: ГЛАВНЫЙ ЦИКЛ АЛГОРИТМА
  // =============================================

  console.log("=".repeat(50));

  let iteration = 1;
  let overallImprovement = 0;

  // Запоминаем начальное количество связей между комнатами
  const initialConnections = countCrossRoomConnections();
  console.log(`Начальное количество межкомнатных связей: ${initialConnections}`);

  // Главный цикл: выполняем итерации, пока есть улучшения
  while (true) {
    console.log(`\n ИТЕРАЦИЯ ${iteration}:`);
    console.log("=".repeat(30));

    // Запускаем одну полную итерацию
    const swaps = runSingleIteration();

    // Если не нашли ни одного обмена - выходим
    if (swaps.length === 0) {
      console.log("\n Нет возможных обменов. Алгоритм завершен.");
      break;
    }

    // Находим лучший префикс (сколько обменов реально делать)
    const { bestStep, bestTotalGain } = findBestPrefix(swaps);

    // Если нет положительной выгоды - выходим
    if (bestTotalGain <= 0) {
      console.log("\n Нет улучшений. Алгоритм завершен.");
      break;
    }

    // Выполняем реальные обмены (только лучший префикс)
    performRealSwaps(swaps, bestStep);

    // Считаем новое количество связей
    const newConnections = countCrossRoomConnections();
    console.log(`\n ИТОГ ИТЕРАЦИИ ${iteration}:`);
    console.log(`Улучшение: ${bestTotalGain} связей`);
    console.log(`Межкомнатных связей было: ${initialConnections + overallImprovement}`);
    console.log(`Межкомнатных связей стало: ${newConnections}`);

    // Обновляем счетчики
    overallImprovement += bestTotalGain;
    iteration++;

    console.log("\n" + "=".repeat(50));
  }

  // =============================================
  // ШАГ 4: ВЫВОД РЕЗУЛЬТАТОВ
  // =============================================

  console.log("\n ФИНАЛЬНЫЕ РЕЗУЛЬТАТЫ:");
  console.log("=".repeat(50));
  console.log(`Комната А: [${roomA}]`);
  console.log(`Комната Б: [${roomB}]`);
  console.log(`Межкомнатных связей: ${countCrossRoomConnections()}`);
  console.log(`Общее улучшение: ${overallImprovement} связей`);
  console.log("=".repeat(50));

  return {
    roomA,
    roomB,
    crossConnections: countCrossRoomConnections(),
    improvement: overallImprovement,
  };
}

const result = kernighanLinAlgorithm();
console.log(result);









