import * as Sharing from 'expo-sharing'
import * as FileSystem from 'expo-file-system'
import { showMessage } from 'react-native-flash-message'

class Share {
  async openShareDialogAsync(mediaProp) {
    const fileDetails = {
      extension: '.png',
      shareOptions: {
        mimeType: 'image/png',
        dialogTitle: 'Check out this image!',
        UTI: 'image/png',
      },
    }
    const downloadPath = `${FileSystem.cacheDirectory}${mediaProp.media_id}${fileDetails.extension}`
    const { uri: localUrl } = await FileSystem.downloadAsync(
      mediaProp.url,
      downloadPath
    )
    if (!(await Sharing.isAvailableAsync())) {
      showMessage({
        message: 'Sharing is not available',
        description: 'Your device does not allow sharing',
        type: 'danger',
      })
      return
    }
    await Sharing.shareAsync(localUrl, fileDetails.shareOptions)
  }

  //Second Implementation for Sharing
  // checkShare() {
  //   const fileUri = FileSystem.cacheDirectory + 'tmp.jpg'
  //   const imageURL = 'https://i.imgur.com/B8rw1pu.jpeg'

  //   FileSystem.downloadAsync(imageURL, fileUri)
  //     .then(({ uri }) => {
  //       console.log(`Downloaded image to ${uri}`)
  //     })
  //     .catch((err) => {
  //       console.log(JSON.stringify(err))
  //     })

  //   // Sharing only allows one to share a file.
  //   Sharing.shareAsync(fileUri, {
  //     mimeType: 'image/png',
  //     dialogTitle: 'Share the image',
  //     UTI: 'image/png',
  //   })
  //     .then((data) => {})
  //     .catch((err) => {
  //       console.log(JSON.stringify(err))
  //     })
  // }
}

export default new Share()
