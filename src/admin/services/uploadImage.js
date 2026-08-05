import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase/firebase";
import { v4 as uuid } from "uuid";

export async function uploadImage(file) {
  const imageRef = ref(storage, `projects/${uuid()}-${file.name}`);

  await uploadBytes(imageRef, file);

  return await getDownloadURL(imageRef);
}