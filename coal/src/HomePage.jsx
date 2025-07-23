import React  from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import CSS
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { motion } from 'framer-motion';
import Footer from "/src/components/footer";
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div style={{ textAlign: 'center' }}>
    <div style={styles.carouselContainer}>
      <Carousel
  showThumbs={false}
  autoPlay
  infiniteLoop
  showStatus={false}
  interval={5000}
  renderArrowPrev={(onClickHandler, hasPrev, label) =>
    hasPrev && (
      //Slider button left side//
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          position: 'absolute',
          top: '50%',
          left: '15px',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        ❮
      </button>
    )
  }
  //Slider button right//
  renderArrowNext={(onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        style={{
          position: 'absolute',
          top: '50%',
          right: '15px',
          zIndex: 2,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: '#fff',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}
      >
        ❯
      </button>
    )
  }
 
>  
  
<div style={{
      height: '100vh', /* Ensure the hero section takes up the full viewport height */
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',      //Slide 1//
      backgroundImage: 'url(/src/image/11.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      textAlign: 'center' /* Center text horizontally */
    }}
  >
    <div style={{ width: '100%', padding: '19px' }}>
      <h1 style={{ fontSize: '96px',color:'white', fontWeight: 'bold', margin: '0' }}>Ensuring Accountability, track across the Nation</h1>
      <p style={{ fontSize: '18px', color: '#9CA3AB', margin: '10px 0' }}>
        A comprehensive platform for real-time data entry and monitoring, enabling government oversight of carbon emissions from coal mines nationwide.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <a href="/src/pages/OrganizationForm" style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', textDecoration: 'none', borderRadius: '50px', cursor: 'pointer' }}>Register</a>
        <button style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>Learn More</button>
      </div>
    </div>
  </div>

   

  <div style={{
      height: '100vh', /* Ensure the hero section takes up the full viewport height */
      display: 'flex',
      justifyContent: 'center',  //Slide2//
      alignItems: 'center', // Center content vertically
      backgroundImage: 'url(/src/image/s2.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%', /* Adjusted position to move the image down */
      textAlign: 'center' /* Center text horizontally */
    }}
  >
    <div style={{ width: '100%', padding: '19px' }}>
      <h1 style={{ fontSize: '96px', color: 'white', fontWeight: 'bold', margin: '0' }}>
        Monitor. Reduce. Transform.
      </h1>
      <p style={{ fontSize: '18px', color: '#9CA3AB', margin: '10px 0' }}>
        Empowering Coal Plants to reduce their carbon footprint with real-time monitoring and actionable insights.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <a href="/src/pages/OrganizationForm" style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', textDecoration: 'none', borderRadius: '50px', cursor: 'pointer' }}>
          Register
        </a>
        <button style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>
          Learn More
        </button>
      </div>
    </div>
  </div>


  <div style={{
      height: '100vh', /* Ensure the hero section takes up the full viewport height */
      display: 'flex',
      justifyContent: 'center',   
      alignItems: 'center',          //Slide 3//
      backgroundImage: 'url(/src/image/s3.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%',
      textAlign: 'center' /* Center text horizontally */
    }}
  >
    <div style={{ width: '100%', padding: '19px' }}>
      <h1 style={{ fontSize: '96px', color:'white', fontWeight: 'bold', margin: '0' }}>Towards a Cleaner
      Future</h1>
      <p style={{ fontSize: '18px', color: '#9CA3AB', margin: '10px 0' }}>
      Track, manage, and reduce carbon emissions across coal plants nationwide with our comprehensive monitoring plateform
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <a href="/RegisterPage" style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', textDecoration: 'none', borderRadius: '50px', cursor: 'pointer' }}>Register</a>
        <button style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>Learn More</button>
      </div>
    </div>
  </div>

  <div style={{
      height: '100vh', /* Ensure the hero section takes up the full viewport height */
      display: 'flex',
      justifyContent: 'center',   
      alignItems: 'center',          //Slide 4//
      backgroundImage: 'url(/src/image/s4.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center 20%',
      textAlign: 'center' /* Center text horizontally */
    }}
  >
    <div style={{ width: '100%', padding: '1px' }}>
      <h1 style={{ fontSize: '96px',color:'white', fontWeight: 'bold', margin: '0' }}>Leading the Charge in Carbon Accountability </h1>
      <p style={{ fontSize: '18px', color: '#9CA3AB', margin: '10px 0' }}>
      Harness the power of data to minimize your plant’s environmental impact and comply with government regulations.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <a href="/RegisterPage" style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', textDecoration: 'none', borderRadius: '50px', cursor: 'pointer' }}>Register</a>
        <button style={{ padding: '10px 20px', backgroundColor: 'black', color: '#FFF', border: 'none', borderRadius: '50px', cursor: 'pointer' }}>Learn More</button>
      </div>
    </div>
  </div>
</Carousel>

    </div>
    {/* Key Capabilities Section */}
    <div style={{
      marginTop: '0px',
      padding: '0',
      display: 'flex',
      flexDirection: 'column', // Stack images vertically
      alignItems: 'center', // Center horizontally
    }}
  >
  <div style={{
        width: '100%',
        height: '25vh', // Adjusted height for the 4s image
        background: 'url(/src/image/4s.jpg) no-repeat center center/cover',
      }}
    />
  <div style={{
        width: '100%',
        height: '50vh', // Height for the niche image
        background: 'url(/src/image/niche.jpg) no-repeat center center/cover',
        position: 'relative', // Allows absolute positioning of child elements
      }}
    >
    <div style={{
          position: 'absolute',
          top: '20px', // Distance from the top
          left: '50%',
          transform: 'translateX(-50%)', // Center horizontally
          display: 'flex',
          flexDirection: 'row',
          gap: '120px', // Adjust gap between buttons
          zIndex: '1', // Ensure buttons are above the background
        }}
      >
      <Link to="/src/pages/OrganizationForm3" style={{ textDecoration: 'none' }}> {/* Update this path to where you want to navigate */}
      <button style={{
        backgroundColor: 'rgba(0, 255, 0, 1)',
        borderRadius: '35px',
        padding: '10px 10px',
        border: 'none',
        color: '#000',
        fontSize: '18px',
        fontWeight: 'bold',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Drop shadow effect
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        marginLeft: '6px',
      }}>
        Calculate carbon footprint
        <img
          src="/src/image/per.png"
          alt=""
          style={{
            width: '80px',
            height: '80px'
          }}
        />
      </button>
      </Link>
      <button style={{
          backgroundColor: 'rgba(0, 255, 0, 1)',
          borderRadius: '35px',
          padding: '10px 10px',
          border: 'none',
          color: '#000',
          fontSize: '18px',
          fontWeight: 'bold',
          boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.3)', // Drop shadow effect
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          
        }}>
        Monitor carbon footprint
        <img
          src="/src/image/corona.png"
          alt=""
          style={{
            width: '80px',
            height: '80px'
          }}
        />
      </button>
    </div>
  </div>
