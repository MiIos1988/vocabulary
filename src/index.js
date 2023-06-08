import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import TextareaComponent from './components/TextareaComponent';
import VocabularyComponent from './components/VocabularyComponent';

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
    }
  ]}
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

