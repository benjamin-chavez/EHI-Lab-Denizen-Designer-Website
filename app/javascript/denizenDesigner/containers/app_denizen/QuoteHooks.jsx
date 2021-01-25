import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setParticipants, fetchParticipants } from '../../actions';

const QuoteHooks = () => {
  // const pparticipants = useSelector((state) => state.participants.first_name);
  const dispatch = useDispatch();

  const participants = useSelector((state) => state.participants);
  const { loading, error, pparticipants } = participants;

  // const { loading, error, product } = pparticipants;
  useEffect(() => {
    dispatch(fetchParticipants());
  }, [dispatch]);

  return (
    <div>
      <h1>testing Hooks</h1>

      {participants.map((part) => (
        <div>
          {part.first_name} {part.id}
        </div>
      ))}
    </div>
  );
};

export default QuoteHooks;
