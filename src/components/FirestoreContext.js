import React from 'react'

const FirestoreContext = React.createContext(true);

export const FirestoreContextProvider = FirestoreContext.Provider;
export const FirestoreContextConsumer = FirestoreContext.Consumer;

export default FirestoreContext;