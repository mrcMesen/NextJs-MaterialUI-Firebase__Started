import firebase from "./firebase";

class Storage {
  constructor() {
    this.storage = firebase.storage();
    this.error = false;
  }
  async read(path, fileName) {
    try {
      const pathReference = await this.storage.ref(`${path}/${fileName}`);
      const downloadURL = await pathReference.getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.error("Error reading file: ", error);
      // console.error('Error reading file');
      this.error = error;
    }
  }
  async readAll() {
    try {
      //
    } catch (error) {
      // console.error('Error reading file: ', error);
      console.error("Error reading file");
      this.error = error;
    }
  }
  async create(data) {
    try {
      //
    } catch (error) {
      // console.error('Error adding file: ', error);
      console.error("Error adding file");
      this.error = error;
    }
  }
  async update(id, data) {
    try {
      //
    } catch (error) {
      // console.error('Error adding file: ', error);
      console.error("Error updating file");
      this.error = error;
    }
  }
  async delete(id) {
    try {
      //
    } catch (error) {
      // console.error('Error deleting file: ', error);
      console.error("Error deleting file");
      this.error = error;
    }
  }
}

export default Storage;