</div>

 {/* Timeline Section */}

    <div style={{
    width: '100%',
    height: '100vh', // Adjust height as needed
    backgroundImage: 'url(/src/image/mmb.jpg)', // Background image

    backgroundPosition: 'center',
    
  }}
>
  
  
  <div style={{
      position: 'relative',
      zIndex: 2, // Ensure content is above the overlay
      color: '#000', // Adjust text color for contrast
      textAlign: 'center',
      padding: '20px',
    }}
  >
    <h1 style={{
        fontSize: '70px',
        fontWeight: 'bold',
      }}
    >
      What is Sudhar?
    </h1>
    <p style={{
        fontSize: '20px',
        margin: '10px 0',
      }}
    >
      It reflects our platform’s <strong>mission</strong> to help coal plants reduce their carbon footprint, leading to a more suitable future.
    </p>
    <p style={{
        fontSize: '20px',
        margin: '10px 0',
      }}
    >
      Sustainable Utilization of Data for <strong>Holistic Assessment</strong> and Afforestation Recommendations.
    </p>
    <p style={{
        fontSize: '20px',
        margin: '10px 0',
      }}
    >
      Through <strong>real-time monitoring, data-driven insights, and actionable recommendations</strong>, Sudhar empowers coal plants to mitigate their environmental impacts by suggesting practical measures such as <strong>afforestation, adoption of electric vehicles</strong>, and other <strong>green initiatives</strong>.
    </p>
    <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
        marginTop: '20px',
      }}
    >
      Sudhar is not just a name it’s a <strong>Vision</strong>
    </p>
    <div style={{
    position: 'relative', // Container relative to position images absolutely
    width: '100%',
    height: '900px', // Adjust height as needed
    overflow: 'hidden', // Hide overflow to ensure images don't go outside container
  }}
