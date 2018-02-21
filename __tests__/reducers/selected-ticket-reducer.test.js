import selectedTicketReducer from './../../src/reducers/selected-ticket-reducer';
import c from './../../src/constants';


describe('selectedTicketReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(selectedTicketReducer({}, { type: null })).toEqual({});
  });


  test('Should record which ticket has been selected by the user', () => {
    expect(selectedTicketReducer({}, { type: c.SELECTED_TICKET, ticketId:1 })).toEqual(1);
  });
});
