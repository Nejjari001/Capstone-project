const speakers = [
    {
      id: 1,
      photo: 'photo-1',
      name: 'Lorem Ipsum',
      honours: 'Summit Founder & C.E.O.',
      achievements: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore quasi saepe harum nostrum voluptates sint provident fuga ea ex alias natus reiciendis, iste perspiciatis mollitia. Architecto esse exercitationem accusantium',
  
    },
    {
      id: 2,
      photo: 'photo-2',
      name: 'Lorem Dolor',
      honours: 'Product & Learning at Arab Afiliate Summit.',
      achievements: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore quasi saepe harum nostrum voluptates sint provident fuga ea ex alias natus reiciendis, iste perspiciatis mollitia. Architecto esse exercitationem accusantium',
    },
    {
      id: 5,
      photo: 'photo-5',
      name: 'Lorem Andres',
      honours: 'Technical Curriculum Designer at Arab Afiliate Summit.',
      achievements: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore quasi saepe harum nostrum voluptates sint provident fuga ea ex alias natus reiciendis, iste perspiciatis mollitia. Architecto esse exercitationem accusantium',
    },
    {
      id: 6,
      photo: 'photo-6',
      name: 'Gaby Suarez',
      honours: ' Lorem ipsum dolor sit amet consectetur adipisicing elit',
      achievements: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore quasi saepe harum nostrum voluptates sint provident fuga ea ex alias natus reiciendis, iste perspiciatis mollitia. Architecto esse exercitationem accusantium.',
    }
  ];
  
  const speakersSection = document.getElementById('speakers');
  const speakerHeader = document.createElement('h3')
  
  speakerHeader.classList.add('speakers-header');
  speakersSection.appendChild(speakerHeader);
  speakerHeader.appendChild(document.createTextNode('Featured Speakers'))
  
  const hrLine = document.createElement('hr');
  hrLine.classList.add('hr-about-1');
  speakersSection.appendChild(hrLine);
  
  const speakerContainerMain = document.createElement('div')
  speakerContainerMain.className = 'speakers-main'
  speakersSection.appendChild(speakerContainerMain);
  
  speakers.forEach((i) => {
    const speakerContainer = document.createElement('div')
    speakerContainer.className = 'speaker'
    speakerContainerMain.appendChild(speakerContainer);
  
    const speakerImg = document.createElement('div')
    speakerImg.className = 'speaker-photo ' + `${speakers[speakers.indexOf(i)].photo}`
    speakerContainer.appendChild(speakerImg);
  
    const speakerDetails = document.createElement('div')
    speakerDetails.setAttribute('class', 'speaker-details')
    speakerContainer.appendChild(speakerDetails)
  
    const speakerDetails2 = document.createElement('ul')
    speakerDetails2.classList.add('speaker-details2')
    speakerDetails.appendChild(speakerDetails2)
  
    const speakerName = document.createElement('li')
    speakerName.classList.add('speaker-name')
    speakerDetails2.appendChild(speakerName)
    speakerName.appendChild(document.createTextNode((speakers[speakers.indexOf(i)]).name))
  
    const speakerHonours = document.createElement('li')
    speakerHonours.classList.add('speaker-honours')
    speakerDetails2.appendChild(speakerHonours)
    speakerHonours.appendChild(document.createTextNode((speakers[speakers.indexOf(i)]).honours))
  
    const separatorIcon = document.createElement('li')
    separatorIcon.classList.add('speaker-icon')
    const separator = document.createElement('hr')
    separator.classList.add('separator')
    speakerDetails2.appendChild(separatorIcon)
    separatorIcon.appendChild(separator)
  
    const speakerAchievements = document.createElement('li')
    speakerAchievements.classList.add('speaker-achievements')
    speakerDetails2.appendChild(speakerAchievements)
    speakerAchievements.appendChild(document.createTextNode((speakers[speakers.indexOf(i)]).achievements))
  });