>
<div style={{
    position: 'relative',
    width: '100%',
    height: '400px', // Adjust height as needed
    overflow: 'hidden', // Hide overflow to ensure images don't go outside container
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end', // Align items to the bottom
  }}
>
  <img src="/src/image/kl.png" alt="Icon 1" style={{
      width: '186px',
      height: '186px',
      position: 'absolute',
      bottom: '220px',
      left: 'calc(50% - 500px)', // Adjust based on your layout
    }}
  />
  <img src="/src/image/mg.png" alt="Icon 2" style={{
      width: '270px',
      height: '270px',
      position: 'absolute',
      bottom: '20px', // Move down relative to container bottom
      left: 'calc(47% - 300px)', // Adjust based on your layout
    }}
  />
  <img src="/src/image/lb.png" alt="Icon 3" style={{
      width: '229px',
      height: '229px',
      position: 'absolute',
      bottom: '0px', // Move down relative to container bottom
      left: 'calc(42% + 10px)', // Adjust based on your layout
    }}
  />
  <img src="/src/image/mb.png" alt="Icon 4" style={{
      width: '338px',
      height: '338px',
      position: 'absolute',
      bottom: '0px', // Move up relative to container bottom
      left: 'calc(38% + 250px)', // Adjust based on your layout
    }}
  />
  <img src="/src/image/mm.png" alt="Icon 5" style={{
      width: '240px',
      height: '240px',
      position: 'absolute',
      bottom: '200px', // Move up relative to container bottom
      left: 'calc(35% + 500px)', // Adjust based on your layout
    }}
  />
</div>

</div>

  </div>
</div>

<h2 style={{
  fontSize: '70px',
  fontWeight: 'bold',
  color: '#000',
  textDecoration: 'underline',
}}>Key Capabilities</h2>

{[...Array(1)].map((_, index) => (  // 1st box //
  <div key={index} style={{
    marginBottom: '50px',
    margin: '40px',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 2s ease-out forwards',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',  // outer box //
      justifyContent: 'center',
      padding: '0px',
      flexDirection: 'row-reverse',
    }}>
      <div>
        <img
          src="/src/image/admi1.png"
          alt="Monitoring Illustration"
          style={{
            width: '300px',
            height: '300px',
          }}
        />
      </div>

      <div style={{
        width: '3.2rem',
        height: '3.2rem',
        backgroundColor: 'rgba(52, 58, 64, 1)',
        borderRadius: '50%',
        margin: '80px',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.2)',
      }}></div>

      <div style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        color: 'white',
        padding: '40px',
        borderRadius: '25px',
        maxWidth: '300px',
        boxShadow: '10px 15px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          right: '-14px',  // Adjust this value to position the arrow correctly
          top: '30%',
          transform: 'translateY(-50%)',
          width: '0',
          height: '0',
          borderTop: '15px solid transparent',  // Arrow size
          borderBottom: '15px solid transparent', // Arrow size
          borderLeft: '15px solid rgba(52, 58, 64, 1)', // Arrow color same as box background
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)', // Shadow effect
        }}></div>


        <h2 style={{ margin: '0 0' }}>Real-Time Monitoring</h2>
        <p style={{ margin: 10 ,color: 'rgba(149, 155, 163, 1)' }}>
          Track carbon emissions from coal plants in real-time, enabling prompt responses to any spikes in pollution.
        </p>
      </div>
    </div>
  </div>
))}

