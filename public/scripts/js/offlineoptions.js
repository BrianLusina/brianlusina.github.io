// Reference https://github.com/HubSpot/offline#advanced
Offline.options = {
    // Should we check the connection status immediatly on page load.
    checkOnLoad: false,
  
    // Should we monitor AJAX requests to help decide if we have a connection.
    interceptRequests: true,
  
    // Should we store and attempt to remake requests which fail while the connection is down.
    requests: true,
};