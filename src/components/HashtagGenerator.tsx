
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const HashtagGenerator = () => {
  const [name, setName] = useState('');
  const [relationship, setRelationship] = useState('');
  const [hashtag, setHashtag] = useState('');
  const [showHashtag, setShowHashtag] = useState(false);
  
  const generateHashtag = () => {
    if (!name || !relationship) return;
    
    const hashtags = [
      `#${name}At${relationshipToPrefix(relationship)}AnantYuktaWedding`,
      `#AnantYukta${relationshipToPrefix(relationship)}${name}`,
      `#${name}Celebrates${relationshipToPrefix(relationship)}AnantYukta`,
      `#AnantYuktaWith${name}`,
      `#${relationshipToPrefix(relationship)}${name}AtAnantYuktaWedding`
    ];
    
    // Select a random hashtag
    const randomHashtag = hashtags[Math.floor(Math.random() * hashtags.length)];
    setHashtag(randomHashtag);
    setShowHashtag(true);
  };
  
  const relationshipToPrefix = (rel: string) => {
    const relationshipMap: {[key: string]: string} = {
      'Friend': 'Friend',
      'Best Friend': 'BFF',
      'Brother': 'Bro',
      'Sister': 'Sis',
      'Uncle': 'Uncle',
      'Aunt': 'Aunt',
      'Cousin': 'Cuz',
      'Colleague': 'Colleague',
      'Family': 'Fam',
      'Parent': 'Parent',
      'Neighbor': 'Neighbor',
      'Other': ''
    };
    
    return relationshipMap[rel] || rel;
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(hashtag);
  };
  
  const relationships = [
    'Friend', 'Best Friend', 'Brother', 'Sister', 'Uncle', 
    'Aunt', 'Cousin', 'Colleague', 'Family', 'Parent', 'Neighbor', 'Other'
  ];
  
  return (
    <motion.section 
      className="py-12 px-4 text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-2xl mx-auto bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-lg border border-wedding-gold/10 invitation-card">
        <h2 className="font-serif text-3xl mb-4 text-gray-800">Create Your Wedding Hashtag</h2>
        <div className="divider"></div>
        <p className="text-gray-700 mb-6">
          Generate a unique hashtag to use when sharing photos and memories from our special day
        </p>
        
        <div className="space-y-4 max-w-md mx-auto">
          <div className="flex flex-col gap-2 text-left">
            <label className="text-gray-700">Your Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
              placeholder="Enter your name"
            />
          </div>
          
          <div className="flex flex-col gap-2 text-left">
            <label className="text-gray-700">Your Relationship to the Couple</label>
            <select 
              value={relationship} 
              onChange={(e) => setRelationship(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-wedding-gold/50"
            >
              <option value="">Select relationship</option>
              {relationships.map((rel) => (
                <option key={rel} value={rel}>{rel}</option>
              ))}
            </select>
          </div>
          
          <motion.button 
            onClick={generateHashtag}
            className="w-full py-3 bg-wedding-gold/90 hover:bg-wedding-gold text-white rounded-md shadow-md mt-4"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Generate My Hashtag
          </motion.button>
        </div>
        
        {showHashtag && (
          <motion.div 
            className="mt-8 p-4 bg-wedding-gold/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl mb-2">Your Personalized Hashtag:</h3>
            <div className="flex items-center justify-center gap-4">
              <span className="font-serif text-xl text-wedding-gold">{hashtag}</span>
              <motion.button 
                onClick={copyToClipboard}
                className="text-sm px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Copy
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default HashtagGenerator;
