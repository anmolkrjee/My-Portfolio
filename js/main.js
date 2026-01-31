// Main JavaScript file
// Static data - can be moved to a separate data file if needed
const portfolioData = {
  profile: {
    name: "Aditya Kumar",
    profileImage: "assets/profile-img.png",
    email: "adityakumar122221@gmail.com",
    phone: "9153856822",
    place: "Delhi, India",
    github: "https://github.com/Aditya122221",
    linkedin: "https://www.linkedin.com/in/aditya-kumar-482429346/",
    leetcode: "https://leetcode.com/u/Aditya_2024/",
  },
  objective: "Passionate Full Stack Developer with 3+ years of experience in building scalable web applications using modern technologies. Seeking opportunities to contribute to innovative projects while continuously learning and growing in a collaborative environment. Dedicated to writing clean, efficient code and delivering exceptional user experiences."
};

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  // Populate profile data
  const profileName = document.getElementById('profileName');
  const profileEmail = document.getElementById('profileEmail');
  const profilePhone = document.getElementById('profilePhone');
  const profilePlace = document.getElementById('profilePlace');
  const profileImage = document.getElementById('profileImage');
  const objectiveText = document.getElementById('objectiveText');
  
  if (profileName) profileName.textContent = portfolioData.profile.name;
  if (profileEmail) profileEmail.textContent = portfolioData.profile.email;
  if (profilePhone) profilePhone.textContent = portfolioData.profile.phone;
  if (profilePlace) profilePlace.textContent = portfolioData.profile.place;
  if (profileImage) profileImage.src = portfolioData.profile.profileImage;
  if (profileImage) profileImage.alt = portfolioData.profile.name;
  if (objectiveText) objectiveText.textContent = portfolioData.objective;
  
  console.log('Portfolio initialized with static data');
});
