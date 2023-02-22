import Cookies from "js-cookie";
import { defaultFirebaseRequest } from "../http";
async function patchNameSelectedNote() {
  const id = Cookies.get("currentId");

  await defaultFirebaseRequest.patch(`/${id}/${path}/${noteIndex}.json`, {
    name: noteNameInputValue,
    paragraphs: noteParagraphsInputValue,
  });

  if (noteNameInputFlag) {
    await defaultFirebaseRequest.patch(`/${id}/${path}/${noteIndex}.json`, {
      name: noteName,
    });
  }

  if (noteParagraphsInputFlag) {
    await defaultFirebaseRequest.patch(`/${id}/${path}/${noteIndex}.json`, {
      paragraphs: noteParagraphs,
    });
  }
}

async function patchReduxNotes(dispatch, path) {
  const id = Cookies.get("currentId");

  await defaultFirebaseRequest.get(`/${id}/${path}.json`).then(({ data }) => {
    if (path === "notes") {
      dispatch(newNotes(data));
    } else if (path === "pinned") {
      dispatch(newPinned(data));
    } else if (path === "archived") {
      dispatch(newArchived(data));
    }
  });

  dispatch(newFirstItemActive(true));
  dispatch(newSecondItemActive(false));
  dispatch(newThirdItemActive(false));
}

function saveNote() {
  patchNameSelectedNote();
  patchReduxNotes();
}
