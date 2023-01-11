import ShopActionTypes from '../types/shopTypes';
import shopReducer,{updateCollection,updateDirectory} from './Shop';

const initialState = {
  collection: [],
  directory: [],
  user: null
};

describe('shopReducer', () => {
  it('should return initial state', () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it('should set collections to payload if updated', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      shopReducer(initialState, {
        type: ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      collections: mockItems
    });
  });

});

describe('update Collections action', () => {
  it('should create the update Collections action', () => {
    const mockCollectionsMap = {
      hats: {
        id: 1
      }
    };

    const action = updateCollection(mockCollectionsMap);

    expect(action.type).toEqual(ShopActionTypes.FETCH_COLLECTIONS_SUCCESS);
    expect(action.payload).toEqual(mockCollectionsMap);
  });
});