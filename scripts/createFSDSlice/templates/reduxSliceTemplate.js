// eslint-disable-next-line @typescript-eslint/no-var-requires
const firstCharUpperCase = require('../firstCharUpperCase');

module.exports = (sliceName) => {
  const typeName = `${firstCharUpperCase(sliceName)}Schema`;

  return `import { PayloadAction } from '@reduxjs/toolkit';
import { buildSlice } from '@/shared/lib/store';
import { ${typeName} } from '../types/${sliceName}Schema';

const initialState: ${typeName} = {

};

export const ${sliceName}Slice = buildSlice({
  name: '${sliceName}',
  initialState,
  reducers: {
    template: (state, { payload }: PayloadAction<payloadType>) => {

    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(, (state) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(, (state) => {
  //       state.isLoading = false;
  //     })
  //     .addCase(, (state, action) => {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     });
  // },
});

export const { actions: ${sliceName}Actions, reducer: ${sliceName}Reducer } = ${sliceName}Slice;`;
};
