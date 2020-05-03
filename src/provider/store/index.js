import React, { createContext } from "react";
import AuthStore from  './Auth';
import CourseStore from './Course';

  
   export const StoreContext = createContext();
   export const StoreMainProvider = StoreContext.Provider;
   export const StoreConsumer = StoreContext.Consumer;

   export default ({ children }) => {
    // const { state: authState, updatetoken, dispatch: authDisptch } = AuthStore();
    const authStore = AuthStore();
    // const { state: appState, dispatch: appDispatch } = AppStore();
    const courseStore = CourseStore();
  
    const StoreValue = {
      auth: authStore,
      course: courseStore,
    };
    return <StoreMainProvider value={StoreValue}>{children}</StoreMainProvider>;
  };
  
