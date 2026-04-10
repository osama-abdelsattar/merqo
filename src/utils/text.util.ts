function capitaliseWord(word: string): string {
  const firstLetterCapitalised = word[0].toUpperCase();
  const restOfTheWord = word.slice(1);

  return firstLetterCapitalised + restOfTheWord;
}

function capitaliseSentence(sentence: string): string {
  const words = sentence.split(" ");
  const capitalisedWords = words.map((word) => capitaliseWord(word));
  const joinedSentence = capitalisedWords.join(" ");

  return joinedSentence;
}

function getInitials(sentence: string): string[] {
  const words = sentence.split(" ");
  const firstTwoWords = words.slice(0, 2);
  const initials = firstTwoWords.map((word) => word[0]);

  return initials;
}

export { capitaliseWord, capitaliseSentence, getInitials };
