import { uploadImageAsync } from 'app/utils/helpers/uploadImage'

import { db, firebase } from './firebaseConfig'

export const createImage = async ({ uri, userId, textQuery, username }) => {
  if (!userId) {
    const url = await uploadImageAsync({ uri })

    return url
  }

  const userCollectionRef = db.collection('users')
  const discoverCollectionRef = db.collection('discover')
  const currentUser = await userCollectionRef.where('uid', '==', userId).get()
  if (currentUser.empty) {
    // setIsLoading(false)
    return ''
  }
  const userData = currentUser.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  const userRef = userCollectionRef.doc(userData[0].id)
  const url = await uploadImageAsync({ uri, userId })
  const { images } = userData[0] || {}

  const latestData = {
    textQuery: textQuery,
    username,
    url: url,
  }

  const updated_images = [latestData, ...(images || [])]
  const firebaseTimeStamp = firebase.firestore.FieldValue.serverTimestamp

  await userRef.update({
    lastImageAddedAt: firebaseTimeStamp(),
    images: updated_images,
  })

  const addRecordRef = await discoverCollectionRef.add({})
  await addRecordRef.set({
    created: firebaseTimeStamp(),
    ...latestData,
  })

  return url
}

export const currentUserImages = async (uid) => {
  const userCollectionRef = db.collection('users')
  const currentUser = await userCollectionRef.where('uid', '==', uid).get()
  if (currentUser.empty) {
    // setIsLoading(false)
    return []
  }
  const userData = currentUser.docs.map((doc) => doc.data())
  return userData[0]?.images || []
}

export const discoverRecent = async () => {
  const snapshot = await db
    .collection('discover')
    .orderBy('created', 'desc')
    .get()
  const result = snapshot.docs.map((doc) => doc.data())

  return result?.length ? result : []
}