{[...Array(1)].map((_, index) => (  //2nd box//
  <div key={index} style={{
    marginBottom: '50px',
    margin: '40px',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 2s ease-out forwards',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // outer box//
      padding: '0px',
    }}>
      <div>
        <img
          src="/src/image/in2.png"
          alt="Monitoring Illustration"
          style={{            //img kaa//
            width: '300px',
            height: '300px',
            marginRight:'540px'
          }}
        />
      </div>

      <div style={{
        position:'fixed',
        width: '3.2rem',
        height: '3.2rem',
        backgroundColor: 'rgba(52, 58, 64, 1)',
        borderRadius: '50%',                      //dot kaa//
        marginLeft: '85px',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.2)',
      }}></div>

      <div style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        color: 'white',
        padding: '40px',
        borderRadius: '25px',    //inner box//
        maxWidth: '300px',
        boxShadow: '10px 15px 8px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        marginLeft:'800px',
      }}>
       
       <div style={{
          content: '""',
          position: 'absolute',
          left: '-9px',  // Adjust this value to position the arrow correctly
          top: '30%',
          transform: 'translateY(-50%)',
          width: '0px',            //arrow ka//
          height: '0px',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderRight: '10px solid rgba(52, 58, 64, 1)', // Arrow color same as box background
          boxShadow: '0px 0px 0px  rgba(0, 0, 0, 0.2)'
        }}></div>


        <h2 style={{ margin: '0 0' }}>Automated Reporting</h2>
        <p style={{ margin: 10 ,color:'rgba(149, 155, 163, 1)'}}>
        Automatically generate detailed reports on emissions, compliance, and plant performance, ensuring seamless regulatory oversight.
        </p>
      </div>
    </div>
  </div>
))}

{[...Array(1)].map((_, index) => (  // 3rd box //
  <div key={index} style={{
    marginBottom: '50px',
    margin: '40px',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 2s ease-out forwards',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',  // outer box //
      justifyContent: 'center',
      padding: '0px',
      flexDirection: 'row-reverse',
    }}>
      <div>
        <img
          src="/src/image/ch3.png"
          alt="Monitoring Illustration"
          style={{
            width: '300px',
            height: '300px',
          }}
        />
      </div>

      <div style={{
        width: '3.2rem',
        height: '3.2rem',
        backgroundColor: 'rgba(52, 58, 64, 1)',
        borderRadius: '50%',
        margin: '80px',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.2)',
      }}></div>

      <div style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        color: 'white',
        padding: '40px',
        borderRadius: '25px',
        maxWidth: '300px',
        boxShadow: '10px 15px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          right: '-14px',  // Adjust this value to position the arrow correctly
          top: '30%',
          transform: 'translateY(-50%)',
          width: '0',
          height: '0',
          borderTop: '15px solid transparent',  // Arrow size
          borderBottom: '15px solid transparent', // Arrow size
          borderLeft: '15px solid rgba(52, 58, 64, 1)', // Arrow color same as box background
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)', // Shadow effect
        }}></div>


        <h2 style={{ margin: '0 0' }}>Nationwide Compliance Tracking</h2>
        <p style={{ margin: 10 ,color:'rgba(149, 155, 163, 1)' }}>
        Monitor and enforce compliance with carbon emission regulations across all registered coal plants nationwide
        </p>
      </div>
    </div>
  </div>
))}

