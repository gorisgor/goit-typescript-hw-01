// Створіть змінну, яка може містити або рядок, або число (union type)? Також, оголосіть змінну, яка може містити лише одне з двох можливих рядкових значень: 'enable' або 'disable' (literal type).

export let mixVar: string | number;
mixVar = 12;
// mixVar = "string";

export let toggle1: 'enable' | 'disable';
toggle1 = 'enable';
// toggle1 = 'disable';
