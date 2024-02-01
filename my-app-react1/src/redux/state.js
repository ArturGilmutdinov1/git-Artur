let store = {
   _state: {
      profillePage: {
         postData: [
            { id: 1, message: 'хехех', like: 1 },
            { id: 2, message: 'asdхех', like: 2 },
            { id: 3, message: 'adsasdad', like: 3 },
         ],
         newPostText: "",
      },
      dialogPage: {
         dialogData: [
            { id: 1, name: 'Артур' },
            { id: 2, name: 'Вадим' },
            { id: 3, name: 'Айдар' },
            { id: 4, name: 'Петя' },
            { id: 5, name: 'Митя' },
         ],
         messageData: [
            { message: 'привет' },
            { message: 'здравствуй ' },
            { message: 'кек' },
            { message: 'чебурек' },
            { message: 'мек-мек' },
         ],
         newMessageText: "",
      },
      friends: {
         people: [
            { id: 1, name: 'Артур' },
            { id: 2, name: 'Вадим' },
            { id: 3, name: 'Айдар' },
            { id: 4, name: 'Петя' },
            { id: 5, name: 'Митя' },
         ],
      },
   },
   getState() {
      return this._state;
   },
   rerenderEntireTree() {
      console.log("keke");
   },
   addPost(postMessage) {
      let newPost = {
         id: 5,
         message: postMessage,
         like: 0,
      };
      this._state.profillePage.postData.push(newPost);
      this.rerenderEntireTree(this._state);
   },
   sendMessage(messageFromFriend) {
      let newMessage = {
         message: messageFromFriend,
      }
      this._state.dialogPage.messageData.push(newMessage);
      this.rerenderEntireTree(this._state);
   },
   updateNewMessage(newText) {
      this._state.profillePage.newPostText = newText;
      this.rerenderEntireTree(this._state);
   },
   updateNewPost(newText) {
      this._state.dialogPage.newMessageText = newText;
      this.rerenderEntireTree(this._state);
   },
   subscribe(observer) {
      this.rerenderEntireTree = observer;
   },
}



export default store;
window.store = store;