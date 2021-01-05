export const initialState = {
  mainPosts: [{
    id: 1,
    User: {
      id: 1,
      nickname: '디오니소스',
    },
    content: '첫 번째 게시글 #해시태그',
    Images: [{
      src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    }],
    Comments: [{
      User: {
        nickname: '오르페우스',
      },
      content: '얼른 사고싶어요~'
    }, {
      User: {
        nickname: '헤라',
      },
      content: '언제부터 살 수 있나요!'
    }]
  }],
  imagePaths: [],
  postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
  type: ADD_POST,
}
const dummyPost = {
  id: 2,
  content: '더미 데이터입니다',
  User: {
    id: 1,
    nickname: '디오니소스',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      }
    default:
      return state;
  }
};

export default reducer;