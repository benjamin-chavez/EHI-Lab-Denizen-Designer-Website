// import React, { useEffect, useState, Component } from 'react';
// import { Link } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect, useSelector } from 'react-redux';
// import {
//   Row,
//   Col,
//   Card,
//   CardColumns,
//   Container,
//   Modal,
//   Button,
// } from 'react-bootstrap';
// // import Pagination from './pagination';
// import Fade from 'react-reveal/Fade';
// import { fetchQuotes } from '../../../actions';

// import { fetchParticipants1 } from '../../../actions';
// import quotes from '../quotes';

// const IntShowQuotes = (
//   quoteData,
//   fetchQuotes,
//   fetchParticipants1,
//   quoteCategoryPath,
//   participantsData
// ) => {
//   useEffect(() => {
//     fetchQuotes();
//   }, []);

//   useEffect(() => {
//     fetchParticipants1();
//   }, []);

//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [curQuote, setCurQuote] = useState('');
//   const [quoteOwner, setQuoteOwner] = useState('');
//   const [ownerRole, setOwnerRole] = useState('');
//   const [ownerID, setOwnerID] = useState('');

//   return (
//     <div>
//       <div>
//         <p>Testing QUOTES</p>
//       </div>
//     </div>
//   );
// };

// const mapStateToProps = (state) => {
//   return {
//     quoteData: state.quotes,
//     participantsData: state.participants1,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchQuotes: () => dispatch(fetchQuotes()),
//     fetchParticipants1: () => dispatch(fetchParticipants1()),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(IntShowQuotes);