{[...Array(1)].map((_, index) => (  //4th box//
  <div key={index} style={{
    marginBottom: '50px',
    margin: '40px',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 2s ease-out forwards',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // outer box//
      padding: '0px',
    }}>
      <div>
        <img
          src="/src/image/admi4.png"
          alt="Monitoring Illustration"
          style={{            //img kaa//
            width: '300px',
            height: '300px',
            marginRight:'540px'
          }}
        />
      </div>

      <div style={{
        position:'fixed',
        width: '3.2rem',
        height: '3.2rem',
        backgroundColor: 'rgba(52, 58, 64, 1)',
        borderRadius: '50%',                      //dot kaa//
        marginLeft: '85px',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.2)',
      }}></div>

      <div style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        color: 'white',
        padding: '40px',
        borderRadius: '25px',    //inner box//
        maxWidth: '300px',
        boxShadow: '10px 15px 8px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        marginLeft:'800px',
      }}>
       
       <div style={{
          content: '""',
          position: 'absolute',
          left: '-9px',  // Adjust this value to position the arrow correctly
          top: '30%',
          transform: 'translateY(-50%)',
          width: '0px',            //arrow ka//
          height: '0px',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderRight: '10px solid rgba(52, 58, 64, 1)', // Arrow color same as box background
          boxShadow: '0px 0px 0px  rgba(0, 0, 0, 0.2)'
        }}></div>


        <h2 style={{ margin: '0 0' }}>Data Verification and Accuracy</h2>
        <p style={{ margin: 10 ,color:'rgba(149, 155, 163, 1)'}}>
        Ensure the accuracy and reliability of data with built-in verification processes that flag inconsistencies and errors.
        </p>
      </div>
    </div>
  </div>
))}

{[...Array(1)].map((_, index) => (  // 5th box //
  <div key={index} style={{
    marginBottom: '50px',
    margin: '40px',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 2s ease-out forwards',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',  // outer box //
      justifyContent: 'center',
      padding: '0px',
      flexDirection: 'row-reverse',
    }}>
      <div>
        <img
          src="/src/image/logbag5.png"
          alt="Monitoring Illustration"
          style={{
            width: '300px',
            height: '300px',
          }}
        />
      </div>

      <div style={{
        width: '3.2rem',
        height: '3.2rem',
        backgroundColor: 'rgba(52, 58, 64, 1)',
        borderRadius: '50%',
        margin: '80px',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.2)',
      }}></div>

      <div style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        color: 'white',
        padding: '40px',
        borderRadius: '25px',
        maxWidth: '300px',
        boxShadow: '10px 15px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          right: '-14px',  // Adjust this value to position the arrow correctly
          top: '30%',
          transform: 'translateY(-50%)',
          width: '0',
          height: '0',
          borderTop: '15px solid transparent',  // Arrow size
          borderBottom: '15px solid transparent', // Arrow size
          borderLeft: '15px solid rgba(52, 58, 64, 1)', // Arrow color same as box background
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)', // Shadow effect
        }}></div>


        <h2 style={{ margin: '0 0' }}>Historical Data Analysis</h2>
        <p style={{ margin: 10 ,color:'rgba(149, 155, 163, 1)'}}>
        Access and analyze historical emission data to identify trends, predict future patterns, and make informed decisions.
        </p>
      </div>
    </div>
  </div>
))}

{[...Array(1)].map((_, index) => (  //6th box//
  <div key={index} style={{
    marginBottom: '50px',
    margin: '40px',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 2s ease-out forwards',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center', // outer box//
      padding: '0px',
    }}>
      <div>
        <img
          src="/src/image/pc6.png"
          alt="Monitoring Illustration"
          style={{            //img kaa//
            width: '300px',
            height: '300px',
            marginRight:'540px'
          }}
        />
      </div>

      <div style={{
        position:'fixed',
        width: '3.2rem',
        height: '3.2rem',
        backgroundColor: 'rgba(52, 58, 64, 1)',
        borderRadius: '50%',                      //dot kaa//
        marginLeft: '85px',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.2)',
      }}></div>

      <div style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        color: 'white',
        padding: '40px',
        borderRadius: '25px',    //inner box//
        maxWidth: '300px',
        boxShadow: '10px 15px 8px rgba(0, 0, 0, 0.2)',
        position: 'fixed',
        marginLeft:'800px',
      }}>
       
       <div style={{
          content: '""',
          position: 'absolute',
          left: '-9px',  // Adjust this value to position the arrow correctly
          top: '30%',
          transform: 'translateY(-50%)',
          width: '0px',            //arrow ka//
          height: '0px',
          borderTop: '10px solid transparent',
          borderBottom: '10px solid transparent',
          borderRight: '10px solid rgba(52, 58, 64, 1)', // Arrow color same as box background
          boxShadow: '0px 0px 0px  rgba(0, 0, 0, 0.2)'
        }}></div>


        <h2 style={{ margin: '0 0' }}>User-Friendly Dashboard</h2>
        <p style={{ margin: 10 ,color:'rgba(149, 155, 163, 1)'}}>
        Navigate effortlessly with an intuitive dashboard designed for both government officials and coal mine operators
        </p>
      </div>
    </div>
  </div>
))}

