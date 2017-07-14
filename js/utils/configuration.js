const MENUS = [
  'LEARN',
  'WRITE',
  'EVALUATION',
  'CONFIG',
];

const config = {
  LEARN: {
    onClickBack: state => ({
      ...state,
      currentMenu: 'NAVIGATION',
      currentPosition: 0,
      words: [
        'casa',
        'barco',
        'pileta',
        'popo',
      ],
    }),
    onClickLeft: state => ({
      ...state,
      currentPosition: state.currentPosition === 0 ?
        state.currentPosition :
        state.currentPosition - 1,
    }),
    onClickRight: state => ({
      ...state,
      currentPosition: state.currentPosition === 3 ?
        state.currentPosition :
        state.currentPosition + 1,
    }),
  },
  WRITE: {
    onClickBack: state => ({
      ...state,
      currentMenu: 'NAVIGATION',
    }),
  },
  EVALUATION: {
    onClickBack: state => ({
      ...state,
      currentMenu: 'NAVIGATION',
    }),
  },
  CONFIG: {
    onClickBack: state => ({
      ...state,
      currentMenu: 'NAVIGATION',
    }),
  },
  NAVIGATION: {
    onClickOk: (state) => ({
      ...state,
      currentMenu: MENUS[state.currentPosition],
    }),
    onClickLeft: state => ({
      ...state,
      currentPosition: state.currentPosition === 0 ?
        state.currentPosition :
        state.currentPosition - 1,
    }),
    onClickRight: state => ({
      ...state,
      currentPosition: state.currentPosition === MENUS.length ?
        state.currentPosition :
        state.currentPosition + 1,
    }),
  }
};

const doAction = (state, action) => config[state.currentMenu][action] ?
  config[state.currentMenu][action](state) :
  state;

export default doAction;
