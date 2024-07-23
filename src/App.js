import './App.css';
import { Routes, Route } from "react-router-dom";
import Homepage from './tabs/homepage.js'
import Experience from './tabs/experience.js'
import Projects from './tabs/projects.js'
import Contact from './tabs/contact.js'
import CustomLanguage from './tabs/projects/custom-language.js';
import BudgetIt from './tabs/projects/budgetit.js';
import TraitDataCleaning from './tabs/projects/trait-data-cleaning.js';
import CrushingCollege from './tabs/projects/crushing-college.js';

function App() {
  return (
    <>
      <Routes>
      <Route path ="/" element={<Homepage />} />
      <Route path ="/experience" element={<Experience />} />
      <Route path ="/projects" element={<Projects />} />
      <Route path ="/projects/custom-language" element={<CustomLanguage />} />
      <Route path ="/projects/budgetit" element={<BudgetIt />} />
      <Route path ="/projects/trait-data-cleaning" element={<TraitDataCleaning />} />
      <Route path ="/projects/crushing-college" element={<CrushingCollege />} />
      <Route path ="/contact" element={<Contact />} />
      </Routes>
  </>
    );
}

export default App;
