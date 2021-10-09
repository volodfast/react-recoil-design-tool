import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import randomColor from 'random-material-color';
// interfaces
import { CommonStyle, ElementState } from './design-tool.interfaces';

export const defaultStyle: CommonStyle = {
  top: 20,
  left: 20,
  width: 200,
  height: 170,
};

export const elementListState = atom<number[]>({
  key: 'elements',
  default: [],
});

export const elementState = atomFamily<ElementState, number>({
  key: 'element',
  default: () => ({
    type: 'rectangle',
    style: defaultStyle,
    color: randomColor.getColor({ shades: ['500'] }),
  }),
});

export const selectedElementIdState = atom<null | number>({
  key: 'selectedElementId',
  default: null,
});

export const selectedElementState = selector<ElementState | undefined>({
  key: 'selectedElement',
  get: ({ get }) => {
    const id = get(selectedElementIdState);

    if (id !== null) {
      return get(elementState(id));
    }
  },
  set: ({ set, get }, newValue) => {
    const id = get(selectedElementIdState);

    if (id !== null && newValue) {
      set(elementState(id), newValue);
    }
  },
});

export const isSelectedState = selectorFamily({
  key: 'isSelected',
  get:
    (id: number) =>
    ({ get }) => {
      const selectedElementId = get(selectedElementIdState);

      return selectedElementId === id;
    },
});
