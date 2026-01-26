export class NetlistParser {
  parseCalay(text) {
    const lines = text.split("\n");
    const nets = [];

    for (const line of lines) {
      const clean = line.trim();
      if (!clean) continue;

      const parts = clean.split(/\s+/);
      const net = parts[0];
      const connections = [];

      for (let i = 1; i < parts.length; i++) {
        const m = parts[i].match(/([A-Z0-9]+)\('\s*(\d+)/);
        if (m) {
          connections.push({ component: m[1], pin: Number(m[2]) });
        }
      }

      if (connections.length > 1) {
        nets.push({ net, connections });
      }
    }
    return nets;
  }
}
