import moxios from "moxios";
import {storeFactory} from '../../../helpers/test/';
import {getSecretWord} from './action';


describe("getSecretWord action creator", () => {
  beforeEach(() => {
   // storeFactory();
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  test("add response word to state", () => {
    const secretWord = "party"
    const store = storeFactory({});

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response: [secretWord],
      });
    });

    // @ts-ignore
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState().guessWordScreenReducer;
      expect(secretWord).toBe(newState.secretWord);
    })

  });
})
