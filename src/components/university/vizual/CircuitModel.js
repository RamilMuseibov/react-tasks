export class CircuitModel {
  constructor(nets) {
    this.nets = nets;
    this.components = new Set();
    this.edges = [];
    this.buildGraph();
  }

  buildGraph() {
    for (const net of this.nets) {
      const comps = net.connections.map((c) => c.component);
      comps.forEach((c) => this.components.add(c));

      for (let i = 0; i < comps.length - 1; i++) {
        this.edges.push({
          from: comps[i],
          to: comps[i + 1],
          weight: net.connections.length,
        });
      }
    }
  }
}
