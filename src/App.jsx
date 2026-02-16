
import React, { useState } from 'react';
// Add ArrowRight to this list below:

import './App.css';
import { Ghost, Search, RotateCcw, ArrowRight,  ChevronRight, MessageCircle } from 'lucide-react';
// 1. Import the new logo at the top
import NepaliImposterLogo from './Logo';
import gameIcon from './assets/topi.jpg'; // Example asset import, replace with actual path if needed

const categories = {
  animals: {
    name: '🐾 Animals',
    words: [
      'Lion', 'Tiger', 'Elephant', 'Giraffe', 'Zebra', 'Kangaroo', 'Penguin', 'Panda', 'Wolf', 'Fox', 'Eagle', 'Shark', 'Dolphin', 'Whale', 'Octopus', 'Gorilla', 'Chimpanzee', 'Koala', 'Bear', 'Camel', 'Hippo', 'Rhino', 'Cheetah', 'Leopard', 'Crocodile', 'Snake', 'Turtle', 'Frog', 'Bee', 'Butterfly', 'Owl', 'Parrot', 'Flamingo', 'Peacock', 'Swan', 'Duck', 'Chicken', 'Cow', 'Horse', 'Sheep', 'Goat', 'Pig', 'Dog', 'Cat', 'Rabbit', 'Hamster', 'Squirrel', 'Deer', 'Moose', 'Bison', 'Bat', 'Otter', 'Seal', 'Walrus', 'Polar Bear', 'Jellyfish', 'Seahorse', 'Starfish', 'Crab', 'Lobster', 'Scorpion', 'Spider', 'Ant', 'Mosquito', 'Fly', 'Moth', 'Snail', 'Sloth', 'Armadillo', 'Platypus', 'Lemur', 'Meerkat', 'Hyena', 'Vulture', 'Falcon', 'Raven', 'Turkey', 'Ostrich', 'Emu', 'Reindeer',
      'One-horned Rhino', 'Red Panda', 'Snow Leopard', 'Bengal Tiger', 'Wild Yak', 'Danphe', 'Ghoral', 'Jharal', 'Blue Sheep', 'Asian Elephant', 'Clouded Leopard', 'Musk Deer', 'Gharial', 'King Cobra', 'Hanuman Langur', 'Rhesus Monkey', 'Water Buffalo', 'Mongoose', 'Giant Squirrel', 'Himalayan Black Bear'
    ]
  },
  foods: {
    name: '🍕 Foods',
    words: [
      'Pizza', 'Burger', 'Pasta', 'Sushi', 'Taco', 'Steak', 'Hot Dog', 'French Fries', 'Salad', 'Sandwich', 'Omelette', 'Pancakes', 'Waffles', 'Croissant', 'Baguette', 'Lasagna', 'Ravioli', 'Spaghetti', 'Risotto', 'Paella', 'Fish and Chips', 'Burrito', 'Nachos', 'Quesadilla', 'Kebab', 'Shawarma', 'Hummus', 'Falafel', 'Donut', 'Cupcake', 'Brownie', 'Cheesecake', 'Ice Cream', 'Gelato', 'Sorbet', 'Chocolate', 'Popcorn', 'Pretzel', 'Muffin', 'Cookie', 'Apple Pie', 'Pumpkin Pie', 'Roast Chicken', 'Lobster', 'Clam Chowder', 'Ramen', 'Pho', 'Dim Sum', 'Spring Rolls', 'Dumplings', 'Fried Rice', 'Stir Fry', 'Curry', 'Naan', 'Butter Chicken', 'Tandoori Chicken', 'Goulash', 'Schnitzel', 'Tapas', 'Meze', 'Fondue', 'Quiche', 'Ratatouille', 'Crepes', 'Macarons', 'Tiramisu', 'Baklava', 'Peking Duck', 'Bibimbap', 'Kimchi', 'Sashimi', 'Tempura', 'Udon', 'Soba', 'Miso Soup', 'Green Curry', 'Pad Thai', 'Satay', 'Biryani', 'Korma',
      'Momo', 'Dal Bhat', 'Dhido', 'Selroti', 'Yomari', 'Chatpate', 'Panipuri', 'Gundruk', 'Thukpa', 'Choila', 'Kachila', 'Bara', 'Sukuti', 'Kwati', 'Aloo Tama', 'Samosa', 'Jalebi', 'Lassi', 'Chowmein', 'Laphing'
    ]
  },
  objects: {
    name: '🎒 Objects',
    words: [
      'Smartphone', 'Laptop', 'Tablet', 'Headphones', 'Camera', 'Watch', 'Glasses', 'Backpack', 'Umbrella', 'Wallet', 'Key', 'Flashlight', 'Battery', 'Charger', 'Mirror', 'Comb', 'Toothbrush', 'Soap', 'Towel', 'Pillow', 'Blanket', 'Bed', 'Chair', 'Table', 'Desk', 'Lamp', 'Clock', 'Calendar', 'Pen', 'Pencil', 'Notebook', 'Book', 'Magazine', 'Newspaper', 'Envelope', 'Stamp', 'Scissors', 'Tape', 'Glue', 'Hammer', 'Screwdriver', 'Wrench', 'Ladder', 'Broom', 'Mop', 'Bucket', 'Pot', 'Pan', 'Knife', 'Fork', 'Spoon', 'Plate', 'Bowl', 'Cup', 'Bottle', 'Fridge', 'Oven', 'Microwave', 'Toaster', 'Coffee Maker', 'Blender', 'Vacuum Cleaner', 'Iron', 'Washing Machine', 'Television', 'Speaker', 'Remote Control', 'Guitar', 'Piano', 'Drum', 'Violin', 'Ball', 'Bicycle', 'Skateboard', 'Helmet', 'Suitcase', 'Tent', 'Compass', 'Map', 'Telescope',
      'Khukuri', 'Nanglo', 'Madal', 'Sarangi', 'Karwa', 'Doko', 'Namlo', 'Dhiki', 'Janto', 'Gagri', 'Aruwa', 'Pachhyaura', 'Dhaka Topi', 'Panas', 'Hukka', 'Chulesi', 'Prayer Wheel', 'Singing Bowl', 'Prayer Flag', 'Bamboo Flute'
    ]
  },
  movies: {
    name: '🎬 Movies',
    words: [
      'Avatar', 'Titanic', 'Star Wars', 'Jurassic Park', 'Avengers', 'Iron Man', 'The Dark Knight', 'Inception', 'Interstellar', 'Gladiator', 'Braveheart', 'The Matrix', 'The Godfather', 'Pulp Fiction', 'Forrest Gump', 'The Lion King', 'Toy Story', 'Finding Nemo', 'Frozen', 'Shrek', 'Harry Potter', 'Lord of the Rings', 'The Hobbit', 'Pirates of the Caribbean', 'Spider-Man', 'Batman', 'Superman', 'Wonder Woman', 'Black Panther', 'Joker', 'Deadpool', 'The Hangover', 'Bridesmaids', 'Home Alone', 'Die Hard', 'Mission Impossible', 'James Bond', 'Fast and Furious', 'Mad Max', 'Terminator', 'Alien', 'Predator', 'Ghostbusters', 'Back to the Future', 'Indiana Jones', 'E.T.', 'Jaws', 'Psycho', 'The Shining', 'Scream', 'Halloween', 'Up', 'Coco', 'Ratatouille', 'The Incredibles', 'Monsters Inc', 'Cars', 'Moana', 'Aladdin', 'Beauty and the Beast', 'Cinderella', 'The Little Mermaid', 'Mulan', 'Tarzan', 'Hercules', 'Pocahontas', 'The Jungle Book', 'Sleeping Beauty', 'Snow White', 'Pinocchio', 'Bambi', 'Dumbo', 'Alice in Wonderland', 'Peter Pan', 'Lady and the Tramp', '101 Dalmatians', 'The Aristocats', 'Robin Hood', 'The Fox and the Hound', 'The Rescuers',
      'Loot', 'Kabaddi', 'Pashupati Prasad', 'Chhakka Panja', 'Darpan Chhaya', 'Kusume Rumal', 'Basanti', 'Jhola', 'Maitighar', 'Hami Tin Bhai', 'Kohinoor', 'Aama', 'Numafung', 'Khalo', 'Seto Surya', 'Kalo Pothi', 'Kagbeni', 'Saanghuro', 'Prem Geet', 'Jerry'
    ]
  },
  locations: {
    name: '📍 Locations',
    words: [
      'Paris', 'London', 'New York', 'Tokyo', 'Rome', 'Sydney', 'Cairo', 'Moscow', 'Beijing', 'Dubai', 'Rio de Janeiro', 'Cape Town', 'Toronto', 'Berlin', 'Madrid', 'Amsterdam', 'Venice', 'Florence', 'Athens', 'Istanbul', 'Jerusalem', 'Bangkok', 'Singapore', 'Hong Kong', 'Seoul', 'Mumbai', 'Delhi', 'Mexico City', 'Los Angeles', 'Chicago', 'San Francisco', 'Las Vegas', 'Miami', 'Washington DC', 'Barcelona', 'Prague', 'Vienna', 'Budapest', 'Stockholm', 'Oslo', 'Copenhagen', 'Helsinki', 'Zurich', 'Geneva', 'Brussels', 'Lisbon', 'Dublin', 'Edinburgh', 'Grand Canyon', 'Niagara Falls', 'Mount Everest', 'Amazon Rainforest', 'Sahara Desert', 'Great Wall of China', 'Eiffel Tower', 'Statue of Liberty', 'Colosseum', 'Taj Mahal', 'Pyramids of Giza', 'Machu Picchu', 'Great Barrier Reef', 'Stonehenge', 'Louvre Museum', 'Times Square', 'Central Park', 'Hollywood', 'Disney World', 'Vatican City', 'Santorini', 'Ibiza', 'Bali', 'Maldives', 'Bora Bora', 'Swiss Alps', 'Rocky Mountains', 'Andes', 'Antarctica', 'Galapagos Islands', 'Easter Island', 'Hawaii',
      'Kathmandu', 'Pokhara', 'Lumbini', 'Mustang', 'Annapurna', 'Chitwan', 'Nagarkot', 'Dharan', 'Namche Bazaar', 'Manang', 'Rara Lake', 'Phewa Lake', 'Pashupatinath', 'Boudhanath', 'Swayambhunath', 'Bhaktapur', 'Patan', 'Janakpur', 'Bandipur', 'Gosaikunda'
    ]
  },
  sports: {
    name: '⚽ Sports',
    words: [
      'Football', 'Basketball', 'Cricket', 'Tennis', 'Baseball', 'Rugby', 'Hockey', 'Ice Hockey', 'Golf', 'Volleyball', 'Handball', 'Table Tennis', 'Badminton', 'Squash', 'Bowling', 'Billiards', 'Snooker', 'Pool', 'Darts', 'Chess', 'Boxing', 'Wrestling', 'MMA', 'Karate', 'Judo', 'Taekwondo', 'Kung Fu', 'Fencing', 'Archery', 'Shooting', 'Swimming', 'Diving', 'Water Polo', 'Surfing', 'Sailing', 'Rowing', 'Kayaking', 'Canoeing', 'Skiing', 'Snowboarding', 'Ice Skating', 'Figure Skating', 'Cycling', 'Mountain Biking', 'BMX', 'Motocross', 'Formula 1', 'NASCAR', 'Rallying', 'Gymnastics', 'Athletics', 'Running', 'Marathon', 'High Jump', 'Long Jump', 'Pole Vault', 'Shot Put', 'Discus Throw', 'Javelin Throw', 'Weightlifting', 'Bodybuilding', 'Yoga', 'Pilates', 'Horse Racing', 'Polo', 'Equestrian', 'Bullfighting', 'Skateboarding', 'Climbing', 'Hiking', 'Triathlon', 'Ironman', 'Parkour', 'Crossfit', 'Lacrosse', 'Curling', 'Sumo', 'Softball', 'Cricket',
      'Dandi Biyo', 'Kabaddi', 'Kho Kho', 'Elephant Polo', 'Bagh Chal', 'Chungi', 'Seven Stones', 'Bhurung', 'Ludo', 'Carrom Board', 'Lukamari', 'Guchcha', 'Langdachha', 'Kut-Kut', 'Bull Fighting', 'Taekwondo', 'Karate', 'Volleyball', 'Wrestling', 'Cricket'
    ]
  },
  festivals: {
    name: '🎉 Festivals',
    words: [
      'Christmas', 'Easter', 'Halloween', 'Thanksgiving', 'New Year', 'Chinese New Year', 'Valentine Day', 'Saint Patrick Day', 'Mardi Gras', 'Carnival of Rio', 'Oktoberfest', 'Diwali', 'Eid al-Fitr', 'Eid al-Adha', 'Hanukkah', 'Passover', 'Ramadan', 'Holi', 'Lent', 'Pentecost', 'Vaisakhi', 'Songkran', 'Loy Krathong', 'Tet', 'Lunar New Year', 'Dia de los Muertos', 'Independence Day', 'Labor Day', 'Memorial Day', 'Veterans Day', 'Canada Day', 'Bastille Day', 'Boxing Day', 'Earth Day', 'Mother Day', 'Father Day', 'Christmas Eve', 'New Year Eve', 'April Fool Day', 'Pride Month', 'Glastonbury Festival', 'Coachella', 'Tomorrowland', 'Burning Man', 'Cannes Film Festival', 'Oscars', 'Grammys', 'Super Bowl', 'World Cup', 'Olympics', 'Wimbledon', 'Tour de France', 'Daytona 500', 'Kyoto Gion Matsuri', 'Sapporo Snow Festival', 'Harbin Ice Festival', 'La Tomatina', 'Running of the Bulls', 'Festa della Donna', 'Festa della Repubblica', 'Belgian National Day', 'Swiss National Day', 'German Unity Day', 'Austrian National Day', 'Greek Independence Day', 'Turkish Republic Day', 'Indian Independence Day', 'Pakistan Independence Day', 'Australia Day', 'New Zealand Day', 'Waitangi Day', 'Columbus Day', 'Thanksgiving (Canada)', 'Guy Fawkes Night', 'Poppy Day', 'Remembrance Sunday', 'Saint Nicholas Day',
      'Dashain', 'Tihar', 'Chhath', 'Lhosar', 'Shivaratri', 'Buddha Jayanti', 'Indra Jatra', 'Bisket Jatra', 'Ghode Jatra', 'Teej', 'Rishi Panchami', 'Maghe Sankranti', 'Shree Panchami', 'Janai Purnima', 'Gai Jatra', 'Krishna Janmashtami', 'Fagun Purnima', 'Ubhauli', 'Udhauli', 'Nepal Sambat'
    ]
  }
};

