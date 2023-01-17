import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Country } from '@/entities/countrySelect';
import { Currency } from '@/entities/currencySelect';
import { Profile } from '@/entities/profile';
import { $api } from '@/shared/api/api';
import { renderComponent } from '@/shared/lib/testHelpers/renderComponent';
import { profileReducer } from '../../model/slice/ProfileSlice';
import { EditableProfileCard } from './EditableProfileCard';

const profile: Profile = {
  username: 'Username',
  name: 'Name',
  age: 22,
  city: 'City',
  country: Country.RUSSIA,
  currency: Currency.RUB,
  id: '1',
};

const options = {
  preloadedState: {
    profile: { readonly: true, data: profile, profileData: profile },
    user: { authData: { id: '1' } },
  },
  asyncReducers: { profile: profileReducer },
};

describe('EditableProfileCard.test', () => {
  test('click on edit button when readonly: false', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Edit'),
    );
    expect(
      screen.getByTestId('EditableProfileCard.Header.Cancel'),
    ).toBeInTheDocument();
    expect(
      screen.getByTestId('EditableProfileCard.Header.Save'),
    ).toBeInTheDocument();
    expect(
      screen.queryByTestId('EditableProfileCard.Header.Edit'),
    ).not.toBeInTheDocument();
  });

  test('edit data', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Edit'),
    );

    const nameInput = screen.getByTestId('EditableProfileCard.Card.Name');
    const usernameInput = screen.getByTestId(
      'EditableProfileCard.Card.Username',
    );
    const ageInput = screen.getByTestId('EditableProfileCard.Card.Age');
    await userEvent.clear(nameInput);
    await userEvent.type(nameInput, 'name');
    await userEvent.clear(usernameInput);
    await userEvent.type(usernameInput, 'name');
    await userEvent.clear(ageInput);
    await userEvent.type(ageInput, '22');

    expect(nameInput).toHaveValue('name');
    expect(usernameInput).toHaveValue('name');
    expect(ageInput).toHaveValue('22');
  });

  test('cancel button', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Edit'),
    );

    await userEvent.clear(screen.getByTestId('EditableProfileCard.Card.Name'));
    await userEvent.type(
      screen.getByTestId('EditableProfileCard.Card.Username'),
      'type',
    );

    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Cancel'),
    );

    expect(
      screen.queryByTestId('EditableProfileCard.Header.Save'),
    ).not.toBeInTheDocument();
    expect(
      screen.queryByTestId('EditableProfileCard.Header.Cancel'),
    ).not.toBeInTheDocument();

    expect(screen.getByTestId('EditableProfileCard.Card.Name')).toHaveValue(
      'Name',
    );
    expect(screen.getByTestId('EditableProfileCard.Card.Username')).toHaveValue(
      'Username',
    );
  });

  test('validate errors', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Edit'),
    );

    await userEvent.clear(screen.getByTestId('EditableProfileCard.Card.Name'));

    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Save'),
    );

    expect(
      screen.getByTestId('EditableProfileCard.Error.Paragraph'),
    ).toBeInTheDocument();
  });

  test('put request on save', async () => {
    renderComponent(<EditableProfileCard id='1' />, options);
    const mockPutRequest = jest.spyOn($api, 'put');
    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Edit'),
    );

    await userEvent.type(
      screen.getByTestId('EditableProfileCard.Card.Name'),
      'name',
    );

    await userEvent.click(
      screen.getByTestId('EditableProfileCard.Header.Save'),
    );

    expect(mockPutRequest).toHaveBeenCalledWith('/profile/1', {
      ...profile,
      name: 'Namename',
    });
  });
});
