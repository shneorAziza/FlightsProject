// getAllCustomers().then(res=>{
//     console.log(res)
// });

// getCustomerById(2).then(res=>{
//     console.log(res)
// });

// const newCustomer = {
//     first_name: 'nathue ',
//     last_name: 'pery'
//   };

//   addCustomer(newCustomer)
//   .then(customrtId=>{console.log(customrtId)})
//   .catch(err=>{
//     console.log(err)
//   })

// const customerUpdates = {
//     first_name: 'adam',
//     last_name: 'sendler',
//   };

//   updateCustomer(4, customerUpdates)
//     .then(affectedRows => {
//       console.log('Number of affected rows:', affectedRows);
//     })

// removeCustomer(2)
//     .then(affectedCustomer => {
//       console.log('customer ', affectedCustomer, ' delete');
//     })

// const userName = 'dani'

// getCustomerByUserName(userName).then(res=>{
//         console.log(res)
//     });


//------airline companies---------//

// getAllAirlineCompanies().then(res=>{
//     console.log(res)
// });

// const AirlineCompaniesId = 1

// getAirlineCompaniesById(AirlineCompaniesId).then(res=>{
//     console.log(res)
// });

// const newAirlineCompanies = {
//     name: 'arkia'
//   };

//   addAirlineCompanies(newAirlineCompanies)
//   .then(AirlineCompaniesId=>{console.log(AirlineCompaniesId)})
//   .catch(err=>{
//     console.log(err)
//   })

// const AirlineCompaniesUpdates = {
//     name: 'wizzAir'
//   };

//   updateAirlineCompanies(1, AirlineCompaniesUpdates)
//     .then(affectedRows => {
//       console.log('Number of affected rows:', affectedRows);
//     })

// removeAirlineCompanies(4)
//     .then(affectedAirlineCompanies => {
//       console.log('Airline Companies ', affectedAirlineCompanies, ' delete');
//     })

// const userName = 'wizzAir'

// getAirlineCompaniesByUserName(userName).then(res => {
//     console.log(res)
// });


//-------adminstrators------------


// getAllAdmins().then(res=>{
//     console.log(res)
// });

// getAdminById(2).then(res=>{
//     console.log(res)
// });

// const newAdmin = {
//     id: 4,
//     first_name: 'israel',
//     last_name: 'akoonis'
//   };

//   addAdmin(newAdmin)
//   .then(AdminId=>{console.log(AdminId)})
//   .catch(err=>{
//     console.log(err)
//   })

// const AdminUpdates = {
//      id: 4,
//     first_name: 'israel',
//     last_name: 'akunis'
//   };

//   updateAdmin(4, AdminUpdates)
//     .then(affectedRows => {
//       console.log('Number of affected rows:', affectedRows);
//     })

// removeAdmin(5)
//     .then(affectedAdmin => {
//       console.log('Admin ', affectedAdmin, ' delete');
//     })

// const userName = 'beny'

// getAdminByUserName(userName).then(res=>{
//         console.log(res)
//     });


//-------flights------------


// getAllFlights().then(res=>{
//     console.log(res)
// });

// getFlightById(2).then(res=>{
//     console.log(res)
// });

// const newFlight = {
//     deprtrue_time: '2024-06-12 10:30:00',
//     landing_time: '2024-06-12 18:30:00'
// };

//   addFlight(newFlight)
//   .then(FlightId=>{console.log('new flight id -', FlightId)})
//   .catch(err=>{
//     console.log(err)
//   })

//   const FlightUpdates = {
//     deprtrue_time: '2024-06-13 10:30:00',
//     landing_time: '2024-06-13 18:30:00'
//   };

//   updateFlight(4, FlightUpdates)
//     .then(affectedRows => {
//       console.log('Number of affected rows:', affectedRows);
//     })

//   removeFlight(5)
//     .then(affectedFlight => {
//       console.log('Flight delete');
//     })


//-------tickets------------


// getAllTickets().then(res=>{
//     console.log(res)
// });

// getTicketById(2).then(res=>{
//     console.log(res)
// });

// const newTicket = {
//     flight_id: 1,
//     customer_id: 2
// };

//   addTicket(newTicket)
//   .then(TicketId=>{console.log('new Ticket id -', TicketId)})
//   .catch(err=>{
//     console.log(err)
//   })

//   const TicketUpdates = {
//         flight_id: 3,
//         customer_id: 4
//   };

//   updateTicket(4, TicketUpdates)
//     .then(affectedRows => {
//       console.log('Number of affected rows:', affectedRows);
//     })

//   removeTicket(3)
//     .then(affectedTicket => {
//       console.log('Ticket delete');
//     })


//-------Countries------------


// getAllCountries().then(res=>{
//     console.log(res)
// });

// getCountryById(2).then(res=>{
//     console.log(res)
// });

// const newCountry = {
//     flight_id: 1,
//     customer_id: 2
// };

//   addCountry(newCountry)
//   .then(CountryId=>{console.log('new Country id -', CountryId)})
//   .catch(err=>{
//     console.log(err)
//   })

//   const CountryUpdates = {
//         flight_id: 3,
//         customer_id: 4
//   };

//   updateCountry(4, CountryUpdates)
//     .then(affectedRows => {
//       console.log('Number of affected rows:', affectedRows);
//     })

//   removeCountry(3)
//     .then(affectedCountry => {
//       console.log('Country delete');
//     })