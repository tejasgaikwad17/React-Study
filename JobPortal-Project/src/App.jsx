import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import Ecards from './components/Ecards'

const App = () => {

  const JobOpennings = [

    {
      CompanyLogo: 'https://images.icon-icons.com/1195/PNG/512/1490889698-amazon_82521.png',
      CompanyName: 'Amezon',
      PostedTime: '5 Days ago',
      Position: 'Senior UI/UX Designer',
      Tag1: 'Part Time',
      Tag2: 'Senior Level',
      Pay: '$120/hr',
      Location: 'Mumbai, India'
    },

    {
      CompanyLogo: 'https://play-lh.googleusercontent.com/bh871pyeIpMnJxGYKmTJCm-5VwIYrPUYhHQcCky0B-DpsMoPCWVSDKz0Ic7MLsGuLmS4F_-iE6BilqsUM2DloA=w600-h300-pc0xffffff-pd',
      CompanyName: 'Instagram',
      PostedTime: '3 Days ago',
      Position: 'Digital Marketing',
      Tag1: 'Full Time',
      Tag2: 'Junior Level',
      Pay: '$100/hr',
      Location: 'Pune, India'
    },

    {
      CompanyLogo: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',
      CompanyName: 'Google',
      PostedTime: '1 Day ago',
      Position: 'Frontend Developer',
      Tag1: 'Full Time',
      Tag2: 'Mid Level',
      Pay: '$120/hr',
      Location: 'Bangalore, India'
    },
    {
      CompanyLogo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
      CompanyName: 'Amazon',
      PostedTime: '5 Days ago',
      Position: 'Software Engineer',
      Tag1: 'Remote',
      Tag2: 'Senior Level',
      Pay: '$150/hr',
      Location: 'Hyderabad, India'
    },
    {
      CompanyLogo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
      CompanyName: 'Microsoft',
      PostedTime: '2 Days ago',
      Position: 'React Developer',
      Tag1: 'Full Time',
      Tag2: 'Mid Level',
      Pay: '$110/hr',
      Location: 'Mumbai, India'
    },
    {
      CompanyLogo: 'https://e7.pngegg.com/pngimages/464/912/png-clipart-wikipedia-logo-wikipedia-logo-icons-logos-emojis-tech-companies.png',
      CompanyName: 'Apple',
      PostedTime: '4 Days ago',
      Position: 'UI/UX Designer',
      Tag1: 'Hybrid',
      Tag2: 'Senior Level',
      Pay: '$130/hr',
      Location: 'Delhi, India'
    },
    {
      CompanyLogo: 'https://crystalpng.com/wp-content/uploads/2025/02/meta_logo.png',
      CompanyName: 'Meta',
      PostedTime: '6 Hours ago',
      Position: 'Product Designer',
      Tag1: 'Remote',
      Tag2: 'Junior Level',
      Pay: '$95/hr',
      Location: 'Chennai, India'
    },
    {
      CompanyLogo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg',
      CompanyName: 'Netflix',
      PostedTime: '1 Week ago',
      Position: 'Backend Developer',
      Tag1: 'Full Time',
      Tag2: 'Senior Level',
      Pay: '$160/hr',
      Location: 'Remote'
    },
    {
      CompanyLogo: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Slack_Icon.png',
      CompanyName: 'Slack',
      PostedTime: '12 Hours ago',
      Position: 'JavaScript Developer',
      Tag1: 'Remote',
      Tag2: 'Mid Level',
      Pay: '$105/hr',
      Location: 'Pune, India'
    },
    {
      CompanyLogo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
      CompanyName: 'Apple',
      PostedTime: '4 Days ago',
      Position: 'UI/UX Designer',
      Tag1: 'Hybrid',
      Tag2: 'Senior Level',
      Pay: '$130/hr',
      Location: 'Delhi, India'
    }

  ];




  return (
    <div className='parent'>
      <Navbar />
      {/* <div className="container">
        <div className="row">
          <Card user="John" age={25} img="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVtcGxveWVlfGVufDB8fDB8fHww"/>
          <Card user="Rock" age={25} img="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" />

          <Card user="Sana" age={27} img="https://plus.unsplash.com/premium_photo-1661297414288-8ed17eb1b3f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" />
        </div>        
      </div> */}

      {/* <Ecards /> */}

      <div className='parent-two'>
        {JobOpennings.map(function (element, idx) {
          
          return  <div key={idx}>
               <Ecards CompanyLogo={element.CompanyLogo} CompanyName={element.CompanyName} PostedTime={element.PostedTime} Position={element.Position} Tag1={element.Tag1} Tag2={element.Tag2} Pay={element.Pay} PayLocation={element.Location} />
          </div>
          
        })}
      </div>




    </div>
  )
}



export default App