import fs from "fs";

// ===== парсер Calay =====
function calayParser(text) {
  const lines = text.split("\n");
  const nets = [];

  for (const line of lines) {
    if (!line.includes(";")) continue;

    const cleanLine = line.replace(";", "").trim();
    if (cleanLine.length === 0) continue;

    const parts = cleanLine.split(/\s+/);
    const netId = parts[0];

    const connections = parts.slice(1).map((item) => {
      const component = item.split("('")[0];
      const pinMatch = item.match(/\('(\d+)\)/);

      return {
        component,
        pin: Number(pinMatch[1]),
      };
    });

    nets.push({
      net: netId,
      connections,
    });
  }

  return nets;
}

const fileText = fs.readFileSync("calay.NET", "utf8");

const result = calayParser(fileText);

console.log(JSON.stringify(result, null, 2));