const App = () => {
  const [gameState, setGameState] = useState('setup');
  const [playerCount, setPlayerCount] = useState(4);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [showWord, setShowWord] = useState(false);
  const [gameData, setGameData] = useState({ secretWord: '', imposterIndex: null, categoryName: '' });

  const startGame = () => {
    let catKey = selectedCategory;
    if (selectedCategory === 'all') {
      const keys = Object.keys(categories);
      catKey = keys[Math.floor(Math.random() * keys.length)];
    }
    const cat = categories[catKey];
    const word = cat.words[Math.floor(Math.random() * cat.words.length)];
    const imposter = Math.floor(Math.random() * playerCount);

    setGameData({ secretWord: word, imposterIndex: imposter, categoryName: cat.name });
    setCurrentPlayer(0);
    setShowWord(false);
    setGameState('playing');
  };

  const nextPlayer = () => {
    if (currentPlayer < playerCount - 1) {
      setCurrentPlayer(prev => prev + 1);
      setShowWord(false);
    } else {
      setGameState('discussion');
    }
  };

 return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#262626]">
      {/* Navigation - Responsive height and padding */}
      <nav className="fixed top-0 w-full h-16 md:h-20 flex items-center justify-between px-6 md:px-12 z-50 bg-[#fdf8f3]/90 backdrop-blur-md border-b border-black/5">
        <div className="font-black text-lg md:text-xl tracking-tighter uppercase">DHOKEBAAZ</div>
        <button 
          onClick={() => setGameState('setup')} 
          className="bg-[#e4a4bd] px-4 py-2 md:px-8 md:py-3 rounded-full utility-label text-[8px] md:text-[10px]">
          Reset
        </button>
      </nav>

      <main className="pt-16 md:pt-20">
        {gameState === 'setup' && (
          <section className="min-h-[calc(100vh-80px)] grid grid-cols-12 gap-6 md:gap-8 items-center px-6 md:px-12 py-10">
            <div className="col-span-12 lg:col-span-7">
              <h1 className="mb-6 md:mb-8">
                WHO IS THE <br />
                <span className="text-[#e4a4bd] italic font-light lowercase">dhokebaaz?</span>
              </h1>
              <div className="flex items-center gap-4 group cursor-pointer mb-10 lg:mb-0" onClick={startGame}>
                <span className="text-xl md:text-2xl border-b-2 border-[#e4a4bd] pb-1 font-bold">START EXPEDITION</span>
                <ArrowRight className="text-[#e4a4bd] group-hover:translate-x-2 transition-transform" />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-5 relative">
              <div className="bg-[#f5f0eb] p-6 md:p-10 rounded-[24px] border border-black/5">
                <div className="space-y-8 md:space-y-10">
                  <div>
                    <p className="utility-label mb-2">Travelers</p>
                    <div className="flex items-center justify-between border-b border-black/10 pb-2">
                      <button onClick={() => setPlayerCount(Math.max(3, playerCount - 1))} className="text-3xl">-</button>
                      <span className="text-5xl md:text-7xl font-black">{playerCount}</span>
                      <button onClick={() => setPlayerCount(Math.min(20, playerCount + 1))} className="text-3xl">+</button>
                    </div>
                  </div>

                  <div>
                    <p className="utility-label mb-2">Destination</p>
                    <div className="grid grid-cols-2 gap-2 h-40 overflow-y-auto pr-2 custom-scrollbar">
                      <button 
                        onClick={() => setSelectedCategory('all')} 
                        className={`p-3 text-xs font-bold transition-all ${selectedCategory === 'all' ? 'bg-[#e4a4bd]' : 'bg-white'}`}>
                        ALL RANDOM
                      </button>
                      {Object.entries(categories).map(([key, cat]) => (
                        <button 
                          key={key} 
                          onClick={() => setSelectedCategory(key)} 
                          className={`p-3 text-xs font-bold transition-all ${selectedCategory === key ? 'bg-[#e4a4bd]' : 'bg-white'}`}>
                          {cat.name.toUpperCase()}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge - Scaled down for mobile */}
              <div className="absolute -top-6 -right-4 md:-top-12 md:-right-12 w-24 h-24 md:w-40 md:h-40 bg-[#e4a4bd] rounded-full flex flex-col items-center justify-center animate-[bounce-slow_4s_ease-in-out_infinite] shadow-xl z-10">
                <span className="text-2xl md:text-4xl font-light italic">01</span>
                <span className="utility-label text-[6px] md:text-[8px]">Ranked</span>
              </div>
            </div>
          </section>
        )}

        {gameState === 'playing' && (
          <section className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-6 text-center py-10">
            <p className="utility-label text-[#e4a4bd] mb-2">Explorer {currentPlayer + 1} / {playerCount}</p>
            <h2 className="text-4xl md:text-7xl mb-8 font-black uppercase tracking-tighter">Identity</h2>
            
            <div className="w-full max-w-lg aspect-[4/5] md:aspect-[16/9] bg-[#f5f0eb] rounded-[24px] flex items-center justify-center overflow-hidden border border-black/5 relative">
              {!showWord ? (
                <button 
                  onClick={() => setShowWord(true)} 
                  className="w-full h-full bg-slate-200 flex flex-col items-center justify-center grayscale-reveal">
                  <Search size={40} strokeWidth={1} />
                  <p className="utility-label mt-4">Reveal Ticket</p>
                </button>
              ) : (
                <div className="px-6">
                   <p className="utility-label mb-2 opacity-50">Confidential Word:</p>
                   <div className="text-4xl md:text-6xl font-black uppercase tracking-tight break-words">
                    {currentPlayer === gameData.imposterIndex ? 'dhokebaaz' : gameData.secretWord}
                   </div>
                   <button 
                    onClick={nextPlayer} 
                    className="mt-8 bg-[#262626] text-white px-8 py-4 rounded-full utility-label hover:bg-[#e4a4bd] hover:text-[#262626] transition-all w-full">
                    I Understand
                   </button>
                </div>
              )}
            </div>
          </section>
        )}

        {gameState === 'discussion' && (
          <section className="min-h-[calc(100vh-80px)] flex flex-col lg:grid lg:grid-cols-12 border-t border-black/10">
            <div className="lg:col-span-6 p-8 md:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-black/10">
              <h2 className="text-6xl md:text-[8vw] mb-4 italic font-light text-[#e4a4bd] lowercase">discussion</h2>
              <p className="text-lg md:text-2xl leading-relaxed opacity-70">
                The itinerary is set. Describe your assignment. Find the 
                <span className="font-bold text-[#262626] uppercase mx-2">interloper</span>.
              </p>
            </div>
            <div className="lg:col-span-6 p-12 md:p-20 flex items-center justify-center bg-[#f5f0eb]">
              <button 
                onClick={() => setGameState('voting')} 
                className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-[#262626] text-[#fdf8f3] flex flex-col items-center justify-center active:scale-90 transition-transform">
                <span className="utility-label">Reveal</span>
                <span className="text-xl md:text-2xl font-black">RESULT</span>
              </button>
            </div>
          </section>
        )}

        {gameState === 'voting' && (
          <section className="min-h-[calc(100vh-80px)] px-6 md:px-12 flex flex-col items-center justify-center py-10">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                <div className="p-8 md:p-16 bg-[#e4a4bd] rounded-[24px]">
                  <p className="utility-label mb-2">The Word</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase">{gameData.secretWord}</h3>
                </div>
                <div className="p-8 md:p-16 bg-[#262626] text-[#fdf8f3] rounded-[24px]">
                  <p className="utility-label mb-2 text-[#e4a4bd]">The Imposter</p>
                  <h3 className="text-4xl md:text-6xl font-black uppercase">Player {gameData.imposterIndex + 1}</h3>
                </div>
             </div>
             <button 
              onClick={() => setGameState('setup')} 
              className="mt-12 flex items-center gap-4 group uppercase font-bold border-b-2 border-black pb-1">
                New Game <RotateCcw size={18} />
             </button>
          </section>
        )}
      </main>

      <footer className="bg-[#f5f0eb] p-6 md:p-12 border-t border-black/5 mt-auto">
        <div className="font-black text-xl mb-2">DHOKEBAAZ.</div>
        <p className="text-[10px] utility-label opacity-40">© 2026 Premium Social Systems</p>
      </footer>
    </div>
  );
};

export default App;