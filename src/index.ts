import { services, Service } from "./services";

function buildTree(
  services: Service[],
  parent: number | null,
  level: number
): HTMLDivElement {
  const nodeContainer = document.createElement("div");
  nodeContainer.style.marginLeft = `${level * 20}px`;

  const children = services
    .filter((item) => item.head === parent)
    .sort((a, b) => a.sorthead - b.sorthead);

  children.forEach((item) => {
    const nodeElement = document.createElement("div");
    nodeElement.textContent = `${item.name} (${item.price})`;
    nodeContainer.appendChild(nodeElement);
    if (item.node === 1) {
      const childNodeContainer = buildTree(services, item.id, level + 1);
      nodeContainer.appendChild(childNodeContainer);
    }
  });

  return nodeContainer;
}

document.addEventListener("DOMContentLoaded", () => {
  const treeContainer = buildTree(services, null, 0);
  document.body.appendChild(treeContainer);
});
