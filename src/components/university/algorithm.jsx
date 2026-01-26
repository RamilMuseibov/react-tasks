import React, { useState, useEffect } from "react";
import "./algorithm.css"

export default function Algorithm() {
  // Состояния
  const [roomA, setRoomA] = useState([1, 2, 3]);
  const [roomB, setRoomB] = useState([4, 5, 6]);
  const [connections, setConnections] = useState({
    1: [2, 4, 5],
    2: [1, 4, 6],
    3: [5, 6],
    4: [1, 2],
    5: [1, 3],
    6: [2, 3],
  });
  const [isRunning, setIsRunning] = useState(false);
  const [logs, setLogs] = useState([]);
  const [stats, setStats] = useState({
    crossConnections: 6,
    improvement: 0,
    iterations: 0,
  });

  // ===================== ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ =====================

  const addLog = (message) => {
    setLogs((prev) => [...prev, message]);
  };

  const clearLogs = () => {
    setLogs([]);
  };

  const isConnected = (a, b) => {
    return connections[a] && connections[a].includes(b);
  };

  const getRoomOf = (dude) => {
    if (roomA.includes(dude)) return "A";
    if (roomB.includes(dude)) return "B";
    return null;
  };

  const calculateScore = (dude) => {
    const friends = connections[dude] || [];
    const dudeRoom = getRoomOf(dude);

    let externalCount = 0;
    let internalCount = 0;

    for (const friend of friends) {
      const friendRoom = getRoomOf(friend);
      if (dudeRoom !== friendRoom) {
        externalCount++;
      } else {
        internalCount++;
      }
    }

    return externalCount - internalCount;
  };

  const countCrossRoomConnections = () => {
    let crossCount = 0;
    for (const a of roomA) {
      const friends = connections[a] || [];
      for (const friend of friends) {
        if (roomB.includes(friend)) {
          crossCount++;
        }
      }
    }
    return crossCount;
  };

  // ===================== ОСНОВНОЙ АЛГОРИТМ =====================

  const runAlgorithm = async () => {
    setIsRunning(true);
    clearLogs();

    addLog("🚀 ЗАПУСК АЛГОРИТМА КЕРНИГАНА-ЛИНА");
    addLog(`Начальная расстановка:`);
    addLog(`Комната А: [${roomA}]`);
    addLog(`Комната Б: [${roomB}]`);
    addLog(`Межкомнатных связей: ${countCrossRoomConnections()}`);
    addLog("-".repeat(40));

    // Копируем текущее состояние
    let currentRoomA = [...roomA];
    let currentRoomB = [...roomB];
    let overallImprovement = 0;
    let iteration = 1;

    // Внешний цикл алгоритма
    while (true) {
      addLog(`\n🔥 ИТЕРАЦИЯ ${iteration}:`);

      // ШАГ 1: Подготовка к итерации
      const tempRoomA = [...currentRoomA];
      const tempRoomB = [...currentRoomB];
      const swaps = [];
      const locked = new Set();

      // Вычисляем баллы для всех элементов
      const allScores = {};
      for (const dude of [...tempRoomA, ...tempRoomB]) {
        // Временно меняем комнаты для расчета баллов
        const originalA = currentRoomA;
        const originalB = currentRoomB;
        currentRoomA = tempRoomA;
        currentRoomB = tempRoomB;

        allScores[dude] = calculateScore(dude);

        currentRoomA = originalA;
        currentRoomB = originalB;
      }

      // ШАГ 2: Поиск последовательности обменов
      const maxSteps = Math.min(tempRoomA.length, tempRoomB.length);
      let currentTempA = [...tempRoomA];
      let currentTempB = [...tempRoomB];

      for (let step = 0; step < maxSteps; step++) {
        // Ищем лучшую пару
        let bestGain = -Infinity;
        let bestPair = null;

        for (const a of currentTempA) {
          if (locked.has(a)) continue;
          for (const b of currentTempB) {
            if (locked.has(b)) continue;

            const connectionExists = isConnected(a, b) ? 1 : 0;
            const gain = allScores[a] + allScores[b] - 2 * connectionExists;

            if (gain > bestGain) {
              bestGain = gain;
              bestPair = { a, b, gain };
            }
          }
        }

        if (!bestPair) break;

        swaps.push(bestPair);
        addLog(
          `  Шаг ${step + 1}: Пара (${bestPair.a}, ${bestPair.b}) с выгодой ${bestPair.gain}`,
        );

        // Виртуальный обмен
        locked.add(bestPair.a);
        locked.add(bestPair.b);
        currentTempA = currentTempA.filter((d) => d !== bestPair.a);
        currentTempB = currentTempB.filter((d) => d !== bestPair.b);
        currentTempA.push(bestPair.b);
        currentTempB.push(bestPair.a);

        // Обновляем баллы (упрощенно)
        for (const dude of [...currentTempA, ...currentTempB]) {
          if (!locked.has(dude)) {
            const originalA = currentRoomA;
            const originalB = currentRoomB;
            currentRoomA = currentTempA;
            currentRoomB = currentTempB;

            allScores[dude] = calculateScore(dude);

            currentRoomA = originalA;
            currentRoomB = originalB;
          }
        }

        // Небольшая задержка для визуализации
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      // ШАГ 3: Анализ найденной последовательности
      let currentGain = 0;
      let bestTotalGain = 0;
      let bestStep = 0;

      for (let i = 0; i < swaps.length; i++) {
        currentGain += swaps[i].gain;
        if (currentGain > bestTotalGain) {
          bestTotalGain = currentGain;
          bestStep = i + 1;
        }
      }

      addLog(`  Наилучшая выгода: ${bestTotalGain} (первые ${bestStep} обменов)`);

      // ШАГ 4: Если нет улучшений - завершаем
      if (bestTotalGain <= 0) {
        addLog("\n⛔ Нет улучшений. Алгоритм завершен.");
        break;
      }

      // ШАГ 5: Выполняем реальные обмены
      addLog(`  Выполняем реальные обмены:`);
      for (let i = 0; i < bestStep; i++) {
        const swap = swaps[i];
        addLog(`    Обмен ${i + 1}: ${swap.a} ↔ ${swap.b}`);

        // Обновляем массивы
        currentRoomA = currentRoomA.filter((d) => d !== swap.a);
        currentRoomB = currentRoomB.filter((d) => d !== swap.b);
        currentRoomB.push(swap.a);
        currentRoomA.push(swap.b);

        // Обновляем UI
        setRoomA([...currentRoomA]);
        setRoomB([...currentRoomB]);

        // Задержка для анимации
        await new Promise((resolve) => setTimeout(resolve, 800));
      }

      // Обновляем статистику
      overallImprovement += bestTotalGain;
      const newCrossConnections = countCrossRoomConnections();

      setStats({
        crossConnections: newCrossConnections,
        improvement: overallImprovement,
        iterations: iteration,
      });

      addLog(`  Итог итерации: улучшение на ${bestTotalGain} связей`);
      addLog(`  Всего улучшение: ${overallImprovement} связей`);
      addLog("-".repeat(40));

      iteration++;

      // Если слишком много итераций - выходим
      if (iteration > 10) {
        addLog("\n⚠️ Достигнут лимит итераций");
        break;
      }
    }

    addLog("\n🏆 АЛГОРИТМ ЗАВЕРШЕН");
    addLog(`Финальная расстановка:`);
    addLog(`Комната А: [${roomA}]`);
    addLog(`Комната Б: [${roomB}]`);
    addLog(`Межкомнатных связей: ${countCrossRoomConnections()}`);
    addLog(`Общее улучшение: ${stats.improvement} связей`);

    setIsRunning(false);
  };

  const resetAlgorithm = () => {
    setRoomA([1, 2, 3]);
    setRoomB([4, 5, 6]);
    clearLogs();
    setStats({
      crossConnections: 6,
      improvement: 0,
      iterations: 0,
    });
  };

  // ===================== РЕНДЕР =====================

  return (
    <div className="App">
      <header>
        <h1>Алгоритм Кернигана-Линя</h1>
        <p>Итерационный метод минимизации соединений между группами</p>
      </header>

      <div className="main-container">
        {/* Панель управления */}
        <div className="control-panel">
          <div className="stats">
            <div className="stat-item">
              <span className="stat-label">Связей между группами:</span>
              <span className="stat-value">{stats.crossConnections}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Улучшение:</span>
              <span className="stat-value">{stats.improvement} связей</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Итераций:</span>
              <span className="stat-value">{stats.iterations}</span>
            </div>
          </div>

          <div className="buttons">
            <button onClick={runAlgorithm} disabled={isRunning} className="btn-primary">
              {isRunning ? "Выполняется..." : "▶ Запустить алгоритм"}
            </button>
            <button
              onClick={resetAlgorithm}
              disabled={isRunning}
              className="btn-secondary"
            >
              🔄 Сбросить
            </button>
          </div>
        </div>

        {/* Визуализация групп */}
        <div className="visualization">
          <div className="group-container">
            <h2>Группа A</h2>
            <div className="group-box group-a">
              {roomA.map((dude) => (
                <div key={dude} className="element">
                  {dude}
                </div>
              ))}
            </div>
          </div>

          <div className="connections-info">
            <div className="connections-count">
              <span className="count-number">{stats.crossConnections}</span>
              <span className="count-label">связей между</span>
            </div>
          </div>

          <div className="group-container">
            <h2>Группа B</h2>
            <div className="group-box group-b">
              {roomB.map((dude) => (
                <div key={dude} className="element">
                  {dude}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Логи работы алгоритма */}
        <div className="logs-container">
          <h2>Ход работы алгоритма</h2>
          <div className="logs">
            {logs.map((log, index) => (
              <div key={index} className="log-entry">
                {log}
              </div>
            ))}
            {logs.length === 0 && (
              <div className="log-empty">
                Нажмите "Запустить алгоритм" для начала работы
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
