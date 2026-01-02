import React, { useState } from 'react';
import { Ghost, Search, RotateCcw, ChevronRight, MessageCircle, AlertCircle } from 'lucide-react';

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
      'Loot', 'Kabaddi', 'Pashupati Prasad', 'Chhakka Panja', 'Darpan Chhaya', 'Kusume Rumal', 'Basanti', 'Jhola', 'Maitighar', 'Hami Tin Bhai', 'Kohinoor', 'Aama', 'Numafung', 'Khalo', 'Seto Surya', 'Kilo Pothi', 'Kagbeni', 'Saanghuro', 'Prem Geet', 'Jerry'
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
      // Go to discussion first, not voting!
      setGameState('discussion');
    }
  };

  return (
    <div className="min-h-screen p-4 flex items-center justify-center font-bold text-slate-800 bg-gradient-to-br from-slate-900 via-slate-800 to-black">
      <div className="w-full max-w-md relative">
        <div className="p-8 space-y-8 bg-white rounded-[2.5rem] shadow-2xl border-4 border-slate-200">
          
          {gameState === 'setup' && (
            <div className="space-y-8 animate-in zoom-in duration-300">
              <div className="text-center">
                <div className="bg-gradient-to-tr from-yellow-400 to-orange-400 w-20 h-20 rounded-3xl mx-auto flex items-center justify-center shadow-lg rotate-12 mb-4">
                  <Ghost className="text-white" size={40} />
                </div>
                <h1 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">को होला चोर?</h1>
                <p className="text-slate-400 text-sm mt-1 uppercase tracking-widest font-bold">Imposter Game</p>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-6 rounded-3xl border-2 border-slate-100">
                  <label className="text-xs uppercase tracking-widest text-slate-500 mb-2 block text-center font-bold">Total Players</label>
                  <div className="flex items-center justify-around">
                    <button onClick={() => setPlayerCount(Math.max(3, playerCount - 1))} className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl hover:bg-red-50">-</button>
                    <span className="text-4xl font-black text-indigo-600">{playerCount}</span>
                    <button onClick={() => setPlayerCount(Math.min(20, playerCount + 1))} className="w-12 h-12 rounded-2xl bg-white shadow-md flex items-center justify-center text-2xl hover:bg-green-50">+</button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs uppercase tracking-widest text-slate-500 ml-2 block font-bold">Category</label>
                  <div className="grid grid-cols-2 gap-2 h-48 overflow-y-auto pr-1 custom-scrollbar">
                    <button onClick={() => setSelectedCategory('all')} className={`p-3 rounded-2xl text-xs transition-all border-2 ${selectedCategory === 'all' ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-95' : 'bg-white text-slate-600 border-slate-100'}`}>🌈 All Random</button>
                    {Object.entries(categories).map(([key, cat]) => (
                      <button key={key} onClick={() => setSelectedCategory(key)} className={`p-3 rounded-2xl text-xs transition-all border-2 ${selectedCategory === key ? 'bg-indigo-600 text-white border-indigo-600 shadow-md scale-95' : 'bg-white text-slate-600 border-slate-100'}`}>{cat.name}</button>
                    ))}
                  </div>
                </div>
              </div>

              <button onClick={startGame} className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 p-5 rounded-3xl text-white text-xl font-black shadow-xl hover:brightness-110 active:scale-95 transition-all">START GAME! 🚀</button>
            </div>
          )}

          {gameState === 'playing' && (
            <div className="text-center space-y-8 animate-in slide-in-from-right duration-300">
              <div className="space-y-2">
                <div className="inline-block px-6 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-black tracking-tighter">PLAYER {currentPlayer + 1} OF {playerCount}</div>
                <p className="text-slate-400 text-xs uppercase tracking-widest font-bold">Category: {gameData.categoryName}</p>
              </div>

              {!showWord ? (
                <div className="py-4">
                  <button onClick={() => setShowWord(true)} className="w-48 h-64 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-[2.5rem] mx-auto flex flex-col items-center justify-center shadow-2xl border-8 border-white group active:scale-95 transition-transform">
                    <Search size={64} className="text-white" />
                    <p className="text-white text-xs mt-4 opacity-70 font-black">TAP TO REVEAL</p>
                  </button>
                </div>
              ) : (
                <div className="space-y-8 animate-in flip-in-y duration-500">
                  <div className={`p-10 rounded-[2.5rem] border-4 border-dashed relative ${currentPlayer === gameData.imposterIndex ? 'bg-red-50 border-red-400' : 'bg-yellow-50 border-yellow-400'}`}>
                     <span className={`absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs text-white font-bold ${currentPlayer === gameData.imposterIndex ? 'bg-red-500' : 'bg-yellow-500'}`}>YOUR CARD</span>
                     <div className={`text-4xl font-black tracking-tighter ${currentPlayer === gameData.imposterIndex ? 'text-red-600' : 'text-indigo-800'}`}>
                       {currentPlayer === gameData.imposterIndex ? 'धोकेबाज हौ तिमी! 🕵️\n(IMPOSTER)' : gameData.secretWord}
                     </div>
                  </div>
                  <button onClick={nextPlayer} className="w-full bg-slate-800 text-white p-5 rounded-3xl text-xl font-black flex items-center justify-center gap-2 active:scale-95 transition-transform">I UNDERSTAND <ChevronRight size={24} /></button>
                </div>
              )}
            </div>
          )}

          {gameState === 'discussion' && (
            <div className="text-center space-y-8 animate-in zoom-in duration-500">
              <div className="bg-indigo-100 w-24 h-24 rounded-full mx-auto flex items-center justify-center">
                <MessageCircle className="text-indigo-600" size={48} />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-black text-slate-800 italic">Discussion Time! 🗣️</h2>
                <p className="text-slate-500 text-sm">
                  Everyone has seen their word. Put the phone in the middle and start describing! 
                  When you've found the <span className="text-red-500">dhokebazz</span>, click below.
                </p>
              </div>

              <button 
                onClick={() => setGameState('voting')} 
                className="w-full bg-gradient-to-r from-red-500 to-pink-600 p-5 rounded-3xl text-white text-xl font-black shadow-xl active:scale-95 transition-transform"
              >
                REVEAL RESULT! 🕵️‍♂️
              </button>
            </div>
          )}

          {gameState === 'voting' && (
            <div className="text-center space-y-8 animate-in zoom-in duration-500">
              <div className="text-6xl animate-bounce">🎭</div>
              <h2 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600">Game Over!</h2>
              
              <div className="space-y-3">
                <div className="p-6 bg-green-50 rounded-3xl border-2 border-green-100 text-left">
                  <p className="text-xs text-green-600 uppercase mb-1 font-bold">The Secret Word Was:</p>
                  <p className="text-3xl font-black text-green-700 uppercase tracking-tight">{gameData.secretWord}</p>
                </div>
                <div className="p-6 bg-red-50 rounded-3xl border-2 border-red-100 text-left">
                  <p className="text-xs text-red-600 uppercase mb-1 font-bold">The Dhokebazz Was:</p>
                  <p className="text-3xl font-black text-red-700">Player {gameData.imposterIndex + 1}</p>
                </div>
              </div>

              <button onClick={() => setGameState('setup')} className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 p-5 rounded-3xl text-white text-xl font-black flex items-center justify-center gap-2 active:scale-95 transition-transform">PLAY AGAIN <RotateCcw size={24} /></button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;