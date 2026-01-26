export class Visualizer {
  constructor(canvas, model) {
    this.ctx = canvas.getContext("2d");
    this.model = model;
    this.w = canvas.width;
    this.h = canvas.height;
  }

  drawGrid(step = 40) {
    this.ctx.strokeStyle = "#ddd";
    for (let x = 0; x < this.w; x += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.h);
      this.ctx.stroke();
    }
    for (let y = 0; y < this.h; y += step) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.w, y);
      this.ctx.stroke();
    }
  }

  drawComponents(pos) {
    for (const [n, p] of Object.entries(pos)) {
      this.ctx.fillStyle = "#add8e6";
      this.ctx.fillRect(p.x - 25, p.y - 15, 50, 30);
      this.ctx.strokeRect(p.x - 25, p.y - 15, 50, 30);
      this.ctx.fillStyle = "#000";
      this.ctx.fillText(n, p.x - 15, p.y + 5);
    }
  }

  drawConnections(positions) {
    this.ctx.strokeStyle = "#1e90ff"; // спокойный синий
    this.ctx.lineWidth = 0.8; // ТОНКИЕ ЛИНИИ

    for (const edge of this.model.edges) {
      const a = positions[edge.from];
      const b = positions[edge.to];

      if (!a || !b) continue;

      this.ctx.beginPath();
      this.ctx.moveTo(a.x, a.y);
      this.ctx.lineTo(b.x, b.y);
      this.ctx.stroke();
    }
  }
}
