import { useState } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
  currentSearchQuery: '',
  feedbackMessage: ''
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);
