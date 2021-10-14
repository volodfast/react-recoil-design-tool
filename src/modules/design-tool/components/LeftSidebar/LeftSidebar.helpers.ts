import randomMaterialColor from 'random-material-color';
import { useRecoilCallback, useRecoilState } from 'recoil';
// helpers
import { getRandomImageUrl } from 'modules/core/helpers';
// state
import {
  defaultStyle,
  elementListState,
  elementState,
} from 'modules/design-tool/design-tool.state';
// interfaces
import { ElementState } from 'modules/design-tool/design-tool.interfaces';

export const useInsertElement = () => {
  const [elementList, setElementList] = useRecoilState(elementListState);

  return useRecoilCallback(
    ({ set }) => {
      return (type: ElementState['type']) => {
        const newId = elementList.length;

        setElementList((elementList) => [...elementList, newId]);

        if (type === 'rectangle') {
          set(elementState(newId), {
            type: 'rectangle',
            style: defaultStyle,
            color: randomMaterialColor.getColor({ shades: ['500'] }),
          });
        } else if (type === 'image') {
          const randomImage = getRandomImageUrl();

          set(elementState(newId), {
            type: 'image',
            style: defaultStyle,
            src: randomImage.src,
          });
        }
      };
    },
    [elementList]
  );
};
