import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TextareaComponent from './components/TextareaComponent';
import VocabularyComponent from './components/VocabularyComponent';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import vocabularySlice from './redux/vocabularyArray'
import './index.scss'
import VerbsComponent from './components/VerbsComponent';

const router = createBrowserRouter([
  {path: '/',
  element: <App/>,
  children:[
    {
      path: '',
      element: <TextareaComponent/>
    },
    {
      path: 'vocabulary',
      element: <VocabularyComponent/>
    },
    {
      path: 'verbs',
      element: <VerbsComponent/>
    }
  ]}
]);


  const store = configureStore({
    reducer: { vocabularySlice },
  })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
);

