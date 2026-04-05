function capitalise(text: string): string {
  return text
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
}

function upperCaseFirstLetter(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

export { capitalise, upperCaseFirstLetter };
