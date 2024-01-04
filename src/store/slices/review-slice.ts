import { createSlice } from '@reduxjs/toolkit';
import { UserComment } from '../../types';
import { fetchUsersCommentsAction } from '../api-actions/api-review-action';
import { NameSpace } from '../../const';


export type StateType = {
  userComments: UserComment[];
  isCommentsLoading: boolean;
};

const initialState: StateType = {
  userComments: [],
  isCommentsLoading: false,
};

export const reviewSlice = createSlice({
  name: NameSpace.MyFilms,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchUsersCommentsAction.pending, (state) =>{
        state.isCommentsLoading = true;
      })

      .addCase(fetchUsersCommentsAction.fulfilled, (state,action) =>{
        state.isCommentsLoading = false;
        state.userComments = action.payload;
      })

      .addCase(fetchUsersCommentsAction.rejected, (state) =>{
        state.isCommentsLoading = false;
      });
  }
});
