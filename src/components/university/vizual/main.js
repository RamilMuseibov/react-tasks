import { NetlistParser } from "./NetlistParser.js";
import { CircuitModel } from "./CircuitModel.js";
import { Visualizer } from "./visualizer.js";

const canvas = document.getElementById("pcb");
const input = document.getElementById("fileInput");

input.addEventListener("change", async (e) => {
  const text = await e.target.files[0].text();

  const parser = new NetlistParser();
  const nets = parser.parseCalay(text);

  const model = new CircuitModel(nets);
  const vis = new Visualizer(canvas, model);

  const pos = {};
  let i = 0;
  for (const c of model.components) {
    pos[c] = {
      x: 80 + (i % 7) * 120,
      y: 80 + Math.floor(i / 7) * 90,
    };
    i++;
  }

  vis.drawGrid();
  vis.drawComponents(pos);
  vis.drawConnections(pos);
});
