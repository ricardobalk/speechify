import { useState } from 'react';
import { createContainer } from 'react-tracked';

const initialState = {
  currentSearchQuery: '',
  feedbackMessage: '',
  spotifyCredentials: {
    clientId: process.env.CLIENTID,
    clientSecret: process.env.CLIENTSECRET,
    tokenType: 'Bearer',
    accessToken: '',
    expiresIn: '',
    refreshToken: '',
  }
};

const useMyState = () => useState(initialState);

export const { Provider: SharedStateProvider, useTracked: useSharedState } =
  createContainer(useMyState);
