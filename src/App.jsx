import React, { useState } from 'react';
import './App.css';
import { RotateCcw, ArrowRight, Eye } from 'lucide-react';

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
      'Football', 'Basketball', 'Cricket', 'Tennis', 'Baseball', 'Rugby', 'Hockey', 'Ice Hockey', 'Golf', 'Volleyball', 'Handball', 'Table Tennis', 'Badminton', 'Squash', 'Bowling', 'Billiards', 'Snooker', 'Pool', 'Darts', 'Chess', 'Boxing', 'Wrestling', 'MMA', 'Karate', 'Judo', 'Taekwondo', 'Kung Fu', 'Fencing', 'Archery', 'Shooting', 'Swimming', 'Diving', 'Water Polo', 'Surfing', 'Sailing', 'Rowing', 'Kayaking', 'Canoeing', 'Skiing', 'Snowboarding', 'Ice Skating', 'Figure Skating', 'Cycling', 'Mountain Biking', 'BMX', 'Motocross', 'Formula 1', 'NASCAR', 'Rallying', 'Gymnastics', 'Athletics', 'Running', 'Marathon', 'High Jump', 'Long Jump', 'Pole Vault', 'Shot Put', 'Discus Throw', 'Javelin Throw', 'Weightlifting', 'Bodybuilding', 'Yoga', 'Pilates', 'Horse Racing', 'Polo', 'Equestrian', 'Skateboarding', 'Climbing', 'Hiking', 'Triathlon', 'Ironman', 'Parkour', 'Crossfit', 'Lacrosse', 'Curling', 'Sumo', 'Softball',
      'Dandi Biyo', 'Kabaddi', 'Kho Kho', 'Elephant Polo', 'Bagh Chal', 'Chungi', 'Seven Stones', 'Bhurung', 'Ludo', 'Carrom Board', 'Lukamari', 'Guchcha', 'Langdachha', 'Kut-Kut'
    ]
  },
  festivals: {
    name: '🎉 Festivals',
    words: [
      'Christmas', 'Easter', 'Halloween', 'Thanksgiving', 'New Year', 'Chinese New Year', 'Valentine Day', 'Saint Patrick Day', 'Mardi Gras', 'Carnival of Rio', 'Oktoberfest', 'Diwali', 'Eid al-Fitr', 'Eid al-Adha', 'Hanukkah', 'Passover', 'Ramadan', 'Holi', 'Lent', 'Pentecost', 'Vaisakhi', 'Songkran', 'Loy Krathong', 'Tet', 'Lunar New Year', 'Dia de los Muertos', 'Independence Day', 'Labor Day', 'Memorial Day', 'Veterans Day', 'Canada Day', 'Bastille Day', 'Boxing Day', 'Earth Day', 'Mother Day', 'Father Day', 'Christmas Eve', 'New Year Eve', 'April Fool Day', 'Pride Month',
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

  const isImposter = currentPlayer === gameData.imposterIndex;

  return (
    <div className="min-h-screen bg-[#fdf8f3] text-[#262626] flex flex-col">

      {/* ── NAV ── */}
      <nav className="fixed top-0 w-full h-14 md:h-20 flex items-center justify-between px-5 md:px-12 z-50 bg-[#fdf8f3]/90 backdrop-blur-md border-b border-black/5">
        <div className="font-black text-base md:text-xl tracking-tighter uppercase">धोकेबाज 🎭</div>
        <button
          onClick={() => setGameState('setup')}
          className="bg-[#e4a4bd] px-4 py-2 rounded-full font-black text-xs">
          Reset
        </button>
      </nav>

      <main className="pt-14 md:pt-20 flex-1">

        {/* ── SETUP ── */}
        {gameState === 'setup' && (
          <section className="flex flex-col justify-center px-5 md:px-12 py-6 md:py-10">

            {/* Heading + Badge */}
            <div className="relative mb-4 md:mb-6">
              <h1 className="text-[2.8rem] md:text-[clamp(3.5rem,12vw,10rem)] leading-[0.85] font-black uppercase">
                को होला<br />
                <span className="text-[#e4a4bd] italic font-light">धोकेबाज?</span>
              </h1>
              {/* 01 Ranked Badge */}
              <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-[#e4a4bd] rounded-full flex flex-col items-center justify-center animate-[bounce-slow_4s_ease-in-out_infinite] shadow-lg">
                <span className="text-lg md:text-2xl font-light italic leading-none">01</span>
                <span className="text-[5px] md:text-[7px] font-black tracking-widest uppercase">Ranked</span>
              </div>
            </div>

            {/* Players row */}
            <div className="bg-[#f5f0eb] rounded-2xl px-5 py-3 md:py-4 flex items-center justify-between mb-3 md:mb-4">
              <span className="font-black text-base md:text-lg uppercase tracking-wide">Players</span>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setPlayerCount(Math.max(3, playerCount - 1))}
                  className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-full font-black text-xl flex items-center justify-center shadow-sm active:scale-90 transition-transform">
                  −
                </button>
                <span className="text-3xl md:text-5xl font-black w-10 text-center">{playerCount}</span>
                <button
                  onClick={() => setPlayerCount(Math.min(20, playerCount + 1))}
                  className="w-9 h-9 md:w-11 md:h-11 bg-white rounded-full font-black text-xl flex items-center justify-center shadow-sm active:scale-90 transition-transform">
                  +
                </button>
              </div>
            </div>

            {/* Categories label */}
            <p className="font-black text-sm md:text-base uppercase tracking-widest mb-2 opacity-50">Categories</p>

            {/* Category grid */}
            <div className="mb-4 md:mb-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`p-3 md:p-4 text-sm md:text-base font-black rounded-xl transition-all active:scale-95 ${selectedCategory === 'all' ? 'bg-[#e4a4bd] text-[#262626]' : 'bg-[#f5f0eb]'}`}>
                  🎲 ALL
                </button>
                {Object.entries(categories).map(([key, cat]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedCategory(key)}
                    className={`p-3 md:p-4 text-sm md:text-base font-black rounded-xl transition-all active:scale-95 ${selectedCategory === key ? 'bg-[#e4a4bd] text-[#262626]' : 'bg-[#f5f0eb]'}`}>
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>

            {/* START GAME */}
            <button
              onClick={startGame}
              className="w-full bg-[#262626] text-[#fdf8f3] py-4 md:py-5 rounded-2xl font-black text-lg md:text-xl flex items-center justify-center gap-3 active:scale-95 transition-transform hover:bg-[#e4a4bd] hover:text-[#262626]">
              START GAME <ArrowRight size={22} />
            </button>

          </section>
        )}

        {/* ── PLAYING ── */}
        {gameState === 'playing' && (
          <section className="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-5 py-6 text-center">

            {/* Progress dots */}
            <div className="flex gap-2 mb-5 flex-wrap justify-center">
              {Array.from({ length: playerCount }).map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full transition-all ${i < currentPlayer ? 'w-3 h-3 bg-[#e4a4bd]' : i === currentPlayer ? 'w-4 h-4 bg-[#262626]' : 'w-3 h-3 bg-black/10'}`}
                />
              ))}
            </div>

            {/* Player label — bigger */}
            <p className="font-black text-2xl md:text-3xl text-[#e4a4bd] mb-2 uppercase tracking-widest">
              Player {currentPlayer + 1} of {playerCount}
            </p>

            {/* Category pill — bigger */}
            <div className="flex items-center gap-2 mb-5 bg-[#f5f0eb] px-5 py-3 rounded-full border border-black/5">
              <span className="text-2xl">{gameData.categoryName.split(' ')[0]}</span>
              <span className="font-black text-lg md:text-xl">
                {gameData.categoryName.replace(/^\S+\s*/, '')}
              </span>
            </div>

            {/* Card */}
            <div className="w-full max-w-sm md:max-w-lg bg-[#f5f0eb] rounded-[24px] overflow-hidden border border-black/5">
              {!showWord ? (
                <button
                  onClick={() => setShowWord(true)}
                  className="w-full py-20 md:py-28 bg-slate-200 flex flex-col items-center justify-center grayscale-reveal gap-3 active:scale-95 transition-transform">
                  <Eye size={44} strokeWidth={1.5} />
                  <p className="font-black text-xl md:text-2xl">Tap to Reveal</p>
                  <p className="text-base opacity-50">Make sure no one else is watching!</p>
                </button>
              ) : isImposter ? (
                /* IMPOSTER */
                <div className="p-8 flex flex-col items-center bg-[#262626] text-[#fdf8f3]">
                  <div className="text-6xl mb-3 animate-bounce">🤫</div>
                  <p className="font-black text-sm tracking-widest uppercase opacity-40 mb-3">Ssshhh... Secret!</p>
                  <div className="text-4xl md:text-5xl font-black text-[#e4a4bd] mb-1">IMPOSTER</div>
                  <div className="text-2xl md:text-3xl font-black mb-1">तिमी हौ</div>
                  <div className="text-3xl md:text-4xl font-black text-[#e4a4bd] mb-2">धोकेबाज! 😈</div>
                  <p className="text-base opacity-40 mb-6">Act normal. Blend in. Don't get caught!</p>
                  <button
                    onClick={nextPlayer}
                    className="bg-[#e4a4bd] text-[#262626] px-8 py-4 rounded-full font-black text-lg hover:opacity-80 transition-all w-full active:scale-95">
                    बुझें! (Got it!)
                  </button>
                </div>
              ) : (
                /* NORMAL PLAYER */
                <div className="p-8 flex flex-col items-center">
                  <div className="text-4xl mb-3">🤫</div>
                  <p className="font-black text-lg md:text-xl opacity-50 mb-2">तिम्रो शब्द हो:</p>
                  <div className="text-4xl md:text-6xl font-black uppercase tracking-tight break-words text-center my-2">
                    {gameData.secretWord}
                  </div>
                  <p className="text-base opacity-40 mt-2 mb-6">Remember it. Don't say it out loud!</p>
                  <button
                    onClick={nextPlayer}
                    className="bg-[#262626] text-white px-8 py-4 rounded-full font-black text-lg hover:bg-[#e4a4bd] hover:text-[#262626] transition-all w-full active:scale-95">
                    बुझें! (Got it!)
                  </button>
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── DISCUSSION ── */}
        {gameState === 'discussion' && (
          <section className="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-80px)] flex flex-col items-center justify-center px-5 py-10 text-center">
            <div className="text-5xl mb-4">🕵️</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-2">छलफल गरौं!</h2>
            <p className="text-2xl md:text-3xl font-black text-[#e4a4bd] mb-6">Discussion Time!</p>

            <div className="bg-[#f5f0eb] rounded-[24px] p-6 md:p-10 max-w-lg w-full mb-6 text-left space-y-4">
              <p className="font-black text-sm uppercase tracking-widest opacity-50 mb-2">HOW TO PLAY</p>
              {[
                { icon: '💬', text: <>Each player describes the word — <span className="font-black">without saying it directly!</span></> },
                { icon: '🎭', text: <><span className="font-black text-[#e4a4bd]">धोकेबाज</span> doesn't know the word — they must bluff and blend in!</> },
                { icon: '🗳️', text: <>After everyone speaks, <span className="font-black">vote</span> on who you think is the धोकेबाज!</> },
                { icon: '⚠️', text: <>Category was: <span className="font-black">{gameData.categoryName}</span></> },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="text-base md:text-lg leading-snug">{item.text}</p>
                </div>
              ))}
            </div>

            <button
              onClick={() => setGameState('voting')}
              className="bg-[#262626] text-[#fdf8f3] px-10 py-5 rounded-2xl font-black text-xl hover:bg-[#e4a4bd] hover:text-[#262626] transition-all active:scale-95">
              🎯 Reveal धोकेबाज!
            </button>
          </section>
        )}

        {/* ── RESULT ── */}
        {gameState === 'voting' && (
          <section className="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-80px)] px-5 md:px-12 flex flex-col items-center justify-center py-10 text-center">
            <div className="text-5xl mb-3">🎉</div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">नतिजा!</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl mb-8">
              <div className="p-8 md:p-12 bg-[#e4a4bd] rounded-[24px] text-left">
                <p className="font-black text-sm uppercase tracking-widest mb-2 opacity-60">🤫 Secret Word Was</p>
                <h3 className="text-4xl md:text-5xl font-black uppercase">{gameData.secretWord}</h3>
                <p className="text-base mt-2 opacity-60 font-bold">{gameData.categoryName}</p>
              </div>
              <div className="p-8 md:p-12 bg-[#262626] text-[#fdf8f3] rounded-[24px] text-left">
                <p className="font-black text-sm uppercase tracking-widest mb-2 text-[#e4a4bd]">😈 धोकेबाज थियो</p>
                <h3 className="text-4xl md:text-5xl font-black uppercase">Player {gameData.imposterIndex + 1}</h3>
                <p className="text-base mt-2 opacity-40 font-bold">थियो धोकेबाज!</p>
              </div>
            </div>

            <button
              onClick={() => { setGameState('setup'); setSelectedCategory('all'); }}
              className="flex items-center gap-3 bg-[#e4a4bd] px-8 py-4 rounded-2xl font-black text-lg hover:scale-105 transition-transform active:scale-95">
              <RotateCcw size={20} /> फेरि खेलौं! (Play Again)
            </button>
          </section>
        )}
      </main>

      <footer className="bg-[#f5f0eb] p-5 md:p-8 border-t border-black/5">
        <div className="font-black text-lg mb-1">धोकेबाज.</div>
        <p className="text-xs font-bold opacity-40 uppercase tracking-widest">© 2026 Premium Social Systems</p>
      </footer>
    </div>
  );
};

export default App;