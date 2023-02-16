/** @format */

export function checkNoteTextLength(
	firstParagraghLength,
	countParagraphs,
	headerLength,
) {
	return firstParagraghLength > 0 || countParagraphs >= 2 || headerLength > 0;
}
