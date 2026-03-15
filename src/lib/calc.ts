import { Split, PersonTotal } from "./types";

export function calculatePersonTotals(split: Split): PersonTotal[] {
  return split.people.map((person) => {
    const items = split.items
      .filter((item) => item.assignedTo.includes(person))
      .map((item) => ({
        name: item.name,
        price: item.price,
        split: item.price / item.assignedTo.length,
      }));

    const itemsTotal = items.reduce((sum, i) => sum + i.split, 0);
    const proportion = split.subtotal > 0 ? itemsTotal / split.subtotal : 0;
    const taxAmount = split.subtotal * (split.taxPercent / 100) * proportion;
    const tipAmount = split.subtotal * (split.tipPercent / 100) * proportion;

    return {
      name: person,
      items,
      itemsTotal,
      taxAmount,
      tipAmount,
      total: itemsTotal + taxAmount + tipAmount,
    };
  });
}
