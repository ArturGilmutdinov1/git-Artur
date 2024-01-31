let rerenderEntireTree = () => {
   console.log("keke");
}

let state = {
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
      ]
      ,
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
}

export let addPost = (postMessage) => {
   let newPost = {
      id: 5,
      message: postMessage,
      like: 0,
   };
   state.profillePage.postData.push(newPost);
   rerenderEntireTree(state);
}

export let sendMessage = (messageFromFriend) => {
   let newMessage = {
      message: messageFromFriend,
   }
   state.dialogPage.messageData.push(newMessage);
   rerenderEntireTree(state);
}

export let updateNewMessage = (newText) => {
   state.profillePage.newPostText = newText;
   rerenderEntireTree(state);
}

export let updateNewPost = (newText) => {
   state.dialogPage.newMessageText = newText;
   rerenderEntireTree(state);
}

export const subscribe = (observer) => {
   rerenderEntireTree = observer;
}

export default state;