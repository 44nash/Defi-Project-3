export const getUser = firebase => {
  const uid = firebase.auth().currentUser.uid;
  const db = firebase.firestore();
  const userRef = db.collection('users');

  return userRef.doc(uid).get();
};
