export const menuItems = [
    {
      title: 'Home',
      url: '/',
      submenu: [  
        {
          title: 'Home',
          url: '/',
        } 
      ]   
    },
    {
      title: 'Login',  
      url: '/login',    
      submenu: [
         {
          title: 'Login',
          url: '/login',
        },
        {
          title: 'Register',
          url: '/register',
        }
      ],
    },
    {
      title: 'Service Request',
      url: '/imdDisplay',
      submenu: [  
        {
          title: 'Service Request',
          url: '/imdDisplay',
        },       
        {
          title: 'TwilioSMS',
          url: '/tsms',
        }  
      ]   
    }, 
    {
      title: 'Task Scheduler',
      url: '/ts',
      submenu: [
        {
          title: 'Update Assignment',
          url: '/etass',
        },
        {
          title: 'AssignmentStatus Update',
          url: '/asu',
        },
        {
          title: 'AssignmentDetailScreen',
          url: '/ad',
        }      
      ],
    },    
    {
      title: 'Workflow',
      url: '/wfs',
      submenu: [
        {
          title: 'FirstFlow',
          url: '/ff',
        }, 
        {
          title: 'Workflow Display',
          url: '/wfs',
        }, 
        {
          title: 'UpdateNode',
          url: '/un',
        }     
      ],
    },  
    {
      title: 'Skilled Workers',
      url: '/swl',
      submenu: [
        {
          title: 'Worker Services',
          url: '/wss',
        }     
      ],
    },
   
    {
      title: 'About',
      url: '/about',
      submenu: [      
        {
          title: 'Profile',
          url: '/profile',
        }
      ],
    },
    {
      title: 'Blog',
      url: '/blog', 
      submenu: [      
        {
          title: 'Blog',
          url: '/blog',
        }
      ]   
    }
  ];
  