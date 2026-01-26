import fs from "fs";

// ===== парсер Allegro =====
function allegroParser(text) {
  const netsText = text.split("$NETS")[1].split("$END")[0];

  const lines = netsText.replace(/,\s*\n\s*/g, " ").split("\n");

  const nets = [];

  for (const line of lines) {
    if (!line.includes(";")) continue;

    const [netId, rest] = line.split(";");
    const items = rest.trim().split(/\s+/);

    const connections = items.map((item) => {
      const [component, pin] = item.split(".");
      return { component, pin: Number(pin) };
    });

    nets.push({ net: netId.trim(), connections });
  }

  return nets;
}

const fileText = fs.readFileSync("allegro_1.NET", "utf8");

const result = allegroParser(fileText);

fs.writeFileSync("allegro.json", JSON.stringify(result, null, 2), { encoding: "utf-8" });
