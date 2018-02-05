import React from 'react';
import Ticket from './Ticket';

const masterTicketList = [
  {
    names: 'Thotty and Dotti',
    location: '1E',
    issue: 'tissues'
  },
  {
    names: 'Wiz and Kalifa',
    location: '3B',
    issue: 'weeeed'
  },
  {
    names: 'Simon and Garfunkel',
    location: 'DD',
    issue: 'soft whisper-singing'
  },
  {
    names: 'Barbi and Bambi',
    location: '69xxx',
    issue: 'Need a pizza delivered but have no money!!!'
  }
];

function TicketList(){
  return (
    <div>
      <hr/>
      {masterTicketList.map((ticket, index) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          key={index}/>
      )}
    </div>
  );
}

export default TicketList;
