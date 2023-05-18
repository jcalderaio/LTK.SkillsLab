// Write unit test by ChatGPT
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import BasicFormPage from '.';

const mockStore = configureStore([]);

describe('BasicFormPage component', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      Users: {
        userList: [],
      },
    });
  });

  it('renders the form and submits a new user', () => {
    render(
      <Provider store={store}>
        <BasicFormPage />
      </Provider>
    );

    const firstNameInput = screen.getByPlaceholderText('first name');
    const lastNameInput = screen.getByPlaceholderText('last name');
    const emailInput = screen.getByPlaceholderText('email');
    const submitButton = screen.getByText('Submit');
    
    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('render user list', () => {
    const initialState = {
      Users: {
        userList: [
          { id: 1, firstName: 'John', lastName: 'Doe', email: 'john.doe@example.com' },
          { id: 2, firstName: 'Jane', lastName: 'Demo', email: 'jane.demo@example.com' },
        ],
      },
    };

    store = mockStore(initialState);

    render(
      <Provider store={store}>
        <BasicFormPage />
      </Provider>
    );

    const firstNameColumn = screen.getByText('John');
    const lastNameColumn = screen.getByText('Doe');
    const emailColumn = screen.getByText('john.doe@example.com');

    expect(firstNameColumn).toBeInTheDocument();
    expect(lastNameColumn).toBeInTheDocument();
    expect(emailColumn).toBeInTheDocument();
  });
});