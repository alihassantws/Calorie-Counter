import { addDoc, collection, deleteDoc, doc, getDocs } from 'firebase/firestore'

import {
  getAuth,
  OAuthProvider,
  GoogleAuthProvider,
  signInWithCredential,
  deleteUser,
} from 'firebase/auth'
import { auth, db } from './firebaseConfig'
import { Alert } from 'react-native'
import firebase from 'firebase/compat'
import { store } from '../redux/store'
import { setAuthentication } from '../redux/reducers/authSlice'
import { setGoogleAuth } from '../redux/reducers/authSlice'
import { navigatioRef } from 'app/utils/helpers/navigation'
export const getUser = async (email: string) => {
  const userCollectionRef = db.collection('users')
  const currentUser = await userCollectionRef.where('email', '==', email).get()
  if (currentUser.empty) {
    return false
  }
  const userData = currentUser.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }))

  return userData[0]
}

export const setFirstVisitAsync = async (email: string) => {
  if (!email) return { status: false }
  try {
    const userCollectionRef = db.collection('users')
    const currentUser = await userCollectionRef
      .where('email', '==', email)
      .get()
    if (currentUser.empty) {
      return {
        status: false,
      }
    }
    const userData = currentUser.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))

    const userRef = userCollectionRef.doc(userData[0].id)
    await userRef.update({
      firstVisit: false,
    })

    return userData
  } catch (err) {
    console.log(err)
  }
}

export const deleteUserData = async (
  email: string,
  setIsLoading,
  onLogoutPress
) => {
  if (!email) {
    setIsLoading(false)
    return { status: false }
  }
  try {
    const userCollectionRef = db.collection('users')
    const currentUser = await userCollectionRef
      .where('email', '==', email)
      .get()
    if (currentUser.empty) {
      setIsLoading(false)
      return {
        status: false,
      }
    }
    const userData = currentUser.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))

    await deleteDoc(doc(db, 'users', userData[0].id))

    const auth = getAuth()
    const user = auth.currentUser

    await deleteUser(user)

    setIsLoading(false)
    onLogoutPress()
    return userData
  } catch (err) {
    console.log(err)
  }
  setIsLoading(false)
}

export const createUser = async (data: any) => {
  try {
    await addDoc(collection(db, 'users'), data)
    // console.log("Document written with ID: ", docRef.id);
  } catch (error) {
    console.log(`There was an error: ${error}`)
  }
}

export const reduceUserLimitTime = async (email: string) => {
  if (!email) return { status: false }
  try {
    const userCollectionRef = db.collection('users')
    const currentUser = await userCollectionRef
      .where('email', '==', email)
      .get()
    if (currentUser.empty) {
      return {
        status: false,
      }
    }
    const userData = currentUser.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }))

    const playTimeRemaining = (userData[0] as any)?.playTimeRemaining

    const userRef = userCollectionRef.doc((userData[0] as any).id)

    if (playTimeRemaining <= 30) {
      await userRef.update({
        freeTimeFinished: true,
      })
      return { ...userData[0], freeTimeFinished: true }
    }
    await userRef.update({
      playTimeRemaining: playTimeRemaining - 20,
    })

    return { ...userData[0], playTimeRemaining: playTimeRemaining - 20 }
  } catch (err) {
    console.log(err)
  }
}

export const registerWithEmail = ({
  email,
  password,
  limit,
  subscribed,
  firstVisit,
}) => {
  console.log(email, password, 'PAS')

  var promise = new Promise(async function (resolve, reject) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
        const user = userCredentials.user
        console.log(user?.email, 'SUCCESSfull')
        createUser({
          email: user?.email,
          uid: user?.uid,
          name: user?.displayName,
          emailVerified: user?.emailVerified,
          subscribed: false,
          created_at: user?.metadata?.creationTime,
          provider: 'email',
          images: [],
          firstVisit: true,
          limit: 1,
        })
        resolve(userCredentials)
      })
      .catch((e) => {
        //   console.log(e, 'eee')
        alert('Email already in use')
        reject(e)
      })
  })
  return promise
}
export const registerWithGoogle = async (user, dispatch, setGoogleAuth, setIsLoading) => {
  const auth = getAuth();
  const credential = GoogleAuthProvider.credential(user);
  try {
      const res = await signInWithCredential(auth, credential);
      if (res?.user) {
          if (res?.user?.email) {
            console.log("EM")
              const newData = await getUser(res?.user?.email);
              dispatch(setGoogleAuth({
                  photoURL: res?.user?.photoURL,
                  email: res?.user?.email,
                  uid: res?.user?.uid,
                  name: res?.user?.displayName,
                  emailVerified: res?.user?.emailVerified,
                  subscribed: false,
                  created_at: res?.user?.metadata.creationTime,
                  provider: 'google',
                  images: [],
                  firstVisit: true,
                  limit: 1,
              }))

              if (!newData) {
                console.log("dhdh")
                  await createUser({
                      photoURL: res?.user?.photoURL,
                      email: res?.user?.email,
                      uid: res?.user?.uid,
                      name: res?.user?.displayName,
                      emailVerified: res?.user?.emailVerified,
                      subscribed: false,
                      created_at: res?.user?.metadata.creationTime,
                      provider: 'google',
                      images: [],
                      firstVisit: true,
                      limit: 1,
                  });

                  await getUser(res?.user?.email);
              }
          }
      }
      setIsLoading(false)
  }
  catch (e) {
      setIsLoading(false)


  }
}

export const registerWithApple = async (
  user,
  dispatch,
  setAppleAuth,
  setIsLoading
) => {
  const auth = getAuth()
  const nonce = Math.random().toString(36).substring(2, 10)
  const provider = new OAuthProvider('apple.com')
  const credential = provider.credential({
    idToken: user,
    rawNonce: nonce,
  })
  console.log(credential, 'CRE--->')
  try {
    setIsLoading(true)
    const res = await signInWithCredential(auth, credential)
    console.log(res.user, 'REEEEEE')
    if (res?.user) {
      if (res?.user?.email) {
        console.log('HELOOO--->')
       
        const newData = await getUser(res?.user?.email)
        console.log(newData, 'DATA--->')
        if (!newData) {
          console.log('HELLLNULL')
          await createUser({
            email: res?.user?.email,
            uid: res?.user?.uid,
            name: res?.user?.displayName,
            emailVerified: res?.user?.emailVerified,
            subscribed: false,
            created_at: res?.user?.metadata?.creationTime,
            provider: 'apple',
            images: [],
            firstVisit: true,
            limit: 1,
          })
         

          const newUser = await getUser(res?.user?.email)
          dispatch(
           newUser
          )
          navigatioRef?.current?.navigate('tab')
          setIsLoading(false)

        } else {
          console.log('NULLL')
          dispatch(setAppleAuth(newData))
          navigatioRef?.current?.navigate('tab')
        }
        setIsLoading(false)
        
      }
    }
  } catch (e) {
    setIsLoading(false)
  }
}
export const LoginWithEmail = async (email, password) => {
  const auth = firebase.auth()
  try {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then(async (response) => {
        console.log(response, 'RES---->')
        store.dispatch(setAuthentication(true))
      })
  } catch (e) {
    console.log(e, 'ERROR---->')
  }
}
