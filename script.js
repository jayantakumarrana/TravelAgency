const menuButton = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (menuButton && navLinks) {
  menuButton.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();

const heroSlides = document.querySelectorAll('.hero-slide');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (heroSlides.length > 1 && !reducedMotion) {
  let activeSlide = 0;

  window.setInterval(() => {
    heroSlides[activeSlide].classList.remove('is-active');
    activeSlide = (activeSlide + 1) % heroSlides.length;
    heroSlides[activeSlide].classList.add('is-active');
  }, 5000);
}

const translations = {
  en: {
    'meta.title': 'TravelGo | Explore the World With Us',
    'meta.description': 'TravelGo — discover destinations and find the right vehicle for your next adventure.',
    'nav.label': 'Main navigation', 'nav.toggle': 'Toggle navigation',
    'nav.vehicles': 'Vehicles', 'nav.destinations': 'Destinations', 'nav.reviews': 'Reviews',
    'nav.contact': 'Contact', 'nav.cta': 'Find your ride', 'language.label': 'Choose language',
    'hero.eyebrow': 'YOUR NEXT ADVENTURE AWAITS', 'hero.heading.first': 'Explore The World',
    'hero.heading.second': 'With Us',
    'hero.copy.first': 'Discover amazing destinations, create unforgettable',
    'hero.copy.second': 'memories and experience the beauty of our planet.',
    'hero.cta': 'Explore destinations', 'benefits.label': 'Why travel with us',
    'benefits.price.title': 'Best Price Guarantee', 'benefits.price.copy': 'Great value for your next journey.',
    'benefits.safe.title': 'Safe & Secure', 'benefits.safe.copy': 'Your safety is our top priority.',
    'benefits.support.title': '24/7 Support', 'benefits.support.copy': "We're here whenever you need us.",
    'benefits.experience.title': 'Top Rated Experiences', 'benefits.experience.copy': 'Loved by travelers around the world.',
    'vehicles.eyebrow': 'GET THERE YOUR WAY', 'vehicles.title': 'Our Vehicles',
    'vehicles.subtitle': 'Choose your ride for a comfortable and memorable journey.',
    'vehicles.link': 'Ask about a vehicle',
    'vehicle.sedan.title': 'Sedan', 'vehicle.sedan.copy': 'Comfortable for small groups',
    'vehicle.sedan.alt': 'Comfortable sedan', 'vehicle.sedan.action': 'Ask about sedan',
    'vehicle.suv.title': 'SUV', 'vehicle.suv.copy': 'More space, more comfort',
    'vehicle.suv.alt': 'SUV ready for a road trip', 'vehicle.suv.action': 'Ask about SUV',
    'vehicle.tempo.title': 'Tempo Traveller', 'vehicle.tempo.copy': 'Perfect for group trips',
    'vehicle.tempo.alt': 'Passenger van for group travel', 'vehicle.tempo.action': 'Ask about Tempo Traveller',
    'vehicle.coach.title': 'Luxury Coach', 'vehicle.coach.copy': 'Premium travel experience',
    'vehicle.coach.alt': 'Luxury coach for group journeys', 'vehicle.coach.action': 'Ask about luxury coach',
    'vehicle.jeep.title': 'Jeep', 'vehicle.jeep.copy': 'For adventurous souls',
    'vehicle.jeep.alt': 'Jeep for adventurous trips', 'vehicle.jeep.action': 'Ask about Jeep',
    'destinations.eyebrow': 'PLACES THAT STAY WITH YOU',
    'destinations.title': 'Explore Our Top Destinations', 'destinations.link': 'Plan your trip',
    'destination.bali.name': 'Bali, Indonesia', 'destination.bali.copy': 'Sun, Sand & Serenity',
    'destination.paris.name': 'Paris, France', 'destination.paris.copy': 'The City of Love',
    'destination.switzerland.name': 'Switzerland', 'destination.switzerland.copy': 'Alps & Adventures',
    'destination.santorini.name': 'Santorini, Greece', 'destination.santorini.copy': 'Island Paradise',
    'destination.dubai.name': 'Dubai, UAE', 'destination.dubai.copy': 'Luxury & Modernity',
    'reviews.eyebrow': 'TRAVELER REVIEWS', 'reviews.title': 'What Our Customers Say',
    'reviews.subtitle': 'Real stories from travelers who went a little further.',
    'reviews.rating': '5 out of 5 stars',
    'review.sarah.name': 'Sarah Johnson',
    'review.sarah.quote': '“Amazing experience! The trip was well organized and everything was perfect. Highly recommend TravelGo!”',
    'review.michael.name': 'Michael Brown',
    'review.michael.quote': "“Best travel agency I've ever used. Great service, amazing destinations, and very professional team.”",
    'review.ava.name': 'Ava Patel',
    'review.ava.quote': '“Our family trip was effortless from start to finish. The destinations were beautiful and the service was wonderful.”',
    'review.david.name': 'David Wilson',
    'review.david.quote': '“Friendly team, comfortable rides, and an unforgettable itinerary. I would happily book with TravelGo again.”',
    'footer.tagline': 'Explore · Discover · Repeat',
    'footer.note': 'Every journey begins with a little curiosity.',
    'footer.address.title': 'Our Address', 'footer.directions': 'Get directions ↗',
    'footer.contact.title': 'Contact Us', 'footer.hours': 'Mon–Sat · 9:00 AM–7:00 PM',
    'footer.connect.title': 'Connect With Us', 'footer.chat': 'Chat with our team',
    'social.youtube': 'YouTube',
    'footer.copyright': 'TravelGo. All rights reserved.',
    'footer.closing': 'Made for your next great journey.'
  },
  hi: {
    'meta.title': 'TravelGo | हमारे साथ दुनिया की सैर करें',
    'meta.description': 'TravelGo — शानदार जगहें खोजें और अपने अगले सफर के लिए सही वाहन चुनें।',
    'nav.label': 'मुख्य नेविगेशन', 'nav.toggle': 'नेविगेशन खोलें या बंद करें',
    'nav.vehicles': 'वाहन', 'nav.destinations': 'घूमने की जगहें', 'nav.reviews': 'समीक्षाएँ',
    'nav.contact': 'संपर्क', 'nav.cta': 'अपनी सवारी चुनें', 'language.label': 'भाषा चुनें',
    'hero.eyebrow': 'आपका अगला रोमांच आपका इंतज़ार कर रहा है',
    'hero.heading.first': 'दुनिया की सैर करें', 'hero.heading.second': 'हमारे साथ',
    'hero.copy.first': 'शानदार जगहें खोजें और यादगार पल बनाएँ',
    'hero.copy.second': 'हमारी खूबसूरत धरती का अनुभव करें।',
    'hero.cta': 'जगहें देखें', 'benefits.label': 'हमारे साथ यात्रा क्यों करें',
    'benefits.price.title': 'सबसे अच्छी कीमत की गारंटी',
    'benefits.price.copy': 'आपकी अगली यात्रा के लिए बेहतरीन कीमत।',
    'benefits.safe.title': 'सुरक्षित और भरोसेमंद',
    'benefits.safe.copy': 'आपकी सुरक्षा हमारी पहली प्राथमिकता है।',
    'benefits.support.title': '24/7 सहायता',
    'benefits.support.copy': 'ज़रूरत पड़ने पर हम हमेशा आपके साथ हैं।',
    'benefits.experience.title': 'बेहतरीन अनुभव',
    'benefits.experience.copy': 'दुनिया भर के यात्रियों की पसंद।',
    'vehicles.eyebrow': 'अपने तरीके से सफर करें',
    'vehicles.title': 'हमारे वाहन',
    'vehicles.subtitle': 'आरामदायक और यादगार सफर के लिए अपनी सवारी चुनें।',
    'vehicles.link': 'वाहन के बारे में पूछें',
    'vehicle.sedan.title': 'सेडान', 'vehicle.sedan.copy': 'छोटे समूहों के लिए आरामदायक',
    'vehicle.sedan.alt': 'आरामदायक सेडान कार', 'vehicle.sedan.action': 'सेडान के बारे में पूछें',
    'vehicle.suv.title': 'एसयूवी', 'vehicle.suv.copy': 'ज़्यादा जगह, ज़्यादा आराम',
    'vehicle.suv.alt': 'रोड ट्रिप के लिए तैयार एसयूवी', 'vehicle.suv.action': 'एसयूवी के बारे में पूछें',
    'vehicle.tempo.title': 'टेम्पो ट्रैवलर', 'vehicle.tempo.copy': 'समूह यात्राओं के लिए बढ़िया',
    'vehicle.tempo.alt': 'समूह यात्रा के लिए यात्री वैन', 'vehicle.tempo.action': 'टेम्पो ट्रैवलर के बारे में पूछें',
    'vehicle.coach.title': 'लग्ज़री कोच', 'vehicle.coach.copy': 'प्रीमियम यात्रा का अनुभव',
    'vehicle.coach.alt': 'समूह यात्राओं के लिए लग्ज़री कोच', 'vehicle.coach.action': 'लग्ज़री कोच के बारे में पूछें',
    'vehicle.jeep.title': 'जीप', 'vehicle.jeep.copy': 'रोमांच पसंद करने वालों के लिए',
    'vehicle.jeep.alt': 'रोमांचक यात्राओं के लिए जीप', 'vehicle.jeep.action': 'जीप के बारे में पूछें',
    'destinations.eyebrow': 'ऐसी जगहें जो यादों में बस जाएँ',
    'destinations.title': 'हमारी खास जगहें देखें', 'destinations.link': 'अपनी यात्रा की योजना बनाएँ',
    'destination.bali.name': 'बाली, इंडोनेशिया', 'destination.bali.copy': 'धूप, रेत और सुकून',
    'destination.paris.name': 'पेरिस, फ्रांस', 'destination.paris.copy': 'प्यार का शहर',
    'destination.switzerland.name': 'स्विट्ज़रलैंड', 'destination.switzerland.copy': 'आल्प्स और रोमांच',
    'destination.santorini.name': 'सैंटोरिनी, ग्रीस', 'destination.santorini.copy': 'स्वर्ग जैसा द्वीप',
    'destination.dubai.name': 'दुबई, यूएई', 'destination.dubai.copy': 'शान और आधुनिकता',
    'reviews.eyebrow': 'यात्रियों की समीक्षाएँ',
    'reviews.title': 'हमारे ग्राहक क्या कहते हैं',
    'reviews.subtitle': 'उन यात्रियों की सच्ची कहानियाँ जिन्होंने कुछ खास अनुभव किया।',
    'reviews.rating': '5 में से 5 सितारे',
    'review.sarah.name': 'सारा जॉनसन',
    'review.sarah.quote': '“शानदार अनुभव! यात्रा की पूरी योजना बहुत अच्छी थी और सब कुछ बेहतरीन रहा। TravelGo की ज़रूर सिफारिश करूँगी!”',
    'review.michael.name': 'माइकल ब्राउन',
    'review.michael.quote': '“अब तक की सबसे अच्छी ट्रैवल एजेंसी। बेहतरीन सेवा, शानदार जगहें और बहुत ही पेशेवर टीम।”',
    'review.ava.name': 'आवा पटेल',
    'review.ava.quote': '“हमारी पारिवारिक यात्रा शुरू से अंत तक बेहद आसान रही। जगहें सुंदर थीं और सेवा शानदार थी।”',
    'review.david.name': 'डेविड विल्सन',
    'review.david.quote': '“मिलनसार टीम, आरामदायक गाड़ियाँ और यादगार यात्रा योजना। मैं फिर से TravelGo के साथ बुकिंग करूँगा।”',
    'footer.tagline': 'घूमें · खोजें · फिर से घूमें',
    'footer.note': 'हर सफर की शुरुआत थोड़ी जिज्ञासा से होती है।',
    'footer.address.title': 'हमारा पता', 'footer.directions': 'रास्ता देखें ↗',
    'footer.contact.title': 'संपर्क करें', 'footer.hours': 'सोम–शनि · सुबह 9:00–शाम 7:00',
    'footer.connect.title': 'हमसे जुड़ें', 'footer.chat': 'हमारी टीम से चैट करें',
    'social.youtube': 'YouTube',
    'footer.copyright': 'TravelGo. सर्वाधिकार सुरक्षित।',
    'footer.closing': 'आपकी अगली शानदार यात्रा के लिए।'
  },
  or: {
    'meta.title': 'TravelGo | ଆମ ସହିତ ଦୁନିଆ ଭ୍ରମଣ କରନ୍ତୁ',
    'meta.description': 'TravelGo — ସୁନ୍ଦର ଭ୍ରମଣସ୍ଥଳ ଖୋଜନ୍ତୁ ଏବଂ ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ଯାତ୍ରା ପାଇଁ ଠିକ୍ ଗାଡ଼ି ବାଛନ୍ତୁ।',
    'nav.label': 'ମୁଖ୍ୟ ନାଭିଗେସନ୍', 'nav.toggle': 'ନାଭିଗେସନ୍ ଖୋଲନ୍ତୁ କିମ୍ବା ବନ୍ଦ କରନ୍ତୁ',
    'nav.vehicles': 'ଗାଡ଼ି', 'nav.destinations': 'ଭ୍ରମଣସ୍ଥଳ', 'nav.reviews': 'ମତାମତ',
    'nav.contact': 'ଯୋଗାଯୋଗ', 'nav.cta': 'ଆପଣଙ୍କ ଗାଡ଼ି ବାଛନ୍ତୁ', 'language.label': 'ଭାଷା ବାଛନ୍ତୁ',
    'hero.eyebrow': 'ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ରୋମାଞ୍ଚକ ଯାତ୍ରା ଅପେକ୍ଷା କରିଛି',
    'hero.heading.first': 'ଦୁନିଆ ଭ୍ରମଣ କରନ୍ତୁ', 'hero.heading.second': 'ଆମ ସହିତ',
    'hero.copy.first': 'ସୁନ୍ଦର ସ୍ଥାନ ଖୋଜନ୍ତୁ, ଅଭୁଲା ସ୍ମୃତି ଗଢ଼ନ୍ତୁ',
    'hero.copy.second': 'ଆମ ପୃଥିବୀର ସୌନ୍ଦର୍ଯ୍ୟ ଅନୁଭବ କରନ୍ତୁ।',
    'hero.cta': 'ଭ୍ରମଣସ୍ଥଳ ଦେଖନ୍ତୁ', 'benefits.label': 'ଆମ ସହିତ କାହିଁକି ଯାତ୍ରା କରିବେ',
    'benefits.price.title': 'ସର୍ବୋତ୍ତମ ମୂଲ୍ୟର ନିଶ୍ଚିତତା',
    'benefits.price.copy': 'ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ଯାତ୍ରା ପାଇଁ ଉତ୍ତମ ମୂଲ୍ୟ।',
    'benefits.safe.title': 'ସୁରକ୍ଷିତ ଏବଂ ନିରାପଦ',
    'benefits.safe.copy': 'ଆପଣଙ୍କ ସୁରକ୍ଷା ଆମର ପ୍ରଥମ ପ୍ରାଥମିକତା।',
    'benefits.support.title': '୨୪/୭ ସହାୟତା',
    'benefits.support.copy': 'ଆପଣଙ୍କ ଆବଶ୍ୟକତାରେ ଆମେ ସବୁବେଳେ ଅଛୁ।',
    'benefits.experience.title': 'ସର୍ବୋତ୍ତମ ଅନୁଭୂତି',
    'benefits.experience.copy': 'ସାରା ଦୁନିଆର ଯାତ୍ରୀଙ୍କ ପସନ୍ଦ।',
    'vehicles.eyebrow': 'ନିଜ ପସନ୍ଦରେ ଯାତ୍ରା କରନ୍ତୁ',
    'vehicles.title': 'ଆମର ଗାଡ଼ି', 'vehicles.subtitle': 'ଆରାମଦାୟକ ଏବଂ ସ୍ମରଣୀୟ ଯାତ୍ରା ପାଇଁ ଗାଡ଼ି ବାଛନ୍ତୁ।',
    'vehicles.link': 'ଗାଡ଼ି ବିଷୟରେ ପଚାରନ୍ତୁ',
    'vehicle.sedan.title': 'ସେଡାନ୍', 'vehicle.sedan.copy': 'ଛୋଟ ଦଳ ପାଇଁ ଆରାମଦାୟକ',
    'vehicle.sedan.alt': 'ଆରାମଦାୟକ ସେଡାନ୍ ଗାଡ଼ି', 'vehicle.sedan.action': 'ସେଡାନ୍ ବିଷୟରେ ପଚାରନ୍ତୁ',
    'vehicle.suv.title': 'ଏସ୍‌ୟୁଭି', 'vehicle.suv.copy': 'ଅଧିକ ସ୍ଥାନ, ଅଧିକ ଆରାମ',
    'vehicle.suv.alt': 'ରୋଡ୍ ଟ୍ରିପ୍ ପାଇଁ ପ୍ରସ୍ତୁତ ଏସ୍‌ୟୁଭି', 'vehicle.suv.action': 'ଏସ୍‌ୟୁଭି ବିଷୟରେ ପଚାରନ୍ତୁ',
    'vehicle.tempo.title': 'ଟେମ୍ପୋ ଟ୍ରାଭେଲର୍', 'vehicle.tempo.copy': 'ଦଳୀୟ ଯାତ୍ରା ପାଇଁ ଉପଯୁକ୍ତ',
    'vehicle.tempo.alt': 'ଦଳୀୟ ଯାତ୍ରା ପାଇଁ ଯାତ୍ରୀ ଭ୍ୟାନ୍', 'vehicle.tempo.action': 'ଟେମ୍ପୋ ଟ୍ରାଭେଲର୍ ବିଷୟରେ ପଚାରନ୍ତୁ',
    'vehicle.coach.title': 'ବିଳାସପୂର୍ଣ୍ଣ କୋଚ୍', 'vehicle.coach.copy': 'ଉନ୍ନତ ଯାତ୍ରା ଅନୁଭୂତି',
    'vehicle.coach.alt': 'ଦଳୀୟ ଯାତ୍ରା ପାଇଁ ବିଳାସପୂର୍ଣ୍ଣ କୋଚ୍', 'vehicle.coach.action': 'କୋଚ୍ ବିଷୟରେ ପଚାରନ୍ତୁ',
    'vehicle.jeep.title': 'ଜିପ୍', 'vehicle.jeep.copy': 'ରୋମାଞ୍ଚ ପସନ୍ଦ କରୁଥିବା ଯାତ୍ରୀଙ୍କ ପାଇଁ',
    'vehicle.jeep.alt': 'ରୋମାଞ୍ଚକ ଯାତ୍ରା ପାଇଁ ଜିପ୍', 'vehicle.jeep.action': 'ଜିପ୍ ବିଷୟରେ ପଚାରନ୍ତୁ',
    'destinations.eyebrow': 'ଏମିତି ସ୍ଥାନ ଯାହା ମନେ ରହିଯାଏ',
    'destinations.title': 'ଆମର ଶ୍ରେଷ୍ଠ ଭ୍ରମଣସ୍ଥଳ ଦେଖନ୍ତୁ', 'destinations.link': 'ଯାତ୍ରା ଯୋଜନା କରନ୍ତୁ',
    'destination.bali.name': 'ବାଲି, ଇଣ୍ଡୋନେସିଆ', 'destination.bali.copy': 'ସୂର୍ଯ୍ୟ, ବାଲି ଓ ଶାନ୍ତି',
    'destination.paris.name': 'ପ୍ୟାରିସ୍, ଫ୍ରାନ୍ସ', 'destination.paris.copy': 'ପ୍ରେମର ସହର',
    'destination.switzerland.name': 'ସ୍ୱିଜରଲ୍ୟାଣ୍ଡ', 'destination.switzerland.copy': 'ଆଲ୍ପସ୍ ଓ ରୋମାଞ୍ଚ',
    'destination.santorini.name': 'ସାଣ୍ଟୋରିନି, ଗ୍ରୀସ୍', 'destination.santorini.copy': 'ଦ୍ୱୀପର ସ୍ୱର୍ଗ',
    'destination.dubai.name': 'ଦୁବାଇ, ୟୁଏଇ', 'destination.dubai.copy': 'ବିଳାସ ଓ ଆଧୁନିକତା',
    'reviews.eyebrow': 'ଯାତ୍ରୀଙ୍କ ମତାମତ', 'reviews.title': 'ଆମ ଗ୍ରାହକମାନେ କ’ଣ କହନ୍ତି',
    'reviews.subtitle': 'ଅଧିକ ଅନୁଭବ ନେଇ ଫେରିଥିବା ଯାତ୍ରୀଙ୍କ ସତ କାହାଣୀ।',
    'reviews.rating': '୫ ମଧ୍ୟରୁ ୫ ତାରକା',
    'review.sarah.name': 'ସାରା ଜନସନ',
    'review.sarah.quote': '“ଅଦ୍ଭୁତ ଅନୁଭୂତି! ଯାତ୍ରାଟି ସୁନ୍ଦର ଭାବେ ଯୋଜନା ହୋଇଥିଲା ଏବଂ ସବୁକିଛି ଉତ୍ତମ ଥିଲା। TravelGo କୁ ନିଶ୍ଚୟ ସୁପାରିଶ କରିବି!”',
    'review.michael.name': 'ମାଇକେଲ୍ ବ୍ରାଉନ୍',
    'review.michael.quote': '“ମୁଁ ବ୍ୟବହାର କରିଥିବା ସର୍ବୋତ୍ତମ ଟ୍ରାଭେଲ୍ ଏଜେନ୍ସି। ଭଲ ସେବା, ସୁନ୍ଦର ସ୍ଥାନ ଏବଂ ବୃତ୍ତିଗତ ଦଳ।”',
    'review.ava.name': 'ଆଭା ପଟେଲ୍',
    'review.ava.quote': '“ଆମ ପରିବାରର ଯାତ୍ରା ଆରମ୍ଭରୁ ଶେଷ ପର୍ଯ୍ୟନ୍ତ ସହଜ ଥିଲା। ସ୍ଥାନଗୁଡ଼ିକ ସୁନ୍ଦର ଏବଂ ସେବା ଚମତ୍କାର ଥିଲା।”',
    'review.david.name': 'ଡେଭିଡ୍ ୱିଲସନ୍',
    'review.david.quote': '“ବନ୍ଧୁତ୍ୱପୂର୍ଣ୍ଣ ଦଳ, ଆରାମଦାୟକ ଗାଡ଼ି ଏବଂ ଅଭୁଲା ଯାତ୍ରା ଯୋଜନା। ପୁଣିଥରେ TravelGo ସହ ବୁକ୍ କରିବି।”',
    'footer.tagline': 'ଭ୍ରମଣ · ଆବିଷ୍କାର · ପୁଣି ଭ୍ରମଣ',
    'footer.note': 'ପ୍ରତ୍ୟେକ ଯାତ୍ରା ଟିକିଏ କୌତୂହଳରୁ ଆରମ୍ଭ ହୁଏ।',
    'footer.address.title': 'ଆମ ଠିକଣା', 'footer.directions': 'ରାସ୍ତା ଦେଖନ୍ତୁ ↗',
    'footer.contact.title': 'ଯୋଗାଯୋଗ କରନ୍ତୁ', 'footer.hours': 'ସୋମ–ଶନି · ସକାଳ ୯:୦୦–ସନ୍ଧ୍ୟା ୭:୦୦',
    'footer.connect.title': 'ଆମ ସହ ଯୋଡ଼ି ହୁଅନ୍ତୁ', 'footer.chat': 'ଆମ ଦଳ ସହ ଚାଟ୍ କରନ୍ତୁ',
    'social.youtube': 'YouTube',
    'footer.copyright': 'TravelGo. ସମସ୍ତ ଅଧିକାର ସଂରକ୍ଷିତ।',
    'footer.closing': 'ଆପଣଙ୍କ ପରବର୍ତ୍ତୀ ସୁନ୍ଦର ଯାତ୍ରା ପାଇଁ।'
  },
  ta: {
    'meta.title': 'TravelGo | எங்களுடன் உலகைச் சுற்றிப் பாருங்கள்',
    'meta.description': 'TravelGo — சிறந்த சுற்றுலாத் தலங்களைக் கண்டறிந்து, உங்கள் அடுத்த பயணத்திற்குச் சரியான வாகனத்தைத் தேர்ந்தெடுங்கள்.',
    'nav.label': 'முதன்மை வழிசெலுத்தல்', 'nav.toggle': 'வழிசெலுத்தலைத் திறக்கவும் அல்லது மூடவும்',
    'nav.vehicles': 'வாகனங்கள்', 'nav.destinations': 'சுற்றுலாத் தலங்கள்', 'nav.reviews': 'விமர்சனங்கள்',
    'nav.contact': 'தொடர்பு', 'nav.cta': 'உங்கள் வாகனத்தைத் தேர்ந்தெடுங்கள்', 'language.label': 'மொழியைத் தேர்ந்தெடுங்கள்',
    'hero.eyebrow': 'உங்கள் அடுத்த சாகசப் பயணம் காத்திருக்கிறது',
    'hero.heading.first': 'உலகைச் சுற்றிப் பாருங்கள்', 'hero.heading.second': 'எங்களுடன்',
    'hero.copy.first': 'அற்புதமான இடங்களைக் கண்டறிந்து மறக்க முடியாத நினைவுகளை உருவாக்குங்கள்',
    'hero.copy.second': 'நமது பூமியின் அழகை அனுபவியுங்கள்.',
    'hero.cta': 'சுற்றுலாத் தலங்களைக் காணுங்கள்', 'benefits.label': 'எங்களுடன் ஏன் பயணம் செய்ய வேண்டும்',
    'benefits.price.title': 'சிறந்த விலை உறுதி',
    'benefits.price.copy': 'உங்கள் அடுத்த பயணத்திற்கு சிறந்த மதிப்பு.',
    'benefits.safe.title': 'பாதுகாப்பானது',
    'benefits.safe.copy': 'உங்கள் பாதுகாப்பே எங்கள் முதல் முன்னுரிமை.',
    'benefits.support.title': '24/7 ஆதரவு',
    'benefits.support.copy': 'உங்களுக்கு எப்போது தேவைப்பட்டாலும் நாங்கள் இருக்கிறோம்.',
    'benefits.experience.title': 'சிறந்த அனுபவங்கள்',
    'benefits.experience.copy': 'உலகெங்கும் உள்ள பயணிகளின் விருப்பம்.',
    'vehicles.eyebrow': 'உங்கள் விருப்பப்படி பயணம் செய்யுங்கள்',
    'vehicles.title': 'எங்கள் வாகனங்கள்',
    'vehicles.subtitle': 'வசதியான, மறக்க முடியாத பயணத்திற்கு உங்கள் வாகனத்தைத் தேர்ந்தெடுங்கள்.',
    'vehicles.link': 'வாகனம் பற்றி கேளுங்கள்',
    'vehicle.sedan.title': 'செடான்', 'vehicle.sedan.copy': 'சிறிய குழுக்களுக்கு வசதியானது',
    'vehicle.sedan.alt': 'வசதியான செடான் கார்', 'vehicle.sedan.action': 'செடான் பற்றி கேளுங்கள்',
    'vehicle.suv.title': 'எஸ்யூவி', 'vehicle.suv.copy': 'அதிக இடம், அதிக வசதி',
    'vehicle.suv.alt': 'சாலைப் பயணத்திற்குத் தயாரான எஸ்யூவி', 'vehicle.suv.action': 'எஸ்யூவி பற்றி கேளுங்கள்',
    'vehicle.tempo.title': 'டெம்போ டிராவலர்', 'vehicle.tempo.copy': 'குழுப் பயணங்களுக்கு ஏற்றது',
    'vehicle.tempo.alt': 'குழுப் பயணத்திற்கான பயணிகள் வேன்', 'vehicle.tempo.action': 'டெம்போ டிராவலர் பற்றி கேளுங்கள்',
    'vehicle.coach.title': 'சொகுசுப் பேருந்து', 'vehicle.coach.copy': 'பிரீமியம் பயண அனுபவம்',
    'vehicle.coach.alt': 'குழுப் பயணங்களுக்கான சொகுசுப் பேருந்து', 'vehicle.coach.action': 'சொகுசுப் பேருந்து பற்றி கேளுங்கள்',
    'vehicle.jeep.title': 'ஜீப்', 'vehicle.jeep.copy': 'சாகசத்தை விரும்புபவர்களுக்கு',
    'vehicle.jeep.alt': 'சாகசப் பயணங்களுக்கான ஜீப்', 'vehicle.jeep.action': 'ஜீப் பற்றி கேளுங்கள்',
    'destinations.eyebrow': 'மனதில் நிலைத்திருக்கும் இடங்கள்',
    'destinations.title': 'எங்கள் சிறந்த சுற்றுலாத் தலங்களைக் காணுங்கள்',
    'destinations.link': 'உங்கள் பயணத்தைத் திட்டமிடுங்கள்',
    'destination.bali.name': 'பாலி, இந்தோனேசியா', 'destination.bali.copy': 'வெயில், மணல் மற்றும் அமைதி',
    'destination.paris.name': 'பாரிஸ், பிரான்ஸ்', 'destination.paris.copy': 'காதல் நகரம்',
    'destination.switzerland.name': 'சுவிட்சர்லாந்து', 'destination.switzerland.copy': 'ஆல்ப்ஸ் மற்றும் சாகசங்கள்',
    'destination.santorini.name': 'சாண்டோரினி, கிரீஸ்', 'destination.santorini.copy': 'தீவு சொர்க்கம்',
    'destination.dubai.name': 'துபாய், ஐக்கிய அரபு அமீரகம்', 'destination.dubai.copy': 'ஆடம்பரமும் நவீனமும்',
    'reviews.eyebrow': 'பயணிகளின் விமர்சனங்கள்',
    'reviews.title': 'எங்கள் வாடிக்கையாளர்கள் கூறுவது',
    'reviews.subtitle': 'தங்கள் பயணத்தில் இன்னும் பல அனுபவங்களைப் பெற்ற பயணிகளின் உண்மைக் கதைகள்.',
    'reviews.rating': '5 நட்சத்திரங்களில் 5',
    'review.sarah.name': 'சாரா ஜான்சன்',
    'review.sarah.quote': '“அற்புதமான அனுபவம்! பயணம் சிறப்பாகத் திட்டமிடப்பட்டிருந்தது; அனைத்தும் சரியாக இருந்தன. TravelGo-வை நிச்சயம் பரிந்துரைக்கிறேன்!”',
    'review.michael.name': 'மைக்கேல் பிரவுன்',
    'review.michael.quote': '“நான் பயன்படுத்திய சிறந்த பயண நிறுவனம். சிறந்த சேவை, அற்புதமான இடங்கள், மிகவும் தொழில்முறை குழு.”',
    'review.ava.name': 'ஆவா பட்டேல்',
    'review.ava.quote': '“எங்கள் குடும்பப் பயணம் தொடக்கம் முதல் முடிவு வரை எளிதாக இருந்தது. இடங்கள் அழகாகவும் சேவை சிறப்பாகவும் இருந்தது.”',
    'review.david.name': 'டேவிட் வில்சன்',
    'review.david.quote': '“நட்பான குழு, வசதியான வாகனங்கள், மறக்க முடியாத பயணத் திட்டம். மீண்டும் TravelGo-வில் முன்பதிவு செய்வேன்.”',
    'footer.tagline': 'சுற்றிப் பாருங்கள் · கண்டறியுங்கள் · மீண்டும் செல்லுங்கள்',
    'footer.note': 'ஒவ்வொரு பயணமும் சிறிய ஆர்வத்துடன் தொடங்குகிறது.',
    'footer.address.title': 'எங்கள் முகவரி', 'footer.directions': 'வழியைப் பாருங்கள் ↗',
    'footer.contact.title': 'எங்களைத் தொடர்புகொள்ளுங்கள்',
    'footer.hours': 'திங்கள்–சனி · காலை 9:00–மாலை 7:00',
    'footer.connect.title': 'எங்களுடன் இணையுங்கள்', 'footer.chat': 'எங்கள் குழுவுடன் உரையாடுங்கள்',
    'social.youtube': 'YouTube',
    'footer.copyright': 'TravelGo. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    'footer.closing': 'உங்கள் அடுத்த சிறந்த பயணத்திற்காக.'
  }
};

const languageSelect = document.querySelector('#language-select');

function setLanguage(language) {
  const selectedTranslations = translations[language] || translations.en;
  document.documentElement.lang = language;

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = selectedTranslations[element.dataset.i18n];
    if (translation) element.textContent = translation;
  });

  document.querySelectorAll('[data-i18n-aria]').forEach(element => {
    const translation = selectedTranslations[element.dataset.i18nAria];
    if (translation) element.setAttribute('aria-label', translation);
  });

  document.querySelectorAll('[data-i18n-alt]').forEach(element => {
    const translation = selectedTranslations[element.dataset.i18nAlt];
    if (translation) element.setAttribute('alt', translation);
  });

  const description = selectedTranslations['meta.description'];
  if (description) document.querySelector('meta[name="description"]').content = description;
}

if (languageSelect) {
  languageSelect.addEventListener('change', event => setLanguage(event.target.value));
}
