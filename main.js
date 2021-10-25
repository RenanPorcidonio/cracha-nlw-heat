const linksSocialMedia = {
    github: "RenanPorcidonio",
    youtube: "",
    facebook: "Renan-Porcidonio",
    instagram: "mirrorrpx",
    linkedin: "/in/renan-porcidonio-6b945a192",
  };
  
  function changeSocialMediaLinks() {
    for (let li of socialLinks.children) {
      const social = li.getAttribute("class");

      console.log(social)
      li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`;
    }
  }
  
  changeSocialMediaLinks();
  
  function getGitHubProfileInfos(){
      const url = `https://api.github.com/users/${linksSocialMedia.github}`
      
      fetch(url).then(response => response.json())
      .then(data => {
          console.log(data)
          userName.textContent = data.name,
          bio.textContent = data.bio,
          userLink.href = data.html_url,
          userImage.src = data.avatar_url,
          userLogin.textContent = data.login
      })
  }
  
  getGitHubProfileInfos();