 const tracker_data=[
    {  
       Id:'1',
       sender:{
         trackingId:'123abc',
         senderName: 'Mary Jane',
         address:'',
         zipcode:'',
         phone:'',
         email:''
       },
       receiver:{
         receiverName:'Silas Jude',
         address:'Mongo',
         zipcode:'',
         phone:'',
         email:' '
       },
       modeOfShipment:{
       land:'', /* insert 'true' or 'false' */
       sea:'',  /* insert 'true' or 'false' */
       air:'true',  /* insert 'true' or 'false' */
       },
       senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

       wayBillCode:{
         image:'',
         values:'',
       },
       shipmentDetails:{
         shipmentInsurance:'yes', /* yes or no*/
         descriptionOfCargo:'Personal Belonging',
         totalFreightDays:'10',
         modeOfPayment:'Cash',
         currency:'Dollars $'
       },
       packageDeparture:{
        date:'June-5, 2023',
        location:''
       },
       packageDestination:{
        pickupDate:'',
        pickupLocation:'',
        pickupTime:'10:00am',
       },
       origin:'Nigeria',
       destination:'USA',
       sizeAndWeight:{
         numberOfPieces:'6',
         weight:'2kg',
       },
       
       routeNumber:'',
       date:'3rd June', 
       status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
       statusMessage:'GOODS ON TRANSIT', 

       extraInfo:{
        date:'',
        location:'',
        localTime:'',
       }   
    },
    {  
      Id:'2',
      sender:{
        trackingId:'124abc',
        senderName: 'Paul Jane',
        address:'',
        zipcode:'',
        phone:'',
        email:''
      },
      receiver:{
        receiverName:'Abraham Jude',
        address:'',
        zipcode:'',
        phone:'',
        email:' '
      },
      modeOfShipment:{
      land:'', /* insert 'true' or 'false' */
      sea:'',  /* insert 'true' or 'false' */
      air:'true',  /* insert 'true' or 'false' */
      },
      senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

      wayBillCode:{
        image:'',
        values:'',
      },
      shipmentDetails:{
        shipmentInsurance:'yes', /* yes or no*/
        descriptionOfCargo:'Personal Belonging',
        totalFreightDays:'10',
        modeOfPayment:'Cash',
        currency:'Dollars $'
      },
      packageDeparture:{
       date:'June-5, 2023',
       location:''
      },
      packageDestination:{
       pickupDate:'',
       pickupLocation:'',
       pickupTime:'10:00am',
      },
      origin:'Nigeria',
      destination:'USA',
      sizeAndWeight:{
        numberOfPieces:'6',
        weight:'2kg',
      },
      
      routeNumber:'',
      date:'3rd June', 
      status:'no'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
      statusMessage:'GOODS ON HOLD', 

      extraInfo:{
       date:'',
       location:'',
       localTime:'',
      }   
   },
   {  
    Id:'3',
    sender:{
      trackingId:'125abc',
      senderName: 'Mary Jane',
      address:'',
      zipcode:'',
      phone:'',
      email:''
    },
    receiver:{
      receiverName:'Silas Jude',
      address:'',
      zipcode:'',
      phone:'',
      email:' '
    },
    modeOfShipment:{
    land:'', /* insert 'true' or 'false' */
    sea:'',  /* insert 'true' or 'false' */
    air:'true',  /* insert 'true' or 'false' */
    },
    senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

    wayBillCode:{
      image:'',
      values:'',
    },
    shipmentDetails:{
      shipmentInsurance:'yes', /* yes or no*/
      descriptionOfCargo:'Personal Belonging',
      totalFreightDays:'10',
      modeOfPayment:'Cash',
      currency:'Dollars $'
    },
    packageDeparture:{
     date:'June-5, 2023',
     location:''
    },
    packageDestination:{
     pickupDate:'',
     pickupLocation:'',
     pickupTime:'10:00am',
    },
    origin:'Nigeria',
    destination:'USA',
    sizeAndWeight:{
      numberOfPieces:'6',
      weight:'2kg',
    },
    
    routeNumber:'',
    date:'3rd June', 
    status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
    statusMessage:'GOODS ON TRANSIT', 

    extraInfo:{
     date:'',
     location:'',
     localTime:'',
    }   
 },
 {  
  Id:'4',
  sender:{
    trackingId:'126abc',
    senderName: 'Mary Jane',
    address:'',
    zipcode:'',
    phone:'',
    email:''
  },
  receiver:{
    receiverName:'Silas Jude',
    address:'',
    zipcode:'',
    phone:'',
    email:' '
  },
  modeOfShipment:{
  land:'', /* insert 'true' or 'false' */
  sea:'',  /* insert 'true' or 'false' */
  air:'true',  /* insert 'true' or 'false' */
  },
  senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

  wayBillCode:{
    image:'',
    values:'',
  },
  shipmentDetails:{
    shipmentInsurance:'yes', /* yes or no*/
    descriptionOfCargo:'Personal Belonging',
    totalFreightDays:'10',
    modeOfPayment:'Cash',
    currency:'Dollars $'
  },
  packageDeparture:{
   date:'June-5, 2023',
   location:''
  },
  packageDestination:{
   pickupDate:'',
   pickupLocation:'',
   pickupTime:'10:00am',
  },
  origin:'Nigeria',
  destination:'USA',
  sizeAndWeight:{
    numberOfPieces:'6',
    weight:'2kg',
  },
  
  routeNumber:'',
  date:'3rd June', 
  status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
  statusMessage:'GOODS ON TRANSIT', 

  extraInfo:{
   date:'',
   location:'',
   localTime:'',
  }   
},
{  
  Id:'5',
  sender:{
    trackingId:'127abc',
    senderName: 'Mary Jane',
    address:'',
    zipcode:'',
    phone:'',
    email:''
  },
  receiver:{
    receiverName:'Silas Jude',
    address:'',
    zipcode:'',
    phone:'',
    email:' '
  },
  modeOfShipment:{
  land:'', /* insert 'true' or 'false' */
  sea:'',  /* insert 'true' or 'false' */
  air:'true',  /* insert 'true' or 'false' */
  },
  senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

  wayBillCode:{
    image:'',
    values:'',
  },
  shipmentDetails:{
    shipmentInsurance:'yes', /* yes or no*/
    descriptionOfCargo:'Personal Belonging',
    totalFreightDays:'10',
    modeOfPayment:'Cash',
    currency:'Dollars $'
  },
  packageDeparture:{
   date:'June-5, 2023',
   location:''
  },
  packageDestination:{
   pickupDate:'',
   pickupLocation:'',
   pickupTime:'10:00am',
  },
  origin:'Nigeria',
  destination:'USA',
  sizeAndWeight:{
    numberOfPieces:'6',
    weight:'2kg',
  },
  
  routeNumber:'',
  date:'3rd June', 
  status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
  statusMessage:'GOODS ON TRANSIT', 

  extraInfo:{
   date:'',
   location:'',
   localTime:'',
  }   
},
{  
  Id:'6',
  sender:{
    trackingId:'128abc',
    senderName: 'Mary Jane',
    address:'',
    zipcode:'',
    phone:'',
    email:''
  },
  receiver:{
    receiverName:'Silas Jude',
    address:'',
    zipcode:'',
    phone:'',
    email:' '
  },
  modeOfShipment:{
  land:'', /* insert 'true' or 'false' */
  sea:'',  /* insert 'true' or 'false' */
  air:'true',  /* insert 'true' or 'false' */
  },
  senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

  wayBillCode:{
    image:'',
    values:'',
  },
  shipmentDetails:{
    shipmentInsurance:'yes', /* yes or no*/
    descriptionOfCargo:'Personal Belonging',
    totalFreightDays:'10',
    modeOfPayment:'Cash',
    currency:'Dollars $'
  },
  packageDeparture:{
   date:'June-5, 2023',
   location:''
  },
  packageDestination:{
   pickupDate:'',
   pickupLocation:'',
   pickupTime:'10:00am',
  },
  origin:'Nigeria',
  destination:'USA',
  sizeAndWeight:{
    numberOfPieces:'6',
    weight:'2kg',
  },
  
  routeNumber:'',
  date:'3rd June', 
  status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
  statusMessage:'GOODS ON TRANSIT', 

  extraInfo:{
   date:'',
   location:'',
   localTime:'',
  }   
},
{  
  Id:'7',
  sender:{
    trackingId:'129abc',
    senderName: 'Mary Jane',
    address:'',
    zipcode:'',
    phone:'',
    email:''
  },
  receiver:{
    receiverName:'Silas Jude',
    address:'',
    zipcode:'',
    phone:'',
    email:' '
  },
  modeOfShipment:{
  land:'', /* insert 'true' or 'false' */
  sea:'',  /* insert 'true' or 'false' */
  air:'true',  /* insert 'true' or 'false' */
  },
  senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

  wayBillCode:{
    image:'',
    values:'',
  },
  shipmentDetails:{
    shipmentInsurance:'yes', /* yes or no*/
    descriptionOfCargo:'Personal Belonging',
    totalFreightDays:'10',
    modeOfPayment:'Cash',
    currency:'Dollars $'
  },
  packageDeparture:{
   date:'June-5, 2023',
   location:''
  },
  packageDestination:{
   pickupDate:'',
   pickupLocation:'',
   pickupTime:'10:00am',
  },
  origin:'Nigeria',
  destination:'USA',
  sizeAndWeight:{
    numberOfPieces:'6',
    weight:'2kg',
  },
  
  routeNumber:'',
  date:'3rd June', 
  status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
  statusMessage:'GOODS ON TRANSIT', 

  extraInfo:{
   date:'',
   location:'',
   localTime:'',
  }   
},
{  
  Id:'8',
  sender:{
    trackingId:'131abc',
    senderName: 'Mary Jane',
    address:'',
    zipcode:'',
    phone:'',
    email:''
  },
  receiver:{
    receiverName:'Silas Jude',
    address:'',
    zipcode:'',
    phone:'',
    email:' '
  },
  modeOfShipment:{
  land:'', /* insert 'true' or 'false' */
  sea:'',  /* insert 'true' or 'false' */
  air:'true',  /* insert 'true' or 'false' */
  },
  senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

  wayBillCode:{
    image:'',
    values:'',
  },
  shipmentDetails:{
    shipmentInsurance:'yes', /* yes or no*/
    descriptionOfCargo:'Personal Belonging',
    totalFreightDays:'10',
    modeOfPayment:'Cash',
    currency:'Dollars $'
  },
  packageDeparture:{
   date:'June-5, 2023',
   location:''
  },
  packageDestination:{
   pickupDate:'',
   pickupLocation:'',
   pickupTime:'10:00am',
  },
  origin:'Nigeria',
  destination:'USA',
  sizeAndWeight:{
    numberOfPieces:'6',
    weight:'2kg',
  },
  
  routeNumber:'',
  date:'3rd June', 
  status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
  statusMessage:'GOODS ON TRANSIT', 

  extraInfo:{
   date:'',
   location:'',
   localTime:'',
  } 
    
},
{  
  Id:'9',
  sender:{
    trackingId:'132abc',
    senderName: 'Mary Jane',
    address:'',
    zipcode:'',
    phone:'',
    email:''
  },
  receiver:{
    receiverName:'Silas Jude',
    address:'',
    zipcode:'',
    phone:'',
    email:' '
  },
  modeOfShipment:{
  land:'', /* insert 'true' or 'false' */
  sea:'',  /* insert 'true' or 'false' */
  air:'true',  /* insert 'true' or 'false' */
  },
  senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

  wayBillCode:{
    image:'',
    values:'',
  },
  shipmentDetails:{
    shipmentInsurance:'yes', /* yes or no*/
    descriptionOfCargo:'Personal Belonging',
    totalFreightDays:'10',
    modeOfPayment:'Cash',
    currency:'Dollars $'
  },
  packageDeparture:{
   date:'June-5, 2023',
   location:''
  },
  packageDestination:{
   pickupDate:'',
   pickupLocation:'',
   pickupTime:'10:00am',
  },
  origin:'Nigeria',
  destination:'USA',
  sizeAndWeight:{
    numberOfPieces:'6',
    weight:'2kg',
  },
  
  routeNumber:'',
  date:'3rd June', 
  status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
  statusMessage:'GOODS ON TRANSIT', 

  extraInfo:{
   date:'',
   location:'',
   localTime:'',
  }   
},
{  
  Id:'10',
  sender:{
    trackingId:'133abc',
    senderName: 'Mary Jane',
    address:'',
    zipcode:'',
    phone:'',
    email:''
  },
  receiver:{
    receiverName:'Silas Jude',
    address:'',
    zipcode:'',
    phone:'',
    email:' ',
  },
  modeOfShipment:{
  land:'', /* insert 'true' or 'false' */
  sea:'',  /* insert 'true' or 'false' */
  air:'true',  /* insert 'true' or 'false' */
  },
  senderAuthorization:` I/We agree that Delivery Made Easy standard Terms apply`,

  wayBillCode:{
    image:'',
    values:'',
  },
  shipmentDetails:{
    shipmentInsurance:'yes', /* yes or no*/
    descriptionOfCargo:'Personal Belonging',
    totalFreightDays:'10',
    modeOfPayment:'Cash',
    currency:'Dollars $'
  },
  packageDeparture:{
   date:'June-5, 2023',
   location:''
  },
  packageDestination:{
   pickupDate:'',
   pickupLocation:'',
   pickupTime:'10:00am',
  },
  origin:'Nigeria',
  destination:'USA',
  sizeAndWeight:{
    numberOfPieces:'6',
    weight:'2kg',
  },
  
  routeNumber:'',
  date:'3rd June', 
  status:'yes'         /*If 'goods are on transit, put 'yes'...else put 'no' */ ,
  statusMessage:'GOODS ON TRANSIT', 

  extraInfo:{
   date:'',
   location:'',
   localTime:'',
  }   
},
 ]
 export default tracker_data