{[...Array(1)].map((_, index) => (  // 7th box //
  <div key={index} style={{
    marginBottom: '50px',
    margin: '40px',
    opacity: 1,
    transform: 'translateY(20px)',
    animation: 'fadeInUp 2s ease-out forwards',
  }}>
    <div style={{
      display: 'flex',
      alignItems: 'center',  // outer box //
      justifyContent: 'center',
      padding: '0px',
      flexDirection: 'row-reverse',
    }}>
      <div>
        <img
          src="/src/image/haath7.png"
          alt="Monitoring Illustration"
          style={{
            width: '300px',
            height: '300px',
          }}
        />
      </div>

      <div style={{
        width: '3.2rem',
        height: '3.2rem',
        backgroundColor: 'rgba(52, 58, 64, 1)',
        borderRadius: '50%',
        margin: '80px',
        boxShadow: '10px 10px 8px rgba(0, 0, 0, 0.2)',
      }}></div>

      <div style={{
        backgroundColor: 'rgba(52, 58, 64, 1)',
        color: 'white',
        padding: '40px',
        borderRadius: '25px',
        maxWidth: '300px',
        boxShadow: '10px 15px 8px rgba(0, 0, 0, 0.2)',
        position: 'relative',
      }}>
        <div style={{
          position: 'absolute',
          right: '-14px',  // Adjust this value to position the arrow correctly
          top: '30%',
          transform: 'translateY(-50%)',
          width: '0',
          height: '0',
          borderTop: '15px solid transparent',  // Arrow size
          borderBottom: '15px solid transparent', // Arrow size
          borderLeft: '15px solid rgba(52, 58, 64, 1)', // Arrow color same as box background
          boxShadow: '0px 0px 0px rgba(0, 0, 0, 0.2)', // Shadow effect
        }}></div>


        <h2 style={{ margin: '0 0' }}>Custom Alerts and Notification</h2>
        <p style={{ margin: 10 }}>
        Receive custom alerts for critical events, such as emission spikes or non-compliance, ensuring timely interventions
        </p>
      </div>
    </div>
  </div>
))}


