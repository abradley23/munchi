import logo from './logo.svg';
import './App.css';

const card = document.getElementById('card');
const tabs = document.getElementById('tab-content');

function showTab(tabName) {
  // Hide all tabs
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
      tab.style.display = 'none';
  });

  // Show the selected tab
  const selectedTab = document.getElementById(`${tabName}Tab`);
  if (selectedTab) {
      selectedTab.style.display = 'block';
  }
}

function handleLike() {
    // Handle like action (e.g., show next profile)
    console.log('Liked');
    showNextProfile();
}

function handleDislike() {
    // Handle dislike action (e.g., show next profile)
    console.log('Disliked');
    showNextProfile();
}

function showNextProfile() {
    // Fetch the next profile data (can be done through API call)
    const nextProfile = {
        name: 'Jane Doe',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        image: 'profile2.jpg',
    };

    // Update the card with the next profile data
    card.querySelector('.profile-name').innerText = nextProfile.name;
    card.querySelector('.profile-bio').innerText = nextProfile.bio;
    card.querySelector('.profile-image').src = nextProfile.image;
}


export default App;

//default code from react:
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }