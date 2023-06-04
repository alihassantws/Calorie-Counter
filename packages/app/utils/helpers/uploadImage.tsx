import { firebase } from 'app/services/firebase/firebaseConfig'
import uuid from 'react-native-uuid'

export async function uploadImageAsync({ uri, userId }) {
  // Why are we using XMLHttpRequest? See:
  // https://github.com/expo/expo/issues/2402#issuecomment-443726662

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.onload = function () {
      resolve(xhr.response)
    }
    xhr.onerror = function (e) {
      console.log(e)
      reject(new TypeError('Network request failed'))
    }
    xhr.responseType = 'blob'
    xhr.open('GET', uri, true)
    xhr.send(null)
  })

  // Get a reference to the Firebase Storage service
  const storage = firebase.storage()

  // Create a storage reference
  const storageRef = storage.ref()
  const path = userId ? `users/${userId}` : 'anonymous/'

  // Create a reference to the user's folder in the storage bucket
  const userFolderRef = storageRef.child(path)

  // Create a reference to the file you want to upload
  const fileRef = userFolderRef.child(`${uuid.v4()}`)

  // Upload the file to Firebase Storage
  const snapshot = await fileRef.put(new Blob([blob], {type: 'image/png'}))

  // Get the URL of the uploaded image
  const remoteUri = await snapshot.ref.getDownloadURL()

  blob?.close()

  return remoteUri
}
