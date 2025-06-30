
const data = [
  {
    interest: ["medicine","Doctor",'doctor','medical','medical science'],
    majors: ['Neuroscience', 'Biochemistry', 'Anatomy', 'Physiology', 'Pharmacology', 'Microbiology', 'Immunology', 'Pathology', 'Biostatistics', 'Health Informatics', 'Medical Ethics', 'Public Health', 'Epidemiology', 'Biomedical Science','Medical Biotechnology'],
      colleges: ['University of California, San Francisco','Johns Hopkins University', 'University of Oxford', 'Peking University Health Science Center','University of Sydney',"Monash University","Heidelberg University","University of Amsterdam","University of Toronto","McGill University",'Imperial College London'],
  },
  {
    interest: ["art","arts","artsy"],
    majors: ['Fine Arts', 'Graphic Design', 'Painting', 'Sculpture', 'Drawing', 'Printmaking', 'Photography', 'Digital Art', 'Ceramics', 'Textile Art', 'Fashion Design', 'Interior Design', 'Architecture', 'Landscape Architecture', 'Urban Planning', 'Illustration', 'Animation', 'Film Studies', 'Theatre Arts', 'Visual Communication'],
      colleges: ['Rhode Island School of Design', 'Royal College of Art', 'Accademia di Belle Arti di Firenze','Ontario College of Art and Design', 'Savannah College of Art and Design', 'Central Acadamy of Fine Arts','RMIT University','School of the Art Institute of Chicago','California Institute of the Arts'],
  
  },
 
  {
    interest: ["space","space science","space exploration","space engineering","space technology"],
    majors: ['Astronomy', 'Astrophysics', 'Planetary Science', 'Space Science', 'Aerospace Engineering', 'Aeronautical Engineering', 'Astrobiology', 'Cosmology', 'Space Physics', 'Space Weather', 'Space Systems Engineering', 'Spacecraft Engineering', 'Spacecraft Propulsion','Spacecraft Guidance and Control','Spacecraft Telecommunications',,'Spacecraft Avionics','Spacecraft Command and Data Handling'],
      colleges: ['Massachusetts Institute of Technology', 'California Institute of Technology','University of colorado boulder','Embry-Riddle Aeronautical University','Georgia Institute of Technology','University of Cambrigde','University of Leicester','University of Toronto','Technical University of Munich','ISAE-SUPAERO','University of Sydney'],
    
  },
  {
    interest:["coding","computer science","computer engineering","software engineering","data science","artificial intelligence","machine learning","cybersecurity","robotics","game development","web development","mobile app development","computer graphics"],
    majors: ['Computer Science', 'Software Engineering', 'Information Technology', 'Data Science', 'Artificial Intelligence', 'Machine Learning', 'Cybersecurity', 'Computer Engineering', 'Robotics', 'Game Development', 'Web Development', 'Mobile App Development', 'Database Management', 'Networking', 'Operating Systems', 'Computer Graphics', 'Human-Computer Interaction', 'Computer Vision', 'Natural Language Processing', 'Computer Architecture'],
      colleges: ['Massachusetts Institute of Technology', 'Georgia Institute of Technology','Cornell University','University of California, San Diego','University of Texas at Austin','University of Illinois at Urbana-Champaign','University of Washington','Imperial College London','Mc Gill University','Australia National University','Shanghai Jiao Tong University','University of Oxford','University of Sydney'],
  },
  {
    interest:["law","legal studies","legal"],
    majors: ['Criminal Law', 'Civil Law', 'International Law', 'Tax Law', 'Corporate Law', 'Intellectual Property Law', 'Labor Law', 'Health Law', 'Human Rights Law', 'Environmental Law', 'Entertainment Law', 'Banking Law', 'Insurance Law', 'Real Estate Law','Constitutional Law','Administrative Law'],
      colleges: ['University of Oxford','University of Cambridge','University of California, Berkeley','University of Chicago','University of Michigan','University of Toronto','University of Sydney','University of Melbourne','University of Amsterdam','University of Tokyo','New York University','Colombia University'],
  },
  {
    interest:["music","musical","musical studies"],
    majors: ['Music Theory', 'Music History', 'Music Composition', 'Music Performance', 'Music Education', 'Music Technology', 'Music Production', 'Music Business', 'Music Industry', 'Music Journalism', 'Music Therapy', 'Music Psychology', 'Music Anthropology', 'Music Sociology', 'Music Pedagogy', 'Music Ethnomusicology', 'Music Acoustics', 'Music Cognition', 'Music Aesthetics', 'Music Philosophy'],
      colleges: ['Berklee College of Music','Juilliard School','Royal College of Music (United Kingdom)','Curtis Institute of Music','New England Conservatory','University of Southern California','Conservatoire de Paris','Conservatorio di Musica Giuseppe Verdi (Milan)'],
  },
 
];

function findColleges() {
  const input = document.getElementById("interest").value.toLowerCase();
  const resultDiv = document.getElementById("results");
  resultDiv.innerHTML = ""; 
  const match = data.find(item => item.interest.includes(input));
  if (match) {
    resultDiv.innerHTML = `
      <h2>Majors:</h2>
      <ul>${match.majors.map(m => `<li>${m}</li>`).join("")}</ul>
      <h3>Colleges:</h3>
      <ul>${match.colleges.map(c => `<li>${c}</li>`).join("")}</ul>
    `;
  } else {
    resultDiv.innerHTML = "<p>No match found. Try another interest!</p>";
  }
}