<div style={{ padding: '40px', backgroundColor: 'rgba(240, 239, 240, 1)', borderRadius: '25px', margin: '40px' }}>
    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0px',
        backgroundColor: 'rgba(240, 239, 240, 1)',
        borderRadius: '25px',
    }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h1 style={{ fontSize: '70px', fontWeight: 'bold', margin: '0' }}>Making a Difference</h1>
            <p style={{ fontSize: '36px', fontWeight: 'bold', margin: '0' }}>Impact Statistics</p>
        </div>
        <div style={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
            padding: '0px',
            borderRadius: '10px',
            width: '100%',
            boxSizing: 'border-box',
        }}>
            <div style={{
                textAlign: 'center',
                flex: '1',
                padding: '0 20px',
                borderRight: '1px solid rgba(52, 58, 64, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>70+</div>
                <div style={{ fontSize: '32px', fontWeight: 'normal', marginBottom: '20px' }}>Coal Mines Monitored Nationwide.</div>
                <img src="/src/image/rock.png" alt="Coal Plants" style={{ width: '200px', height: '200px' }} />
            </div>
            <div style={{
                textAlign: 'center',
                flex: '1',
                padding: '0 20px',
                borderRight: '1px solid rgba(52, 58, 64, 1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>10%</div>
                <div style={{ fontSize: '30px', fontWeight: 'normal', marginBottom: '20px' }}>Reduction in Carbon Emissions Over 2 Years.</div>
                <img src="/src/image/co2.png" alt="Carbon Reduction" style={{ width: '200px', height: '200px' }} />
            </div>
            <div style={{
                textAlign: 'center',
                flex: '1',
                padding: '0 20px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
                <div style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '10px' }}>100%</div>
                <div style={{ fontSize: '32px', fontWeight: 'normal', marginBottom: '20px' }}>Compliance rate Achieved in 2023.</div>
                <img src="/src/image/100.png" alt="Compliance" style={{ width: '200px', height: '200px' }} />
            </div>
        </div>
    </div>
</div>

<h1 style={{ 
    fontSize: '47px', 
    fontWeight: 'bold', 
    margin: '0px', 
    position: 'relative', 
    top: '-25px', // Move the heading up
    textDecoration: 'underline' // Add underline
}}>What Our Users Say</h1>
<div style={{
    padding: '30px',
    height: '400px',
    width: '100%',
    maxWidth: '1300px',
    margin: '0 auto',
    borderRadius: '30px',
    backgroundImage: 'url("/src/image/crowd.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    boxSizing: 'border-box',
    transform: 'translateY(-20px)', // Move the entire div up by 20px
}}>
    <Slider {...styles.settings} style={{ position: 'relative', height: '100%' }}>
        {/* First Slide */}
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            color: '#fff',
            padding: '0 50px',
        }}>
            <div style={{ textAlign: 'left', flex: 1 }}>
                <p style={{
                    fontSize: '36px', // Consistent font size
                    fontStyle: 'italic', // Italic font style
                    fontFamily: 'roboto thin', // Thin font family
                    color: '#fff',
                    margin: '50px 20px 20px 20px',
                    lineHeight: '1.2',
                    fontWeight: 'normal', // Normal weight for the text
                }}>
                    Thanks to <strong style={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'Helvetica Neue Thin, Arial, sans-serif' }}>SUDHAR</strong>, we’ve significantly reduced our<br />
                    carbon emissions and improved compliance.
                </p>
                <div style={{
                    fontSize: '20px',
                    color: 'rgba(149, 155, 163, 1)',
                    fontWeight: 'normal', // Normal weight for the text
                    marginLeft:'20px',
                    
                   
                }}>
                    <strong style={{ fontWeight: 'normal' }}>Reeta Roy</strong><br />
                    Plant Manager<br />
                    XYZ Coal Plant
                </div>
            </div>
            <img 
                src="/src/image/krati.png" 
                alt="User" 
                style={{
                    width: '450px',
                    height: '450px',
                    borderRadius: '50%',
                    marginLeft: '800px',
                    marginTop: '-280px',
                }} 
            />
        </div>

        {/* Second Slide */}
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '100%',
            color: '#fff',
            padding: '0 50px',
        }}>
            <div style={{ textAlign: 'left', flex: 1 }}>
                <p style={{
                    fontSize: '36px', // Consistent font size
                    fontStyle: 'italic', // Italic font style
                    fontFamily: 'roboto thin', // Thin font family
                    color: '#fff',
                    margin: '50px 20px 20px 20px',
                    lineHeight: '1.2',
                    fontWeight: 'normal', // Normal weight for the text
                }}>
                   “Monitoring emission in real-time has never been easier.<br /><strong style={{ fontWeight: 'bold', fontStyle: 'italic', fontFamily: 'Helvetica Neue Thin, Arial, sans-serif' }}>SUDHAR</strong> is a game-changer for regulatory oversight.  ”
                  
                </p>
                <div style={{
                    fontSize: '20px',
                    color: 'rgba(149, 155, 163, 1)',
                    marginLeft:'20px',
                    fontWeight: 'normal', // Normal weight for the text
                }}>
                    <strong style={{ fontWeight: 'normal' }}>Palkhi Bhatt </strong><br />
                              Resource Head <br />
                    XYZ Resource Department.
                </div>
            </div>
            <img 
                src="/src/image/khushi.png" 
                alt="User" 
                style={{
                    width: '360px',
                    height: '360px',
                    borderRadius: '50%',
                    marginLeft: '900px',
                    marginTop: '-220px',
                }} 
            />
        </div>
    </Slider>
</div>
     <div>
        <Footer />
    </div>
      </div>

  
);

const styles = {}
export default HomePage;
