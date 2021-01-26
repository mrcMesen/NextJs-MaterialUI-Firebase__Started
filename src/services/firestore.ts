import firebase from './firebase';

class Firestore {
  constructor(collection) {
    this.collection = collection;
    this.db = firebase.firestore();
    this.error = false;
  }
  async read(id) {
    try {
      const doc = await this.db.collection(this.collection).doc(id).get();
      if (doc.exists) {
        return { ...doc.data(), id: doc.id };
      } else {
        throw new Error('Invalid ID');
      }
    } catch (error) {
      // console.error('Error reading document: ', error);
      console.error('Error reading document');
      this.error = error;
    }
  }
  async readAll() {
    try {
      const data = [];
      const querySnapshot = await this.db.collection(this.collection).get();
      await querySnapshot.forEach(doc => {
        data.push({ id: doc.id, ...doc.data() });
      });

      return data;
    } catch (error) {
      // console.error('Error reading document: ', error);
      console.error('Error reading document');
      this.error = error;
    }
  }
  async create(data) {
    try {
      const docRef = await this.db.collection(collection).add({
        ...data,
        company: company.id,
        state: 'active',
        createdByName: `${user.name} ${user.lastName}`,
        createdById: user.id,
        date: dateDbStore.now(),
      });
      const document = docRef.get();

      return { id: document.id, data: { ...document.data() } };
    } catch (error) {
      // console.error('Error adding document: ', error);
      console.error('Error adding document');
      this.error = error;
    }
  }
  async update(id, data) {
    try {
      await this.db
        .collection(collection)
        .doc(id)
        .update({ ...data, updatedByName: `${user.name} ${user.lastName}`, updatedById: user.id });

      return 'Document updated';
    } catch (error) {
      // console.error('Error adding document: ', error);
      console.error('Error updating document');
      this.error = error;
    }
  }
  async delete(id) {
    try {
      await this.db.collection(collection).doc(id).delete();

      return 'Document deleted';
    } catch (error) {
      // console.error('Error deleting document: ', error);
      console.error('Error deleting document');
      this.error = error;
    }
  }
}

export default Firestore;
