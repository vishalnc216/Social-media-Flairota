export const initialState = {
  SignupUserName: null,
  SignupPassword: null,
  SignupEmailOrPhoneno: null,
  SigninUserName: null,
  SigninPassword: null,
  File: [],
  Profileimage: '',
  Name: '',
  Username: '',
  Bio: '',
  Caption: [],
  Hashtag: [],
  searchpeople: '',
  userid: null,
  postId: '',
  storylist: '',
  themechange: '',
};
const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_SignupUserName':
      return {
        ...state,
        SignupUserName: action.SignupUserName,
      };
    case 'SET_SignupPassword':
      return {
        ...state,
        SignupPassword: action.SignupPassword,
      };
    case 'SET_SignupEmailOrPhoneno':
      return {
        ...state,
        SignupEmailOrPhoneno: action.SignupEmailOrPhoneno,
      };
    case 'SET_SigninPassword':
      return {
        ...state,
        SigninPassword: action.SigninPassword,
      };
    case 'SET_SigninPassword':
      return {
        ...state,
        SigninPassword: action.SigninPassword,
      };

    case 'SET_File':
      return {
        ...state,
        File: action.File,
      };
    case 'SET_Profileimage':
      return {
        ...state,
        Profileimage: action.Profileimage,
      };
    case 'SET_Name':
      return {
        ...state,
        Name: action.Name,
      };
    case 'SET_Username':
      return {
        ...state,
        Username: action.Username,
      };
    case 'SET_Bio':
      return {
        ...state,
        Bio: action.Bio,
      };
    case 'SET_Caption':
      return {
        ...state,
        Caption: action.Caption,
      };
    case 'SET_Hashtag':
      return {
        ...state,
        Hashtag: action.Hashtag,
      };
    case 'SET_SearchPeople':
      return {
        ...state,
        searchpeople: action.searchpeople,
      };

    case 'SET_UserId':
      return {
        ...state,
        userid: action.userid,
      };

    case 'SET_postId':
      return {
        ...state,
        postId: action.postid,
      };
    case 'SET_storylist':
      return {
        ...state,
        storylist: action.storylist,
      };
    case 'SET_themechange':
      return {
        ...state,
        themechange: action.themechange,
      };

    default:
      return state;
  }
};

export default reducer;
